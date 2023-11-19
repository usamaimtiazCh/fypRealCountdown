import { FeaturedProperties } from "../../Components/Landingpage/featuredProperties";
import HeroSection from "../../Components/Landingpage/heroSection";
import { OurServices } from "../../Components/Landingpage/ourServices";
import { PricingPlans } from "../../Components/Landingpage/palns";

const HomePage = () => {
  return (
    <div>
      {" "}
      <HeroSection />
      <FeaturedProperties />
      <OurServices />
      <PricingPlans />
    </div>
  );
};

export default HomePage;
