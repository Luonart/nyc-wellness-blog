# NYC Wellness on a Budget

A production-ready Next.js website with Decap CMS for non-coders to manage content through a browser-based interface.

## 🚀 Features

- **Next.js 14+** with App Router and TypeScript
- **Decap CMS** (formerly Netlify CMS) for content management
- **MDX** support for rich content with React components
- **Tailwind CSS** for responsive, accessible styling
- **SEO optimized** with next-seo and sitemap generation
- **GitHub Actions** CI/CD pipeline
- **Vercel** deployment ready

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (marketing)/        # Marketing pages (home, about)
│   │   ├── blog/               # Blog pages
│   │   └── api/                # API routes
│   ├── components/             # React components
│   └── lib/                    # Utility functions
├── content/                    # MDX content files
│   ├── pages/                  # Static pages
│   └── posts/                  # Blog posts
├── public/
│   ├── admin/                  # Decap CMS admin interface
│   └── uploads/                # Image uploads
└── .github/                    # GitHub Actions and templates
```

## 🛠️ Setup Instructions

### 1. Local Development Setup

Run these commands in order:

```bash
# Install dependencies
npm install

# Initialize git repository
git init

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: NYC Wellness on a Budget website"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### 2. Vercel Deployment

1. **Import from GitHub:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

2. **Set Environment Variables:**
   - In Vercel project settings, go to "Environment Variables"
   - Add these variables:
     ```
     NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (optional)
     ```

3. **Enable Features:**
   - Go to "Settings" → "Git" → Enable "Preview Deployments"
   - Go to "Analytics" → Enable "Web Analytics" (optional)

### 3. Decap CMS GitHub Setup

1. **Create GitHub OAuth App:**
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Click "New OAuth App"
   - Fill in:
     - Application name: "Your Site CMS"
     - Homepage URL: `https://your-domain.vercel.app`
     - Authorization callback URL: `https://your-domain.vercel.app/admin/`

2. **Update CMS Configuration:**
   - Edit `public/admin/config.yml`
   - Replace `your-username/your-repo-name` with your GitHub username and repo
   - Replace `YOUR_GITHUB_APP_ID` with your OAuth App ID
   - Replace `https://your-domain.vercel.app` with your actual domain

3. **Set Repository Permissions:**
   - Go to your GitHub repository → Settings → Actions → General
   - Under "Workflow permissions", select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

## 📝 Daily Workflow for Non-Coders

### Content Creation Process

1. **Access CMS:**
   - Go to `https://your-domain.vercel.app/admin/`
   - Sign in with GitHub

2. **Create Content:**
   - Click "New Post" or "New Page"
   - Fill in title, description, and content
   - Upload images to `/uploads` folder
   - Save as draft or publish

3. **Review Process:**
   - CMS creates a GitHub Pull Request automatically
   - Open the PR in GitHub
   - Click the Vercel preview link to review changes
   - Request review from team members

4. **Publish:**
   - After approval, merge the Pull Request
   - Vercel automatically deploys the changes
   - Content goes live on your website

### Content Guidelines

- **Blog Posts:** Use descriptive titles, add relevant tags, include hero images
- **Pages:** Keep content focused and well-structured
- **Images:** Upload to `/uploads` folder, use descriptive filenames
- **SEO:** Fill in title and description for all content

## 🎨 Customization

### Styling
- Edit `tailwind.config.js` for theme customization
- Modify `src/app/globals.css` for global styles
- Update component styles in `src/components/`

### Content Structure
- Add new page types in `content/pages/`
- Modify blog post structure in `content/posts/`
- Update CMS configuration in `public/admin/config.yml`

### SEO
- Update `next-seo.config.ts` for site-wide SEO
- Modify individual page SEO in page components
- Add structured data as needed

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Run type checker
npm run typecheck

# Format code
npm run format

# Generate sitemap
npm run sitemap
```

## 📊 Analytics

The site includes Google Analytics 4 support:
- Set `NEXT_PUBLIC_GA_ID` environment variable
- Analytics code is automatically injected
- If not set, no analytics code is included

## 🔒 Security

- GitHub OAuth for CMS authentication
- Environment variables for sensitive data
- Pre-commit hooks for code quality
- CI/CD pipeline for automated testing

## 🆘 Troubleshooting

### Common Issues

1. **CMS Login Issues:**
   - Verify GitHub OAuth App configuration
   - Check callback URL matches your domain
   - Ensure repository permissions are correct

2. **Build Failures:**
   - Check environment variables are set
   - Verify all dependencies are installed
   - Review GitHub Actions logs

3. **Content Not Updating:**
   - Check if PR was merged
   - Verify Vercel deployment status
   - Clear browser cache

### Getting Help

- Check GitHub Issues for common problems
- Review Vercel deployment logs
- Contact your technical team for advanced issues

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

For content changes, use the CMS interface at `/admin/` instead of direct file editing.
# Trigger deployment
