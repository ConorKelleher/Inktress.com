import SlowImage, { SlowImageProps } from "components/SlowImage"
import PlayIcon from "./play-button.svg?react"
import { ImageKey, Images } from "constants/Images"
import { useEffect, useState, VideoHTMLAttributes } from "react"
import useVideoLoader from "localboast/hooks/useVideoLoader"
import styles from "./styles.module.sass"
import type { HapticStatus } from "localboast/components/Haptic"
import { cx } from "localboast/utils"

export interface SlowVideoProps extends HapticStatus, Omit<SlowImageProps, "imageId"> {
  videoId: ImageKey
}

const SlowVideo = ({ videoId, focused, hovered, ...imageProps }: SlowVideoProps) => {
  const { imageURL: videoURL } = Images[videoId]
  const [shouldLoad, setShouldLoad] = useState(false)
  const previewOnFocus = imageProps.quality === "thumbnail"
  const [shouldPlay, setShouldPlay] = useState(!previewOnFocus)
  const focusedOrHovered = focused || hovered
  const { canPlay } = useVideoLoader({
    src: videoURL,
    load: shouldLoad,
  });
  const videoProps: VideoHTMLAttributes<HTMLVideoElement> = previewOnFocus ? {
    autoPlay: true,
    controls: false,
    disablePictureInPicture: true,
    loop: true,
    muted: true,
  } : {
    autoPlay: true,
    controls: true,
    disablePictureInPicture: false,
    muted: false,
    loop: false,
  }

  useEffect(() => {
    if (focusedOrHovered) {
      setShouldLoad(true)
    }
  }, [focusedOrHovered])

  useEffect(() => {
    if (previewOnFocus) {
      if (canPlay && focusedOrHovered) {
        setShouldPlay(true)
      } else {
        setShouldPlay(false)
      }
    } else {
      setShouldPlay(true)
    }
  }, [canPlay, focusedOrHovered, previewOnFocus])

  return (
    <>
      <SlowImage {...imageProps} imageId={videoId} className={styles.thumbnail} />
      {shouldPlay && <video {...videoProps} src={videoURL} className={styles.videoEl} />}
      {previewOnFocus && <PlayIcon height="25%" width="25%" className={cx(styles.overPlay, { [styles.overPlayPlaying]: shouldPlay })} />}
    </>
  )
}

export default SlowVideo
