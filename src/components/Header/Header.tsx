// import { Group, useComputedColorScheme } from "@mantine/core";
import { Group } from "@mantine/core";
import HomeIcon from "./components/HomeIcon";
import useSize from "localboast/hooks/useSize";
// import useUpdatingRef from "localboast/hooks/useUpdatingRef";
import { useEffect } from "react";
// import * as LINKS from "constants/links";
// import { IconApps, IconHammer, IconHeartHandshake, IconVideo, IconVocabulary } from "@tabler/icons-react";
// import getCopy from "constants/localisation";

import styles from "./styles.module.sass";
import Navigation from "./components/Navigation";
// import Paths from "Paths";
// import HeaderNavItem from "./components/HeaderNavItem/HeaderNavItem";

// interface HeaderProps {
//   scrollTop: number;
// }

// const SCROLL_FADE_RATE = 0.4;
// const SCROLL_MIN_OPACITY = 0.3;

const Header = () => {
  const { size, setRef } = useSize();
  // const colorScheme = useComputedColorScheme();

  // Need to know header height so body can adjust to fit it
  useEffect(() => {
    if (size?.height) {
      document.documentElement.style.setProperty("--header-height", `${size.height}px`);
    }
  }, [size?.height]);

  // const updateHeaderColorRef = useUpdatingRef(() => {
  //   let alpha = 1;

  //   const headerHeight = size?.height;
  //   const offset = props.scrollTop;

  //   if (!(headerHeight && offset)) {
  //     alpha = 1;
  //   } else {
  //     alpha = Math.max(SCROLL_MIN_OPACITY, (headerHeight - offset * SCROLL_FADE_RATE) / headerHeight);
  //   }

  //   document.documentElement.style.setProperty("--header-opacity", `${alpha * 100}%`);
  // });

  // // Update header color on colorScheme or scrollTop change
  // useEffect(() => {
  //   updateHeaderColorRef.current();
  // }, [props.scrollTop, colorScheme, updateHeaderColorRef]);

  return (
    <Group
      component="header"
      display="grid"
      wrap="nowrap"
      id="page-header"
      ref={(ref) => {
        ref && setRef(ref);
      }}
      className={styles.header}
    >
      <Navigation />
      <HomeIcon />
      <Group gap={20}></Group>
    </Group>
  );
};

export default Header;
