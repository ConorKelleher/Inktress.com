import ArtDesignHero from "assets/images/art_design_hero.png";
import AboutHeader from "assets/images/about_header.jpg";
import ContactHeader from "assets/images/contact_header.jpg";
import PortfolioHero from "assets/images/portfolio_hero.jpeg";
import PortfolioHeader from "assets/images/portfolio_header.jpg";
import ServicesHeader from "assets/images/services_header.jpeg";
import BirdBooksLogo from "assets/images/bird_books_logo.jpg";
import UprootedCover from "assets/images/uprooted_cover.jpg";
import StolenRemainsCover from "assets/images/stolen_remains_cover.png";
import BirdBooksBranding from "assets/images/bird_books_branding.jpg";
import WomanInWindowIllustration from "assets/images/woman_in_window.jpg";
import BusinessCards from "assets/images/business_cards.jpg";
import PlantSalePoster from "assets/images/plant_sale.jpg";
import SocialProducts from "assets/images/social_products.jpg";
import HobGob from "assets/images/hob_gob.jpg";
import CosyGame from "assets/images/cosy_game.jpg";
import AmandaFlyer from "assets/images/amanda_flyer.jpg";
import AmandaFlyers from "assets/images/amanda_flyers.jpg";
import CandidKombuchaCan from "assets/images/candid_kombucha_can.jpg";
import AlbumCoverHeader from "assets/images/album_cover_header.jpg";
import BookCoverHeader from "assets/images/book_cover_header.jpg";
import BrandingHeader from "assets/images/branding_header.jpg";
import BusinessSuiteHeader from "assets/images/business_suite_header.jpg";
import CharactersHeader from "assets/images/characters_header.jpg";
import DesignServicesHeader from "assets/images/design_services_header.jpg";
import LogoDesignHeader from "assets/images/logo_design_header.jpg";
import FlyersHeader from "assets/images/flyers_header.jpg";
import IllustrationServicesHeader from "assets/images/illustration_services_header.jpg";
import PostersHeader from "assets/images/posters_header.jpg";
import ScenesHeader from "assets/images/scenes_header.jpg";
import SocialsHeader from "assets/images/socials_header.jpg";
import AmandaLogo from "assets/images/amanda_logo.jpg";
import GraveGirlsAlbum from "assets/images/grave_girls_album.jpg";
import GraveGirlsBranding from "assets/images/grave_girls_branding.jpg";
import DndPoster from "assets/images/dnd_poster.jpg";
import BookCoverSocials from "assets/images/book_cover_socials.jpg";
import AmandaBusinessSuite from "assets/images/amanda_business_suite.jpg";
import TurnMeOn from "assets/images/turn_me_on.jpg";
import Clara from "assets/images/clara.jpg";

export type Image = {
  imageURL: string;
  blurHash?: string;
  height?: number;
  width?: number;
};

export const ImageKeys = {
  ArtDesignHero: "ArtDesignHero",
  AboutHeader: "AboutHeader",
  ContactHeader: "ContactHeader",
  PortfolioHero: "PortfolioHero",
  PortfolioHeader: "PortfolioHeader",
  ServicesHeader: "ServicesHeader",
  AlbumCoverHeader: "AlbumCoverHeader",
  AlbumCoverThumb: "AlbumCoverThumb",
  BookCoverHeader: "BookCoverHeader",
  BookCoverThumb: "BookCoverThumb",
  BrandingHeader: "BrandingHeader",
  BrandingThumb: "BrandingThumb",
  BusinessSuiteHeader: "BusinessSuiteHeader",
  BusinessSuiteThumb: "BusinessSuiteThumb",
  CharactersHeader: "CharactersHeader",
  CharactersThumb: "CharactersThumb",
  Clara: "Clara",
  DesignServicesHeader: "DesignServicesHeader",
  DesignServicesThumb: "DesignServicesThumb",
  LogoDesignHeader: "LogoDesignHeader",
  LogoDesignThumb: "LogoDesignThumb",
  FlyersHeader: "FlyersHeader",
  FlyersThumb: "FlyersThumb",
  IllustrationServicesHeader: "IllustrationServicesHeader",
  IllustrationServicesThumb: "IllustrationServicesThumb",
  PostersHeader: "PostersHeader",
  PostersThumb: "PostersThumb",
  ScenesHeader: "ScenesHeader",
  ScenesThumb: "ScenesThumb",
  SocialsHeader: "SocialsHeader",
  SocialsThumb: "SocialsThumb",
  AmandaFlyers: "AmandaFlyers",
  AmandaLogo: "AmandaLogo",
  GraveGirlsAlbum: "GraveGirlsAlbum",
  GraveGirlsBranding: "GraveGirlsBranding",
  DndPoster: "DndPoster",
  PlantSalePoster: "PlantSalePoster",
  BookCoverSocials: "BookCoverSocials",
  AmandaBusinessSuite: "AmandaBusinessSuite",
  TurnMeOn: "TurnMeOn",
  UprootedCover: "UprootedCover",
  CosyGame: "CosyGame",
  CandidKombuchaCan: "CandidKombuchaCan",
};

export const Images: Record<keyof typeof ImageKeys, Image> = {
  ArtDesignHero: {
    imageURL: ArtDesignHero,
    blurHash:
      "|HJaG=*z0xcqOSkVRjkpoyM,xItQ0KNaNHf5a#Rk{l^*R+J-J%t7IoIoxt-UxbNGx@%2f,xZE1ELaiIBxto~IBkCR*xuM_xsxGWC%2n#o2s.bvx[t6Rjxaw0%2ofNGW=W;t7W;njWCSLM|X8niWBM{t7VtNGIVoz%2M|WB",
    height: 1859,
    width: 1920,
  },
  AboutHeader: {
    imageURL: AboutHeader,
    blurHash:
      "|OLgCV0frq%MbcM|%2xsxGVsV@t7S1IoM|ayxa%L~V%MM|aextt7RjWCNGxtWARQogt7aef6ozWBr@%2ozWAn%s;ofNFNG%Ms:WAkCofe.ayWXRjniaeofa#RjV@Rjofozxbt6jsayofofogWBRjMyRjjZozj[M{RjkDoz",
    height: 932,
    width: 3712,
  },
  Clara: {
    imageURL: Clara,
  },
  ContactHeader: {
    imageURL: ContactHeader,
    blurHash:
      "|ZL3cU~WIoRPt7t7RQxuRjRjoLxuM{WBt7V@kCWBs:ofj[WVWBWBt7RjWBaeofaffkjtWBofjZayNGafays:ayj[ayoLofayoLayj[f6fQa|jtfkofofayWVayayj[WBfkofjtj[ayayjtayj[ayWBWCj[j[fQfQayj[a|",
    height: 932,
    width: 3712,
  },
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
  BookCoverThumb: {
    imageURL: UprootedCover,
  },
  LogoDesignThumb: {
    imageURL: BirdBooksLogo,
  },
  AlbumCoverThumb: {
    imageURL: StolenRemainsCover,
  },
  BrandingThumb: {
    imageURL: BirdBooksBranding,
  },
  IllustrationServicesThumb: {
    imageURL: WomanInWindowIllustration,
  },
  DesignServicesThumb: {
    imageURL: BusinessCards,
  },
  PostersThumb: {
    imageURL: PlantSalePoster,
  },
  SocialsThumb: {
    imageURL: SocialProducts,
  },
  CharactersThumb: {
    imageURL: HobGob,
  },
  ScenesThumb: {
    imageURL: CosyGame,
  },
  BusinessSuiteThumb: {
    imageURL: AmandaFlyer,
  },
  FlyersThumb: {
    imageURL: CandidKombuchaCan,
  },
  UprootedCover: { imageURL: UprootedCover },
  AmandaFlyers: { imageURL: AmandaFlyers },
  AmandaLogo: { imageURL: AmandaLogo },
  GraveGirlsAlbum: { imageURL: GraveGirlsAlbum },
  GraveGirlsBranding: { imageURL: GraveGirlsBranding },
  DndPoster: { imageURL: DndPoster },
  PlantSalePoster: { imageURL: PlantSalePoster },
  BookCoverSocials: { imageURL: BookCoverSocials },
  AmandaBusinessSuite: { imageURL: AmandaBusinessSuite },
  TurnMeOn: { imageURL: TurnMeOn },
  CandidKombuchaCan: { imageURL: CandidKombuchaCan },
  CosyGame: { imageURL: CosyGame },
  AlbumCoverHeader: {
    imageURL: AlbumCoverHeader,
    blurHash:
      "|EM6PPUf001H5MF?i+^OVf}@I=%L-CEexasASysD?@I;tSwI$-$jkSWGtPNa=|t7S1%2S1R*o2WVxbt%$+whs:RQX5R%SLOXjaWBNZwgWBofs;W.sSt6xuwyNdjbadI;WAbbNFn%W=V@o3kCjFX5wzbaRjjrbHR*RjR,bH",
    height: 932,
    width: 3712,
  },
  BookCoverHeader: {
    imageURL: BookCoverHeader,
    blurHash:
      "|DJt0e00o}~W%ME1xa?H%2tQWoofRjV@jZofofkC-:aya#s;WWofjtoLRjofWBoea{R+WDjasos.s;-paxM{t7s;WCNFj@bIazxGsoWCR*azoeoe%Ma|n%xZogozWVWBRjs:WBa}fkj[oLa|WVay%2%2n*Rjs:s:ayRjWV",
    height: 932,
    width: 3712,
  },
  BrandingHeader: {
    imageURL: BrandingHeader,
    blurHash:
      "|6KmnY00DQvo-:Ec-o^,p0%dxs}]wKD~EdEN9dD*^PD*0g5S9s^i={E2EN9u9aE1M|xut8Woob?FRpoNSJScR+E2RQ$~%0-qofxC$g$+ohXRxtV@tS-pROITtRNIM{-U?Hj^IoNGs.o2juWVbExt-;WBRQahI:xtxZM{Io",
    height: 932,
    width: 3712,
  },
  BusinessSuiteHeader: {
    imageURL: BusinessSuiteHeader,
    blurHash:
      "|EO3LZdB0f004nDh8w004:Z#aKyET1IAIAkVtmbvxbIUROxWt7tSxv-p%L.9x]Z~I9IoOZS$WAad4nRPjEoJ%2%N-;xus.RPRPjstRtRf,RjRPRjxIRQnhxCaxbco#t7n~%MogRiRPR*SNR*WBs:Mxs9t8kDj@adoekCkC",
    height: 932,
    width: 3712,
  },
  CharactersHeader: {
    imageURL: CharactersHeader,
    blurHash:
      "|BLpm$0z?I~Dx^Ipr=r=Io_3.8?b%Mt7jsRjM{Rj~BenInWUxtxaM{Rjt7MxMxRPNGR*WCoLofkC^k~CWBIUsms:WpR*t6t7M|M{M{Rij[t7t7xawJMxM{IoIUaexuxut7MxM{V@WBayayayofkCjE%2%MofV@WBofayRQ",
    height: 932,
    width: 3712,
  },
  DesignServicesHeader: {
    imageURL: DesignServicesHeader,
    blurHash:
      "|BKd0y0000bw~C,DtkOYwHrrVt%3bvNZNGW=s:w^}@s:tlSxM{t7RjoLazoykCR-WFsmwbjFX9Nx.7-pnknPWVS2s:n*NHyCX7Vsi_s:j?ofWVWBv~=|o}X8n$RQjuX7ofxaWXOXNGnixaWCR*of^*%1$jrsNGbuaejHX8",
    height: 932,
    width: 3712,
  },
  LogoDesignHeader: {
    imageURL: LogoDesignHeader,
    blurHash:
      "|HMj8f60I9q[=|%#tlR6VY0K9Z?H~W?Ho{buxar]s;M{M|RkIoRjV[ofW;?a-pt6R%j?xas:WBS2E1s:xat6xabHkCayoLRjM|ofxas:a{WUoLoL-:xtt6t6WBWBWBoLfkofj[RjRjfjs:ofWBWBIUWBt7t7t6aeayfkof",
    height: 932,
    width: 3712,
  },
  FlyersHeader: {
    imageURL: FlyersHeader,
    blurHash:
      "|PI}070dyE9tVE}Z$*Egtls:ayoMayayj[a|j[j[=|s:jFoeW;SgWUs:aes:oLW;WVayayjuoLoL-V$+RjoLt7R*j[jtWBoMf6oeWBR*jtoLoLj[-ps:aes:kCSMWVsoaeofoLj[ayWVWVjtjZfQxut7nis.kCR*ayn%e.",
    height: 932,
    width: 3712,
  },
  IllustrationServicesHeader: {
    imageURL: IllustrationServicesHeader,
    blurHash:
      "|JL:o|0f0dRN~B-VRjJ9tSXSR*RjM{M{WBn%s:t7?Gsm$*xbNbX8ayaeRjsAaet7t7xtkCW;WBV@xD$*xaWrNaR*o1n%jZs:t6ofofkBofafWBj[nO%2t8R+RjRjs:t7oLxaj[ofkCWVWBjZj[WV%2juofjtNGWBofofj[",
    height: 932,
    width: 3712,
  },
  PostersHeader: {
    imageURL: PostersHeader,
    blurHash:
      "|DLD0~00s;Te1c0z-V}[wI%2oJs:aeayj]ayWVWW?It7Rjsmn$%1o0WBofxao1WCR*kCofo0nioL%2-poKM{s;WVR*WBjus:WBkCkBayj@ayjZoL-;t7WVoLe.s:j@WBbHWCbHoyj[WBR*kBofj[tRxukCWAxGsTWVS2W;",
    height: 932,
    width: 3712,
  },
  ScenesHeader: {
    imageURL: ScenesHeader,
    blurHash:
      "|QJQp90e~W^kNHRjxGIUE1xvt8xbofj]a}WBR*WBxbRlNGayj[ofWWoft7R+R+flWVWVa#oMoeof%1%2WVR*ofayoLofj[s:axj?j@ayj?j@j[ayxaf7R*WBWBj[WVa}j[aeWBaeWVayayfRa#fkxtxaWVR*j[ayayjtj[",
    height: 932,
    width: 3712,
  },
  SocialsHeader: {
    imageURL: SocialsHeader,
    blurHash:
      "|IL:$Q5,?b-BD*4:j]-pWnxZRjRjRjs:t7RkRjkB~q?bxus:WAs:n%V@WBtRozofbGofjZjFn%ofIURPMxIot7xut7t7ayt7a#oMj[bHofoej@WVR5IUIURjWCt7ozbHaxRPV@oLkCa}R*WBayj[MxV@oft7t7WBRjWBof",
    height: 932,
    width: 3712,
  },
};
export type Images = typeof Images;
