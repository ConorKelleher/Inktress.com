import { Image, ImageProps } from "@mantine/core";
import { decode as decodeBlurHash } from "blurhash";
import { Images } from "constants/Images";
import { cx, useImageLoader, useUpdatingRef } from "localboast";
import { CSSProperties, useLayoutEffect, useRef } from "react";
import styles from "./styles.module.sass";

export interface SlowImageProps extends Omit<ImageProps, "src"> {
  imageId: keyof Images;
  blurQuality?: number;
  imageContainerClassName?: string;
}
const SlowImage = ({ imageId, blurQuality = 32, imageContainerClassName, ...imageProps }: SlowImageProps) => {
  const { imageURL, blurHash: imageHash, height: imageHeight, width: imageWidth } = Images[imageId];
  const imageStyleRef = useUpdatingRef(imageProps.style);
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
      className={cx(styles.slow_image_container, imageContainerClassName)}
    >
      {shouldShowFullImage && (
        <Image
          mah="100%"
          maw="100%"
          src={imageURL}
          {...imageProps}
          className={cx(styles.slow_image, imageProps.className)}
          style={{
            // if image cached, speed up blur fade
            // animation: wasLoadedOnFirstRender ? "none" : undefined,
            animationDuration: wasLoadedOnFirstRender ? "0.1s" : undefined,
            ...imageProps.style,
          }}
        />
      )}
    </div>
  );
};

export default SlowImage;
