import Header from "../../common/Header/Header";
import { helpLinks,recentBlogs3 } from "../../../data/data";
import Blog3 from "../../elements/MainBlogs/Blog3";
import Footer from "../../common/Footer/Footer"


const BlogThree = () =>{
    return(
        <div>
            <Header />
            <Blog3 recentBlogs3={recentBlogs3}/>
            <Footer helpLinks={helpLinks} />
        </div>
    )
}
export default BlogThree;