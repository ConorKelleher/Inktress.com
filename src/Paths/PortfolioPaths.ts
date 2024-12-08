import PortfolioItems from "constants/PortfolioItems";

const PortfolioPaths = Object.keys(PortfolioItems) as (keyof typeof PortfolioItems)[];

export default PortfolioPaths;
