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
import {FaHeadphones,FaLock,FaSmile,FaSearch,FaCheck,FaTv,
    FaCode,FaUserFriends,FaMobile,FaRetweet,FaBell,FaHome,FaTag,FaBookmark,FaGlobe
,FaEnvelope,FaPhone} from "react-icons/fa";


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
const packagesFeatures = [
    {
        id:1,
        features:[
        
               "60-day chat history",
              "15 GB cloud storage"
        ]
    },
    {
        id:2,
        features:[
            "60-day chat history","50 GB cloud storage","24/7 Support"
        ]
    },
    {
        id:3,
        features:[
            "60-day chat history","Data security","100 GB cloud storage","24/7 Support"
        ]
    }
]
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
    },
    {
        id:2,
        link:'IT Department',
    },
    {
        id:3,
        link:'About Our Company',
    },
    {
        id:4,
        link:'Business Growth',
    },
    {
        id:5,
        link:'Make an Appointment',
    }
];
const services2 = [
    {
        id:1,
        icon:<FaTv color="#f8452d"/>,
        title:"Carefully Designed",
        description:"He lost his bottle loo don't get shirty with me ruddy.",
        background:"#2b70fa"
    },
    {
        id:2,
        icon:<FaCode color="#db0f30"/>,
        title:"Clean Modern Code",
        description:"He lost his bottle loo don't get shirty with me ruddy."
    },
    {
        id:3,
        icon:<FaUserFriends color="#f8452d"/>,
        title:"User Interactive",
        description:"He lost his bottle loo don't get shirty with me ruddy."
    },
    {
        id:4,
        icon:<FaMobile color="#db0f30"/>,
        title:"Choose an App",
        description:"He lost his bottle loo don't get shirty with me ruddy."
    },
    {
        id:5,
        icon:<FaRetweet color="#db0f30"/>,
        title:"Seamless Sync",
        description:"He lost his bottle loo don't get shirty with me ruddy."
    },
    {
        id:6,
        icon:<FaBell color="#db0f30"/>,
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
const detailsItems = [
    {
        id:1,
        icon:<FaHome color="#5754B1"/>,
        caption:"Fast Development"
    },
    {
        id:2,
        icon:<FaTag color="#5754B1"/>,
        caption:"App, UX"
    },
    {
        id:3,
        icon:<FaUserFriends color="#5754B1"/>,
        caption:"20-30 Employees"
    },
    {
        id:4,
        icon:<FaBookmark color="#5754B1"/>,
        caption:"Appie Template"
    },
    {
        id:5,
        icon:<FaGlobe color="#5754B1"/>,
        caption:"quomodosoft.com/appie"
        
    },

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

]

export {bannerItems,services,trafficItems,feedbacks,teamMembers,blogs,
    packages,questions,packagesFeatures,helpLinks,services2,sponsors,detailsItems,addressInfo}; 