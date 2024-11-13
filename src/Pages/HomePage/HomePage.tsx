import { Center } from "@mantine/core";
import usePageTitle from "localboast/hooks/usePageTitle";

const HomePage = () => {
  usePageTitle("Inkantress Art & Design");

  return <Center w="100%" h="100%"></Center>;
};

export default HomePage;
