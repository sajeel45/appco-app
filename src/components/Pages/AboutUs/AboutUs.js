import { useEffect } from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import AboutUs from "../../elements/AboutUs/AboutUs";
import Services2 from "../../elements/Services2/Services2";
import Team from "../../elements/Team/Team";
import CallAction from "../../elements/CallAction/Call";
import {
  helpLinks,
  services2,
  teamMembers,
  sponsors,
  testimonials,
  achievements,
} from "../../../data/data";
import AboutUsContent from "../../elements/AboutUsContent/AboutUsContent";
import Platforms from "../../elements/Sponsors/Sponsors";
import Testimonials from "../../elements/Testimonials/Testimonials";
import Achievements from "../../elements/Achievements/Achievements";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <main style={{ marginTop: "65px" }}>
        <AboutUs />
        <AboutUsContent />
        <Services2 services2={services2} />
        <CallAction margin="100px 0 0 0" />
        <Team teamMembers={teamMembers} />
        <Testimonials testimonials={testimonials} paddingBottom="155px" />
        <Achievements achievements={achievements} />
        <Platforms sponsors={sponsors} />
      </main>
      <Footer helpLinks={helpLinks} />
    </div>
  );
};

export default AboutUsPage;
