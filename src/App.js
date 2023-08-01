import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Pages/Home/Home";
import AboutUs from './components/Pages/AboutUs/AboutUs';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from './components/Pages/Services/Services';
import Features from './components/Pages/Features/Features';
import PricingPage from './components/Pages/Pricing/PricingPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import TwoCoulumnPage from './components/Pages/TwoColumnPage/TwoColumnPage';
import ThreeColumnPage from './components/Pages/ThreeColumnPage/ThreeColumnPage';
import TeamMember1 from './components/Pages/Team1/Team1';
import TeamMember2 from './components/Pages/Team2/Team2';
import TeamMember3 from './components/Pages/Team3/Team3';
import TeamMember4 from './components/Pages/Team4/Team4';
import BlogOne from './components/Pages/Blog1/BlogOne';
import BlogTwo from './components/Pages/Blog2/BlogTwo';
import BlogThree from './components/Pages/Blog3/BlogThree';
import TeamMembers from './components/Pages/TeamMembers/TeamMembers';
import Error from './components/Pages/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/AboutUs",
      element:<AboutUs />
    },
    {
      path:"/Services",
      element:<Services />
    },
    {
      path:"/Features",
      element:<Features />
    },
    {
      path:"/Pricing",
      element:<PricingPage />
    },
    {
      path:"/Contact",
      element:<ContactPage />
    },
    {
      path:"/twoColumn",
      element:<TwoCoulumnPage />
    },
    {
      path:"/threeColumn",
      element:<ThreeColumnPage />
    },
    {
      path:"/Benjamin",
      element:<TeamMember1 />
    },
    {
      path:"/Ellen",
      element:<TeamMember2 />
    },
    {
      path:"/Bryan",
      element:<TeamMember3 />
    },
    {
      path:"/Amelia",
      element:<TeamMember4 />
    },
    {
      path:"/Blog1",
      element:<BlogOne />
    },
    {
      path:"/Blog2",
      element:<BlogTwo />
    },
    {
      path:"/Blog3",
      element:<BlogThree />
    }
    ,{
      path:"/Team",
      element:<TeamMembers />
    },
    {
      path:"/*",
      element:<Error />
    }
  ])
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router}/>
        </React.StrictMode>
    </div>
  );
}

export default App;
