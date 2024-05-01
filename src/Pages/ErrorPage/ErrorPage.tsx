import { Stack, Text } from "@mantine/core";
import PageWrapper from "Pages/PageWrapper/PageWrapper";
import usePageTitle from "localboast/hooks/usePageTitle";

export const ErrorPageContent = () => (
  <Stack align="center" justify="center" style={{ width: "100%" }}>
    <Text size="80px" style={{ textAlign: "center" }}>
      Not today...
    </Text>
    <Text style={{ maxWidth: 700, margin: 30 }}>Error message coming soon!</Text>
  </Stack>
);

const ErrorPage = () => {
  usePageTitle("404 | Inkantress");

  return (
    <PageWrapper>
      <ErrorPageContent />
    </PageWrapper>
  );
};

export default ErrorPage;
