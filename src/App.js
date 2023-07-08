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
    }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
