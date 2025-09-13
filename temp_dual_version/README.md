# 🌟 赛博朋克个人主页

一个炫酷的赛博朋克风格个人主页，具有霓虹灯效果、粒子动画和未来科技感的交互体验。

## ✨ 特色功能

- 🎨 **多彩霓虹配色** - 青色、粉色、橙色等多种霓虹色彩
- ⚡ **动态灯光效果** - 霓虹边框、发光文字、脉冲动画
- 🚀 **粒子系统** - 鼠标跟踪粒子和背景粒子效果
- 🌈 **流动渐变** - 彩虹渐变背景和文字效果
- 💻 **赛博朋克终端** - 未来科技风格的命令行界面
- 🎯 **Konami彩蛋** - 神经链接激活体验
- 📱 **响应式设计** - 完美适配各种设备

## 🚀 部署到GitHub Pages

### 步骤1：创建GitHub仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称设置为：`你的用户名.github.io`（例如：`username.github.io`）
4. 确保仓库是 **Public**
5. 勾选 "Add a README file"
6. 点击 "Create repository"

### 步骤2：上传项目文件

#### 方法A：通过GitHub网页界面

1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将以下文件拖拽到上传区域：
   - `index.html`
   - `style.css`
   - `script.js`
3. 在页面底部填写提交信息："Add cyberpunk personal homepage"
4. 点击 "Commit changes"

#### 方法B：通过Git命令行

```bash
# 克隆仓库到本地
git clone https://github.com/你的用户名/你的用户名.github.io.git
cd 你的用户名.github.io

# 复制项目文件到仓库目录
cp /path/to/your/project/* .

# 添加文件到Git
git add .
git commit -m "Add cyberpunk personal homepage"
git push origin main
```

### 步骤3：启用GitHub Pages

1. 在仓库页面，点击 "Settings" 标签
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分，选择 "Deploy from a branch"
4. 选择 "main" 分支和 "/ (root)" 文件夹
5. 点击 "Save"

### 步骤4：访问你的网站

等待几分钟后，你的网站将在以下地址可用：
`https://你的用户名.github.io`

## 🛠️ 本地开发

### 运行本地服务器

```bash
# 使用Python（推荐）
python3 -m http.server 8080

# 或使用Node.js
npx serve .

# 或使用PHP
php -S localhost:8080
```

然后在浏览器中访问 `http://localhost:8080`

### 自定义内容

1. **个人信息**：编辑 `index.html` 中的个人信息部分
2. **技能标签**：修改技能列表和项目信息
3. **联系方式**：更新社交媒体链接
4. **颜色主题**：在 `style.css` 中调整颜色变量
5. **动画效果**：在 `script.js` 中修改动画参数

## 🎮 隐藏彩蛋

在页面上输入 Konami 代码：`↑ ↑ ↓ ↓ ← → ← → B A`
激活神经链接模式，体验完整的赛博朋克视觉效果！

## 🔧 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 渐变动画、关键帧、伪元素
- **JavaScript** - 粒子系统、交互效果
- **GitHub Pages** - 免费静态网站托管

## 📝 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个项目！

---

**享受你的赛博朋克数字世界！** 🌆✨