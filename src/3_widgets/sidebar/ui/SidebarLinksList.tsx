import React from "react";
import { Link } from "react-router";

const SidebarLinksList: React.FC = () => {
  const sidebarLinks = [
    { value: "Legal", link: "#!" },
    { value: "Safety & Privacy Center", link: "#!" },
    { value: "Privacy Policy", link: "#!" },
    { value: "Cookies", link: "#!" },
    { value: "About Ads", link: "#!" },
    { value: "Accessibility", link: "#!" },
    { value: "Notice at Collection", link: "#!" },
    { value: "Your Privacy Choices", link: "#!" },
  ];

  return (
    <div className="flex flex-wrap gap-y-2 mb-8 max-md:mb-5">
      {sidebarLinks.map((el, i) => (
        <Link
          className="text-gray-300 font-normal not-last:mr-4 text-xm/[126%] transition duration-300 ease-in-out hover:scale-105  hover:text-white"
          key={i}
          to={el.link}
        >
          {el.value}
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinksList;
