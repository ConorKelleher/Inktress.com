import { Group, UnstyledButton } from "@mantine/core";
import LogoWide from "/src/assets/logo_wide.png";
import styles from "./styles.module.sass";
import useHaptic from "localboast/hooks/useHaptic";
import { useNavigate } from "react-router-dom";
import Paths from "Paths";

const HomeIcon = () => {
  const navigate = useNavigate();

  const [{ onClick: hapticOnClick }] = useHaptic({
    clickMs: 100,
    returnMs: 100,
    delayedOnClick: () => {
      navigate(Paths.HomePage);
    },
  });

  return (
    <UnstyledButton onClick={hapticOnClick} className={styles.logoButton}>
      <Group wrap="nowrap" className={styles.logoContainer}>
        <div className={styles.logoWideWrapper}>
          <img role="link" src={LogoWide} className={styles.logoWide} />
        </div>
      </Group>
    </UnstyledButton>
  );
};

export default HomeIcon;
