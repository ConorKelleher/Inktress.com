import { UnstyledButton, UnstyledButtonProps } from "@mantine/core";
import style from "./styles.module.sass";
import { useEffect, useRef, useState } from "react";
import { cx, useUpdatingRef } from "localboast";

interface HamburgerProps extends UnstyledButtonProps {
  isOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
}

const Hamburger = ({ isOpen: propsIsOpen, onChange, ...buttonProps }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const prevPropsOpenRef = useRef(propsIsOpen);
  const propsOnChangeRef = useUpdatingRef(onChange);

  useEffect(() => {
    if (propsIsOpen !== undefined && propsIsOpen !== prevPropsOpenRef.current) {
      setIsOpen(propsIsOpen);
    }
    prevPropsOpenRef.current = propsIsOpen;
  }, [propsIsOpen]);

  useEffect(() => {
    if (prevPropsOpenRef.current !== undefined && isOpen !== prevPropsOpenRef.current && propsOnChangeRef.current) {
      propsOnChangeRef.current(isOpen);
    }
  }, [isOpen, propsOnChangeRef]);

  return (
    <UnstyledButton
      {...buttonProps}
      tabIndex={0}
      variant="subtle"
      className={cx(style.hamburger, { [style.hamburger_open]: isOpen })}
      onClick={() => setIsOpen((wasOpen) => !wasOpen)}
    >
      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path strokeWidth="2" d="M4 8 L26 8"></path>
        <path strokeWidth="2" d="M4 15 L26 15"></path>
        <path strokeWidth="2" d="M4 22 L26 22"></path>
      </svg>
    </UnstyledButton>
  );
};

export default Hamburger;
