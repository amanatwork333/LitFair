# Linktree-Style Website (Next.js)

A beautiful, high-performance link-in-bio page built with Next.js, Tailwind CSS, and TypeScript. Ready for Vercel deployment and optimized for high traffic.

## Features

- ⚡ **Lightning Fast** - Next.js with server-side rendering
- 🎨 **Beautiful Design** - Animated background, smooth transitions
- 📱 **Fully Responsive** - Looks great on all devices
- 🔧 **Easy to Customize** - Single config file for all links
- 🚀 **Vercel Optimized** - Edge network for global performance
- ♿ **Accessible** - WCAG compliant with proper focus states
- 🔍 **SEO Ready** - Meta tags and Open Graph configured

## Quick Start

### 1. Configure Your Links

Edit `src/config/links.ts` to update:
- Your name and bio
- Profile picture URL
- All your links (Google Forms, Drive, etc.)
- Social media links

### 2. Deploy to Vercel

**Option A: Vercel CLI**
```bash
npm i -g vercel
cd linktree-app
vercel
```

**Option B: GitHub Integration**
1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Deploy!

## Customization

### Adding Links

In `src/config/links.ts`, add to the `links` array:

```typescript
{
  id: "unique-id",
  title: "📋 My New Link",
  url: "https://your-url.com",
  icon: "📋",
  description: "Optional description",
  isHighlighted: false, // Set true to add "New" badge
}
```

### Changing Colors

The theme uses Tailwind CSS. Modify `AnimatedBackground.tsx` for background colors or update the gradient classes.

### Profile Picture

Options:
1. Use a URL directly in the config
2. Add an image to `/public/avatar.png` and reference it as `/avatar.png`

## Project Structure

```
linktree-app/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & animations
│   │   ├── layout.tsx       # Root layout with SEO
│   │   └── page.tsx         # Main page
│   ├── components/
│   │   ├── AnimatedBackground.tsx
│   │   ├── Avatar.tsx
│   │   ├── LinkCard.tsx
│   │   └── SocialLinks.tsx
│   └── config/
│       └── links.ts         # ⭐ YOUR LINKS GO HERE
├── public/
└── package.json
```

## Performance

- Server-side rendered for fast initial load
- Optimized images with Next.js Image component
- Minimal JavaScript bundle
- Edge-deployed on Vercel for global CDN

## License

MIT - Free to use and modify!
