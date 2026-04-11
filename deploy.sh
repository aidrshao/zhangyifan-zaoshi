#!/bin/bash

set -e

PROJECT_DIR="/opt/zhangyifan-zaoshi"
BACKUP_DIR="/opt/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

error() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1" >&2
    exit 1
}

check_command() {
    if ! command -v $1 &> /dev/null; then
        error "$1 命令未找到，请先安装"
    fi
}

check_prerequisites() {
    log "检查必要工具..."
    check_command git
    check_command docker
    check_command docker-compose
}

ensure_data_dir() {
    log "确保数据目录存在..."
    sudo mkdir -p /data/postgres
    sudo chown -R 999:999 /data/postgres
    sudo chmod 755 /data/postgres
}

pull_latest_code() {
    log "拉取最新代码..."
    cd $PROJECT_DIR
    
    if [ -d ".git" ]; then
        git fetch origin
        LOCAL=$(git rev-parse HEAD)
        REMOTE=$(git rev-parse origin/main)
        
        if [ "$LOCAL" != "$REMOTE" ]; then
            log "发现新版本，开始更新..."
            git pull origin main
            return 0
        else
            log "代码已是最新版本"
            return 1
        fi
    else
        error "不是 Git 仓库"
    fi
}

backup_database() {
    log "备份数据库..."
    mkdir -p $BACKUP_DIR
    
    docker-compose exec -T db pg_dump -U postgres zhangyifan > $BACKUP_DIR/db_backup_$TIMESTAMP.sql 2>/dev/null || {
        log "数据库备份失败（可能数据库为空或容器未运行）"
        return
    }
    
    gzip $BACKUP_DIR/db_backup_$TIMESTAMP.sql
    log "数据库备份完成: $BACKUP_DIR/db_backup_$TIMESTAMP.sql.gz"
    
    find $BACKUP_DIR -name "db_backup_*.sql.gz" -mtime +7 -delete
    log "已清理 7 天前的备份文件"
}

build_images() {
    log "构建 Docker 镜像..."
    cd $PROJECT_DIR
    docker-compose build --no-cache
}

start_services() {
    log "启动服务..."
    cd $PROJECT_DIR
    docker-compose up -d
}

check_health() {
    log "检查服务健康状态..."
    sleep 10
    
    if docker-compose ps | grep -q "Up"; then
        log "服务运行正常"
        docker-compose ps
    else
        error "服务启动失败"
    fi
}

cleanup_old_images() {
    log "清理旧镜像..."
    docker image prune -f
}

main() {
    log "========== 开始部署 =========="
    
    check_prerequisites
    ensure_data_dir
    
    CODE_UPDATED=$(pull_latest_code && echo "1" || echo "0")
    
    if [ "$CODE_UPDATED" = "1" ]; then
        backup_database
        build_images
        start_services
        check_health
        cleanup_old_images
    else
        log "无需更新，跳过部署"
    fi
    
    log "========== 部署完成 =========="
}

main "$@"
