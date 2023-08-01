import { useEffect } from "react";
import Header from "../../common/Header/Header";
import { helpLinks,recentBlogs2 } from "../../../data/data";
import Blog2 from "../../elements/MainBlogs/Blog2";
import Footer from "../../common/Footer/Footer"


const BlogTwo = () =>{
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div>
            <Header />
            <Blog2 recentBlogs2={recentBlogs2}/>
            <Footer helpLinks={helpLinks} />
        </div>
    )
}
export default BlogTwo;