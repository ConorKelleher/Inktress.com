import Footer from "components/Footer/Footer";
import Body from "components/Body";
import Header from "components/Header";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { ScrollArea } from "@mantine/core";
import styles from "./styles.module.sass";
import { useLocation } from "react-router-dom";

const AppWrapper = (props: React.PropsWithChildren) => {
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();
  const scrollTo = useCallback((options: ScrollToOptions) => {
    if (viewportRef.current) {
      viewportRef.current.scrollTo(options);
    }
  }, []);
  const scrollBy = useCallback((options: ScrollToOptions) => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy(options);
    }
  }, []);

  // Todo - make this play nicely with scroll history
  useLayoutEffect(() => {
    scrollTo({ top: 0 });
  }, [scrollTo, pathname]);

  return (
    <>
      <ScrollArea.Autosize
        mah="100%"
        maw="100%"
        viewportRef={viewportRef}
        className={styles.scrollArea}
        onScrollPositionChange={setScrollPos}
      >
        <Header />
        <Body>{props.children}</Body>
        <Footer scrollTop={scrollPos.y} scrollTo={scrollTo} scrollBy={scrollBy} viewportRef={viewportRef} />
      </ScrollArea.Autosize>
    </>
  );
};

export default AppWrapper;
