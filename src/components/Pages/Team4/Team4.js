import Header from "../../common/Header/Header";
import Team4 from "../../elements/TeamMember4/Team4";
import Footer from "../../common/Footer/Footer";
import Sponsors from "../../elements/Sponsors/Sponsors";
import { helpLinks,sponsors,addressInfo } from "../../../data/data";
import ContactForm from "../../elements/ContactForm/ContactForm";

const TeamMember4  = () => {
    return(
        <div>
            <Header />
            <Team4 />
            <Sponsors sponsors={sponsors} />
            <ContactForm addressInfo={addressInfo}/>
            <Footer helpLinks={helpLinks}/>
        </div>
    )
};
export default TeamMember4;