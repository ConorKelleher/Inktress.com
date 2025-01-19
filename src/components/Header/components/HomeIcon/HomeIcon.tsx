import { Anchor, Group } from "@mantine/core";
import styles from "./styles.module.sass";
import { Link } from "react-router-dom";
import Paths from "Paths";
import { Haptic } from "localboast";
import { Images } from "constants/Images";
import { useState } from "react";

const HomeIcon = () => {
  const [showGif, setShouldShowGif] = useState(false);
  return (
    <Group wrap="nowrap" className={styles.logoContainer}>
      <Anchor
        component={Link}
        to={Paths.Home}
        className={styles.logoButton}
        onMouseEnter={() => setShouldShowGif((oldShouldShowGif) => !oldShouldShowGif)}
      >
        <Haptic focusScaleMultiplier={0.5}>
          <img
            alt="Inkantress logo"
            aria-label="Back to homepage"
            src={showGif ? Images.InkantressLogoGif.imageURL : Images.InkantressLogo.imageURL}
            className={styles.logo}
          />
        </Haptic>
      </Anchor>
    </Group>
  );
};

export default HomeIcon;
