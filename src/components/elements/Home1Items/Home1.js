import {
  bannerItems,
  services,
  trafficItems,
  feedbacks,
  teamMembers,
  blogs,
  packages,
  questions,
  features1,
  features2
} from "../../../data/data";
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

const Home1 = () => {
  return (
    <div>
      <Banner bannerItems={bannerItems} />
      <Services services={services} />
      <Features features1={features1} features2={features2}/>
      <Traffic trafficItems={trafficItems} />
      <Feedback feedbacks={feedbacks} />
      <Team teamMembers={teamMembers} />
      <Packages packages={packages} />
      <Questions questions={questions} />
      <Blogs blogs={blogs} />
      <Project />
    </div>
  );
};
export default Home1;
