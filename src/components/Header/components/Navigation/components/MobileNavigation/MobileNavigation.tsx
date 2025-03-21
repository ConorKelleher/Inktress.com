import { UnstyledButtonProps, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import style from "./styles.module.sass";
import NavigationList from "../NavigationList";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Hamburger from "components/Hamburger";

const CLOSE_TIMEOUT = 200;

const MobileNavigation = (props: UnstyledButtonProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [pathChanged, setPathChanged] = useState(false);
  const { pathname } = useLocation();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setPathChanged(true);
  }, [pathname]);

  useEffect(() => {
    if (pathChanged) {
      if (opened) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
        closeTimeoutRef.current = setTimeout(() => {
          clearTimeout(closeTimeoutRef.current!);
          closeTimeoutRef.current = null;
          close();
        }, CLOSE_TIMEOUT);
      }
      setPathChanged(false);
    }
  }, [pathChanged, close, opened]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };
  }, []);

  const bodyElementRef = useRef<HTMLElement | undefined>();

  useEffect(() => {
    bodyElementRef.current = document.getElementById("dropdown-container") || undefined;
  }, []);

  return (
    <>
      <Drawer
        className={style.drawer}
        size={120}
        left="0"
        overlayProps={{ opacity: "0.3" }}
        position="left"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        title="Open Navigation"
        keepMounted
        closeButtonProps={{ "aria-label": "Close Navigation" }}
        portalProps={{ target: bodyElementRef.current }}
      >
        <Stack mt="var(--header-height)" component="nav">
          <NavigationList withHome onClickItem={() => setPathChanged(true)} />
        </Stack>
      </Drawer>
      <Hamburger
        aria-label={opened ? "Close Navigation" : "Open Navigation"}
        {...props}
        isOpen={opened}
        onChange={(isOpen) => (isOpen ? open() : close())}
      />
      {/* <Button {...props} onClick={open}>
        Open Drawer
      </Button> */}
    </>
  );
};

export default MobileNavigation;
