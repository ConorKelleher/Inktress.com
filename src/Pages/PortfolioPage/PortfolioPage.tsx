import { capitalize } from "localboast/utils";
import usePageTitle from "localboast/hooks/usePageTitle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageWrapper from "Pages/components/PageWrapper";
import getCopy from "constants/localisation";
import PageHeader from "Pages/components/PageHeader";
import { Images } from "constants/Images";
import { Anchor, Box, CloseButton, Group, Modal, Stack } from "@mantine/core";
import Masonry from "components/Masonry";
import PortfolioItems from "constants/PortfolioItems";
import { CSSProperties, useCallback, useMemo } from "react";
import { useMediaQuery } from "@mantine/hooks";
import SlowImage from "components/SlowImage";
import { Haptic } from "localboast/components/Haptic";
import { useUpdatingRef } from "localboast/hooks/useUpdatingRef";
import { COLOR_PALETTES } from "theme";
import styles from "./styles.module.sass";
import FancyTitle from "components/FancyTitle";
import ArrowLink from "components/ArrowLink";
import Paths from "Paths";
import { PortfolioImageKeys, PortfolioImageKey } from "constants/PortfolioImages";
import useDelayedValue from "localboast/hooks/useDelayedValue";
import { useSize } from "localboast";

export const Pages = ["all", "design", "illustration"] as const;
export type PortfolioPage = (typeof Pages)[number];
type PortfolioPageParams = Partial<{ page: PortfolioPage; id: keyof typeof PortfolioImageKeys }>;

const usePortfolioQueryParams = (): PortfolioPageParams => {
  const { search } = useLocation();
  const paramsStrings = search.replace("?", "").split("&");
  const params: Record<string, string> = {};
  paramsStrings.forEach((param) => {
    const [key, value] = param.split("=");
    params[key] = decodeURIComponent(value);
  });
  return params as PortfolioPageParams;
};

const getSearchWithoutImageId = (search: string) => search.replace(/&?id=[^&]+/, "").replace(/^&/, "?");

const PortfolioPage = () => {
  const { page: currentPage = "all", id: focusedImageId } = usePortfolioQueryParams();
  const navigate = useNavigate();
  const locationRef = useUpdatingRef(useLocation());
  const showingAll = currentPage === "all" || !Pages.includes(currentPage);

  usePageTitle(
    `${getCopy("portfolioTitle")}${showingAll ? "" : ` - ${capitalize(currentPage)}`}${
      focusedImageId ? ` - ${focusedImageId}` : ""
    }`
  );
  const imageIds = useMemo(
    () =>
      (Object.keys(PortfolioItems) as PortfolioImageKey[]).filter(
        (imageId) => showingAll || currentPage === PortfolioItems[imageId]!.page
      ),
    [showingAll, currentPage]
  );
  const setFocusedImage = useCallback(
    (imageId: PortfolioImageKey) => {
      let updatedSearch = getSearchWithoutImageId(locationRef.current.search);
      const encodedImageId = encodeURIComponent(imageId);
      updatedSearch = updatedSearch ? `${updatedSearch}&id=${encodedImageId}` : `?id=${encodedImageId}`;
      navigate({
        ...locationRef.current,
        search: updatedSearch,
      });
    },
    [navigate, locationRef]
  );
  const clearFocusedImage = useCallback(() => {
    navigate({
      ...locationRef.current,
      search: getSearchWithoutImageId(locationRef.current.search),
    });
  }, [navigate, locationRef]);
  const isSmallScreen = useMediaQuery("(max-width: 60em)");
  const focusedImageConfig = focusedImageId && PortfolioItems[focusedImageId];
  // Delayed value updates immediately if new truthy value is provided. Used to persist value for modal after being cleared
  const [delayedFocusedImageId] = useDelayedValue(focusedImageId, { delay: 1000, immediateIf: (value) => !!value });
  const { setRef: setImageSectionRef, size: imageSectionSize } = useSize()
  const imageWrapperStyle = useMemo(() => {
    const style: CSSProperties = {}
    if (focusedImageConfig?.width && focusedImageConfig?.height && imageSectionSize?.height && imageSectionSize?.width) {
      const focusedImageAspectRatio =
      focusedImageConfig.width / focusedImageConfig.height
      style.aspectRatio = focusedImageAspectRatio
      const imageSectionAspectRatio = imageSectionSize.width / imageSectionSize.height
      const imageScalingHorizontally = focusedImageAspectRatio > imageSectionAspectRatio
      if (imageScalingHorizontally) {
        style.width = focusedImageConfig.width
      } else {
        style.height = focusedImageConfig.height
      }
    }
    return style
  }, [imageSectionSize?.height, imageSectionSize?.width, focusedImageConfig?.height, focusedImageConfig?.width])

  return (
    <PageWrapper>
      <PageHeader imageId="PortfolioHeader" />
      <Modal
        className={styles.modal}
        opened={!!focusedImageId}
        onClose={clearFocusedImage}
        overlayProps={{
          backgroundOpacity: 0.8,
          color: COLOR_PALETTES.dark[2],
          blur: 2,
        }}
        size="100%"
        withCloseButton={false}
        yOffset="10dvh"
      >
        <Group h="100%" className={styles.modalContentGrid} gap="xs">
          <Box
            w="0"
            miw="100%"
            h="0"
            mih="100%"
            className={styles.imageSection}
            ref={(ref) => {
              if(ref) setImageSectionRef(ref)
            }}
          >
            <Box
              className={styles.imageWrapper}
              style={imageWrapperStyle}
            >
              {
                !!delayedFocusedImageId && (
                  <SlowImage
                    imageId={delayedFocusedImageId}
                    quality="gradual"
                    className={styles.slowImage}
                  />
                )
              }
              <Box className={styles.closeButtonWrapper}>
                <Haptic>
                  <CloseButton aria-label="Close Modal" radius="50%" onClick={clearFocusedImage} />
                </Haptic>
              </Box>
            </Box>
          </Box>
          <Stack w="100%" gap="xl">
            <FancyTitle>{focusedImageConfig?.name}</FancyTitle>
            <Group w="100%" justify="center">
              <ArrowLink
                className={styles.modalLink}
                upcase={false}
                ctaTo={`/${Paths.Services}`}
                ctaText={getCopy("portfolioModalServicesCTA")}
              />
              <ArrowLink
                className={styles.modalLink}
                upcase={false}
                ctaTo={`/${Paths.Contact}`}
                ctaText={getCopy("portfolioModalRequestPrintCTA")}
              />
            </Group>
          </Stack>
        </Group>
      </Modal>
      <Group wrap="nowrap" w="100%" justify="center" p="xl" gap={isSmallScreen ? "md" : "xl"}>
        {Pages.map((page) => {
          const isActivePage = page === currentPage || (page === "all" && showingAll);
          return (
            <Anchor
              key={`${page}_tab`}
              aria-label={`Portfolio tab - ${page}`}
              fz="xl"
              c="dark.7"
              fw={isActivePage ? "700" : "normal"}
              component={Link}
              to={page === "all" ? "" : `?page=${page}`}
              underline={isActivePage ? "always" : "hover"}
            >
              {page.toUpperCase()}
            </Anchor>
          );
        })}
      </Group>
      <Masonry imageIds={imageIds}>
        {({ key, ...imageProps }) => {
          const { blurHash } = Images[imageProps.imageId];
          return (
            <Haptic
              key={key}
              component="button"
              focusScaleMultiplier={0.25}
              clickScaleMultiplier={0.2}
              className={styles.masonryImage}
              onClick={() => setFocusedImage(imageProps.imageId as PortfolioImageKey)}
            >
              <SlowImage
                {...imageProps}
                quality="thumbnail"
                imageStyle={{
                  ...imageProps.imageStyle,
                  // Bit unpleasant. SlowImage auto-derives height if we're not using the blurhash layer
                  // So if we have blurhash, we know the height and it works here. If not, we can't let it be positioned absolutely
                  position: blurHash ? undefined : "unset",
                }}
              />
            </Haptic>
          );
        }}
      </Masonry>
    </PageWrapper>
  );
};

export default PortfolioPage;
