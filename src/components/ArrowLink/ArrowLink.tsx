import { Text } from "@mantine/core";
import ArrowIcon from "./Arrow.svg?react";
import BlockLink, { BlockLinkProps } from "components/BlockLink";
import styles from "./styles.module.sass";

export interface ArrowLinkProps extends BlockLinkProps {
  ctaText?: string;
  // Should the ctaText content be upcased - defaults to true
  upcase?: boolean;
}

const ArrowLink = ({ ctaText, upcase = true, ...linkProps }: ArrowLinkProps) => {
  return (
    <BlockLink {...linkProps} className={styles.arrowLink}>
      <Text>{upcase ? ctaText?.toLocaleUpperCase() : ctaText}</Text>
      &nbsp;
      <ArrowIcon />
    </BlockLink>
  );
};

export default ArrowLink;
