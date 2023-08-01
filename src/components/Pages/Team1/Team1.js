import { useEffect } from "react";
import Header from "../../common/Header/Header";
import Team1 from "../../elements/TeamMember1/Team1";
import Footer from "../../common/Footer/Footer";
import Sponsors from "../../elements/Sponsors/Sponsors";
import { helpLinks,sponsors,addressInfo } from "../../../data/data";
import ContactForm from "../../elements/ContactForm/ContactForm";

const TeamMember1  = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        
        <div>
            <Header />
            <Team1 />
            <Sponsors sponsors={sponsors} />
            <ContactForm addressInfo={addressInfo}/>
            <Footer helpLinks={helpLinks}/>
        </div>
    )
};
export default TeamMember1;