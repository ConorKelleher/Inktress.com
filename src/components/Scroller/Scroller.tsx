import { Center, Group, ScrollArea, Stack } from "@mantine/core";
import ArrowButton from "components/ArrowButton/ArrowButton";
import FancyTitle from "components/FancyTitle";
import { Haptic, Portal, useScrollShadow, useUniqueId, useWindowResize } from "localboast";
import { PropsWithChildren, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.sass";

export interface ScrollerProps extends PropsWithChildren {
  headingText: string;
  ctaText?: string;
  ctaTo?: string;
  ctaHref?: string;
}

const Scroller = (props: ScrollerProps) => {
  const showShowMore = !!(props.ctaTo || props.ctaHref);
  const anchorProps = {
    component: props.ctaTo ? Link : undefined,
    to: props.ctaTo || "", // only falling back to shut up ts not handling branching paths
    href: props.ctaHref,
    children: props.ctaText || `ALL ${props.headingText.toLocaleUpperCase()}`,
  };
  const uniqueId = useUniqueId();

  const { refresh, setRef, ...scrollShadow } = useScrollShadow();
  // todo - add auto-appending of shadows
  console.log(scrollShadow);
  const { width: screenWidth } = useWindowResize();
  const scrollWrapperId = `scroller_wrapper_${uniqueId}`;
  const scrollAreaId = `scroller-area-${uniqueId}`;

  useLayoutEffect(() => {
    const wrapper = document.getElementById(scrollWrapperId);
    if (wrapper) {
      document.documentElement.style.setProperty("--scroller-width", `${wrapper.offsetWidth}`);
    }
  }, [screenWidth, scrollWrapperId]);

  return (
    <Stack align="center" justify="space-around" gap={15} px="lg" py="xl">
      <FancyTitle>{props.headingText.toLocaleUpperCase()}</FancyTitle>
      <Stack align="center" w="100%" id={scrollWrapperId} className={styles.scrollerWrapper}>
        <ScrollArea
          scrollbars="x"
          type="hover"
          offsetScrollbars
          pb={showShowMore ? 45 : undefined}
          className={styles.scrollArea}
          onScrollPositionChange={refresh}
          id={scrollAreaId}
          viewportRef={(ref) => {
            if (ref) {
              setRef(ref);
            }
          }}
        >
          <Group wrap="nowrap" py="5px" className={styles.contentWrapper}>
            {props.children}
          </Group>
        </ScrollArea>
        <Portal portalEl={scrollAreaId}>
          <Group
            w="100%"
            justify="flex-end"
            pos="absolute"
            style={{ visibility: showShowMore ? undefined : "hidden" }}
            className={styles.showMoreButton}
          >
            <ArrowButton
              bg="dark.6"
              ctaText={props.ctaText || `ALL ${props.headingText.toLocaleUpperCase()}`}
              ctaTo={props.ctaTo}
              ctaHref={props.ctaHref}
              {...anchorProps}
            />
          </Group>
        </Portal>
      </Stack>
    </Stack>
  );
};

export default Scroller;
