import GetInTouchBanner from "components/GetInTouchBanner";
import Hero from "components/Hero";
import ImageCard from "components/ImageCard";
import QuoteBlock from "components/QuoteBlock";
import Scroller from "components/Scroller";
import getCopy from "constants/localisation";
import Services from "constants/Services";
import usePageTitle from "localboast/hooks/usePageTitle";
import PageWrapper from "Pages/components/PageWrapper";
import Paths from "Paths";

const HomePage = () => {
  usePageTitle(getCopy("homeTitle"));

  return (
    <PageWrapper>
      <Hero
        imageStyle={{ objectFit: "cover" }}
        // imageSrc={ArtDesignHeaderImage}
        imageId="ArtDesignHero"
        headingText={getCopy("illustrationDesignHeroHeader")}
        bodyText={getCopy("illustrationDesignHeroBody")}
        ctaText={getCopy("illustrationDesignHeroCTA")}
        ctaTo={Paths.Services}
      />
      <Scroller headingText="Services" ctaTo={Paths.Services}>
        {Object.entries(Services).map(([serviceKey, serviceInfo]) => (
          <ImageCard
            key={serviceKey}
            cardText={serviceInfo.text}
            ctaTo={`${Paths.Services}/${serviceKey}`}
            imageId={serviceInfo.thumbImageId}
          />
        ))}
      </Scroller>
      <Hero
        // @ts-ignore
        imageStyle={{ objectFit: "cover", objectViewBox: "inset(0% 45% -21% 2%)" }}
        imageId="PortfolioHero"
        headingText={getCopy("portfolioHeroHeader")}
        bodyText={getCopy("portfolioHeroBody")}
        ctaText={getCopy("portfolioHeroCTA")}
        ctaTo={Paths.Portfolio}
      />
      <QuoteBlock
        title={getCopy("clientReviews")}
        quoteString={getCopy("nickJoesburyQuote")}
        quoteAuthor="Nick Joesbury"
      />
      <GetInTouchBanner />
    </PageWrapper>
  );
};

export default HomePage;
