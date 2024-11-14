import { Center, Stack } from "@mantine/core";
import Hero from "components/Hero";
import getCopy from "constants/localisation";
import usePageTitle from "localboast/hooks/usePageTitle";
import Paths from "Paths";
import ArtDesignHeaderImage from "src/assets/art_design_header.png";
import PortfolioHeaderImage from "src/assets/portfolio_header.jpeg";

const HomePage = () => {
  usePageTitle(getCopy("homeTitle"));

  return (
    <Center w="100%" h="100%" mah="fit-content">
      <Stack w="100%" gap={0}>
        <Hero
          imageSrc={ArtDesignHeaderImage}
          headingText={getCopy("illustrationDesignHeroHeader")}
          bodyText={getCopy("illustrationDesignHeroBody")}
          ctaText={getCopy("illustrationDesignHeroCTA")}
          ctaTo={Paths.Services}
        />
        <Hero
          // @ts-ignore
          imageStyle={{ "object-view-box": "inset(0% 45% -21% 2%)" }}
          imageSrc={PortfolioHeaderImage}
          headingText={getCopy("portfolioHeroHeader")}
          bodyText={getCopy("portfolioHeroBody")}
          ctaText={getCopy("portfolioHeroCTA")}
          ctaTo={Paths.Portfolio}
        />
      </Stack>
    </Center>
  );
};

export default HomePage;
