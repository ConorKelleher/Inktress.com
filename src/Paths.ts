export const SERVICES_PATH = "services";

export const SERVICES_ROUTES = {
  BookCover: "book_cover",
  LogoDesign: "logo_design",
  AlbumCover: "album_cover",
  Branding: "branding",
  Illustration: "illustration",
  Design: "design",
  Posters: "posters",
  Socials: "socials",
  Characters: "characters",
  Scenes: "scenes",
  BusinessSuite: "business_suite",
  Flyers: "flyers",
} as const;

type ServicesRouteKey = keyof typeof SERVICES_ROUTES;
type ServicesRouteValue = (typeof SERVICES_ROUTES)[ServicesRouteKey];
type ServicesPaths = Record<`${ServicesRouteKey}Services`, `${typeof SERVICES_PATH}/${ServicesRouteValue}`>;
const SERVICES_PATHS: ServicesPaths = {
  ...(() => {
    const partialPaths: Partial<ServicesPaths> = {};
    (Object.entries(SERVICES_ROUTES) as [ServicesRouteKey, ServicesRouteValue][]).forEach(
      ([serviceKey, serviceRoute]) => (partialPaths[`${serviceKey}Services`] = `${SERVICES_PATH}/${serviceRoute}`)
    );
    return partialPaths as ServicesPaths;
  })(),
};

const Paths = {
  Root: "/",
  HomePage: "/",
  Services: SERVICES_PATH,
  ...SERVICES_PATHS,
  Portfolio: "portfolio",
  About: "about",
  Contact: "contact",
};

export default Paths;
