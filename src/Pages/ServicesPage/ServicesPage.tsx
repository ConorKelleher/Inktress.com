import { Center } from "@mantine/core";
import { capitalize, last } from "localboast/utils";
import usePageTitle from "localboast/hooks/usePageTitle";
import { SERVICES_PATH } from "Paths";
import { Outlet, useLocation } from "react-router-dom";

const ServicesPage = () => {
  const { pathname } = useLocation();
  const lastRouteSegment = last(pathname.split("/"));
  const isNestedRoute = !(lastRouteSegment === SERVICES_PATH);
  usePageTitle(
    `Inkantress Services${isNestedRoute ? ` - ${lastRouteSegment.split("_").map(capitalize).join(" ")}` : ""}`
  );

  return isNestedRoute ? <Outlet /> : <Center w="100%" h="100%"></Center>;
};

export default ServicesPage;
