import { useEffect } from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import { helpLinks, twoBlogs } from "../../../data/data";
import TwoColumn from "../../elements/2CoulmnLayout/twoColumn";

const TwoCoulumnPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <main style={{ marginTop: "65px" }}>
        <TwoColumn twoBlogs={twoBlogs} />
      </main>
      <Footer helpLinks={helpLinks} marginTop="3rem" />
    </div>
  );
};
export default TwoCoulumnPage;
