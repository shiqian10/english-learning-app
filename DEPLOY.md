# 英语乐园 - 部署指南

## 快速部署（推荐 Vercel）

### 方法1：Vercel CLI 一键部署（最简单）

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 进入项目目录
cd /Users/lijiannan/Desktop/AI专用/小玩法app/小玩法-英语学习

# 3. 一键部署（首次需要登录邮箱）
vercel
```

按提示操作，会生成一个网址如：`https://xxx-vercel.app`

### 方法2：GitHub + Vercel 自动部署（推荐长期使用）

1. **上传代码到 GitHub**
   - 创建新仓库 `english-learning-app`
   - 上传 `index.html`, `data.js`, `manifest.json`

2. **连接 Vercel**
   - 访问 https://vercel.com
   - 用 GitHub 登录
   - 点击 "New Project" → 导入你的仓库
   - 点 "Deploy" 完成！

---

## 手机端使用

### 添加到主屏幕（iOS/Android通用）

1. 用手机浏览器打开部署的网址
2. **iOSSafari**: 点击底部「分享」按钮 → 「添加到主屏幕」
3. **安卓Chrome**: 点击右上角三个点 → 「添加到主屏幕」

### 打卡功能

- App已内置打卡：完成每天6个单词后点击「✅ 完成今天的学习」
- 进度自动保存到手机本地localStorage
- 打开App就能看到今天的学习进度

---

## 版本更新

每次修改代码后：

### Vercel CLI 部署
```bash
vercel --prod
```

### GitHub 自动部署
只需 `git push`，Vercel会自动更新！

```bash
git add .
git commit -m "更新内容"
git push origin main
```

---

## 文件说明

- `index.html` - 主页面
- `data.js` - 单词和绘本数据
- `manifest.json` - PWA配置（添加到主屏幕需要）
- `vercel.json` - Vercel部署配置
