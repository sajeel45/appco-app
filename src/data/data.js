import image1 from "../assets/Banner/slider-img2.png";
import image2 from "../assets/Banner/slider-img3.png";
import user1 from "../assets/feedback/customer1.jpeg";
import user2 from "../assets/feedback/customer2.jpeg";
import user3 from "../assets/feedback/customer3.jpeg";
import team1 from "../assets/team/team-1.jpg";
import team2 from "../assets/team/team-2.jpg";
import team3 from "../assets/team/team-3.jpg";
import team4 from "../assets/team/team-4.jpg";
import blog1 from "../assets/blogs/blog-1.jpg";
import blog2 from "../assets/blogs/blog-2.jpg";
import blog3 from "../assets/blogs/blog-3.jpg";
import basic from "../assets/packages/basic.svg";
import standard from "../assets/packages/standard.svg";
import premium from "../assets/packages/unlimited.svg";
import sponsor1 from "../assets/sponsors/sponser-1.png";
import sponsor2 from "../assets/sponsors/sponser-2.png";
import sponsor3 from "../assets/sponsors/sponser-3.png";
import sponsor4 from "../assets/sponsors/sponser-4.png";
import sponsor5 from "../assets/sponsors/sponser-5.png";
import sponsor6 from "../assets/sponsors/sponser-6.png";
import sponsor7 from "../assets/sponsors/sponser-7.png";
import sponsor8 from "../assets/sponsors/sponser-8.png";
import sponsor9 from "../assets/sponsors/sponser-9.png";
import sponsor10 from "../assets/sponsors/sponser-10.png";
import testi1 from "../assets/Testimonials/testi1.jpg";
import testi2 from "../assets/Testimonials/testi2.jpg";
import testi3 from "../assets/Testimonials/testi3.jpg";
import {FaHeadphones,FaLock,FaSmile,FaSearch,FaCheck,FaTv,
    FaCode,FaUserFriends,FaMobile,FaRetweet,FaBell,FaGlobe
,FaEnvelope,FaPhone,FaStopwatch,FaFileWord,FaChartBar,FaAndroid,FaDesktop,FaBullseye, FaChevronRight} from "react-icons/fa";


const bannerItems = [
    {
        id:1,
        src:image1,
    },
    {
        id:2,
        src:image2,
    }
];
const services = [
    {
        id:1,
        title:"Searching",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaSearch size="40px" color="white"/>,
        count:1
    },
    {
        id:2,
        title:"Designing",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaSmile size="40px" color="white"/>,
        count:2,
    },
    {
        id:3,
        title:"Building",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaLock size="40px" color="white"/>,
        count:3
    },
    {
        id:4,
        title:"Supporting",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaHeadphones size="40px" color="white" />,
        count:4
    },
    
    
    
];
const trafficItems = [
    {
        id:1,
        title:"Carefully Designed",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaCheck color="white"/>
    },
    {
        id:2,
        title:"Choose a App",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaCheck color="white"/>
    },
    {
        id:3,
        title:"Seamless Sync",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaCheck color="white"/>
    },
    
    
    {
        id:4,
        title:"User Interactive",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaCheck color="white"/>
    },
    
];
const feedbacks = [
    {
        id:1,
        img:user1,
        name:"Jason Response",
        date:"April 14,2022.",
        feedback:"Why I say old chap that is spiffing lurgy Oxford cracking goal bleeder, bog-standard Harry brilliant mush a blinding shot starkers."
    },
    {
        id:2,
        img:user2,
        name:"Jason Response",
        date:"April 14,2022.",
        feedback:"Why I say old chap that is spiffing lurgy Oxford cracking goal bleeder, bog-standard Harry brilliant mush a blinding shot starkers."
    },
    {
        id:3,
        img:user3,
        name:"Jason Response",
        date:"April 14,2022.",
        feedback:"Why I say old chap that is spiffing lurgy Oxford cracking goal bleeder, bog-standard Harry brilliant mush a blinding shot starkers."
    }
];
const teamMembers = [
    {
        id:1,
        src:team1,
        name:"Benjamin Evalent",
        designation:"CEO-Founder"
    },
    {
        id:2,
        src:team2,
        name:"Benjamin Evalent",
        designation:"CEO-Founder"
    },
    {
        id:3,
        src:team3,
        name:"Benjamin Evalent",
        designation:"CEO-Founder"
    },
    {
        id:4,
        src:team4,
        name:"Benjamin Evalent",
        designation:"CEO-Founder"
    }
];
const blogs = [
    {
        id:1,
        src:blog1,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"17 Effective Ways to Monetize Mobile Apps",
        link:"/Blog1"
    },
    {
        id:2,
        src:blog2,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"How to bring Dolce to your company",
        link:"/Blog2"
    },
    {
        id:3,
        src:blog3,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"Introducing New Apps Design for our iOS App",
        link:"/Blog3"
    },
];
const packages = [
    {
        id:1,
        title:"Basic",
        src:basic,
        price:29,
        feature1:"5 Users access same time",
        feature2:"Integrated eCommerce",
        feature3:"Customization interface",
        feature4:"Weekly updated",
        feature5:"24/7 Phone Support",
        feature6:"Event Analytics",
    },
    {
        id:2,
        title:"Standard",
        src:standard,
        price:145,
        feature1:"10 Users access same time",
        feature2:"Integrated eCommerce",
        feature3:"Customization interface",
        feature4:"Daily updated",
        feature5:"24/7 Phone Support",
        feature6:"Event Analytics",
        
    },
    {
        id:3,
        title:"Unlimited",
        src:premium,
        price:249,
        feature1:"20 Users access same time",
        feature2:"Integrated eCommerce",
        feature3:"Fully Customization interface",
        feature4:"Free updated",
        feature5:"24/7 Phone Support",
        feature6:"Event Analytics",
    },
];
const questions = [
    {
        id:1,
        question:"Where do I usually find FAQs in a page?",
        answer:"Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie."
    },
    {
        id:2,
        question:"Where do I usually find FAQs in a page?",
        answer:"Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie."
    },
    {
        id:3,
        question:"Where do I usually find FAQs in a page?",
        answer:"Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie."
    },
    {
        id:4,
        question:"Where do I usually find FAQs in a page?",
        answer:"Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie."
    },
];
const helpLinks = [
    {
        id:1,
        link:'Customer Services',
        route:'/Services'
    },
    {
        id:2,
        link:'IT Department',
        route:'/Services'
    },
    {
        id:3,
        link:'About Our Company',
        route:'/AboutUs'
    },
    {
        id:4,
        link:'Business Growth',
        route:'/Pricing'
    },
    {
        id:5,
        link:'Make an Appointment',
        route:'/Contact'
    }
];
const services2 = [
    {
        id:1,
        icon:<FaTv size="30px" color="#5653b1"/>,
        title:"Carefully Designed",
        description:"He lost his bottle loo don't get shirty with me ruddy.",
        background:"#2b70fa"
    },
    {
        id:2,
        icon:<FaCode size="30px" color="#5653b1"/>,
        title:"Clean Modern Code",
        description:"He lost his bottle loo don't get shirty with me ruddy."
    },
    {
        id:3,
        icon:<FaUserFriends size="30px" color="#5653b1"/>,
        title:"User Interactive",
        description:"He lost his bottle loo don't get shirty with me ruddy."
    },
    {
        id:4,
        icon:<FaMobile size="30px" color="#5653b1"/>,
        title:"Choose an App",
        description:"He lost his bottle loo don't get shirty with me ruddy."
    },
    {
        id:5,
        icon:<FaRetweet size="30px" color="#5653b1"/>,
        title:"Seamless Sync",
        description:"He lost his bottle loo don't get shirty with me ruddy."
    },
    {
        id:6,
        icon:<FaBell size="30px" color="#5653b1"/>,
        title:"Notification Settings",
        description:"He lost his bottle loo don't get shirty with me ruddy."
    }
];
const sponsors = [
    {
        id:1,
        img:sponsor1
    },
    {
        id:2,
        img:sponsor2
    },
    {
        id:3,
        img:sponsor3
    },
    {
        id:4,
        img:sponsor4
    },
    {
        id:5,
        img:sponsor5
    },
    {
        id:6,
        img:sponsor6
    },
    {
        id:7,
        img:sponsor7
    },
    {
        id:8,
        img:sponsor8
    },
    {
        id:9,
        img:sponsor9
    },
    {
        id:1,
        img:sponsor10
    }

];
const addressInfo = [
    {
        id:1,
        icon:<FaGlobe color="#5653b1" size="50px"/>,
        caption:"Our Address:",
        info:"411 University St, Seattle, USA"
    },
    {
        id:1,
        icon:<FaEnvelope color="#5653b1" size="50px"/>,
        caption:"Our Mailbox:",
        info:"Example@gmail.com"
    },
    {
        id:3,
        icon:<FaPhone color="#5653b1" size="50px"/>,
        caption:"Our Phone:",
        info:"+1 -800-456-478-23"
    }

];
const twoBlogs = [
    {
        id:1,
        src:blog1,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"17 Effective Ways to Monetize Mobile Apps",
        description:"Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …",
        link:"/Blog1"
    },
    {
        id:2,
        src:blog2,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"How to bring Dolce to your company",
        description:"Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …",
        link:"/Blog2"
    },
    {
        id:3,
        src:blog3,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"Introducing New Apps Design for our iOS App",
        description:"Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …",
        link:"/Blog3"
    },
    {
        id:4,
        src:blog1,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"17 Effective Ways to Monetize Mobile Apps",
        link:"/Blog1",
        description:"Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …"
    },
    {
        id:5,
        src:blog2,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"How to bring Dolce to your company",
        link:"/Blog2",
        description:"Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …"
    },
    {
        id:6,
        src:blog3,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"Introducing New Apps Design for our iOS App",
        link:"/Blog3",
        description:"Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …"
    },
    {
        id:7,
        src:blog1,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"17 Effective Ways to Monetize Mobile Apps",
        link:"/Blog1",
        description:"Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …"
    },
    {
        id:8,
        src:blog2,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"How to bring Dolce to your company",
        link:"/Blog2",
        description:"Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …"
    },
    {
        id:9,
        src:blog3,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"Introducing New Apps Design for our iOS App",
        link:"/Blog3",
        description:"Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …"
    },
    {
        id:10,
        src:blog1,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"Introducing New Apps Design for our iOS App",
        link:"/Blog1",
        description:"Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …"
    },
];
const servicesItems = [
    {
        id:1,
        icon:<FaStopwatch color="#5653b1" size="50px"/>,
        title:"UX/UI Design",
        description:"Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
    },
    {
        id:2,
        icon:<FaFileWord color="#5653b1" size="50px"/>,
        title:"Web Development",
        description:"Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
    },
    {
        id:3,
        icon:<FaChartBar color="#5653b1" size="50px"/>,
        title:"QA & Testing",
        description:"Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
    },
    {
        id:4,
        icon:<FaAndroid color="#5653b1" size="50px"/>,
        title:"UX/UI Design",
        description:"Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
    },
    {
        id:5,
        icon:<FaDesktop color="#5653b1" size="50px"/>,
        title:"Web Development",
        description:"Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
    },
    {
        id:6,
        icon:<FaBullseye color="#5653b1" size="50px"/>,
        title:"QA & Testing",
        description:"Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
    },
    {
        id:7,
        icon:<FaStopwatch color="#5653b1" size="50px"/>,
        title:"UX/UI Design",
        description:"Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
    },
    {
        id:8,
        icon:<FaDesktop color="#5653b1" size="50px"/>,
        title:"Web Development",
        description:"Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
    },
    {
        id:9,
        icon:<FaChartBar color="#5653b1" size="50px"/>,
        title:"QA & Testing",
        description:"Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus."
    }
];
const testimonials = [
    {
        id:1,
        img:testi1,
        feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod. tempor incididunt ut labore et dolore magna aliqua",
        name:"John Abraham",
        skill:"Web Developer"
    },
    {
        id:2,
        img:testi2,
        feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod. tempor incididunt ut labore et dolore magna aliqua",
        name:"John Dome",
        skill:"App Developer"
    },
    {
        id:3,
        img:testi3,
        feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod. tempor incididunt ut labore et dolore magna aliqua",
        name:"Ellen Erye",
        skill:"Web Developer"
    }
];
const recentBlogs = [
    {
        id:1,
        title:"How to bring Dolce to your company?Read Out More",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog2",
        border:<hr />
    },
    {
        id:2,
        title:"Introducing New Apps Design for our iOS App",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog3",
        border:<hr />
    },
    {
        id:3,
        title:"How to bring Dolce to your company?Read Out More",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog2",
        border:<hr />
    },
    {
        id:4,
        title:"Introducing New Apps Design for our iOS App",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog3",
        border:<hr />
    },
    {
        id:5,
        title:"How to bring Dolce to your company?Read Out More",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog2"
    }
];
const recentBlogs2 = [
    {
        id:1,
        title:"17 Effective Ways to Monetize Mobile Apps",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog1",
        border:<hr />
    },
    {
        id:2,
        title:"Introducing New Apps Design for our iOS App",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog3",
        border:<hr />
    },
    {
        id:3,
        title:"17 Effective Ways to Monetize Mobile Apps",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog1",
        border:<hr />
    },
    {
        id:4,
        title:"Introducing New Apps Design for our iOS App",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog3",
        border:<hr />
    },
    {
        id:5,
        title:"17 Effective Ways to Monetize Mobile Apps",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog1"
    }
];
const recentBlogs3 = [
    {
        id:1,
        title:"17 Effective Ways to Monetize Mobile Apps",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog1",
        border:<hr />
    },
    {
        id:2,
        title:"How to bring Dolce to your company?Read Out More",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog2",
        border:<hr />
    },
    {
        id:3,
        title:"17 Effective Ways to Monetize Mobile Apps",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog1",
        border:<hr />
    },
    {
        id:4,
        title:"How to bring Dolce to your company?Read Out More",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog2",
        border:<hr />
    },
    {
        id:5,
        title:"17 Effective Ways to Monetize Mobile Apps",
        icon:<FaChevronRight color="#5653b1"/>,
        link:"/Blog1"
    }
];
const categories = [
    {
        id:1,
        category:"Mobile App Monetization",
        spacing:<hr />
    },
    {
        id:2,
        category:"App Revenue Generation",
        spacing:<hr />
    },
    {
        id:3,
        category:"Business Development",
        spacing:<hr />
    },
    {
        id:4,
        category:"Partnership and Collaboration",
        spacing:<hr />
    },
    {
        id:5,
        category:"Mobile App Design",
        spacing:<hr />
    },
    {
        id:6,
        category:"App Update and Redesign",
    },   
];
const tags = [
    {
        id:1,
        tag:"Mobile Apps",
    },
    {
        id:2,
        tag:"Monetization",
    },
    {
        id:1,
        tag:"Business",
    }
];
export {bannerItems,services,trafficItems,feedbacks,teamMembers,blogs,
    packages,questions,helpLinks,services2,sponsors,addressInfo
,twoBlogs,servicesItems,testimonials,recentBlogs,recentBlogs2,recentBlogs3,categories,tags}; 