import { Anchor, Group } from "@mantine/core";
import Logo from "/src/assets/logo_wide.png";
import styles from "./styles.module.sass";
import { Link } from "react-router-dom";
import Paths from "Paths";
import { Haptic } from "localboast";

const HomeIcon = () => {
  return (
    <Group wrap="nowrap" className={styles.logoContainer}>
      <Anchor component={Link} to={Paths.HomePage} className={styles.logoButton}>
        <Haptic focusScaleMultiplier={0.5} events={{ focus: true, click: false }}>
          <img role="link" src={Logo} className={styles.logo} />
        </Haptic>
      </Anchor>
    </Group>
  );
};

export default HomeIcon;
