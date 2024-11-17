import { Anchor, Group, Image, Stack, Text } from "@mantine/core";
import styles from "./styles.module.sass";
import { Link } from "react-router-dom";
import { CSSProperties } from "react";
import { Haptic } from "localboast";

export interface HeroProps {
  imageSrc: string;
  imageStyle?: CSSProperties;
  headingText: string;
  bodyText: string;
  ctaText?: string;
  ctaTo?: string;
  ctaHref?: string;
}

const Hero = (props: HeroProps) => {
  const hasCTA = !!(props.ctaText && (props.ctaTo || props.ctaHref));
  const anchorProps = {
    component: props.ctaTo ? Link : undefined,
    to: props.ctaTo || "", // only falling back to shut up ts not handling branching paths
    href: props.ctaHref,
  };
  return (
    <Group className={styles.hero}>
      <div className={styles.hero_image_section}>
        <Image src={props.imageSrc} style={props.imageStyle} />
      </div>
      <Stack className={styles.hero_text_section} gap="40px">
        <Text>{props.headingText}</Text>
        <Text>{props.bodyText}</Text>
        {hasCTA && (
          <Haptic>
            <Anchor {...anchorProps}>{props.ctaText}</Anchor>
          </Haptic>
        )}
      </Stack>
    </Group>
  );
};

export default Hero;
