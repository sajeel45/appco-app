import { useEffect } from "react";
import Header from "../../common/Header/Header";
import Team2 from "../../elements/TeamMember2/Team2";
import Footer from "../../common/Footer/Footer";
import Sponsors from "../../elements/Sponsors/Sponsors";
import { helpLinks,sponsors,addressInfo } from "../../../data/data";
import ContactForm from "../../elements/ContactForm/ContactForm";

const TeamMember2  = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div>
            <Header />
            <Team2 />
            <Sponsors sponsors={sponsors} />
            <ContactForm addressInfo={addressInfo}/>
            <Footer helpLinks={helpLinks}/>
        </div>
    )
};
export default TeamMember2;