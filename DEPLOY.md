# Vercel 部署指南

## 快速部署

### 1. 推送代码到 GitHub

```bash
git add .
git commit -m "V1.0 发布"
git push
```

### 2. 在 Vercel 创建项目

1. 登录 [vercel.com](https://vercel.com)
2. 点击 "Add New Project"
3. 选择你的 GitHub 仓库
4. 点击 "Deploy"

### 3. 获取 Vercel 域名

部署完成后，你会获得一个 `.vercel.app` 域名，例如：
```
https://zhangyifan-zaoshi.vercel.app
```

---

## 配置数据库（可选）

如果需要保存联系表单数据，可以配置 Vercel Postgres：

### 步骤 1：创建数据库

1. 在 Vercel 项目中，点击 "Storage" 标签
2. 点击 "Create Database"
3. 选择 "Postgres"
4. 选择区域（建议选择 Hong Kong 或 Singapore）
5. 点击 "Create"

### 步骤 2：连接数据库

1. 数据库创建后，点击 "Connect to Project"
2. 选择你的项目
3. 环境变量会自动注入

### 步骤 3：创建数据表

在 Vercel 控制台的 "Query" 标签中执行：

```sql
CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  company VARCHAR(200),
  stage VARCHAR(100),
  requirement VARCHAR(200),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 步骤 4：重新部署

数据库配置完成后，重新部署项目即可。

---

## 绑定自定义域名

### 步骤 1：添加域名

1. 在 Vercel 项目中，点击 "Settings" → "Domains"
2. 输入你的域名（如 `www.zhangyifan.agency`）
3. 点击 "Add"

### 步骤 2：配置 DNS

根据 Vercel 提示，在你的域名服务商添加 DNS 记录：

**A 记录：**
```
www → 76.76.21.21
```

**或 CNAME 记录：**
```
www → cname.vercel-dns.com
```

### 步骤 3：更新配置

域名生效后，更新以下文件中的域名：

1. `public/sitemap.xml` - 替换所有 URL
2. `public/llms.txt` - 更新 Primary URLs 部分
3. `src/app/layout.tsx` - 更新 metadata 中的 URL

---

## 环境变量

| 变量名 | 说明 | 必需 |
|--------|------|------|
| POSTGRES_URL | Vercel Postgres 连接 URL | 可选（无则表单不保存） |
| POSTGRES_PRISMA_URL | Prisma 连接 URL | 可选 |
| POSTGRES_URL_NON_POOLING | 非池化连接 URL | 可选 |
| POSTGRES_USER | 数据库用户名 | 可选 |
| POSTGRES_HOST | 数据库主机 | 可选 |
| POSTGRES_PASSWORD | 数据库密码 | 可选 |
| POSTGRES_DATABASE | 数据库名 | 可选 |

---

## 验证部署

部署完成后，访问以下链接验证：

| 文件 | URL |
|------|-----|
| 首页 | `https://你的域名/` |
| 方法论 | `https://你的域名/methodology` |
| FAQ | `https://你的域名/faq` |
| llms.txt | `https://你的域名/llms.txt` |
| sitemap.xml | `https://你的域名/sitemap.xml` |
| robots.txt | `https://你的域名/robots.txt` |

---

## 常见问题

### Q: 表单提交后显示成功但没有保存数据？

A: 需要配置 Vercel Postgres 数据库。未配置时，本地开发和 Vercel 部署都会返回成功响应，但数据不会持久化。

### Q: 如何查看已提交的表单数据？

A: 在 Vercel 控制台 → Storage → 你的数据库 → Query，执行：
```sql
SELECT * FROM leads ORDER BY created_at DESC;
```

### Q: 如何导出表单数据？

A: 在 Vercel 数据库控制台，点击 "Export" 即可导出为 CSV。
