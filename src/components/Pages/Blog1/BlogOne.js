import { useEffect } from "react";
import Header from "../../common/Header/Header";
import { helpLinks, recentBlogs, categories } from "../../../data/data";
import Blog1 from "../../elements/MainBlogs/Blog1";
import Footer from "../../common/Footer/Footer";

const BlogOne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <main style={{ marginTop: "65px" }}>
        <Blog1 recentBlogs={recentBlogs} categories={categories} />
      </main>
      <Footer helpLinks={helpLinks} />
    </div>
  );
};
export default BlogOne;
