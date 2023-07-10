import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import {helpLinks,twoBlogs} from "../../../data/data";
import TwoColumn from "../../elements/2CoulmnLayout/twoColumn";

const twoCoulumnPage = () =>{
    return(
        <div>
            <Header />
            <TwoColumn twoBlogs={twoBlogs}/>
            <Footer helpLinks={helpLinks} margin="0px"/>
        </div>
    )
};
export default twoCoulumnPage;