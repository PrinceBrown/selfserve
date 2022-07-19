import MobileHero from "./MobileHero";
import WebHero from "./WebHero";


function HeroLayout( ) {

 


  let webHeroOfferCtntTitle = 'Healthy Furnace. Healthy Home.'


  let webHeroOfferContentMsg = `Whether you need
                      emergency HVAC repairs or are looking to replace old
                      equipment, call on the experts at Enercare. We’re a
                      proudly Canadian company offering leading solutions for
                      heating.`



  return (
    <>
  

      <WebHero webHeroOfferCtntTitle={webHeroOfferCtntTitle} webHeroOfferContentMsg={webHeroOfferContentMsg} />
      <MobileHero webHeroOfferCtntTitle={webHeroOfferCtntTitle} webHeroOfferContentMsg={webHeroOfferContentMsg} />

     
    </>
  );
}

export default HeroLayout;
