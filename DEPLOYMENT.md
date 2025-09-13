# 🚀 GitHub Pages 部署指南

## 快速部署（推荐）

### 使用自动化脚本

```bash
# 给脚本添加执行权限（如果还没有）
chmod +x deploy.sh

# 运行部署脚本
./deploy.sh 你的GitHub用户名
```

## 手动部署步骤

### 1️⃣ 创建GitHub仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角 "+" → "New repository"
3. **重要**：仓库名必须是 `你的用户名.github.io`
   - 例如：如果你的用户名是 `johndoe`，仓库名就是 `johndoe.github.io`
4. 设置为 **Public** 仓库
5. 勾选 "Add a README file"
6. 点击 "Create repository"

### 2️⃣ 上传文件

#### 方法A：网页上传（简单）

1. 在仓库页面点击 "uploading an existing file"
2. 拖拽这些文件到上传区：
   - `index.html`
   - `style.css` 
   - `script.js`
   - `README.md`
3. 提交信息写："Add cyberpunk homepage"
4. 点击 "Commit changes"

#### 方法B：Git命令行

```bash
# 克隆你的仓库
git clone https://github.com/你的用户名/你的用户名.github.io.git
cd 你的用户名.github.io

# 复制项目文件
cp /path/to/project/* .

# 提交并推送
git add .
git commit -m "Add cyberpunk personal homepage"
git push origin main
```

### 3️⃣ 启用GitHub Pages

1. 进入仓库的 "Settings" 页面
2. 左侧菜单找到 "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main"
5. Folder 选择 "/ (root)"
6. 点击 "Save"

### 4️⃣ 访问网站

等待 2-10 分钟，访问：`https://你的用户名.github.io`

## 🔧 自定义内容

### 修改个人信息

编辑 `index.html` 文件中的以下部分：

```html
<!-- 个人信息 -->
<h1>你的名字</h1>
<p>你的职业/描述</p>

<!-- 技能标签 -->
<div class="skill-tag">你的技能</div>

<!-- 项目信息 -->
<h3>项目名称</h3>
<p>项目描述</p>

<!-- 联系方式 -->
<a href="mailto:你的邮箱">Email</a>
<a href="https://github.com/你的用户名">GitHub</a>
```

### 修改颜色主题

在 `style.css` 中找到颜色变量：

```css
:root {
  --neon-cyan: #00ffff;
  --neon-pink: #ff00ff;
  --neon-orange: #ff6600;
  /* 修改这些颜色值 */
}
```

## 🎮 特殊功能

- **Konami代码**：在页面上输入 `↑↑↓↓←→←→BA` 激活神经链接模式
- **粒子效果**：移动鼠标查看粒子跟踪效果
- **控制台彩蛋**：按F12打开开发者工具查看控制台

## 🆘 常见问题

### Q: 网站显示404错误
A: 确保仓库名格式正确：`用户名.github.io`，且仓库是Public的

### Q: 样式没有加载
A: 检查文件路径，确保所有文件都在根目录下

### Q: 修改后没有更新
A: GitHub Pages有缓存，等待几分钟或强制刷新（Ctrl+F5）

### Q: 想要自定义域名
A: 在仓库根目录创建 `CNAME` 文件，内容为你的域名

## 📱 移动端优化

网站已经过响应式设计优化，在手机和平板上也能完美显示！

---

**祝你拥有一个炫酷的赛博朋克个人主页！** 🌟