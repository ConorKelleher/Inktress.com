export const DEFAULT_LOCALE = {
  homeTitle: "Inkantress Art & Design",
  email: "Email",
  home: "Home",
  services: "Services",
  portfolio: "Portfolio",
  about: "About",
  illustrationDesignHeroHeader: "Bespoke\nIllustration and Design",
  illustrationDesignHeroBody: "Tailored services for your specific project.",
  illustrationDesignHeroCTA: "Get Started",
  portfolioHeroHeader: "Portfolio",
  portfolioHeroBody: "Take a look at past art work.",
  portfolioHeroCTA: "Take a Peek",
};

type Key = keyof typeof DEFAULT_LOCALE;

export const getCopy = (key: Key) => {
  // Placeholder for some eventual localization
  const locale = DEFAULT_LOCALE;
  return locale[key];
};

export default getCopy;
