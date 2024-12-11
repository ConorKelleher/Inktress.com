import { Group } from "@mantine/core";
import GetInTouchBanner from "components/GetInTouchBanner";
import ImageCard from "components/ImageCard";
import getCopy from "constants/localisation";
import Services from "constants/Services";
import usePageTitle from "localboast/hooks/usePageTitle";
import PageHeader from "Pages/components/PageHeader";
import PageWrapper from "Pages/components/PageWrapper";

export const ServicesPageRootContent = () => {
  usePageTitle(getCopy("servicesTitle"));

  return (
    <PageWrapper>
      <PageHeader imageId="ServicesHeader" />
      <Group justify="center" p="xl" gap="md">
        {Object.entries(Services).map(([serviceKey, serviceInfo]) => (
          <ImageCard
            key={serviceKey}
            cardText={serviceInfo.title}
            ctaTo={serviceKey}
            imageId={serviceInfo.thumbImageId}
          />
        ))}
      </Group>
      <GetInTouchBanner />
    </PageWrapper>
  );
};

export default ServicesPageRootContent;
