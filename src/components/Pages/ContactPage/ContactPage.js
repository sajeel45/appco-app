import { useEffect } from "react";
import Header from "../../common/Header/Header";
import { helpLinks,addressInfo } from "../../../data/data";
import Contact from "../../elements/Contact/Contact";
import ContactForm from "../../elements/ContactForm/ContactForm";
import Footer from "../../common/Footer/Footer";

const ContactPage = () =>{
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div>
            <Header />
            <Contact />
            <ContactForm addressInfo={addressInfo} />
            <Footer helpLinks={helpLinks} />
        </div>
    )
};
export default ContactPage;