import { useEffect } from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import { helpLinks,packages,sponsors } from "../../../data/data";
import PricingPageContent from "../../elements/PricingPageContent/PricingPageContent";
import Sponsors from "../../elements/Sponsors/Sponsors";
import Packages from "../../elements/Packages/Packages";
import Project from "../../elements/ProjectArea/project";
const PricingPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div>
            <Header />
            <PricingPageContent />
            <Packages packages={packages}/>
            <Sponsors sponsors={sponsors} paddingTop="92px"/> 
            <Project />
            <Footer helpLinks={helpLinks} />
        </div>
    )
}
export default PricingPage;