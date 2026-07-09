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
  bio: "Welcome! Click any link below to register or access resources.",
  
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
      title: "Rule Book 📄",
      url: "https://drive.google.com/drive/folders/16Rkn3Ra-cc8aidJIzvcJd9EJWg5wF7KY?usp=sharing",
      icon: "📄",
      description: "View complete event information",
    },
    {
      id: "schedule",
      title: "📅 Brochure",
      url: "https://drive.google.com/drive/folders/16Rkn3Ra-cc8aidJIzvcJd9EJWg5wF7KY?usp=sharing",
      icon: "📅",
      description: "Check the event schedule",
    },
    {
      id: "resources",
      title: "📚 Resources",
      url: "https://drive.google.com/drive/folders/16Rkn3Ra-cc8aidJIzvcJd9EJWg5wF7KY?usp=sharing",
      icon: "📚",
      description: "Access study materials and guides",
    },
    {
      id: "contact",
      title: "💬 Contact Us",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfTAfoKgW8KoYhyPLigU4pU3PmLpwq9SK0nQKMM8ZlmeYRXHA/viewform?usp=dialog",
      icon: "💬",
      description: "Get in touch with our team",
    },
  ],
  
  // Social media links
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://instagram.com/yourhandle",
      icon: "instagram",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/yourhandle",
      icon: "twitter",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/yourcompany",
      icon: "linkedin",
    },
    {
      platform: "Email",
      url: "mailto:contact@yourdomain.com",
      icon: "email",
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
