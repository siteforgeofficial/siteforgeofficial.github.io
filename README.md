# SiteForge - Professional Website Development Services

A modern, responsive website for a web development agency built with HTML, Tailwind CSS, and JavaScript.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Fast loading and optimized performance
- 🔍 SEO-friendly structure
- 💫 Smooth animations and transitions
- 📊 Interactive pricing calculator
- 👥 Client testimonials slider
- 📱 Mobile-friendly navigation
- ⬆️ Back to top button
- 🖼️ Portfolio showcase with "Show More" functionality

## Tech Stack

- HTML5
- Tailwind CSS
- JavaScript (Vanilla)
- Inter Font (Google Fonts)

## Project Structure

```
services/
├── index.html          # Main landing page
├── calculator.html     # Pricing calculator page
├── tailwind.config.js  # Tailwind CSS configuration
├── styles.css         # Custom styles
└── README.md          # Project documentation
```

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install -D tailwindcss
   ```
3. Start the development server:
   ```bash
   npx tailwindcss -i ./styles.css -o ./dist/output.css --watch
   ```
4. Open `index.html` in your browser

## Customization

### Colors
The primary color scheme can be modified in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // ... color values
  }
}
```

### Fonts
The font family can be changed in `tailwind.config.js`:
```javascript
fontFamily: {
  'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
}
```

### Dark Mode
Dark mode styles are implemented using Tailwind's `dark:` variant. The theme can be toggled by adding/removing the `dark` class to the HTML element.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Optimization

- Optimized images
- Lazy loading of portfolio items
- Minimal JavaScript usage
- CSS animations for better performance
- Efficient Tailwind CSS configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.