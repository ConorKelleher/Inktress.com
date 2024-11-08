import React, { MutableRefObject, forwardRef } from "react";
import { Anchor, Box, Stack, Text } from "@mantine/core";
// import { Anchor, Box, Stack, Text, lighten, useComputedColorScheme } from "@mantine/core";
import styles from "./styles.module.sass";
import * as LINKS from "constants/links";
import getCopy from "constants/localisation";
// import { LB_COLORS } from "theme";

interface FooterAnchorProps extends React.PropsWithChildren {
  href?: string;
  target?: string;
  rel?: string;
}

const FooterAnchor = (props: FooterAnchorProps) => {
  return <Anchor className={styles.footer_anchor} target="_blank" rel="noopener noreferrer" {...props} />;
};

interface FooterProps {
  scrollTop: number;
  scrollTo: (options: ScrollToOptions) => void;
  scrollBy: (options: ScrollToOptions) => void;
  viewportRef: MutableRefObject<HTMLDivElement | null>;
}

const Footer = forwardRef<HTMLDivElement, FooterProps>((_props, ref) => {
  // const colorScheme = useComputedColorScheme();
  // const backgroundColor = lighten(LB_COLORS.boastfulYellow, 0.2);

  return (
    <div tabIndex={0} className={styles.footer_wrapper}>
      <Box
        id="page-footer"
        className={styles.footer}
        ref={ref}
        // style={{
        // backgroundColor,
        // }}
      >
        <div>
          <Stack>
            <Text size="md" fw="700">
              Contact
            </Text>
            <FooterAnchor href={LINKS.MAILTO}>{getCopy("email")}</FooterAnchor>
          </Stack>
        </div>
      </Box>
    </div>
  );
});

export default Footer;
