import Header from "../../common/Header/Header";
import Team3 from "../../elements/TeamMember3/Team3";
import Footer from "../../common/Footer/Footer";
import Sponsors from "../../elements/Sponsors/Sponsors";
import { helpLinks,sponsors,addressInfo } from "../../../data/data";
import ContactForm from "../../elements/ContactForm/ContactForm";

const TeamMember3  = () => {
    return(
        <div>
            <Header />
            <Team3 />
            <Sponsors sponsors={sponsors} />
            <ContactForm addressInfo={addressInfo}/>
            <Footer helpLinks={helpLinks}/>
        </div>
    )
};
export default TeamMember3;