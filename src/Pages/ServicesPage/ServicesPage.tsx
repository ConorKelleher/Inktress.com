import { last } from "localboast/utils";
import { Outlet, useLocation } from "react-router-dom";
import Paths from "Paths";
import ServicesPageRootContent from "./ServicesPageRootContent";

const ServicesPage = () => {
  const { pathname } = useLocation();
  const lastRouteSegment = last(pathname.split("/"));
  const isNestedRoute = !(lastRouteSegment === Paths.Services);

  return isNestedRoute ? <Outlet /> : <ServicesPageRootContent />;
};

export default ServicesPage;
