import Header from "../../common/Header/Header";
import { helpLinks,detailsItems } from "../../../data/data";
import Footer from "../../common/Footer/Footer";
import ServicePage from "../../elements/ServicePage/ServicePage";
import ServiceDetails from "../../elements/ServiceDetails/ServiceDetails";
import Project from "../../elements/ProjectArea/project";
const Services = () => {
    return(
        <div>
            <Header />
            <ServicePage />
            <ServiceDetails detailsItems={detailsItems}/>
            <Project />
            <Footer helpLinks={helpLinks}/>
        </div>
    )
};

export default Services;