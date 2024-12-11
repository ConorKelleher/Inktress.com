import { Image, ImageProps } from "@mantine/core";
import { decode as decodeBlurHash } from "blurhash";
import { Images } from "constants/Images";
import { cx, useImageLoader, useUpdatingRef } from "localboast";
import { AriaAttributes, CSSProperties, ImgHTMLAttributes, useLayoutEffect, useRef } from "react";
import styles from "./styles.module.sass";

export interface SlowImageProps extends Omit<ImageProps, "src">, AriaAttributes {
  imageId: keyof Images;
  blurQuality?: number;
  // Optional className passed to the wrapping container
  className?: string;
  // Optional className passed to the Mantine Image component
  imageClassName?: string;
  // Optional styles passed to the wrapping container
  style?: CSSProperties;
  // Optional styles passed to the Mantine Image component
  imageStyle?: CSSProperties;
  loading?: ImgHTMLAttributes<any>["loading"];
  alt?: ImgHTMLAttributes<any>["alt"];
}
const SlowImage = ({
  imageId,
  blurQuality = 32,
  className,
  imageClassName,
  style,
  imageStyle,
  ...imageProps
}: SlowImageProps) => {
  const { imageURL, blurHash: imageHash, height: imageHeight, width: imageWidth } = Images[imageId];
  const imageStyleRef = useUpdatingRef(imageStyle);
  const renderBlur = !!(imageHash && imageHeight && imageWidth);
  const { loaded, loading, failedToLoad } = useImageLoader({
    src: imageURL,
    load: renderBlur,
  });
  const loadedOnFirstRenderRef = useRef(loaded);
  const wasLoadedOnFirstRender = loadedOnFirstRenderRef.current;
  const imageContainerRef = useRef<HTMLElement>();
  const shouldShowFullImage = !renderBlur || (!loading && !failedToLoad);

  useLayoutEffect(() => {
    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");
    const imageContainer = imageContainerRef.current;
    if (renderBlur && ctx && imageContainer) {
      canvas.height = blurQuality;
      canvas.width = blurQuality;
      const pixels = decodeBlurHash(imageHash, blurQuality, blurQuality);

      const imageData = ctx.createImageData(blurQuality, blurQuality);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
      canvas.style.maxHeight = "100%";
      canvas.style.maxWidth = "100%";
      canvas.style.minHeight = "100%";
      // canvas.style.height = `${imageHeight}px`;
      canvas.style.width = `${imageWidth}px`;
      canvas.style.aspectRatio = `${imageWidth / imageHeight}`;
      Object.entries(imageStyleRef.current || ({} as CSSProperties)).forEach(([styleKey, styleValue]) => {
        // @ts-ignore
        canvas.style[styleKey] = styleValue;
      });

      imageContainer.appendChild(canvas);

      return () => {
        imageContainer.removeChild(canvas);
      };
    }
  }, [renderBlur, wasLoadedOnFirstRender, imageStyleRef, blurQuality, imageHash, imageWidth, imageHeight]);

  return (
    <div
      ref={(ref) => {
        if (ref) imageContainerRef.current = ref;
      }}
      style={style}
      className={cx(styles.slow_image_container, className)}
    >
      {shouldShowFullImage && (
        <Image
          loading="lazy"
          mah="100%"
          maw="100%"
          src={imageURL}
          {...imageProps}
          className={cx(styles.slow_image, imageClassName)}
          style={{
            // if image cached, speed up blur fade
            // animation: wasLoadedOnFirstRender ? "none" : undefined,
            animationDuration: wasLoadedOnFirstRender ? "0.1s" : undefined,
            ...imageStyle,
          }}
        />
      )}
    </div>
  );
};

export default SlowImage;
