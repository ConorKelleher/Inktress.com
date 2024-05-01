export const DEFAULT_LOCALE = {
  cookiePolicy: "Cookie Policy",
  privacyPolicy: "Privacy Policy",
};

type Key = keyof typeof DEFAULT_LOCALE;

export const getCopy = (key: Key) => {
  // Placeholder for some eventual localization
  const locale = DEFAULT_LOCALE;
  return locale[key];
};

export default getCopy;
