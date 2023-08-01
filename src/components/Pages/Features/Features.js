import { useEffect } from "react";
import Header from "../../common/Header/Header";
import { helpLinks,sponsors } from "../../../data/data";
import Footer from "../../common/Footer/Footer";
import FeaturesPage from "../../elements/FeaturesPage/FeaturesPage";
import Features from "../../elements/Features/Features";
import Project from "../../elements/ProjectArea/project";
import Sponsors from "../../elements/Sponsors/Sponsors";
const FeaturePage = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div>
            <Header />
            <FeaturesPage />
            <Features />
            <Sponsors sponsors={sponsors} />
            <Project />
            <Footer helpLinks={helpLinks}/>
        </div>
    )
};
export default FeaturePage;