import getCopy from "constants/localisation";
import usePageTitle from "localboast/hooks/usePageTitle";
import PageHeader from "Pages/components/PageHeader";
import PageWrapper from "Pages/components/PageWrapper";

const ContactPage = () => {
  usePageTitle(getCopy("contactTitle"));

  return (
    <PageWrapper>
      <PageHeader imageId="ContactHeader" />
    </PageWrapper>
  );
};

export default ContactPage;
