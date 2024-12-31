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
  album_cover: {
    title: "Album Cover",
    thumbImageId: ImageKeys.WonderAlbum,
    headerImageId: ImageKeys.AlbumCoverHeader,
    showcaseText: AlbumCoverDescription,
    showcaseImageIds: [
      ImageKeys.WonderAlbum,
      ImageKeys.StolenRemainsAlbum,
      ImageKeys.StayAlbum,
      ImageKeys.OverwhelmedAlbum,
      ImageKeys.LemonsAlbum,
    ],
  },
  book_cover: {
    title: "Book Cover",
    thumbImageId: ImageKeys.AliceWonderlandBook,
    headerImageId: ImageKeys.BookCoverHeader,
    headerImageStyle: { objectViewBox: "inset(0% 2% 0% 0%)", objectPosition: "right" },
    showcaseText: BookCoverDescription,
    showcaseImageIds: [
      ImageKeys.AliceWonderlandBook,
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
  flyers: {
    title: "Flyers",
    thumbImageId: ImageKeys.AmandaWebsterFlyer,
    headerImageId: ImageKeys.FlyersHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: FlyersDescription,
    showcaseImageIds: [
      ImageKeys.AmandaWebsterFlyer,
      ImageKeys.FlorasFlyer,
      ImageKeys.PlantSaleFlyer,
      ImageKeys.PotteryWorkshopFlyer,
      ImageKeys.ThriftAndGiftFlyer,
      ImageKeys.XmasBashFlyer,
    ],
  },

  // The next ones still need redoing - missing assets
  illustration: {
    title: "Illustration Services",
    thumbImageId: ImageKeys.TurnMeOn,
    headerImageId: ImageKeys.IllustrationServicesHeader,
    headerImageStyle: { objectPosition: "right" },
    showcaseText: IllustrationDescription,
    showcaseImageIds: [ImageKeys.TurnMeOn],
  },
  design: {
    title: "Design Services",
    thumbImageId: ImageKeys.DesignServicesThumb,
    headerImageId: ImageKeys.DesignServicesHeader,
    headerImageStyle: { objectViewBox: "inset(0% 1.5% 0% 0%)", objectPosition: "right" },
    showcaseText: DesignDescription,
    showcaseImageIds: [ImageKeys.DesignServicesThumb],
  },
  scenes: {
    title: "Scenes",
    thumbImageId: ImageKeys.ScenesThumb,
    headerImageId: ImageKeys.ScenesHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: ScenesDescription,
    showcaseImageIds: [ImageKeys.CosyGame],
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
