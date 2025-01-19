import { Image } from "./Images";
import PortfolioItems, { PortfolioItemKeys } from "./PortfolioItems";

type PortfolioItemKey = keyof typeof PortfolioItemKeys;

const _PortfolioImages: Partial<Record<PortfolioItemKey, Image>> = {};

const PortfolioItemKeyList = Object.keys(PortfolioItemKeys) as PortfolioItemKey[];

for (let i = 0; i < PortfolioItemKeyList.length; i++) {
  const pImageId = PortfolioItemKeyList[i];
  const pItem = PortfolioItems[pImageId];
  _PortfolioImages[pImageId] = {
    imageURL: (await import(`../assets/images/portfolio/${pItem.page}/${pItem.name} L.${pItem.extension}`)).default,
    thumbnailURL: (await import(`../assets/images/portfolio/${pItem.page}/${pItem.name} S.${pItem.extension}`)).default,
    blurHash: pItem.blurHash,
    height: pItem.height,
    width: pItem.width,
  };
}

export const PortfolioImages = _PortfolioImages as Required<typeof _PortfolioImages>;
export type PortfolioImages = Required<typeof PortfolioImages>;
export const PortfolioImageKeys = PortfolioItemKeys;
export type PortfolioImageKeys = typeof PortfolioItemKeys;
export type PortfolioImageKey = keyof PortfolioImageKeys;

export default PortfolioImages;
