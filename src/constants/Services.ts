import { CSSProperties } from "react";
import { ImageKeys } from "./Images";

type Service = {
  text: string;
  thumbImageId: keyof typeof ImageKeys;
  headerImageId: keyof typeof ImageKeys;
  headerImageStyle?: CSSProperties;
};

const Services = {
  book_cover: {
    text: "Book Cover",
    thumbImageId: ImageKeys.BookCoverThumb,
    headerImageId: ImageKeys.BookCoverHeader,
    headerImageStyle: { objectViewBox: "inset(0% 2% 0% 0%)", objectPosition: "right" },
  },
  logo_design: {
    text: "Logo Design",
    thumbImageId: ImageKeys.LogoDesignThumb,
    headerImageId: ImageKeys.LogoDesignHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
  },
  album_cover: {
    text: "Album Cover",
    thumbImageId: ImageKeys.AlbumCoverThumb,
    headerImageId: ImageKeys.AlbumCoverHeader,
  },
  branding: {
    text: "Branding",
    thumbImageId: ImageKeys.BrandingThumb,
    headerImageId: ImageKeys.BrandingHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
  },
  illustration: {
    text: "Illustration Services",
    thumbImageId: ImageKeys.IllustrationServicesThumb,
    headerImageId: ImageKeys.IllustrationServicesHeader,
    headerImageStyle: { objectPosition: "right" },
  },
  design: {
    text: "Design Services",
    thumbImageId: ImageKeys.DesignServicesThumb,
    headerImageId: ImageKeys.DesignServicesHeader,
    headerImageStyle: { objectViewBox: "inset(0% 1.5% 0% 0%)", objectPosition: "right" },
  },
  posters: {
    text: "Posters",
    thumbImageId: ImageKeys.PostersThumb,
    headerImageId: ImageKeys.PostersHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
  },
  socials: {
    text: "Socials",
    thumbImageId: ImageKeys.SocialsThumb,
    headerImageId: ImageKeys.SocialsHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
  },
  characters: {
    text: "Characters",
    thumbImageId: ImageKeys.CharactersThumb,
    headerImageId: ImageKeys.CharactersHeader,
    headerImageStyle: { objectPosition: "right" },
  },
  scenes: {
    text: "Scenes",
    thumbImageId: ImageKeys.ScenesThumb,
    headerImageId: ImageKeys.ScenesHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
  },
  business_suite: {
    text: "Business Suite",
    thumbImageId: ImageKeys.BusinessSuiteThumb,
    headerImageId: ImageKeys.BusinessSuiteHeader,
    headerImageStyle: { objectViewBox: "inset(0% 1% 0% 0%)", objectPosition: "right" },
  },
  flyers: {
    text: "Flyers",
    thumbImageId: ImageKeys.FlyersThumb,
    headerImageId: ImageKeys.FlyersHeader,
    headerImageStyle: { objectViewBox: "inset(0% 5% 0% 0%)", objectPosition: "right" },
  },
};

export default Services as Record<keyof typeof Services, Service>;
