import getCopy from "constants/localisation";
import Services from "constants/Services";
import usePageTitle from "localboast/hooks/usePageTitle";
import { last } from "localboast/utils";
import PageHeader from "Pages/components/PageHeader";
import PageWrapper from "Pages/components/PageWrapper";
import { useLocation } from "react-router-dom";

const SingleServicePage = () => {
  const { pathname } = useLocation();
  const servicePath = last(pathname.split("/"));
  const { headerImageId, headerImageStyle, text: serviceTitle } = Services[servicePath as keyof typeof Services];
  usePageTitle(`${serviceTitle} - ${getCopy("servicesTitle")}`);
  return (
    <PageWrapper>
      <PageHeader imageId={headerImageId} style={headerImageStyle} />
    </PageWrapper>
  );
};

export default SingleServicePage;
