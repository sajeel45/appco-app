import Header from "../../common/Header/Header";
import { helpLinks } from "../../../data/data";
import Footer from "../../common/Footer/Footer";
import FeaturesPage from "../../elements/FeaturesPage/FeaturesPage";
import Features from "../../elements/Features/Features";
import Project from "../../elements/ProjectArea/project";
const FeaturePage = () => {
    return(
        <div>
            <Header />
            <FeaturesPage />
            <Features />
            <Project />
            <Footer helpLinks={helpLinks}/>
        </div>
    )
};
export default FeaturePage;