import { Text } from "@mantine/core";
import ArrowIcon from "./Arrow.svg?react";
import BlockButton, { BlockButtonProps } from "components/BlockButton";
import styles from "./styles.module.sass";

export interface ArrowButtonProps extends BlockButtonProps {
  ctaText?: string;
  // Should the ctaText content be upcased - defaults to true
  upcase?: boolean;
}

const ArrowButton = ({ ctaText, upcase = true, ...buttonProps }: ArrowButtonProps) => {
  return (
    <BlockButton {...buttonProps} className={styles.arrowButton}>
      <Text>{upcase ? ctaText?.toLocaleUpperCase() : ctaText}</Text>
      &nbsp;
      <ArrowIcon />
    </BlockButton>
  );
};

export default ArrowButton;
