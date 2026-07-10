// ============================================
// CONFIGURE YOUR LINKS HERE
// ============================================

export interface Link {
  id: string;
  title: string;
  url: string;
  icon: string;
  description?: string;
  isHighlighted?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  bio: string;
  avatarUrl: string;
  links: Link[];
  socialLinks: SocialLink[];
  theme: {
    primaryColor: string;
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
  };
}

// ============================================
// UPDATE THIS CONFIGURATION WITH YOUR DETAILS
// ============================================
export const siteConfig: SiteConfig = {
  // Your name displayed at the top
  name: "Lit Fair 2.0",
  
  // Short bio/tagline
  bio: "Welcome! Click Register now to get yourself registered for any event.",
  
  // Profile picture - replace with your image URL or use local /avatar.png
  avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=LF&backgroundColor=6366f1",
  
  // Main links - Add your Google Forms, Drive links, etc.
  links: [
    {
      id: "register",
      title: "📝 Register Now",
      url: "https://forms.fillout.com/t/5hjQDotDxNus",
      icon: "📝",
      description: "Sign up for the event",
      isHighlighted: true,
    },
    {
      id: "event-details",
      title: "RuleBook",
      url: "https://drive.google.com/drive/folders/16Rkn3Ra-cc8aidJIzvcJd9EJWg5wF7KY?usp=sharing",
      icon: "📄",
      description: "View complete event information",
    },
    {
      id: "schedule",
      title: "Brochure",
      url: "https://drive.google.com/drive/folders/16Rkn3Ra-cc8aidJIzvcJd9EJWg5wF7KY?usp=sharing",
      icon: "📅",
      description: "Event brief and schedule",
    },
    {
      id: "resources",
      title: "Posters",
      url: "https://drive.google.com/drive/folders/16Rkn3Ra-cc8aidJIzvcJd9EJWg5wF7KY?usp=sharing",
      icon: "📚",
      description: "download posters",
    },
    {
      id: "contact",
      title: "💬 Contact Us",
      url: "https://wa.me/919964207000",
      icon: "💬",
      description: "Get in touch with our team",
    },
  ],
  
  // Social media links
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/c2s2_literayllis/",
      icon: "instagram",
    },
  ],
  
  // Theme colors (Tailwind CSS classes)
  theme: {
    primaryColor: "indigo",
    gradientFrom: "from-slate-900",
    gradientVia: "via-purple-900",
    gradientTo: "to-slate-900",
  },
};
