import { Center, Stack } from "@mantine/core";
import Hero from "components/Hero";
import Scroller from "components/Scroller";
import getCopy from "constants/localisation";
import usePageTitle from "localboast/hooks/usePageTitle";
import Paths from "Paths";
import ArtDesignHeaderImage from "src/assets/art_design_header.png";
import PortfolioHeaderImage from "src/assets/portfolio_header.jpeg";

const SERVICE_CARDS = [
  {
    text: "Book Cover",
    path: Paths.BookCoverServices,
  },
  {
    text: "Logo Design",
    path: Paths.LogoDesignServices,
  },
  {
    text: "Album Cover",
    path: Paths.AlbumCoverServices,
  },
  {
    text: "Branding",
    path: Paths.BrandingServices,
  },
  {
    text: "Illustration Services",
    path: Paths.IllustrationServices,
  },
  {
    text: "Design Services",
    path: Paths.DesignServices,
  },
  {
    text: "Posters",
    path: Paths.PostersServices,
  },
  {
    text: "Socials",
    path: Paths.SocialsServices,
  },
  {
    text: "Characters",
    path: Paths.CharactersServices,
  },
  {
    text: "Scenes",
    path: Paths.ScenesServices,
  },
  {
    text: "Business Suite",
    path: Paths.BusinessSuiteServices,
  },
  {
    text: "Flyers",
    path: Paths.FlyersServices,
  },
];

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
        <Scroller headingText="Services" ctaTo={Paths.Services}></Scroller>
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
