import AboutPage from "Pages/AboutPage";
import ContactPage from "Pages/ContactPage";
import ErrorPage from "Pages/ErrorPage";
import ExternalLinkPage from "Pages/ExternalLinkPage";
import { ExternalLinkMappings } from "Pages/ExternalLinkPage/constants";
import HomePage from "Pages/HomePage";
import PortfolioPage from "Pages/PortfolioPage";
import Root from "Pages/Root";
import ServicesPage, { SingleServicePage } from "Pages/ServicesPage";
import Paths, { ServicesPaths } from "Paths";
import { ReactNode } from "react";

type Route = {
  path: string;
  element: ReactNode;
  errorElement?: ReactNode;
  children?: Route[];
};
const wrapRoutesInErrors = (routes: Route[]): Route[] =>
  routes.map(
    (route) =>
      ({
        ...route,
        children: route.children ? wrapRoutesInErrors(route.children) : route.children,
      } as Route)
  );

export const RootRouter = wrapRoutesInErrors([
  {
    path: Paths.Root,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Paths.Home,
        element: <HomePage />,
      },
      {
        path: Paths.Services,
        element: <ServicesPage />,
        children: ServicesPaths.map((servicePath) => ({
          path: servicePath,
          element: <SingleServicePage />,
        })),
      },
      {
        path: Paths.Portfolio,
        element: <PortfolioPage />,
      },
      {
        path: Paths.About,
        element: <AboutPage />,
      },
      {
        path: Paths.Contact,
        element: <ContactPage />,
      },
    ],
  },
  ...Object.keys(ExternalLinkMappings).map((externalLinkPath) => ({
    path: externalLinkPath,
    element: <ExternalLinkPage />,
  })),
]);
