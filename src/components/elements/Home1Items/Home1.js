import { bannerItems,services,trafficItems,feedbacks,teamMembers,blogs } from "../../../data/data";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Features from "../Features/Features";
import Traffic from "../TrafficArea/Traffic";
import Feedback from "../Feedback/Feedback";
import Team from "../Team/Team";
import Blogs from "../Blogs/Blogs";

const Home1 = () => {
    return(
        <div>
            <Banner bannerItems={bannerItems}/>
            <Services services={services}/>
            <Features />
            <Traffic trafficItems={trafficItems}/>
            <Feedback feedbacks={feedbacks}/>
            <Team teamMembers={teamMembers}/>
            <Blogs blogs={blogs}/>
        </div>
    )
}
export default Home1;