import React, { FunctionComponent, MutableRefObject, forwardRef } from "react";
import { Link } from "react-router-dom";
import { Anchor, Group } from "@mantine/core";
// import { Anchor, Box, Stack, Text, lighten, useComputedColorScheme } from "@mantine/core";
import styles from "./styles.module.sass";
import getCopy from "constants/localisation";
import Paths from "Paths";
import { Haptic } from "localboast";
import { Images } from "constants/Images";
import * as Links from "constants/links";
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

type ExternalLink = "instagram" | "tiktok" | "linkedin" | "behance";
type LogoLinkConfig = {
  linkProps: {
    href: string;
    "aria-label": string;
  };
  imgProps: {
    src: string;
    alt: string;
  };
};

const LogoLinkConfigs: Record<ExternalLink, LogoLinkConfig> = {
  instagram: {
    linkProps: {
      href: Links.INSTAGRAM,
      "aria-label": "Link to Instagram",
    },
    imgProps: {
      src: Images.InstagramLogo.imageURL,
      alt: "Instagram Logo",
    },
  },
  tiktok: {
    linkProps: {
      href: Links.TIKTOK,
      "aria-label": "Link to TikTok",
    },
    imgProps: {
      src: Images.TikTokLogo.imageURL,
      alt: "TikTok Logo",
    },
  },
  linkedin: {
    linkProps: {
      href: Links.LINKEDIN,
      "aria-label": "Link to LinkedIn",
    },
    imgProps: {
      src: Images.LinkedInLogo.imageURL,
      alt: "LinkedIn Logo",
    },
  },
  behance: {
    linkProps: {
      href: Links.BEHANCE,
      "aria-label": "Link to Behance",
    },
    imgProps: {
      src: Images.BehanceLogo.imageURL,
      alt: "Behance Logo",
    },
  },
};

const LogoLink = ({ linkType }: { linkType: ExternalLink }) => {
  const { linkProps, imgProps } = LogoLinkConfigs[linkType];
  return (
    <Haptic focusScaleMultiplier={0.6}>
      <Anchor {...linkProps} target="_blank" rel="noopener noreferrer">
        <img {...imgProps} height={40} />
      </Anchor>
    </Haptic>
  );
};

const Footer = forwardRef<HTMLDivElement, FooterProps>((_props, ref) => {
  // const colorScheme = useComputedColorScheme();
  // const backgroundColor = lighten(LB_COLORS.boastfulYellow, 0.2);

  return (
    <Group id="page-footer" className={styles.footer} ref={ref} justify="space-between">
      <Group gap="xl" w="fit-content" className={styles.footerLogos}>
        <LogoLink linkType="instagram" />
        <LogoLink linkType="tiktok" />
        <LogoLink linkType="linkedin" />
        <LogoLink linkType="behance" />
      </Group>
      <FooterAnchor to={Paths.Contact}>{getCopy("contact")}</FooterAnchor>
    </Group>
  );
});

export default Footer;
