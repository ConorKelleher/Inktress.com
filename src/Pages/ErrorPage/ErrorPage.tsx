import { Anchor, Stack, Text } from "@mantine/core";
import PageWrapper from "Pages/PageWrapper";
import usePageTitle from "localboast/hooks/usePageTitle";
import { MAILTO } from "../../constants/links";

export const ErrorPageContent = () => (
  <Stack align="center" justify="center" style={{ width: "100%" }}>
    <Text size="80px" style={{ textAlign: "center" }}>
      Not today...
    </Text>
    <Text style={{ maxWidth: 700, margin: 30 }}>
      Whatever it is you're looking for, it's not here. If you got here from an out-of-date link on this site or in some
      documentation, please <Anchor href={MAILTO}>Contact Me</Anchor> and let me know.
      <br />
      <br />
      Otherwise, the thing you're looking for may have just moved, or you're having an off-day and just spelt it wrong.
      Good luck finding it anyway!
      <br />
      <br />- Rosie
    </Text>
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
