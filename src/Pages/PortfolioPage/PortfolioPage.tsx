import { capitalize, last } from "localboast/utils";
import usePageTitle from "localboast/hooks/usePageTitle";
import { Outlet, useLocation } from "react-router-dom";
import PageWrapper from "Pages/components/PageWrapper";
import getCopy from "constants/localisation";
import Paths from "Paths";
import PageHeader from "Pages/components/PageHeader";

const PortfolioPage = () => {
  const { pathname } = useLocation();
  const lastRouteSegment = last(pathname.split("/"));
  const isNestedRoute = !(lastRouteSegment === Paths.Portfolio);
  usePageTitle(
    `${getCopy("portfolioTitle")}${isNestedRoute ? ` - ${lastRouteSegment.split("_").map(capitalize).join(" ")}` : ""}`
  );

  return isNestedRoute ? (
    <Outlet />
  ) : (
    <PageWrapper>
      <PageHeader imageId="PortfolioHeader" />
    </PageWrapper>
  );
};

export default PortfolioPage;
