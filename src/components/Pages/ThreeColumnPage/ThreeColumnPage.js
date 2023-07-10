import Header from "../../common/Header/Header";
import { helpLinks,twoBlogs } from "../../../data/data";
import ThreeColumn from "../../elements/3ColumnLayout/ThreeColumn";
import Footer from "../../common/Footer/Footer";



const ThreeColumnPage = () =>{
    return(
        <div>
            <Header />
            <ThreeColumn twoBlogs={twoBlogs} />
            <Footer helpLinks={helpLinks} />
        </div>
    )
};
export default ThreeColumnPage;