# Khoo Hun Khiang - Professional Website

A premium, professional personal website for Khoo Hun Khiang (邱汉强), Unit Manager specializing in corporate risk management, financial advisory, estate planning, and insurance solutions.

## 🚀 Quick Start

This is a static website designed to be deployed on GitHub Pages at `username.github.io`.

### Option 1: Deploy to GitHub Pages

1. **Create a GitHub repository** named `username.github.io` (replace `username` with your actual GitHub username)

2. **Upload all files** to the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
   - Click Save

4. Your site will be live at `https://username.github.io` within a few minutes!

### Option 2: Test Locally

Simply open `index.html` in your web browser. All functionality works locally except:
- Form submissions (will show copy-to-clipboard and mailto options)
- External links

## 📝 How to Edit Content

### Edit Contact Information

Open `index.html` and search for:
- Email: `khoohunkhiang@gmail.com`
- Phone: `+6012-4805119`
- WhatsApp: `60124805119`
- WeChat: `khoohunkhiang`
- LinkedIn: `linkedin.com/in/khoo-hun-khiang/`

Replace with your actual contact details.

### Edit Office & Home Addresses

Search for `[Your Office Address]` and `[Your Residence Address]` in `index.html` and replace with actual addresses.

### Change Hero Headlines

In `index.html`, find the hero section and uncomment alternative headlines if desired:

```html
<!-- Current headline -->
<h2 class="hero-headline">Protect Your Business. Secure Your Family. Plan Your Legacy.</h2>

<!-- Alternative options (commented out) -->
<!-- <h2 class="hero-headline">Corporate Risk Management & Financial Advisory — Built on Clarity and Trust</h2> -->
<!-- <h2 class="hero-headline">Risk, Protection, and Estate Structuring for Families and SMEs</h2> -->
```

### Add Your Portrait Photo

1. Save your photo as `portrait.jpg` in the same folder
2. In `index.html`, find the `.portrait-placeholder` div and replace with:

```html
<img src="portrait.jpg" alt="Khoo Hun Khiang portrait" style="width: 100%; border-radius: 16px;">
```

### Edit Colors

The website uses a professional blue color scheme. To change colors, edit `styles.css`:

**Primary Blue**: Search for `#1e40af` and replace throughout
**Light Blue Backgrounds**: Search for `#eff6ff` and `#e0e7ff`

### Edit Text Content

All text content is in `index.html`. Search for specific sections:
- `<section class="hero"` - Hero section
- `id="services"` - Services overview
- `id="corporate-risk"` - Corporate risk section
- `id="estate-trust"` - Estate planning section
- `id="about"` - About section
- etc.

## 🔧 Customization Guide

### Add More FAQs

Find the FAQ section in `index.html` and add new items:

```html
<div class="faq-item">
    <button class="faq-question" aria-expanded="false">
        <span>Your question here?</span>
        <svg class="accordion-icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9"/>
        </svg>
    </button>
    <div class="faq-answer">
        <p>Your answer here.</p>
    </div>
</div>
```

The JavaScript automatically handles the accordion functionality.

### Optional: Connect to a Form Service

The forms currently use client-side copy-to-clipboard and mailto fallbacks. To connect to a form service:

1. **Formspree** (Recommended):
   - Sign up at https://formspree.io
   - Get your form endpoint
   - Change the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

2. **Google Forms**:
   - Create a form at https://forms.google.com
   - Embed or link to it from your contact section

### Add Google Analytics

Add before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky navigation with smooth scrolling
- ✅ Floating WhatsApp & Email buttons
- ✅ Bilingual content (English + Chinese)
- ✅ Interactive accordions for FAQs and insurance types
- ✅ Fade-in animations on scroll
- ✅ Static form handling with copy-to-clipboard
- ✅ Accessible (semantic HTML, ARIA labels, keyboard navigation)
- ✅ Professional, premium design
- ✅ SEO-friendly structure

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 File Structure

```
username.github.io/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 💡 Tips

1. **Test Locally First**: Always test changes by opening `index.html` in your browser before pushing to GitHub
2. **Backup**: Keep a backup copy before making major changes
3. **Mobile Testing**: Test on actual mobile devices or use browser dev tools
4. **Form Testing**: Test form submissions to ensure mailto links work properly
5. **Links**: Update all placeholder links and addresses with real information

## 🆘 Support

For technical issues with GitHub Pages, visit:
https://docs.github.com/en/pages

For general web help:
- W3Schools: https://www.w3schools.com
- MDN Web Docs: https://developer.mozilla.org

---

**Built with modern web standards | Static | Fast | SEO-friendly | Accessible**
