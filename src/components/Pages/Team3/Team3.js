import { useEffect } from "react";
import Header from "../../common/Header/Header";
import Team3 from "../../elements/TeamMember3/Team3";
import Footer from "../../common/Footer/Footer";
import Sponsors from "../../elements/Sponsors/Sponsors";
import { helpLinks, sponsors, addressInfo } from "../../../data/data";
import ContactForm from "../../elements/ContactForm/ContactForm";

const TeamMember3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <main style={{ marginTop: "65px" }}>
        <Team3 />
        <Sponsors sponsors={sponsors} paddingTop="72px" />
        <ContactForm addressInfo={addressInfo} />
      </main>
      <Footer helpLinks={helpLinks} />
    </div>
  );
};
export default TeamMember3;
