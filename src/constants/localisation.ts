export const DEFAULT_LOCALE = {
  email: "Email",
  home: "Home",
  services: "Services",
  portfolio: "Portfolio",
  about: "About",
};

type Key = keyof typeof DEFAULT_LOCALE;

export const getCopy = (key: Key) => {
  // Placeholder for some eventual localization
  const locale = DEFAULT_LOCALE;
  return locale[key];
};

export default getCopy;
