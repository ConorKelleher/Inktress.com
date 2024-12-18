import ErrorPage from "Pages/ErrorPage";
import ExternalLinkPage from "Pages/ExternalLinkPage";
import { ExternalLinkMappings } from "Pages/ExternalLinkPage/constants";
import HomePage from "Pages/HomePage";
import Root from "Pages/Root";
import ServicesPage, { SingleServicePage } from "Pages/ServicesPage";
import Paths, { SERVICES_ROUTES } from "Paths";
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
        path: Paths.HomePage,
        element: <HomePage />,
      },
      {
        path: Paths.Services,
        element: <ServicesPage />,
        children: Object.values(SERVICES_ROUTES).map((servicePath) => ({
          path: servicePath,
          element: <SingleServicePage />,
        })),
      },
    ],
  },
  ...Object.keys(ExternalLinkMappings).map((externalLinkPath) => ({
    path: externalLinkPath,
    element: <ExternalLinkPage />,
  })),
]);
