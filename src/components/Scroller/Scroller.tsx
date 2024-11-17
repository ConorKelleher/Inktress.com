import { Anchor, Group, ScrollArea, Stack, Text } from "@mantine/core";
import { Haptic } from "localboast";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

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

  return (
    <Stack>
      <Text>{props.headingText.toLocaleUpperCase()}</Text>
      <ScrollArea type="scroll">{props.children}</ScrollArea>
      <Group justify="flex-end" style={{ visibility: showShowMore ? undefined : "hidden" }}>
        <Haptic>
          <Anchor {...anchorProps} />
        </Haptic>
      </Group>
    </Stack>
  );
};

export default Scroller;
