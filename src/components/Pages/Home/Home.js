import { useEffect } from "react";
import Header from "../../common/Header/Header";
import Home1 from "../../elements/Home1Items/Home1";
import Footer from "../../common/Footer/Footer";
import { helpLinks } from "../../../data/data";

const Home = () =>{
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div>
            <Header />
            <main>
            <Home1 />
            </main>
            <Footer helpLinks={helpLinks}/>
        </div>
    )
};
export default Home;
