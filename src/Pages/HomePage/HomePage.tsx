import { Anchor, Center, Stack, Text } from "@mantine/core";
import styles from "./styles.module.sass";
import { Link } from "react-router-dom";
import Paths from "Paths";
import usePageTitle from "localboast/hooks/usePageTitle";

const HomePage = () => {
  usePageTitle("Inkantress");

  return (
    <Center w="100%" h="100%">
      <Stack justify="center" align="center" className={styles.homeWrapper} maw={1000}>
        <Text size="xl" ta="center">
          Thrilled to have you here. You seem nice.
          <br />
          <br />
          As you can see, this site is a little bare.
          <br />
          It's supposed to eventually serve as showcase (and dumping ground) for{" "}
          <Anchor component={Link} to={Paths.StorybookPage}>
            Examples and Documentation
          </Anchor>{" "}
          for the LocalBoast React Library, as well as some of the{" "}
          <Anchor component={Link} to={Paths.AppsPage}>
            apps I've built
          </Anchor>{" "}
          using it.
        </Text>
      </Stack>
    </Center>
  );
};

export default HomePage;
