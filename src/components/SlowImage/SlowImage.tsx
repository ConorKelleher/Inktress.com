import { Image, ImageProps } from "@mantine/core";
import { decode as decodeBlurHash } from "blurhash";
import { Images } from "constants/Images";
import { cx, useImageLoader, useUpdatingRef } from "localboast";
import { AriaAttributes, CSSProperties, ImgHTMLAttributes, useLayoutEffect, useRef } from "react";
import styles from "./styles.module.sass";

const QUALITY_SETTINGS = {
  // Setting to only ever load thumbnail image (if present). Never use full size
  "thumbnail": "thumbnail",
  // Setting to begin with the thumbnail image and replace with the full size when available
  "gradual": "gradual",
  // Setting to only ever load full-size image. Never use thumbnail
  "full": "full"
} as const
type QUALITY_SETTING = keyof typeof QUALITY_SETTINGS 
const LOAD_THUMBNAIL_QUALITIES: QUALITY_SETTING[] = [
  QUALITY_SETTINGS.gradual,
  QUALITY_SETTINGS.thumbnail,
]
const LOAD_FULL_QUALITIES: QUALITY_SETTING[] = [
  QUALITY_SETTINGS.gradual,
  QUALITY_SETTINGS.full,
]

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
  quality?: QUALITY_SETTING;
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
  quality = QUALITY_SETTINGS.full,
  ...imageProps
}: SlowImageProps) => {
  const { imageURL: fullImageURL, thumbnailURL, blurHash: imageHash, height: imageHeight, width: imageWidth } = Images[imageId];
  const imageAspectRatio = imageHeight && imageWidth ? `${imageWidth / imageHeight}` : undefined
  const imageStyleRef = useUpdatingRef(imageStyle);
  const renderBlur = !!(imageHash && imageHeight && imageWidth);
  const loadThumbnail = renderBlur && !!thumbnailURL && LOAD_THUMBNAIL_QUALITIES.includes(quality)
  const loadFullImage = renderBlur && (!thumbnailURL || LOAD_FULL_QUALITIES.includes(quality))
  const { loaded: loadedFull } = useImageLoader({
    src: fullImageURL,
    load: loadFullImage,
  });
  const { loaded: loadedThumb } = useImageLoader({
    src: thumbnailURL || "",
    load: loadThumbnail,
  });
  const imageURLForImgTag = (!loadThumbnail || (loadFullImage && loadedFull)) ? fullImageURL : thumbnailURL
  const imageURLToShowHasLoaded = imageURLForImgTag === fullImageURL ? loadedFull : loadedThumb
  // Check on first render if image to show was already loaded - skip blurhash if ready to show on first render 
  const loadedOnFirstRenderRef = useRef(imageURLToShowHasLoaded);
  const wasLoadedOnFirstRender = loadedOnFirstRenderRef.current;
  const imageContainerRef = useRef<HTMLElement>();
  const shouldShowImgTag = !renderBlur || imageURLToShowHasLoaded;

  useLayoutEffect(() => {
    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");
    const imageContainer = imageContainerRef.current;
    if (renderBlur && ctx && imageContainer) {
      canvas.height = blurQuality;
      canvas.width = blurQuality;
      let pixels;
      try {
        pixels = decodeBlurHash(imageHash, blurQuality, blurQuality);
      } catch (e) {
        return console.error(e);
      }

      const imageData = ctx.createImageData(blurQuality, blurQuality);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
      canvas.style.maxHeight = "100%";
      canvas.style.maxWidth = "100%";
      canvas.style.minHeight = "100%";
      // canvas.style.height = `${imageHeight}px`;
      canvas.style.width = `${imageWidth}px`;
      canvas.style.aspectRatio = imageAspectRatio!;
      Object.entries(imageStyleRef.current || ({} as CSSProperties)).forEach(([styleKey, styleValue]) => {
        // @ts-ignore
        canvas.style[styleKey] = styleValue;
      });

      imageContainer.appendChild(canvas);

      return () => {
        imageContainer.removeChild(canvas);
      };
    }
  }, [renderBlur, wasLoadedOnFirstRender, imageStyleRef, blurQuality, imageHash, imageWidth, imageHeight, imageAspectRatio]);

  return (
    <div
      ref={(ref) => {
        if (ref) imageContainerRef.current = ref;
      }}
      style={{
        ...style,
        aspectRatio: imageAspectRatio,
      }}
      className={cx(styles.slow_image_container, className)}
    >
      {shouldShowImgTag && (
        <Image
          loading="lazy"
          mah="100%"
          maw="100%"
          src={imageURLForImgTag}
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
