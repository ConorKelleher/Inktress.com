import { Anchor, Group } from "@mantine/core";
import InkantressLogo from "src/assets/images/inkantress_logo.png";
import styles from "./styles.module.sass";
import { Link } from "react-router-dom";
import Paths from "Paths";
import { Haptic } from "localboast";

const HomeIcon = () => {
  return (
    <Group wrap="nowrap" className={styles.logoContainer}>
      <Anchor component={Link} to={Paths.Home} className={styles.logoButton}>
        <Haptic focusScaleMultiplier={0.5}>
          <img role="link" src={InkantressLogo} className={styles.logo} />
        </Haptic>
      </Anchor>
    </Group>
  );
};

export default HomeIcon;
