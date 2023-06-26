import image1 from "../assets/Banner/slider-img2.png";
import image2 from "../assets/Banner/slider-img3.png";
import user from "../assets/feedback/user.png";
import team1 from "../assets/team/team-1.jpg";
import team2 from "../assets/team/team-2.jpg";
import team3 from "../assets/team/team-3.jpg";
import team4 from "../assets/team/team-4.jpg";
import blog1 from "../assets/blogs/blog-1.jpg";
import blog2 from "../assets/blogs/blog-2.jpg";
import blog3 from "../assets/blogs/blog-3.jpg";
import {FaHeadphones,FaLock,FaSmile,FaSearch,FaCheck} from "react-icons/fa";


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
        title:"Supporting",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaHeadphones size="40px" color="white" />,
        count:4
    },
    {
        id:2,
        title:"Building",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaLock size="40px" color="white"/>,
        count:3
    },
    {
        id:3,
        title:"Designing",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaSmile size="40px" color="white"/>,
        count:2,
    },
    {
        id:4,
        title:"Searching",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaSearch size="40px" color="white"/>,
        count:1
    }
];
const trafficItems = [
    {
        id:1,
        title:"Choose a App",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaCheck color="white"/>
    },
    {
        id:2,
        title:"Carefully Designed",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaCheck color="white"/>
    },
    {
        id:3,
        title:"User Interactive",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaCheck color="white"/>
    },
    {
        id:4,
        title:"Seamless Sync",
        description:"Mucker plastered bugger all mate morish are.",
        icon:<FaCheck color="white"/>
    }
];
const feedbacks = [
    {
        id:1,
        img:user,
        name:"Jason Response",
        date:"April 14,2022.",
        feedback:"Why I say old chap that is spiffing lurgy Oxford cracking goal bleeder, bog-standard Harry brilliant mush a blinding shot starkers."
    },
    {
        id:2,
        img:user,
        name:"Jason Response",
        date:"April 14,2022.",
        feedback:"Why I say old chap that is spiffing lurgy Oxford cracking goal bleeder, bog-standard Harry brilliant mush a blinding shot starkers."
    },
    {
        id:3,
        img:user,
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
    },
    {
        id:2,
        src:blog2,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"How to bring Dolce to your company",
    },
    {
        id:3,
        src:blog3,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"Introducing New Apps Design for our iOS App",
    }
]

export {bannerItems,services,trafficItems,feedbacks,teamMembers,blogs}; 