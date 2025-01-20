import { Anchor, AnchorProps, Group } from "@mantine/core";
import { cx, Haptic } from "localboast";
import { Link } from "react-router-dom";
import styles from "./styles.module.sass";
import { PropsWithChildren } from "react";

export interface BlockLinkProps extends AnchorProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof AnchorProps>, PropsWithChildren {
  ctaTo?: string;
  ctaHref?: string;
}

const BlockLink = ({ ctaTo, children, className, ctaHref, ...otherAnchorProps }: BlockLinkProps) => {
  const anchorProps = {
    component: ctaTo ? Link : undefined,
    to: ctaTo || "", // only falling back to shut up ts not handling branching paths
    href: ctaHref,
    ...otherAnchorProps,
  };
  return (
    <Haptic className={cx(styles.blockLink, className)}>
      <Anchor p="7px 12px" bg="dark.9" {...anchorProps} style={{ borderRadius: 5, ...anchorProps.style }}>
        <Group align="center" gap="5px">
          {children}
        </Group>
      </Anchor>
    </Haptic>
  );
};

export default BlockLink;
