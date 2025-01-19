import { CSSProperties } from "react";
import { ImageKeys } from "./Images";
import BookCoverDescription from "assets/text/services_descriptions/book_cover.txt?raw";
import LogoDesignDescription from "assets/text/services_descriptions/logo_design.txt?raw";
import AlbumCoverDescription from "assets/text/services_descriptions/album_cover.txt?raw";
import BrandingDescription from "assets/text/services_descriptions/branding.txt?raw";
import IllustrationDescription from "assets/text/services_descriptions/illustration.txt?raw";
import DesignDescription from "assets/text/services_descriptions/design.txt?raw";
import PostersDescription from "assets/text/services_descriptions/posters.txt?raw";
import SocialsDescription from "assets/text/services_descriptions/socials.txt?raw";
import CharactersDescription from "assets/text/services_descriptions/characters.txt?raw";
import ScenesDescription from "assets/text/services_descriptions/scenes.txt?raw";
// import BusinessSuiteDescription from "assets/text/services_descriptions/business_suite.txt?raw";
import FlyersDescription from "assets/text/services_descriptions/flyers.txt?raw";

type Service = {
  title: string;
  thumbImageId: keyof typeof ImageKeys;
  headerImageId: keyof typeof ImageKeys;
  headerImageStyle?: CSSProperties;
  showcaseImageIds: (keyof typeof ImageKeys)[];
  showcaseText: string;
};

const Services = {
  book_cover: {
    title: "Book Cover",
    thumbImageId: ImageKeys.AliceWonderlandBook,
    headerImageId: ImageKeys.BookCoverHeader,
    headerImageStyle: { objectViewBox: "inset(0% 2% 0% 0%)", objectPosition: "right" },
    showcaseText: BookCoverDescription,
    showcaseImageIds: [
      ImageKeys.AliceWonderlandBook,
      ImageKeys.DeadlyEducationBook,
      ImageKeys.EarlyRiserBook,
      ImageKeys.HitchhikerBook,
      ImageKeys.ImprobableFuturesBook,
      ImageKeys.MonstrousRegimentBook,
      ImageKeys.PridePrejudiceBook,
      ImageKeys.UprootedBook,
      ImageKeys.ZombiesBook,
    ],
  },
  logo_design: {
    title: "Logo Design",
    thumbImageId: ImageKeys.BirdBooksLogo,
    headerImageId: ImageKeys.LogoDesignHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: LogoDesignDescription,
    showcaseImageIds: [
      ImageKeys.BirdBooksLogo,
      ImageKeys.GraveGirlsLogo,
      ImageKeys.RoseNCrownLogo,
      ImageKeys.SaiLogo,
      ImageKeys.RemedeaseLogo,
      ImageKeys.AmandaWebsterLogo,
      ImageKeys.LocalboastLogo,
      ImageKeys.ArclabsLogo,
      ImageKeys.BillBarberLogo,
      ImageKeys.InkantressMotionLogo,
    ],
  },
  album_cover: {
    title: "Album Cover",
    thumbImageId: ImageKeys.LemonsAlbum,
    headerImageId: ImageKeys.AlbumCoverHeader,
    showcaseText: AlbumCoverDescription,
    showcaseImageIds: [
      ImageKeys.LemonsAlbum,
      ImageKeys.WonderAlbum,
      ImageKeys.StolenRemainsAlbum,
      ImageKeys.StayAlbum,
      ImageKeys.OverwhelmedAlbum,
    ],
  },
  branding: {
    title: "Visual Identity",
    thumbImageId: ImageKeys.ArclabsBranding,
    headerImageId: ImageKeys.BrandingHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: BrandingDescription,
    showcaseImageIds: [
      ImageKeys.BirdBooksBranding,
      ImageKeys.ArclabsBranding,
      ImageKeys.LocalboastBranding,
      ImageKeys.SaiBranding,
      ImageKeys.KaliBranding,
      ImageKeys.AmandaWebsterBranding,
      ImageKeys.HiveBranding,
      ImageKeys.GraveGirlsBranding,
    ],
  },
  posters: {
    title: "Posters",
    thumbImageId: ImageKeys.DragonPoster,
    headerImageId: ImageKeys.PostersHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: PostersDescription,
    showcaseImageIds: [
      ImageKeys.DragonPoster,
      ImageKeys.CreateFestPoster,
      ImageKeys.CoffeePoster,
      ImageKeys.PlantPoster,
      ImageKeys.AstronomyPoster,
    ],
  },
  socials: {
    title: "Socials",
    thumbImageId: ImageKeys.CoffeeFestSocials,
    headerImageId: ImageKeys.SocialsHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: SocialsDescription,
    showcaseImageIds: [
      ImageKeys.CoffeeFestSocials,
      ImageKeys.BirdBooksSocials,
      ImageKeys.ThriftGiftSocials,
      ImageKeys.InkantressSocials,
      ImageKeys.CopperHollowSocials,
      ImageKeys.GraveGirlsSocials,
      ImageKeys.BushyMarketSocials,
    ],
  },
  characters: {
    title: "Characters",
    thumbImageId: ImageKeys.Clive,
    headerImageId: ImageKeys.CharactersHeader,
    headerImageStyle: { objectPosition: "right" },
    showcaseText: CharactersDescription,
    showcaseImageIds: [
      ImageKeys.Clive,
      ImageKeys.Hargle,
      ImageKeys.Lilith,
      ImageKeys.Alice,
      ImageKeys.Trio,
      ImageKeys.Comic,
      ImageKeys.Face,
      ImageKeys.FantasyCreatures,
      ImageKeys.Jen,
      ImageKeys.Witch,
      ImageKeys.Ranger,
    ],
  },
  scenes: {
    title: "Scenes",
    thumbImageId: ImageKeys.FutureHomesScene,
    headerImageId: ImageKeys.ScenesHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: ScenesDescription,
    showcaseImageIds: [
      ImageKeys.FutureHomesScene,
      ImageKeys.LobbyScene,
      ImageKeys.WaystationScene,
      ImageKeys.BusStopScene,
      ImageKeys.AirTempleScene,
      ImageKeys.BayScene,
      ImageKeys.DetectivesAbodeScene,
      ImageKeys.MillScene,
      ImageKeys.CastleScene,
      ImageKeys.PlayAlongScene,
      ImageKeys.MarsScene,
    ],
  },
  flyers: {
    title: "Flyers",
    thumbImageId: ImageKeys.PotteryWorkshopFlyer,
    headerImageId: ImageKeys.FlyersHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: FlyersDescription,
    showcaseImageIds: [
      ImageKeys.PotteryWorkshopFlyer,
      ImageKeys.AmandaWebsterFlyer,
      ImageKeys.FlorasFlyer,
      ImageKeys.PlantSaleFlyer,
      ImageKeys.ThriftAndGiftFlyer,
      ImageKeys.XmasBashFlyer,
    ],
  },
  illustration: {
    title: "Illustration Services",
    thumbImageId: ImageKeys.WormIllustration,
    headerImageId: ImageKeys.IllustrationServicesHeader,
    headerImageStyle: { objectPosition: "right" },
    showcaseText: IllustrationDescription,
    showcaseImageIds: [
      ImageKeys.WormIllustration,
      ImageKeys.RadioIllustration,
      ImageKeys.FantasyCreaturesIllustration,
      ImageKeys.PinkMotionIllustration,
      ImageKeys.TreeIllustration,
      ImageKeys.CatIllustration,
      ImageKeys.DoggyIllustration,
      ImageKeys.FireIllustration,
      ImageKeys.BookmarksIllustration,
      ImageKeys.RecycleIllustration,
      ImageKeys.FishiesIllustration,
      ImageKeys.WaterIllustration,
    ],
  },
  design: {
    title: "Design Services",
    thumbImageId: ImageKeys.BusinessCardsDesign,
    headerImageId: ImageKeys.DesignServicesHeader,
    headerImageStyle: { objectViewBox: "inset(0% 1.5% 0% 0%)", objectPosition: "right" },
    showcaseText: DesignDescription,
    showcaseImageIds: [
      ImageKeys.BusinessCardsDesign,
      ImageKeys.CandidDesign,
      ImageKeys.RemedeaseDesign,
      ImageKeys.CrocsDesign,
      ImageKeys.ThanksDesign,
      ImageKeys.TastyDesign,
      ImageKeys.GoodVibesDesign,
      ImageKeys.HDesign,
      ImageKeys.RushDesign,
    ],
  },
  // business_suite: {
  //   title: "Business Suite",
  //   thumbImageId: ImageKeys.BusinessSuiteThumb,
  //   headerImageId: ImageKeys.BusinessSuiteHeader,
  //   headerImageStyle: { objectViewBox: "inset(0% 1% 0% 0%)", objectPosition: "right" },
  //   showcaseText: BusinessSuiteDescription,
  //   showcaseImageIds: [ImageKeys.AmandaBusinessSuite],
  // },
};

export default Services as Record<keyof typeof Services, Service>;
