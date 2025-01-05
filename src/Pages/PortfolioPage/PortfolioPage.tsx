import { capitalize } from "localboast/utils";
import usePageTitle from "localboast/hooks/usePageTitle";
import { Link, useLocation } from "react-router-dom";
import PageWrapper from "Pages/components/PageWrapper";
import getCopy from "constants/localisation";
import PageHeader from "Pages/components/PageHeader";
import { ImageKeys } from "constants/Images";
import { Anchor, Group } from "@mantine/core";
import Masonry from "components/Masonry";
import PortfolioItems from "constants/PortfolioItems";
import { useMemo } from "react";
import { useMediaQuery } from "@mantine/hooks";
import SlowImage from "components/SlowImage";
import { Haptic } from "localboast/components/Haptic";
import styles from "./styles.module.sass";

export const Pages = ["all", "design", "illustration"] as const;
export type PortfolioPage = (typeof Pages)[number];
type PortfolioPageParams = { page: PortfolioPage; id: keyof typeof ImageKeys };

const usePortfolioQueryParams = (): PortfolioPageParams => {
  const { search } = useLocation();
  const paramsStrings = search.replace("?", "").split("&");
  const params: Record<string, string> = {};
  paramsStrings.forEach((param) => {
    const [key, value] = param.split("=");
    params[key] = value;
  });
  return params as PortfolioPageParams;
};

const PortfolioPage = () => {
  const { page: currentPage = "all", id } = usePortfolioQueryParams();
  usePageTitle(
    `${getCopy("portfolioTitle")}${currentPage === "all" ? "" : ` - ${capitalize(currentPage)}`}${id ? ` - ${id}` : ""}`
  );
  const imageIds = useMemo(
    () =>
      PortfolioItems.filter(({ page }) => currentPage === "all" || currentPage === page).map(({ imageId }) => imageId),
    [currentPage]
  );
  const isSmallScreen = useMediaQuery("(max-width: 60em)");

  return (
    <PageWrapper>
      <PageHeader imageId="PortfolioHeader" />
      <Group wrap="nowrap" w="100%" justify="center" p="xl" gap={isSmallScreen ? "md" : "xl"}>
        {Pages.map((page) => {
          const isActivePage = page === currentPage;
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
        {(imageProps) => (
          <Haptic
            component="button"
            focusScaleMultiplier={0.25}
            clickScaleMultiplier={0.2}
            className={styles.masonryImage}
          >
            <SlowImage {...imageProps} />
          </Haptic>
        )}
      </Masonry>
    </PageWrapper>
  );
};

export default PortfolioPage;
