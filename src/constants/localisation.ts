import AboutPageContent from "assets/text/about.txt?raw";

export const DEFAULT_LOCALE = {
  homeTitle: "Inkantress Art & Design",
  aboutTitle: "About - Inkantress",
  contactTitle: "Contact - Inkantress",
  portfolioTitle: "Portfolio - Inkantress",
  servicesTitle: "Services - Inkantress",
  "404Title": "404 - Inkantress",
  email: "Email",
  home: "Home",
  services: "Services",
  portfolio: "Portfolio",
  about: "About",
  contact: "Contact",
  illustrationDesignHeroHeader: "Bespoke\nIllustration and Design",
  illustrationDesignHeroBody: "Tailored services for your specific project.",
  illustrationDesignHeroCTA: "Get Started",
  portfolioHeroHeader: "Portfolio",
  portfolioHeroBody: "Take a look at past artwork.",
  portfolioHeroCTA: "Take a Peek",
  clientReviews: "Client Reviews",
  getInTouchBannerTitle: "Can't Find What\nYou're Looking For?",
  getInTouchBannerCTA: "Get In Touch",
  nickJoesburyQuote:
    "Creative and professional, done a logo for us and had one back very quickly  exactly how we wanted with only giving her a vague description!! Amazing all round.",
  aboutPageContent: AboutPageContent,
};

type Key = keyof typeof DEFAULT_LOCALE;

export const getCopy = (key: Key) => {
  // Placeholder for some eventual localization
  const locale = DEFAULT_LOCALE;
  return locale[key];
};

export default getCopy;
