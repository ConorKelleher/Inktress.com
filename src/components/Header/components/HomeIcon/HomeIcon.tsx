import { Anchor, Group } from "@mantine/core";
import styles from "./styles.module.sass";
import { Link } from "react-router-dom";
import Paths from "Paths";
import { Haptic } from "localboast";
import { Images } from "constants/Images";

const HomeIcon = () => {
  return (
    <Group wrap="nowrap" className={styles.logoContainer}>
      <Anchor component={Link} to={Paths.Home} className={styles.logoButton}>
        <Haptic focusScaleMultiplier={0.5}>
          <img
            alt="Inkantress logo"
            aria-label="Back to homepage"
            // src={Images.InkantressLogoGif.imageURL}
            src={Images.InkantressLogo.imageURL}
            className={styles.logo}
          />
        </Haptic>
      </Anchor>
    </Group>
  );
};

export default HomeIcon;
