import { Anchor, Box, Group } from "@mantine/core";
import InkantressLogoAnim from "src/assets/images/logos/logo_anim.mp4?url";
import styles from "./styles.module.sass";
import { Link } from "react-router-dom";
import Paths from "Paths";
import { cx, Haptic, useAnimationFrames } from "localboast";
import { Images } from "constants/Images";
import { useCallback, useEffect, useRef, useState } from "react";

type VideoDirection = "forwards" | "backwards";
interface ReversibleVideoProps
  extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>,
    Pick<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "src" | "type"> {
  direction?: VideoDirection;
  // clip seconds off the start of the video
  startOffset?: number;
  // clip seconds off the end of the video
  endOffset?: number;
}

const ReversibleVideo = ({ startOffset, endOffset, src, type, direction, ...videoProps }: ReversibleVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>();

  const { start: startAnimation, stop } = useAnimationFrames()

  useEffect(() => {
    if (!videoRef.current) {
      return
    }
    const { currentTime, duration } = videoRef.current
    const minTime = startOffset || 0
    const maxTime = endOffset ? Math.max(0, duration - endOffset) : duration
    const shouldPlay = (direction === "forwards" && currentTime < maxTime) || (direction === "backwards" && currentTime > minTime)
    const remainingTime = shouldPlay ? (direction === "forwards" ? maxTime - currentTime : currentTime - minTime) : 0
    if (shouldPlay) {
      startAnimation((progress) => {
        if (!videoRef.current) {
          return stop()
        }
        const deltaTime = progress * remainingTime
        const newTime = direction === "forwards" ? currentTime + deltaTime : currentTime - deltaTime
        videoRef.current.currentTime = Math.max(Math.min(newTime, maxTime), minTime)
      }, remainingTime * 1000)
    }
    return stop
  }, [direction, startAnimation, stop, startOffset, endOffset])

  return (
    <video
      {...videoProps}
      ref={(ref) => {
        if (ref) {
          videoRef.current = ref;
        }
      }}
    >
      <source src={src} type={type} />
    </video>
  );
};

const HomeIcon = () => {
  const [showingVideo, setShowingVideo] = useState(false);

  const onFocusIcon = useCallback(() => {
    setShowingVideo((oldShowingVideo) => {
      return !oldShowingVideo;
    });
  }, []);

  return (
    <Group wrap="nowrap" className={styles.logoContainer}>
      <Anchor
        component={Link}
        to={Paths.Home}
        className={styles.logoButton}
        onMouseEnter={onFocusIcon}
        onFocus={onFocusIcon}
      >
        <Haptic focusScaleMultiplier={0.5} className={styles.logo} aria-label="Back to homepage">
          <img alt="Website logo image" src={Images.RosieDevaneyLogo.imageURL} className={styles.logoImage} />
          <Box className={cx(styles.logoVideoContainer, { [styles.logoVideoContainerReveal]: showingVideo })}>
            <ReversibleVideo
              startOffset={0}
              endOffset={2}
              controls={false}
              disablePictureInPicture
              direction={showingVideo ? "forwards" : "backwards"}
              src={InkantressLogoAnim}
              type="video/mp4"
              className={styles.logoVideo}
            />
          </Box>
        </Haptic>
      </Anchor>
    </Group>
  );
};

export default HomeIcon;
