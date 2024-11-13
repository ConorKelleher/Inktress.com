import { Anchor } from "@mantine/core";
import getCopy from "constants/localisation";
import { cx, Haptic } from "localboast";
import Paths from "Paths";
import { NavLink, NavLinkProps } from "react-router-dom";

import styles from "./styles.module.sass";

export interface NavigationListProps {
  withHome?: boolean;
  onClickItem?: (path?: string) => void;
}
export interface NavigationItemProps extends NavLinkProps, Pick<NavigationListProps, "onClickItem"> {}

const NavigationItem = ({ onClickItem, ...navLinkProps }: NavigationItemProps) => (
  <Haptic>
    <NavLink
      {...navLinkProps}
      onClick={() =>
        onClickItem && onClickItem(typeof navLinkProps.to === "string" ? navLinkProps.to : navLinkProps.to.pathname)
      }
      className={cx(styles.link, navLinkProps.className)}
    />
  </Haptic>
);
const NavigationList = ({ withHome, ...navItemProps }: NavigationListProps) => (
  <>
    {!!withHome && (
      <Anchor component={NavigationItem} to={Paths.HomePage} {...navItemProps}>
        {getCopy("home")}
      </Anchor>
    )}
    <Anchor component={NavigationItem} to={Paths.Services} {...navItemProps}>
      {getCopy("services")}
    </Anchor>
    <Anchor component={NavigationItem} to={Paths.Portfolio} {...navItemProps}>
      {getCopy("portfolio")}
    </Anchor>
    <Anchor component={NavigationItem} to={Paths.About} {...navItemProps}>
      {getCopy("about")}
    </Anchor>
  </>
);

export default NavigationList;
