#!/bin/bash

# 赛博朋克个人主页 GitHub Pages 部署脚本
# 使用方法：./deploy.sh 你的GitHub用户名

set -e

# 检查参数
if [ $# -eq 0 ]; then
    echo "❌ 请提供你的GitHub用户名"
    echo "使用方法: ./deploy.sh 你的用户名"
    exit 1
fi

USERNAME=$1
REPO_NAME="${USERNAME}.github.io"
REPO_URL="https://github.com/${USERNAME}/${REPO_NAME}.git"

echo "🚀 开始部署赛博朋克个人主页到 GitHub Pages..."
echo "📁 仓库: ${REPO_NAME}"
echo "🔗 URL: https://${USERNAME}.github.io"
echo ""

# 检查Git是否已安装
if ! command -v git &> /dev/null; then
    echo "❌ Git 未安装，请先安装 Git"
    exit 1
fi

# 创建临时目录
TEMP_DIR="temp_${REPO_NAME}"
echo "📦 创建临时目录: ${TEMP_DIR}"

# 清理可能存在的临时目录
if [ -d "$TEMP_DIR" ]; then
    rm -rf "$TEMP_DIR"
fi

# 克隆仓库（如果存在）或创建新目录
echo "📥 准备仓库..."
if git ls-remote "$REPO_URL" &> /dev/null; then
    echo "✅ 仓库已存在，正在克隆..."
    git clone "$REPO_URL" "$TEMP_DIR"
    cd "$TEMP_DIR"
    
    # 清理现有文件（保留.git目录）
    find . -maxdepth 1 -not -name '.git' -not -name '.' -not -name '..' -exec rm -rf {} +
else
    echo "⚠️  仓库不存在，请先在GitHub上创建仓库: ${REPO_NAME}"
    echo "🌐 访问: https://github.com/new"
    echo "📝 仓库名称: ${REPO_NAME}"
    echo "🔓 确保仓库是 Public"
    echo ""
    read -p "创建完成后按回车继续..."
    
    git clone "$REPO_URL" "$TEMP_DIR"
    cd "$TEMP_DIR"
fi

# 复制项目文件
echo "📋 复制项目文件..."
cp ../index.html .
cp ../style.css .
cp ../script.js .
cp ../README.md .

# 检查是否有变更
if git diff --quiet && git diff --staged --quiet; then
    echo "✅ 没有检测到变更，文件已是最新版本"
else
    echo "📝 提交变更..."
    git add .
    git commit -m "🌟 Update cyberpunk personal homepage - $(date '+%Y-%m-%d %H:%M:%S')"
    
    echo "🚀 推送到GitHub..."
    git push origin main
    
    echo ""
    echo "🎉 部署完成！"
    echo "🌐 你的网站将在几分钟后可用: https://${USERNAME}.github.io"
    echo "⚙️  如果这是首次部署，请确保在GitHub仓库设置中启用Pages功能"
fi

# 清理临时目录
cd ..
rm -rf "$TEMP_DIR"

echo ""
echo "✨ 赛博朋克个人主页部署完成！"
echo "🎮 别忘了试试Konami代码彩蛋: ↑↑↓↓←→←→BA"