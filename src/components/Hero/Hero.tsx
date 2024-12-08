import { Anchor, Group, Image, Stack, Text } from "@mantine/core";
import styles from "./styles.module.sass";
import { Link } from "react-router-dom";
import { CSSProperties, useMemo, useRef } from "react";
import { Haptic, useMousePosition } from "localboast";
import SlowImage, { SlowImageProps } from "components/SlowImage/SlowImage";
import useDelayedValue from "localboast/hooks/useDelayedValue";

export interface HeroProps {
  imageSrc?: string;
  imageId?: SlowImageProps["imageId"];
  imageStyle?: CSSProperties;
  headingText: string;
  bodyText: string;
  ctaText?: string;
  ctaTo?: string;
  ctaHref?: string;
}

const CURSOR_FOLLOW_ZOOM = 25;

const Hero = (props: HeroProps) => {
  const hasCTA = !!(props.ctaText && (props.ctaTo || props.ctaHref));
  const anchorProps = {
    component: props.ctaTo ? Link : undefined,
    to: props.ctaTo || "", // only falling back to shut up ts not handling branching paths
    href: props.ctaHref,
  };
  const { x: mouseXPos, y: mouseYPos } = useMousePosition();
  const heroImageRef = useRef<HTMLDivElement | null>(null);
  const mouseXPosRatio = useMemo(() => {
    if (!heroImageRef.current) {
      return -1;
    }
    const { x: leftmostPixel, width } = heroImageRef.current.getBoundingClientRect();
    const rightmostPixel = leftmostPixel + width;
    if (mouseXPos < leftmostPixel) {
      return -1;
    } else if (mouseXPos > rightmostPixel) {
      return 1;
    }
    // mouse is between leftmost and rightmost pixel
    return (mouseXPos - leftmostPixel) / width;
  }, [mouseXPos]);
  const mouseYPosRatio = useMemo(() => {
    if (!heroImageRef.current) {
      return -1;
    }
    const { y: topmostPixel, height } = heroImageRef.current.getBoundingClientRect();
    const bottommostPixel = topmostPixel + height;
    if (mouseYPos < topmostPixel) {
      return -1;
    } else if (mouseYPos > bottommostPixel) {
      return 1;
    }
    // mouse is between topmost and bottommost pixel
    return (mouseYPos - topmostPixel) / height;
  }, [mouseYPos]);
  const mouseOverImage = mouseXPosRatio > 0 && mouseYPosRatio > 0 && mouseXPosRatio < 1 && mouseYPosRatio < 1;
  const [delayedMouseOverImage] = useDelayedValue(mouseOverImage, { delay: 200, immediateIf: (value) => !value });

  const imageStyle = {
    ...props.imageStyle,
    transition: `object-view-box ${delayedMouseOverImage ? "0.15s 0s" : "0.5s 0.2s"} ease`,
    objectViewBox: mouseOverImage
      ? `inset(${CURSOR_FOLLOW_ZOOM * mouseYPosRatio}% ${CURSOR_FOLLOW_ZOOM * (1 - mouseXPosRatio)}% ${
          CURSOR_FOLLOW_ZOOM * (1 - mouseYPosRatio)
        }% ${CURSOR_FOLLOW_ZOOM * mouseXPosRatio}%)`
      : "inset(3% 3% 3% 3%)",
  };
  return (
    <Group className={styles.hero}>
      <div className={styles.hero_image_section} ref={(ref) => ref && (heroImageRef.current = ref)}>
        {!!props.imageSrc && <Image src={props.imageSrc} style={imageStyle} />}
        {!!props.imageId && <SlowImage imageId={props.imageId} blurQuality={50} style={imageStyle} />}
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
