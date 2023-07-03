import Header from "../../common/Header/Header";
import Home1 from "../../elements/Home1Items/Home1";
import Footer from "../../common/Footer/Footer";
import { helpLinks } from "../../../data/data";

const Home = () =>{
    return(
        <div>
            <Header />
            <Home1 />
            <Footer helpLinks={helpLinks}/>
        </div>
    )
};
export default Home;
