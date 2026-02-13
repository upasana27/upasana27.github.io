# GitHub Pages Hosting Guide

## Quick Setup Steps

### 1. Create a GitHub Repository
1. Go to https://github.com/new
2. Name it: `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - OR use any name like `academic-website` for a project site
3. Make it **Public**
4. Click "Create repository"

### 2. Upload Your Website Files

**Option A: Using Git (Recommended)**
```bash
# Navigate to your website folder
cd /tmp/academic-profile

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - academic website"

# Add your GitHub repository as remote (replace with your info)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Upload via GitHub Web Interface**
1. Go to your repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop: `index.html`, `styles.css`, `script.js`
4. Click "Commit changes"

### 3. Enable GitHub Pages
1. Go to your repository Settings
2. Scroll to "Pages" section (left sidebar)
3. Under "Source", select: **Deploy from a branch**
4. Choose branch: **main** and folder: **/ (root)**
5. Click "Save"

### 4. Access Your Website
- **User/Organization site**: `https://yourusername.github.io`
- **Project site**: `https://yourusername.github.io/repository-name`

Your site will be live in 1-5 minutes!

## Using Git Commands (Copy-Paste Ready)

Replace `YOURUSERNAME` and `REPONAME` with your actual values:

```bash
cd /tmp/academic-profile
git init
git add .
git commit -m "Initial commit - academic website"
git remote add origin https://github.com/YOURUSERNAME/REPONAME.git
git branch -M main
git push -u origin main
```

## Important Notes

- ✅ GitHub Pages is **completely free**
- ✅ Best URL format: `yourusername.github.io` (no repo name in URL)
- ✅ Any updates: just `git add .`, `git commit -m "Update"`, `git push`
- ✅ Custom domain available (optional)
- ✅ HTTPS enabled by default

## Updating Your Site Later

```bash
cd /tmp/academic-profile
git add .
git commit -m "Updated publications"
git push
```

Changes appear within 1-2 minutes!

## Need Help?
- GitHub Pages Docs: https://pages.github.com
- Git Installation: https://git-scm.com/downloads