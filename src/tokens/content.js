// ─── Site-wide ───────────────────────────────────────────────────────────────
export const SITE = {
  name: "DoTheySwipe",
  domain: "dotheyswipe.com",
  copyright: "© 2024 All Rights Reserved dotheyswipe.com",
  logoAlt: "DoTheySwipe logo",
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV = {
  headerLinks: [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About Us" },
    { to: "/faq", label: "FAQ's" },
  ],
  footerLinks: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/faq", label: "FAQ's" },
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/contact", label: "Contact Us" },
  ],
  searchCta: { label: "Search on Tinder", to: "/search" },
  socialLinks: [
    { href: "https://facebook.com/", label: "Facebook" },
    { href: "https://twitter.com/", label: "Twitter" },
    { href: "https://linkedin.com/", label: "LinkedIn" },
    { href: "https://instagram.com/", label: "Instagram" },
  ],
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO = {
  headingHighlight: "Find out ",
  headingRest: "if they are secretly on Tinder",
  statPrefix: "Did you know that",
  stat: "42%",
  statSuffix: "of Tinder users already have a partner?",
  subtext: "Discover the truth — we help hundreds find out if their partner is using dating apps.",
  ctaLabel: "Search on Tinder",
  imageAlt: "Woman using dating app on her phone",
};

// ─── How It Works ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS = {
  heading: "How does it work",
};

// ─── Testimonial ─────────────────────────────────────────────────────────────
export const TESTIMONIAL = {
  heading: "See What Users",
  headingHighlight: "Think of Dotheyswipe®",
  description:
    "Do They Swipe is a platform designed to help individuals discreetly and anonymously check if their partners or others they know are actively using dating apps.",
  quote:
    '"I suspected something was off and decided to give this a try. Within minutes, I had answers. Life-changing!"',
  reviewer: "Sandra W",
};

// ─── CTA ─────────────────────────────────────────────────────────────────────
export const CTA = {
  heading: "Get the Clarity You Deserve.",
  subtext: "Search millions of profiles quickly and securely",
  ctaLabel: "Search on Tinder",
  imageAlt: "Profile",
};

// ─── Pricing ─────────────────────────────────────────────────────────────────
export const PRICING = {
  heading: "Choose Your",
  headingHighlight: "Search Package's",
  subtext: 'Discover the perfect search package for your needs on "Dotheyswipe."',
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQ_SECTION = {
  heading: "Frequently",
  headingHighlight: "Asked Questions.",
  subtext: 'Answers to Common Questions About "DoTheySwipe"',
  viewAllLabel: "View all FAQs",
};

// ─── Contact ─────────────────────────────────────────────────────────────────
export const CONTACT = {
  panelHeading: "Have Questions?",
  panelSubtext: "Can't find the answer you're looking for?",
  panelImageAlt: "Happy couple",
  formHeading: "Get in",
  formHeadingHighlight: "touch",
  formSubtext: "Our friendly team would love to hear from you.",
  fields: {
    firstName: { label: "First name", placeholder: "First Name" },
    email: { label: "Email", placeholder: "your@email.com" },
    phone: { label: "Phone Number", placeholder: "+1 (555) 000-000" },
    message: { label: "Message", placeholder: "Leave us a message..." },
  },
  submitLabel: "Submit",
};

// ─── Search Form ─────────────────────────────────────────────────────────────
export const SEARCH = {
  heading: "Search",
  headingHighlight: "for a Person",
  subtext:
    "Find the individual you're looking for by entering specific details, such as their name, age, and gender.",
  fields: {
    firstName: { label: "First name", placeholder: "First Name" },
    age: { label: "Age", placeholder: "Enter age" },
    gender: {
      label: "Gender",
      options: [
        { value: "", label: "Choose" },
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
    },
  },
  ctaLabel: "Continue",
  imageAlt: "Search illustration",
};

// ─── Listing ─────────────────────────────────────────────────────────────────
export const LISTING = {
  ctaLabel: "Buy now to see results",
  blurredImageAlt: "Blurred profile preview",
};

// ─── Profiles Page ───────────────────────────────────────────────────────────
export const PROFILES_PAGE = {
  ctaLabel: "Continue",
};

// ─── About Page ──────────────────────────────────────────────────────────────
export const ABOUT_PAGE = {
  title: "Who are you looking for?",
  description:
    "Provide the name, age, and gender of the person you're looking for, as they might appear in the app.",
};

// ─── Profile Detail Page ─────────────────────────────────────────────────────
export const PROFILE_DETAIL_PAGE = {
  title: "Personal Info",
  profile: {
    name: "Alex Johnson",
    gender: "Male",
    age: 28,
    location: "San Francisco, CA",
    job: "Software Engineer at TechNova",
    interests: ["✈️ Traveling", "📸 Photography", "🎮 Gaming", "🎵 Live Music"],
    about:
      "Hey there! 👋 I'm Alex, a software engineer by day and an adventure seeker by the weekend. When I'm not coding, you'll find me exploring hiking trails or sipping coffee at a cozy café.",
  },
};
