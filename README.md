# Vedra - Indian Research Indexing Solution

A modern, clean website for Vedra, an Indian research indexing solution that provides affordable and globally accessible DOI (Digital Object Identifier) services for Indian researchers and institutions.

## 🚀 Features

- **Modern Design**: Clean, responsive design using Tailwind CSS
- **Interactive Components**: Smooth animations with Framer Motion
- **TypeScript**: Full TypeScript support for better development experience
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: Built with accessibility in mind
- **Fast**: Optimized for performance

## 📋 Pages

- **Home**: Landing page with hero section, features, and call-to-action
- **About**: Company information, mission, vision, and team
- **Services**: Detailed service offerings with interactive tabs
- **Pricing**: Transparent pricing plans with comparison table
- **Contact**: Contact form and office locations
- **Dashboard**: User dashboard for DOI management (placeholder)

## 🛠️ Tech Stack

- **React 18**: Latest React with hooks and modern features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing
- **Lucide React**: Beautiful, customizable icons
- **Vite**: Fast build tool (if using Vite)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vedra
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Pricing.tsx     # Pricing page
│   ├── Contact.tsx     # Contact page
│   └── Dashboard.tsx   # User dashboard
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3B82F6 to #1E40AF)
- **Secondary**: Gray scale (#F8FAFC to #0F172A)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- **Buttons**: Primary, secondary, and ghost variants
- **Cards**: Consistent card design with hover effects
- **Forms**: Styled form inputs and validation
- **Navigation**: Responsive navigation with mobile menu

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

### Styling
- Use Tailwind CSS classes for styling
- Custom styles can be added in `src/index.css`
- Component-specific styles can be added using Tailwind's `@apply` directive

### Icons
- Use Lucide React icons: `import { IconName } from 'lucide-react'`
- Available icons: https://lucide.dev/icons/

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect React settings

### GitHub Pages
1. Add `homepage` field to `package.json`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`
4. Run `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email info@vedra.in or visit our website.

## 🔮 Future Enhancements

- [ ] User authentication system
- [ ] DOI generation workflow
- [ ] Payment integration (Razorpay)
- [ ] Admin dashboard
- [ ] API integration
- [ ] Multi-language support (Hindi)
- [ ] Dark mode
- [ ] PWA features

---

Built with ❤️ for Indian researchers
