import Showcase from "components/Showcase";
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
  const { headerImageId, headerImageStyle, title, showcaseText, showcaseImageIds } =
    Services[servicePath as keyof typeof Services];
  usePageTitle(`${title} - ${getCopy("servicesTitle")}`);
  return (
    <PageWrapper>
      <PageHeader imageId={headerImageId} style={headerImageStyle} />
      <Showcase imageIds={showcaseImageIds} description={showcaseText} />
    </PageWrapper>
  );
};

export default SingleServicePage;
