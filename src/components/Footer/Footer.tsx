import React, { FunctionComponent, MutableRefObject, forwardRef } from "react";
import { Link } from "react-router-dom";
import { Anchor, Group } from "@mantine/core";
// import { Anchor, Box, Stack, Text, lighten, useComputedColorScheme } from "@mantine/core";
import styles from "./styles.module.sass";
import getCopy from "constants/localisation";
import Paths from "Paths";
import { Haptic } from "localboast";
// import { LB_COLORS } from "theme";

interface FooterAnchorProps extends React.PropsWithChildren {
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
}

const FooterAnchor = ({ href, to, ...otherProps }: FooterAnchorProps) => {
  const anchorProps = {
    className: styles.footer_anchor,
    target: undefined,
    rel: undefined,
    to: undefined as string | undefined,
    href: undefined as string | undefined,
    component: undefined as FunctionComponent<any> | undefined,
    ...otherProps,
  };
  if (to) {
    anchorProps.to = to;
    anchorProps.component = Link;
  } else {
    anchorProps.href = href;
    anchorProps.target = "_blank";
    anchorProps.rel = "noopener noreferrer";
  }
  return (
    <Haptic>
      <Anchor {...anchorProps} underline="hover" />
    </Haptic>
  );
};

interface FooterProps {
  scrollTop: number;
  scrollTo: (options: ScrollToOptions) => void;
  scrollBy: (options: ScrollToOptions) => void;
  viewportRef: MutableRefObject<HTMLDivElement | null>;
}

const Footer = forwardRef<HTMLDivElement, FooterProps>((_props, ref) => {
  // const colorScheme = useComputedColorScheme();
  // const backgroundColor = lighten(LB_COLORS.boastfulYellow, 0.2);

  return (
    <div className={styles.footer_wrapper}>
      <Group id="page-footer" className={styles.footer} ref={ref}>
        <FooterAnchor to={Paths.Contact}>{getCopy("contact")}</FooterAnchor>
      </Group>
    </div>
  );
});

export default Footer;
