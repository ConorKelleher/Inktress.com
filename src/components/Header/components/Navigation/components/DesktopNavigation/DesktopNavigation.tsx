import { Group, GroupProps } from "@mantine/core";

import style from "./styles.module.sass";
import NavigationList from "../NavigationList";

const DesktopNavigation = (props: GroupProps) => (
  <Group component="nav" className={style.desktop_nav_links} wrap="nowrap" {...props}>
    <NavigationList />
  </Group>
);

export default DesktopNavigation;
