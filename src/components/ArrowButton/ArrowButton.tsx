import { Anchor, AnchorProps, Group, Text } from "@mantine/core";
import { Haptic } from "localboast";
import { Link } from "react-router-dom";
import ArrowIcon from "./Arrow.svg?react";
import styles from "./styles.module.sass";

export interface ArrowButtonProps extends AnchorProps {
  ctaText?: string;
  ctaTo?: string;
  ctaHref?: string;
  // Should the ctaText content be upcased - defaults to true
  upcase?: boolean;
}

const ArrowButton = ({ ctaTo, ctaHref, ctaText, upcase = true, ...otherAnchorProps }: ArrowButtonProps) => {
  const anchorProps = {
    component: ctaTo ? Link : undefined,
    to: ctaTo || "", // only falling back to shut up ts not handling branching paths
    href: ctaHref,
    ...otherAnchorProps,
  };
  return (
    <Haptic className={styles.arrowButton}>
      <Anchor p="7px 12px" bg="dark.9" {...anchorProps} style={{ borderRadius: 5, ...anchorProps.style }}>
        <Group align="center" gap="5px">
          <Text>{upcase ? ctaText?.toLocaleUpperCase() : ctaText}</Text>
          &nbsp;
          <ArrowIcon />
        </Group>
      </Anchor>
    </Haptic>
  );
};

export default ArrowButton;
