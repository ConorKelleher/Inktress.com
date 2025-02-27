import { Stack, Text } from "@mantine/core";
import ArrowLink from "components/ArrowLink";
import GetInTouchBanner from "components/GetInTouchBanner";
import getCopy from "constants/localisation";
import usePageTitle from "localboast/hooks/usePageTitle";
import PageHeader from "Pages/components/PageHeader";
import PageWrapper from "Pages/components/PageWrapper";
import Paths from "Paths";

const AboutPage = () => {
  usePageTitle(getCopy("aboutTitle"));

  return (
    <PageWrapper>
      {/* @ts-ignore */}
      <PageHeader imageId="AboutHeader" style={{ objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" }} />
      <Stack py="40" w="80%" maw={1000} gap="30" m="auto" align="center">
        <Text c="dark.9" style={{ textAlign: "center", whiteSpace: "pre-wrap" }} fz="lg">
          {getCopy("aboutPageContent")}
        </Text>
        <ArrowLink ctaTo={`/${Paths.Services}`} ctaText={getCopy("services")} upcase={false} />
      </Stack>
      <GetInTouchBanner />
    </PageWrapper>
  );
};

export default AboutPage;
