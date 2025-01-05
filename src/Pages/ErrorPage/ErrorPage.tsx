import { Stack, Text } from "@mantine/core";
import AppWrapper from "components/AppWrapper";
import usePageTitle from "localboast/hooks/usePageTitle";
import getCopy from "constants/localisation";
import FancyTitle from "components/FancyTitle";
import { Link } from "react-router-dom";
import Paths from "Paths";

export const ErrorPageContent = () => (
  <Stack align="center" justify="center" style={{ width: "100%" }}>
    <FancyTitle>Oops...</FancyTitle>
    <Text c="dark.7" style={{ maxWidth: 700, margin: 30 }}>
      Whatever it is you're looking for, it's not here. If you got here from an out-of-date link on this site or in some
      documentation, please <Link to={Paths.Contact}>Contact Me</Link> and let me know.
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
  usePageTitle(getCopy("404Title"));

  return (
    <AppWrapper>
      <ErrorPageContent />
    </AppWrapper>
  );
};

export default ErrorPage;
