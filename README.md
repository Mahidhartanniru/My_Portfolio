# Mahidhar Tanniru - Personal Portfolio

A modern, minimal, and high-converting personal portfolio website showcasing my expertise as a Data Engineer and AI Engineer.

## 🚀 Features

- **Modern Design**: Clean, premium, and unique design with dark theme and professional blue/cyan accents
- **Fully Responsive**: Mobile-first approach ensuring perfect display on all devices
- **Smooth Animations**: Lightweight animations and smooth scrolling for enhanced UX
- **SEO Optimized**: Meta tags, semantic HTML, and structured content for better search visibility
- **Fast Loading**: Optimized assets and minimal dependencies for quick page loads
- **Glassmorphism Effects**: Modern card designs with backdrop blur effects
- **Interactive Elements**: Hover effects, scroll animations, and dynamic content

## 📋 Sections

1. **Hero Section** - Introduction with CTA buttons and social links
2. **About Me** - Professional summary with key achievements and statistics
3. **Skills** - Technical expertise categorized by domains
4. **Experience** - Professional work history with detailed accomplishments
5. **Projects** - Featured portfolio projects with tech stacks
6. **Education & Certifications** - Academic background and professional certifications
7. **Contact** - Multiple ways to get in touch

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript** - Vanilla JS for interactions and animations
- **Font Awesome** - Icons
- **Google Fonts** - Inter and JetBrains Mono fonts

## 📁 Project Structure

```
Mahidhar_Tanniru_Portifilo/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── assets/             # Create this folder for assets
    ├── images/
    │   └── profile.jpg # Add your professional photo here
    └── Mahidhar_Tanniru_Resume.pdf  # Add your resume PDF here
```

## 🎨 Customization

### 1. Add Your Professional Photo

Replace the placeholder in the Hero section:

1. Add your professional photo to `assets/images/profile.jpg`
2. In `index.html`, replace the `.image-placeholder` div with:

```html
<div class="hero-image">
    <img src="assets/images/profile.jpg" alt="Mahidhar Tanniru" />
</div>
```

3. Add this CSS to `styles.css`:

```css
.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
    border: 2px solid rgba(0, 212, 255, 0.3);
}
```

### 2. Add Your Resume

1. Place your resume PDF in `assets/Mahidhar_Tanniru_Resume.pdf`
2. The download button in the hero section will automatically work

### 3. Update Links

Update the following links in `index.html`:

- **LinkedIn**: Replace all instances of `https://www.linkedin.com/in/mahidhar-tanniru-5a9091141/`
- **GitHub**: Replace all instances of `https://github.com/Mahidhar-Tanniru`
- **Email**: `mahidhartanniru66@gmail.com` (already set)
- **Phone**: `+1 (203) 832 9939` (already set)

### 4. Update Certification Links

In the Education & Certifications section, add links to your actual certification credentials:

```html
<a href="YOUR_DP700_CREDENTIAL_URL" class="cert-link" target="_blank">View Credential <i class="fas fa-external-link-alt"></i></a>
```

### 5. Add Project Links

Update GitHub project links in the Projects section once you create repositories for your projects.

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Name it: `mahidhar-tanniru.github.io` (or any name you prefer)
4. Make it **Public**
5. Don't initialize with README (we already have one)
6. Click **Create repository**

### Step 2: Push Your Code

Open Git Bash or Terminal in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/Mahidhar-Tanniru/mahidhar-tanniru.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 2-3 minutes for deployment

Your site will be live at: `https://mahidhar-tanniru.github.io/` (or your custom domain)

### Step 4: Custom Domain (Optional)

If you have a custom domain:

1. In GitHub Pages settings, add your custom domain
2. Update your domain's DNS settings:
   - Add a CNAME record pointing to `yourusername.github.io`
3. Wait for DNS propagation (can take up to 48 hours)

## 📱 Testing

### Local Testing

1. Open `index.html` directly in your browser, OR
2. Use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (npx)
npx serve
```

Then visit: `http://localhost:8000`

### Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Optimization Tips

### Performance

1. **Compress Images**: Use tools like TinyPNG or ImageOptim
2. **Lazy Loading**: Add `loading="lazy"` to images
3. **Minify CSS/JS**: Use online minifiers before final deployment
4. **CDN for Fonts**: Already using Google Fonts CDN

### SEO

1. **Add sitemap.xml**: For better indexing
2. **robots.txt**: Allow search engines to crawl
3. **Open Graph Tags**: For better social media sharing
4. **Schema Markup**: Add structured data for rich snippets

## 📊 Analytics (Optional)

Add Google Analytics:

```html
<!-- Add before closing </head> tag in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### GitHub Pages Not Loading

- Check if repository is public
- Verify branch and folder settings in Pages
- Clear browser cache
- Wait 5-10 minutes for first deployment

### Styles Not Loading

- Check file paths are correct (case-sensitive on Linux servers)
- Ensure CSS file is in same directory as HTML
- Check browser console for errors

### Links Not Working

- Verify all href attributes are correct
- Check file names and paths
- Ensure external links have `https://`

## 📝 Content Updates

To update content in the future:

1. Edit `index.html` directly
2. Commit and push changes:

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Pages will automatically redeploy (takes 1-2 minutes).

## 🎯 Next Steps

After deployment:

1. ✅ Test on multiple devices and browsers
2. ✅ Share your portfolio link on LinkedIn
3. ✅ Add portfolio URL to your resume
4. ✅ Update GitHub profile README with portfolio link
5. ✅ Test all contact links and buttons
6. ✅ Set up Google Analytics (optional)
7. ✅ Submit to Google Search Console (optional)

## 📬 Contact

**Mahidhar Tanniru**
- Email: mahidhartanniru66@gmail.com
- LinkedIn: [Mahidhar Tanniru](https://www.linkedin.com/in/mahidhar-tanniru-5a9091141/)
- GitHub: [Mahidhar-Tanniru](https://github.com/Mahidhar-Tanniru)
- Phone: +1 (203) 832 9939

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ by Mahidhar Tanniru**