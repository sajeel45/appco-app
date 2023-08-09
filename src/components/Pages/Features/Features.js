import { useEffect } from "react";
import Header from "../../common/Header/Header";
import { helpLinks, sponsors,features1,features2 } from "../../../data/data";
import Footer from "../../common/Footer/Footer";
import FeaturesPage from "../../elements/FeaturesPage/FeaturesPage";
import Features from "../../elements/Features/Features";
import Project from "../../elements/ProjectArea/project";
import Sponsors from "../../elements/Sponsors/Sponsors";
const FeaturePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <main style={{ marginTop: "65px" }}>
        <FeaturesPage />
        <Features features1={features1} features2={features2}/>
        <Sponsors sponsors={sponsors} />
        <Project />
      </main>
      <Footer helpLinks={helpLinks} />
    </div>
  );
};
export default FeaturePage;
