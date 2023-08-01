import { useEffect } from "react";
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
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div>
            <Header />
            <ServicePage />
            <ServiceDetails servicesItems={servicesItems}/>
            <Call margin="0 0 100px 0"/>
            <Testimonials testimonials={testimonials}/>
            <Sponsors sponsors={sponsors} paddingTop="90px"/>
            <Project />
            <Footer helpLinks={helpLinks}/>
        </div>
    )
};

export default Services;