import { useEffect } from "react";
import Header from "../../common/Header/Header";
import { helpLinks, recentBlogs3 } from "../../../data/data";
import Blog3 from "../../elements/MainBlogs/Blog3";
import Footer from "../../common/Footer/Footer";

const BlogThree = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <main style={{ marginTop: "65px" }}>
        <Blog3 recentBlogs3={recentBlogs3} />
      </main>
      <Footer helpLinks={helpLinks} />
    </div>
  );
};
export default BlogThree;
