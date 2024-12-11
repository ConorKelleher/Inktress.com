import { Stack } from "@mantine/core";
import ArrowLink from "components/ArrowLink";
import FancyTitle from "components/FancyTitle";
import getCopy from "constants/localisation";
import Paths from "Paths";
import styles from "./styles.module.sass";

const GetInTouchBanner = () => {
  return (
    <div className={styles.banner}>
      <Stack w="fit-content" m="auto" align="center" justify="center" className={styles.bannerContent}>
        <FancyTitle c="unset" className={styles.bannerTitle}>
          {getCopy("getInTouchBannerTitle")}
        </FancyTitle>
        <ArrowLink ctaText={getCopy("getInTouchBannerCTA")} ctaTo={`/${Paths.Contact}`} />
      </Stack>
    </div>
  );
};

export default GetInTouchBanner;
