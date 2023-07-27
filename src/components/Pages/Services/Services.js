import Header from "../../common/Header/Header";
import { helpLinks,servicesItems,testimonials,sponsors } from "../../../data/data";
import Footer from "../../common/Footer/Footer";
import ServicePage from "../../elements/ServicePage/ServicePage";
import ServiceDetails from "../../elements/ServiceDetails/ServiceDetails";
import Call from "../../elements/CallAction/Call";
import Project from "../../elements/ProjectArea/project";
import Testimonials from "../../elements/Testimonials/Testimonials";
import Sponsors from "../../elements/Sponsors/Sponsors";
const Services = () => {
    return(
        <div>
            <Header />
            <ServicePage />
            <ServiceDetails servicesItems={servicesItems}/>
            <Call />
            <Testimonials testimonials={testimonials}/>
            <Sponsors sponsors={sponsors} />
            <Project />
            <Footer helpLinks={helpLinks}/>
        </div>
    )
};

export default Services;