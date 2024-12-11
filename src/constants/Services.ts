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
import BusinessSuiteDescription from "assets/text/services_descriptions/business_suite.txt?raw";
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
    thumbImageId: ImageKeys.BookCoverThumb,
    headerImageId: ImageKeys.BookCoverHeader,
    headerImageStyle: { objectViewBox: "inset(0% 2% 0% 0%)", objectPosition: "right" },
    showcaseText: BookCoverDescription,
    showcaseImageIds: [ImageKeys.UprootedCover],
  },
  logo_design: {
    title: "Logo Design",
    thumbImageId: ImageKeys.LogoDesignThumb,
    headerImageId: ImageKeys.LogoDesignHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: LogoDesignDescription,
    showcaseImageIds: [ImageKeys.AmandaLogo],
  },
  album_cover: {
    title: "Album Cover",
    thumbImageId: ImageKeys.AlbumCoverThumb,
    headerImageId: ImageKeys.AlbumCoverHeader,
    showcaseText: AlbumCoverDescription,
    showcaseImageIds: [ImageKeys.GraveGirlsAlbum],
  },
  branding: {
    title: "Branding",
    thumbImageId: ImageKeys.BrandingThumb,
    headerImageId: ImageKeys.BrandingHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: BrandingDescription,
    showcaseImageIds: [ImageKeys.GraveGirlsBranding],
  },
  illustration: {
    title: "Illustration Services",
    thumbImageId: ImageKeys.IllustrationServicesThumb,
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
    showcaseImageIds: [ImageKeys.CandidKombuchaCan],
  },
  posters: {
    title: "Posters",
    thumbImageId: ImageKeys.PostersThumb,
    headerImageId: ImageKeys.PostersHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: PostersDescription,
    showcaseImageIds: [ImageKeys.DndPoster, ImageKeys.PlantSalePoster],
  },
  socials: {
    title: "Socials",
    thumbImageId: ImageKeys.SocialsThumb,
    headerImageId: ImageKeys.SocialsHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: SocialsDescription,
    showcaseImageIds: [ImageKeys.BookCoverSocials],
  },
  characters: {
    title: "Characters",
    thumbImageId: ImageKeys.CharactersThumb,
    headerImageId: ImageKeys.CharactersHeader,
    headerImageStyle: { objectPosition: "right" },
    showcaseText: CharactersDescription,
    showcaseImageIds: [ImageKeys.Clara],
  },
  scenes: {
    title: "Scenes",
    thumbImageId: ImageKeys.ScenesThumb,
    headerImageId: ImageKeys.ScenesHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: ScenesDescription,
    showcaseImageIds: [ImageKeys.CosyGame],
  },
  business_suite: {
    title: "Business Suite",
    thumbImageId: ImageKeys.BusinessSuiteThumb,
    headerImageId: ImageKeys.BusinessSuiteHeader,
    headerImageStyle: { objectViewBox: "inset(0% 1% 0% 0%)", objectPosition: "right" },
    showcaseText: BusinessSuiteDescription,
    showcaseImageIds: [ImageKeys.AmandaBusinessSuite],
  },
  flyers: {
    title: "Flyers",
    thumbImageId: ImageKeys.FlyersThumb,
    headerImageId: ImageKeys.FlyersHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
    showcaseText: FlyersDescription,
    showcaseImageIds: [ImageKeys.AmandaFlyers],
  },
};

export default Services as Record<keyof typeof Services, Service>;
