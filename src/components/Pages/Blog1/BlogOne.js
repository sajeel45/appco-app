import Header from "../../common/Header/Header";
import { helpLinks,recentBlogs,categories } from "../../../data/data";
import Blog1 from "../../elements/MainBlogs/Blog1";
import Footer from "../../common/Footer/Footer"


const BlogOne = () =>{
    return(
        <div>
            <Header />
            <Blog1 recentBlogs={recentBlogs} categories={categories}/>
            <Footer helpLinks={helpLinks} />
        </div>
    )
}
export default BlogOne;