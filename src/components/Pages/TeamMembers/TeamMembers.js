import { useEffect } from "react";
import Header from "../../common/Header/Header";
import TeamPage from "../../elements/TeamPage/TeamPage";
import Sponsors from "../../elements/Sponsors/Sponsors";
import ContactForm from "../../elements/ContactForm/ContactForm";
import Footer from "../../common/Footer/Footer";
import {
  helpLinks,
  sponsors,
  teamMembers2,
  addressInfo,
} from "../../../data/data";

const TeamMembers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <main style={{ marginTop: "65px" }}>
        <TeamPage teamMembers2={teamMembers2} />
        <Sponsors sponsors={sponsors} />
        <ContactForm addressInfo={addressInfo} />
      </main>
      <Footer helpLinks={helpLinks} />
    </div>
  );
};
export default TeamMembers;
