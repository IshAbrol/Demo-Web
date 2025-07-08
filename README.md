# CrestWin Private Limited - Official Website

**"Code the Future, Win with CrestWin"**

A modern, responsive React website for CrestWin Private Limited - a software development and IT services company helping startups, SMEs, and global enterprises build scalable, secure, and high-performing digital products.

## 🌟 Features

- **Modern Design**: Glassmorphism effects, gradients, and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **8 Complete Pages**: Home, About, Services, Technologies, Projects, Testimonials, Careers, Contact
- **Interactive Elements**: Animated statistics, hover effects, and smooth transitions
- **Contact Form**: Functional contact form with service selection and budget ranges
- **Global Presence**: Office locations and service areas display
- **SEO Optimized**: Proper meta tags and structured content

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)

### Installation Steps

1. **Clone or Download the Project**
   ```bash
   # If you have the project in a Git repository:
   git clone <repository-url>
   cd Website
   
   # Or if you have the project folder:
   cd /path/to/Website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   
   This will install all required packages:
   - React & React DOM
   - React Router DOM
   - Framer Motion (animations)
   - React Icons
   - Tailwind CSS
   - And other development dependencies

3. **Start the Development Server**
   ```bash
   npm start
   ```

4. **Open in Browser**
   - The website will automatically open in your default browser
   - If not, navigate to: `http://localhost:3000`
   - The development server supports hot reloading (changes will appear automatically)

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start`
- Runs the app in development mode
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser
- The page will reload if you make edits
- You will also see any lint errors in the console

### `npm test`
- Launches the test runner in interactive watch mode
- See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information

### `npm run build`
- Builds the app for production to the `build` folder
- It correctly bundles React in production mode and optimizes the build for the best performance
- The build is minified and the filenames include the hashes
- Your app is ready to be deployed!

### `npm run eject`
- **Note: this is a one-way operation. Once you `eject`, you can't go back!**
- If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time

## 📁 Project Structure

```
Website/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Website icon
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.js       # Navigation header
│   │   └── Footer.js       # Website footer
│   ├── pages/              # Main pages
│   │   ├── Home.js         # Homepage with hero section
│   │   ├── About.js        # About company & team
│   │   ├── Services.js     # Service offerings
│   │   ├── Technologies.js # Tech stack showcase
│   │   ├── Projects.js     # Portfolio & case studies
│   │   ├── Testimonials.js # Client reviews
│   │   ├── Careers.js      # Job openings
│   │   └── Contact.js      # Contact form & offices
│   ├── App.js              # Main app component
│   ├── App.css             # Additional styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles & Tailwind
├── package.json            # Dependencies & scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

## 🎨 Technologies Used

### Frontend Framework
- **React 18** - Modern JavaScript library for building user interfaces
- **React Router DOM** - Client-side routing for single-page application

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Popular icon library
- **Custom CSS** - Glassmorphism effects and animations

### Development Tools
- **Create React App** - React development environment
- **PostCSS** - CSS post-processing
- **Autoprefixer** - CSS vendor prefixing

## 🌍 Company Information

### Contact Details
- **Company**: CrestWin Private Limited
- **Address**: B-92, Vistara Township, MR-11 Road, Khudel, Indore, MP, India - 452016
- **Email**: info@crestwin.in
- **Phone**: +91-XXX-XXX-XXXX
- **Business Hours**: Mon-Sat, 9AM-7PM IST

### Leadership Team
- **Jay Tandon** - Founder & CEO
- **Aarush Dhavale** - Co-Founder & CTO

### Services Offered
- Custom Software Development
- Web & Mobile App Development
- Enterprise Software Solutions
- Cloud & DevOps Consulting
- AI/ML & Data Engineering
- API Development & Integration
- QA Automation & Testing
- UI/UX Design

## 🚀 Deployment

### Building for Production

1. **Create Production Build**
   ```bash
   npm run build
   ```

2. **Deploy to Hosting Platform**
   
   The build folder can be deployed to any static hosting service:
   
   **Netlify:**
   - Drag and drop the `build` folder to Netlify
   - Or connect your Git repository for automatic deployments
   
   **Vercel:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```
   
   **GitHub Pages:**
   ```bash
   npm install --save-dev gh-pages
   # Add to package.json scripts: "deploy": "gh-pages -d build"
   npm run deploy
   ```
   
   **AWS S3 + CloudFront:**
   - Upload `build` folder contents to S3 bucket
   - Configure CloudFront for global CDN

### Environment Variables (if needed)

Create a `.env` file in the root directory for environment-specific variables:
```env
REACT_APP_API_URL=https://api.crestwin.in
REACT_APP_CONTACT_EMAIL=info@crestwin.in
```

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   # Or use different port
   PORT=3001 npm start
   ```

2. **Node Modules Issues**
   ```bash
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build Errors**
   ```bash
   # Clear npm cache
   npm cache clean --force
   ```

4. **Tailwind Styles Not Loading**
   - Ensure `@tailwind` directives are in `src/index.css`
   - Check `tailwind.config.js` content paths

### Development Tips

- Use React Developer Tools browser extension for debugging
- Check browser console for any JavaScript errors
- Ensure all images and assets are in the `public` folder
- Use `npm run build` to test production build locally

## 📱 Browser Support

- **Chrome** (recommended)
- **Firefox**
- **Safari**
- **Edge**
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🔄 Updates & Maintenance

### Updating Dependencies
```bash
# Check outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm install package-name@latest
```

### Adding New Features
1. Create new components in `src/components/`
2. Add new pages in `src/pages/`
3. Update routing in `src/App.js`
4. Add styles using Tailwind classes

## 📞 Support

For technical support or questions about the website:

- **Email**: support@crestwin.in
- **Phone**: +91-XXX-XXX-XXXX
- **Website**: www.crestwin.in

---

**Built with ❤️ by CrestWin Private Limited**

*Code the Future, Win with CrestWin*