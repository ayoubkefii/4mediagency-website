# 🚀 Deployment Guide for 4media Website

This guide will help you:
1. **Push your code to GitHub**
2. **Deploy your website online**

---

## 📦 Step 1: Install Git (if not already installed)

### Option A: Download Git for Windows
1. Go to: https://git-scm.com/download/win
2. Download and install Git
3. **Important**: During installation, choose **"Use Git from the Windows Command Prompt"**
4. Restart your terminal/VS Code after installation

### Option B: Use GitHub Desktop (Easier GUI)
1. Download: https://desktop.github.com/
2. Install and sign in with your GitHub account
3. Much easier for beginners!

---

## 🔐 Step 2: Create a GitHub Account & Repository

### If you don't have a GitHub account:
1. Go to https://github.com
2. Click **"Sign up"**
3. Create your account

### Create a new repository:
1. Go to https://github.com/new
2. **Repository name**: `4media-website` (or any name you like)
3. **Description**: "Premium digital marketing agency website - 4mediagency"
4. Choose **Public** or **Private**
5. **DO NOT** check "Initialize with README" (you already have code)
6. Click **"Create repository"**

---

## 📤 Step 3: Push Your Code to GitHub

### Using Command Line (Git Bash or PowerShell):

```bash
# Navigate to your project folder
cd C:\Users\Gsmry\Documents\4media

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: 4media agency website with multilingual support"

# Connect to your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/4media-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Using GitHub Desktop (Easier):
1. Open GitHub Desktop
2. Click **File → Add Local Repository**
3. Browse to: `C:\Users\Gsmry\Documents\4media`
4. Click **"Publish repository"** to GitHub
5. Choose your repository name and click **"Publish Repository"**

---

## 🌐 Step 4: Deploy Your Website Online

For Next.js apps, you have **3 main options**:

### ✅ **Option 1: Vercel (RECOMMENDED - Easiest & Free)**

**Why Vercel?**
- Made by Next.js creators
- Zero configuration needed
- Free hosting with custom domain support
- Automatic deployments on every push
- Perfect for Next.js apps

**Steps:**
1. Go to https://vercel.com
2. Click **"Sign up"** → Sign in with **GitHub**
3. Click **"Add New Project"**
4. Select your repository: `4media-website`
5. Click **"Deploy"** (settings are already perfect!)
6. Wait 2-3 minutes → Your site is live! 🎉

**Your site will be live at:** `https://4media-website.vercel.app` (or similar)

---

### ✅ **Option 2: Netlify (Also Great & Free)**

**Steps:**
1. Go to https://netlify.com
2. Click **"Sign up"** → Sign in with **GitHub**
3. Click **"Add new site" → "Import an existing project"**
4. Select your repository
5. Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click **"Deploy site"**

**Your site will be live at:** `https://random-name.netlify.app`

---

### ⚠️ **Option 3: GitHub Pages (More Complex)**

**Note:** GitHub Pages only serves static files. Your Next.js app needs special configuration.

If you really want GitHub Pages, I can help you configure it, but **Vercel is much easier and better for Next.js**.

---

## 🎯 Quick Start (Recommended Path)

**Just do this:**

1. **Install Git** (if not installed)
2. **Create GitHub repository**
3. **Push code** (using GitHub Desktop is easiest)
4. **Deploy on Vercel** (5 minutes, free, zero config)

**Done!** Your site will be online in ~15 minutes total.

---

## 🔄 After Deployment: Making Updates

Every time you make changes:

### Using Command Line:
```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel/Netlify will automatically rebuild and deploy!

### Using GitHub Desktop:
1. Make changes in your code
2. Open GitHub Desktop
3. Write commit message
4. Click **"Commit to main"**
5. Click **"Push origin"**

---

## 🌍 Custom Domain (Optional)

After deploying, you can add your own domain:

1. **Vercel**: Project Settings → Domains → Add your domain
2. **Netlify**: Site Settings → Domain Management → Add custom domain

Both platforms provide free SSL certificates automatically!

---

## 📞 Need Help?

If you get stuck at any step, let me know:
- Which step are you on?
- What error message do you see?

I'll help you troubleshoot! 🚀

