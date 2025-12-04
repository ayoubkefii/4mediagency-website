# 🚀 Quick GitHub Setup Guide

Follow these steps to push your code to GitHub:

---

## Step 1: Install Git (if not installed)

**Download Git for Windows:**
- https://git-scm.com/download/win
- Install it and restart your terminal/VS Code

**OR use GitHub Desktop (easier):**
- https://desktop.github.com/

---

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `4media-website`
3. Choose **Public** or **Private**
4. **DO NOT** check "Initialize with README"
5. Click **"Create repository"**

---

## Step 3: Push Code to GitHub

### Option A: Using GitHub Desktop (Easiest) ⭐

1. Open **GitHub Desktop**
2. Click **File → Add Local Repository**
3. Browse to: `C:\Users\Gsmry\Documents\4media`
4. Click **"Publish repository"**
5. Choose your repository name
6. Click **"Publish Repository"**

**Done!** Your code is now on GitHub! 🎉

---

### Option B: Using Command Line

Open **Git Bash** or **PowerShell** in your project folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: 4media agency website"

# Add your GitHub repository (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/4media-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**You'll be asked for your GitHub username and password/token.**

---

## Step 4: Deploy Online

Now that your code is on GitHub, deploy it:

1. Go to https://vercel.com
2. Sign in with **GitHub**
3. Click **"Add New Project"**
4. Select your repository: `4media-website`
5. Click **"Deploy"**
6. Wait 2 minutes → Your site is live! 🚀

---

## 🎯 That's It!

Your website will be live at: `https://4media-website.vercel.app`

Every time you push new code, Vercel automatically redeploys your site!

---

## Need Help?

If you get stuck:
- Read the full guide: **[DEPLOYMENT.md](./DEPLOYMENT.md)**
- Or ask me and I'll help you! 😊

