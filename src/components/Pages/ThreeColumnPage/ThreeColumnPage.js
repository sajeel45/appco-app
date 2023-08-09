import { useEffect } from "react";
import Header from "../../common/Header/Header";
import { helpLinks, twoBlogs } from "../../../data/data";
import ThreeColumn from "../../elements/3ColumnLayout/ThreeColumn";
import Footer from "../../common/Footer/Footer";

const ThreeColumnPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <main style={{ marginTop: "65px" }}>
        <ThreeColumn twoBlogs={twoBlogs} />
      </main>
      <Footer helpLinks={helpLinks} marginTop="3rem" />
    </div>
  );
};
export default ThreeColumnPage;
