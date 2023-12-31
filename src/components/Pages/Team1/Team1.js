import { useEffect } from "react";
import Header from "../../common/Header/Header";
import Team1 from "../../elements/TeamMember1/Team1";
import Footer from "../../common/Footer/Footer";
import Sponsors from "../../elements/Sponsors/Sponsors";
import { helpLinks, sponsors, addressInfo } from "../../../data/data";
import ContactForm from "../../elements/ContactForm/ContactForm";

const TeamMember1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <main style={{ marginTop: "65px" }}>
        <Team1 />
        <Sponsors sponsors={sponsors} paddingTop="72px" />
        <ContactForm addressInfo={addressInfo} />
      </main>
      <Footer helpLinks={helpLinks} />
    </div>
  );
};
export default TeamMember1;
