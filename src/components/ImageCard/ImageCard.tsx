import { Anchor } from "@mantine/core";
import { COLORS } from "theme";
import styles from "./styles.module.sass";
import SlowImage from "components/SlowImage";
import { SlowImageProps } from "components/SlowImage/SlowImage";
import FancyTitle from "components/FancyTitle";
import { Link, LinkProps } from "react-router-dom";
import { cx, Haptic } from "localboast";

interface ImageCardProps {
  imageId: SlowImageProps["imageId"];
  imageProps?: Omit<SlowImageProps, "imageId">;
  cardText: string;
  ctaTo?: string;
  ctaHref?: string;
  containerClassName?: string;
}

export interface NavigationItemProps extends LinkProps {}

const HapticLink = (hapticLinkProps: NavigationItemProps) => (
  <Haptic focusScaleMultiplier={0.25}>
    <Link {...hapticLinkProps} />
  </Haptic>
);

const ImageCard = ({ cardText, ctaTo, ctaHref, imageId, containerClassName, imageProps = {} }: ImageCardProps) => {
  const anchorProps = {
    component: ctaTo ? HapticLink : undefined,
    to: ctaTo,
    href: ctaHref,
  };
  return (
    // @ts-ignore
    <Anchor
      {...anchorProps}
      tabIndex={0}
      style={{ backgroundColor: COLORS.footer }}
      className={cx(styles.imageCard, containerClassName)}
    >
      <SlowImage
        imageId={imageId}
        style={{ objectFit: "cover", height: "unset", aspectRatio: "1 / 1" }}
        {...imageProps}
        className={styles.imageSection}
      />
      <div className={styles.textSection}>
        <FancyTitle c="dark.2" className={styles.textBlock}>
          {cardText}
        </FancyTitle>
      </div>
    </Anchor>
  );
};

export default ImageCard;
