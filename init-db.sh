#!/bin/bash

set -e

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "等待数据库启动..."
sleep 5

until docker-compose exec -T db pg_isready -U postgres; do
    log "数据库未就绪，等待中..."
    sleep 2
done

log "数据库已就绪，开始初始化表结构..."

docker-compose exec -T db psql -U postgres -d zhangyifan <<EOF
CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  company VARCHAR(200),
  stage VARCHAR(100),
  requirement VARCHAR(200),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(200),
  phone VARCHAR(50),
  company VARCHAR(200),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
EOF

log "数据库初始化完成！"

log "验证表结构..."
docker-compose exec -T db psql -U postgres -d zhangyifan -c "\dt"
