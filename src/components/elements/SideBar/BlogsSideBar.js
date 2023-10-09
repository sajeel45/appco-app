import { Link } from "react-router-dom";
import { recentBlogs, tags, categories } from "../../../data/data";
import { FaChevronRight } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="blogs-side-bar-wrapper">
      <div className="blogs-side-bar-categories-wrapper">
        <span>Categories</span>
        <div className="purple-bar mt-2"></div>
        <div className="categories-list-wrapper">
          <ul>
            {categories.map((item, index) => (
              <li key={index}>
                <FaChevronRight color="#5653b1" />
                <Link to="#" className="mx-2">
                  {item.category}
                </Link>
                {item.spacing}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="other-blogs-wrapper">
        <div className="other-blogs-heading-wrapper">
          <span>Recent Posts</span>
        </div>
        <div className="purple-bar mt-2"></div>
        <ul>
          {recentBlogs.map((item, index) => (
            <>
              <li key={index}>
                <span>{item.icon}</span>
                <Link to={item.link}>{item.title}</Link>
                {item.border}
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="side-tags-wrapper">
        <span>Recent Tags</span>
        <div className="purple-bar mt-2"></div>
        <div className="tags-wrapper mt-3">
          {tags.map((item, index) => (
            <div className="tag-wrapper" key={index}>
              <span>
                <Link to="#">{item.tag}</Link>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="side-bar-about-us-wrapper">
        <span>About Us</span>
        <div className="purple-bar mt-2"></div>
        <div className="side-bar-about-content">
          <p>
            At Appico, we are passionate about helping app developers and
            businesses unlock the full potential of their mobile applications.
            With our in-depth expertise in mobile app monetization, we aim to
            provide valuable insights and strategies to maximize app revenue.
            Our team of industry experts has curated a comprehensive guide on
            "17 Effective Ways to Monetize Mobile Apps," offering actionable
            tips and innovative approaches to boost your app's profitability.
            Whether you're a startup or an established company, our goal is to
            empower you with the knowledge and tools needed to thrive in the
            competitive app market. Join us on this monetization journey and
            take your app's earnings to new heights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
