import { bannerItems,services,trafficItems,feedbacks,teamMembers,blogs,packages,questions,packagesFeatures,helpLinks } from "../../../data/data";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Features from "../Features/Features";
import Traffic from "../TrafficArea/Traffic";
import Feedback from "../Feedback/Feedback";
import Team from "../Team/Team";
import Blogs from "../Blogs/Blogs";
import Packages from "../Packages/Packages";
import Questions from "../Questions/Questions";
import Project from "../ProjectArea/project";
import Footer from "../../common/Footer/Footer";

const Home1 = () => {
    return(
        <div>
            <Banner bannerItems={bannerItems}/>
            <Services services={services}/>
            <Features />
            <Traffic trafficItems={trafficItems}/>
            <Feedback feedbacks={feedbacks}/>
            <Team teamMembers={teamMembers}/>
            <Packages packages={packages} packagesFeatures={packagesFeatures}/>
            <Questions questions={questions}/>
            <Blogs blogs={blogs}/>
            <Project />
        </div>
    )
}
export default Home1;