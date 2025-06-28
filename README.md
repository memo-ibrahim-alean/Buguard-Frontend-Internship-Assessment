# 📝 Modern Blog Application

A responsive, modern blog application built with React, TypeScript, and TailwindCSS. Features both static blog content and dynamic posts fetched from JSONPlaceholder API.

## 🚀 Live Demo

[View Live Demo](https://your-demo-link.vercel.app) <!-- Add your deployment URL here -->

## ✨ Features

### 🎨 **Design & UI**

- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark/Light Mode** - Seamless theme switching with persistent state
- **Mobile-First Approach** - Touch-optimized interface with hamburger menu
- **Modern Typography** - Clean, readable font hierarchy
- **Interactive Elements** - Smooth hover effects and transitions

### 📱 **Mobile Experience**

- **Hamburger Menu** - Full-screen mobile navigation
- **Touch Optimized** - Proper touch targets and gestures
- **Responsive Layouts** - Adaptive grid systems for all screen sizes
- **No Cursor Issues** - Clean mobile experience without desktop artifacts

### 📰 **Blog Features**

- **Static Blog Posts** - Curated content with rich layouts
- **Dynamic Posts** - Real-time data from JSONPlaceholder API
- **Multiple Layouts** - Featured, compact, horizontal, and grid card variants
- **Blog Detail Pages** - Full post reading experience
- **Category System** - Organized content with colored badges
- **Author Information** - Detailed author profiles and metadata

### 🔧 **Technical Features**

- **TypeScript** - Full type safety and better developer experience
- **API Integration** - RESTful API consumption with error handling
- **State Management** - Efficient React hooks implementation
- **Routing** - Client-side routing with React Router
- **Loading States** - Smooth loading indicators and skeleton screens
- **Error Handling** - Graceful error boundaries and user feedback

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS + Custom CSS
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useEffect)
- **Data Fetching**: TanStack Query
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   └── ui/              # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
├── pages/
│   ├── Index.tsx        # Homepage with blog layout
│   ├── Posts.tsx        # Posts listing (API-driven)
│   ├── PostDetail.tsx   # Individual post page
│   ├── GridSystemBlog.tsx # Featured blog post
│   └── NotFound.tsx     # 404 page
├── services/
│   └── api.ts           # API service functions
├── types/
│   └── api.ts           # TypeScript type definitions
└── styles/
    └── index.css        # Global styles and CSS variables
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mohamedbrahim/modern-blog-app.git
   cd modern-blog-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 🌐 API Integration

### JSONPlaceholder API

The application integrates with JSONPlaceholder API for dynamic content:

- **Posts Endpoint**: `https://jsonplaceholder.typicode.com/posts`
- **Users Endpoint**: `https://jsonplaceholder.typicode.com/users`

### API Features

- **Error Handling**: Graceful error states with user feedback
- **Loading States**: Skeleton loading for better UX
- **Type Safety**: Full TypeScript interfaces for API responses
- **Caching**: Efficient data caching with TanStack Query

## 📱 Responsive Design

### Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+
- **Large Desktop**: 1440px+

### Design Approach

- **Mobile-First**: Designed for mobile and scaled up
- **Progressive Enhancement**: Features added for larger screens
- **Touch-Friendly**: Optimized touch targets and interactions
- **Flexible Layouts**: CSS Grid and Flexbox for responsive layouts

## 🎨 Design System

### Colors

- **Light Mode**: Clean whites and subtle grays
- **Dark Mode**: Deep blues (#090D1F) with high contrast
- **Accent Colors**: Purple (#6941C6) for links and CTAs

### Typography

- **Font**: Inter (system fallbacks included)
- **Scale**: Responsive typography with clamp() functions
- **Hierarchy**: Clear heading structure for accessibility

### Components

- **Cards**: Multiple variants for different content types
- **Buttons**: Consistent styling with hover states
- **Navigation**: Responsive menu system
- **Forms**: Accessible form elements with validation

### 🖼️ Images

All images are stored locally in `public/images/` directory:

- **Blog Post Images**: Thumbnails for blog posts and articles
- **Grid System Illustrations**: Detailed images for the grid system blog post
- **Placeholder Files**: Currently using placeholder images - replace with actual content

See `public/images/README.md` for detailed image information.

### 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run typecheck` - Run TypeScript type checking

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting for consistency
- **Prettier**: Code formatting
- **Responsive Design**: Mobile-first approach

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **JSONPlaceholder** - Free REST API for testing
- **Tailwind CSS** - Utility-first CSS framework
- **React Team** - Amazing framework and ecosystem
- **Radix UI** - Accessible component primitives
- **Lucide** - Beautiful icon library

---

Built with ❤️ by Mohamed Ibrahim using modern web technologies
