import { Group } from "@mantine/core";
import SlowImage, { SlowImageProps } from "components/SlowImage";
import { useState } from "react";
import styles from "./styles.module.sass";
import { cx, Haptic } from "localboast";

export interface AlbumProps extends Omit<SlowImageProps, "imageId"> {
  imageIds: SlowImageProps["imageId"][];
  // Optional className passed to the wrapping album tag
  className?: string;
  // Optional className passed to each SlowImage tag
  imageClassName?: string;
}

export const Album = ({ imageIds, className, imageClassName, ...slowImageProps }: AlbumProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const onChangeImageIndex = (chosenIndex: number) => {
    let newIndex = 0;
    if (chosenIndex >= 0 && imageIds.length > chosenIndex) {
      newIndex = chosenIndex;
    }
    setImageIndex(newIndex);
  };

  return (
    <div className={cx(styles.album, className)}>
      {imageIds.map((imageId, index) => (
        <SlowImage
          loading={index === imageIndex ? "eager" : "lazy"}
          className={cx(styles.image, imageClassName)}
          style={{ position: "absolute", left: `${100 * (index - imageIndex)}%` }}
          key={`album_image_${imageId}_${index}`}
          imageId={imageId}
          {...slowImageProps}
        />
      ))}
      {imageIds.length > 1 && (
        <Group gap="sm" className={styles.pagination}>
          {imageIds.map((imageId, index) => (
            <Haptic key={`album_page_${imageId}_${index}`}>
              <button
                className={cx({ [styles.active]: imageIndex === index })}
                onClick={() => onChangeImageIndex(index)}
              />
            </Haptic>
          ))}
        </Group>
      )}
    </div>
  );
};

export default Album;
