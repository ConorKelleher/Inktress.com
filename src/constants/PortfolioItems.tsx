import { PortfolioPage } from "Pages/PortfolioPage/PortfolioPage";
import { ImageKey, ImageKeys } from "./Images";

type SpecificPortfolioPage = Exclude<PortfolioPage, "all">;
export type PortfolioItem = {
  imageId: ImageKey;
  page: SpecificPortfolioPage;
};
const PortfolioItems: PortfolioItem[] = [
  {
    imageId: ImageKeys.ArclabsBranding,
    page: "illustration",
  },
  {
    imageId: ImageKeys.ArclabsLogo,
    page: "design",
  },
  {
    imageId: ImageKeys.Alice,
    page: "illustration",
  },
  {
    imageId: ImageKeys.BusinessCardsDesign,
    page: "design",
  },
  {
    imageId: ImageKeys.Comic,
    page: "illustration",
  },
  {
    imageId: ImageKeys.InkantressSocials,
    page: "design",
  },
  {
    imageId: ImageKeys.FutureHomesScene,
    page: "illustration",
  },
  {
    imageId: ImageKeys.SaiLogo,
    page: "design",
  },
  {
    imageId: ImageKeys.ArclabsBranding,
    page: "illustration",
  },
  {
    imageId: ImageKeys.ArclabsLogo,
    page: "design",
  },
  {
    imageId: ImageKeys.Alice,
    page: "illustration",
  },
  {
    imageId: ImageKeys.BusinessCardsDesign,
    page: "design",
  },
  {
    imageId: ImageKeys.Comic,
    page: "illustration",
  },
  {
    imageId: ImageKeys.InkantressSocials,
    page: "design",
  },
  {
    imageId: ImageKeys.FutureHomesScene,
    page: "illustration",
  },
  {
    imageId: ImageKeys.SaiLogo,
    page: "design",
  },
  {
    imageId: ImageKeys.ArclabsBranding,
    page: "illustration",
  },
  {
    imageId: ImageKeys.ArclabsLogo,
    page: "design",
  },
  {
    imageId: ImageKeys.Alice,
    page: "illustration",
  },
  {
    imageId: ImageKeys.BusinessCardsDesign,
    page: "design",
  },
  {
    imageId: ImageKeys.Comic,
    page: "illustration",
  },
  {
    imageId: ImageKeys.InkantressSocials,
    page: "design",
  },
  {
    imageId: ImageKeys.FutureHomesScene,
    page: "illustration",
  },
  {
    imageId: ImageKeys.SaiLogo,
    page: "design",
  },
];

export default PortfolioItems;
