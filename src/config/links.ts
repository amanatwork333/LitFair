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
      icon: "📱",
      description: "Lit Fair 2.0 Event registration",
      isHighlighted: true,
    },
    {
      id: "slow-open-mic",
      title: "🎤 Register for Slow Open Mic",
      url: "https://forms.gle/25EgWqZ9rfWTjdp7A",
      icon: "🎙️",
      description: "The Neelesh Misra Festival",
    },
    {
      id: "Neelesh Misra Festival",
      title: "🎟️ The Neelesh Misra Festival",
      url: "https://forms.gle/t6k3wUaZwZfb7Qof6",
      icon: "🎫",
      description: "Register as audience",
    },
    {
      id: "event-details",
      title: "RuleBook",
      url: "https://drive.google.com/file/d/1Hac4TwtYneMDu64CI9HRkFnhVUT14hjb/view?usp=sharing",
      icon: "📕",
      description: "View complete event information",
    },
    {
      id: "schedule",
      title: "Brochure",
      url: "https://drive.google.com/file/d/1tYJFaCwhTP6LxGUBMyUOLW_hOoU1jzJR/view?usp=sharing",
      icon: "🖼️",
      description: "Event brief and schedule",
    },
    {
      id: "resources",
      title: "Posters",
      url: "https://drive.google.com/file/d/1TDrS33ihzD6KmIJuvt1eLv6B9k08yJuL/view?usp=sharing",
      icon: "📚",
      description: "View Event Posters",
    },
    {
      id: "contact",
      title: "💬 Contact Us",
      url: "https://wa.me/919964207000",
      icon: "💬",
      description: "Get in touch with our team",
    },
    // {
    //   id: "faculty-coordinator",
    //   title: "🎓 Aadarsh Kumar",
    //   url: "https://wa.me/917050132006",
    //   icon: "🎓",
    //   description: "Faculty Coordinator",
    // },
    // {
    //   id: "student-coordinator",
    //   title: "🧑‍💼 Vasu",
    //   url: "https://wa.me/919964207000",
    //   icon: "🧑‍💼",
    //   description: "Student Coordinator",
    // },
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