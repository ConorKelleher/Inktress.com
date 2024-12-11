import { Button, ButtonProps, Group } from "@mantine/core";
import { cx, Haptic } from "localboast";
import styles from "./styles.module.sass";
import { ButtonHTMLAttributes } from "react";

export interface BlockButtonProps extends ButtonProps {
  className?: string;
  buttonClassName?: string;
  type: ButtonHTMLAttributes<any>["type"];
}

const BlockButton = ({ children, className, buttonClassName, ...buttonProps }: BlockButtonProps) => {
  return (
    <Haptic className={cx(styles.blockButton, className)}>
      <Button
        p="7px 12px"
        bg="dark.9"
        className={buttonClassName}
        {...buttonProps}
        style={{ borderRadius: 5, ...buttonProps.style }}
      >
        <Group align="center" gap="5px">
          {children}
        </Group>
      </Button>
    </Haptic>
  );
};

export default BlockButton;
