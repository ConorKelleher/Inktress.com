import { Anchor, Group } from "@mantine/core";
import Logo from "/src/assets/logo_wide.png";
import styles from "./styles.module.sass";
import { Link } from "react-router-dom";
import Paths from "Paths";

const HomeIcon = () => {
  return (
    <Group wrap="nowrap" className={styles.logoContainer}>
      <Anchor component={Link} to={Paths.HomePage} className={styles.logoButton}>
        <div className={styles.logoWrapper}>
          <img role="link" src={Logo} className={styles.logo} />
        </div>
      </Anchor>
    </Group>
  );
};

export default HomeIcon;
