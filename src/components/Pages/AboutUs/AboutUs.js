import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import AboutUs from "../../elements/AboutUs/AboutUs";
import Services2 from "../../elements/Services2/Services2";
import Team from "../../elements/Team/Team";
import { helpLinks,services2,teamMembers,sponsors } from "../../../data/data";
import AboutUsContent from "../../elements/AboutUsContent/AboutUsContent";
import Platforms from "../../elements/Sponsors/Sponsors";

const AboutUsPage = () =>{
    return(
        <div>
            <Header />
            <AboutUs />
            <AboutUsContent />
            <Services2 services2={services2}/>
            <Team teamMembers={teamMembers}/>
            <Platforms sponsors={sponsors}/>
            <Footer helpLinks={helpLinks}/>
        </div>
    )
}

export default AboutUsPage;