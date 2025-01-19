// Logos
import RosieDevaneyLogo from "src/assets/images/logos/rosie_devaney_logo.png";
import InkantressLogo from "src/assets/images/logos/inkantress_logo.jpg";
// import InkantressLogo from "src/assets/images/logos/inkantress_logo_v2.png";
// import InkantressLogoGif from "src/assets/images/logos/logo_anim.gif";
import InstagramLogo from "src/assets/images/logos/insta.png";
import TikTokLogo from "src/assets/images/logos/tiktok.png";
import LinkedInLogo from "src/assets/images/logos/linkedin.png";
import BehanceLogo from "src/assets/images/logos/behance.png";

// Heroes
import ArtDesignHero from "assets/images/heroes/art_design_hero.png";
import PortfolioHero from "assets/images/heroes/portfolio_hero.jpeg";

// Page Headers
import AboutHeader from "assets/images/headers/about_header.jpg";
import ContactHeader from "assets/images/headers/contact_header.jpg";
import PortfolioHeader from "assets/images/headers/portfolio_header.jpg";
import ServicesHeader from "assets/images/headers/services_header.jpeg";

import ServiceImages, { ServiceImageKeys } from "./ServiceImages";
import PortfolioImages, { PortfolioImageKeys } from "./PortfolioImages";

export type Image = {
  imageURL: string;
  thumbnailURL?: string;
  blurHash?: string;
  height?: number;
  width?: number;
};

export const ImageKeys = {
  AboutHeader: "AboutHeader",
  ArtDesignHero: "ArtDesignHero",
  ContactHeader: "ContactHeader",
  PortfolioHeader: "PortfolioHeader",
  PortfolioHero: "PortfolioHero",
  ServicesHeader: "ServicesHeader",
  InkantressLogo: "InkantressLogo",
  RosieDevaneyLogo: "RosieDevaneyLogo",
  // InkantressLogoGif: "InkantressLogoGif",
  InstagramLogo: "InstagramLogo",
  TikTokLogo: "TikTokLogo",
  LinkedInLogo: "LinkedInLogo",
  BehanceLogo: "BehanceLogo",
  ...ServiceImageKeys,
  ...PortfolioImageKeys,
} as const;

export type ImageKey = keyof typeof ImageKeys;

export const Images: Record<keyof typeof ImageKeys, Image> = {
  AboutHeader: {
    imageURL: AboutHeader,
    blurHash:
      "|OLgCV0frq%MbcM|%2xsxGVsV@t7S1IoM|ayxa%L~V%MM|aextt7RjWCNGxtWARQogt7aef6ozWBr@%2ozWAn%s;ofNFNG%Ms:WAkCofe.ayWXRjniaeofa#RjV@Rjofozxbt6jsayofofogWBRjMyRjjZozj[M{RjkDoz",
    height: 932,
    width: 3712,
  },
  ArtDesignHero: {
    imageURL: ArtDesignHero,
    blurHash:
      "|HJaG=*z0xcqOSkVRjkpoyM,xItQ0KNaNHf5a#Rk{l^*R+J-J%t7IoIoxt-UxbNGx@%2f,xZE1ELaiIBxto~IBkCR*xuM_xsxGWC%2n#o2s.bvx[t6Rjxaw0%2ofNGW=W;t7W;njWCSLM|X8niWBM{t7VtNGIVoz%2M|WB",
    height: 1859,
    width: 1920,
  },
  ContactHeader: {
    imageURL: ContactHeader,
    blurHash:
      "|ZL3cU~WIoRPt7t7RQxuRjRjoLxuM{WBt7V@kCWBs:ofj[WVWBWBt7RjWBaeofaffkjtWBofjZayNGafays:ayj[ayoLofayoLayj[f6fQa|jtfkofofayWVayayj[WBfkofjtj[ayayjtayj[ayWBWCj[j[fQfQayj[a|",
    height: 932,
    width: 3712,
  },
  InkantressLogo: {
    imageURL: InkantressLogo,
  },
  RosieDevaneyLogo: {
    imageURL: RosieDevaneyLogo,
  },
  // InkantressLogoGif: {
  //   imageURL: InkantressLogoGif,
  // },
  InstagramLogo: { imageURL: InstagramLogo },
  TikTokLogo: { imageURL: TikTokLogo },
  LinkedInLogo: { imageURL: LinkedInLogo },
  BehanceLogo: { imageURL: BehanceLogo },
  PortfolioHero: {
    imageURL: PortfolioHero,
    blurHash:
      "|EGkwX9F%y$%~C9ZXOayxI^%E5xtbwW.NLVsWBNG?aIp=|s:Oqr^%3WUE1}[xvS0-;i_MyNZWVw|xaR.V^IVR.V@R-WBoINFxu%2%2OXt6%2R*R%nTS$I:e=aLt6NZjbxHxvM{XSRQsqW.X8ofslbXafxDazkCt7Rkbaof",
    height: 1589,
    width: 2000,
  },
  PortfolioHeader: {
    imageURL: PortfolioHeader,
    blurHash:
      "|CKwFL}]00~W[]~W^7rrEL~UnU?H^*oh^*t8oMjXNFEM9tRiS%s*W=kWRjtRt6ozNHR%I;R*WBofIqxa%Mxas-spxGn%a#nOs9RPRPWBM|WBj[ae%1IpNFWAR+oJR*R+oe-pagxut7WExta#o2s:ozWBxaWVM|WBRkjZof",
    height: 932,
    width: 3712,
  },
  ServicesHeader: {
    imageURL: ServicesHeader,
    blurHash:
      "|SJZ[5}@H=H?,[o0JR-WtRwds.t7IofkxankX7X7xuM{xaWBofSgWVNGxae.V@t7bHogs:RjWBRj%2RjxaV@RjjZj]tRW=ofo0aes:ayR*W;WWj[xaWBfPjsoeoeV@ofWBn$jZjuj]WWofayaxj@j[kCs:jFRkayWWofof",
    height: 932,
    width: 3712,
  },
  ...ServiceImages,
  ...PortfolioImages,
};
export type Images = typeof Images;
