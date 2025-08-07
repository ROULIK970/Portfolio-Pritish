import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FaMedapps } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";


export default function PortfolioSidebar({showNav, setShowNav}) {
 

  const socials = [
    {
      name: "Twitter",
      to: "/twitter",
      Icon: <CiTwitter />,
    },
    {
      name: "Github",
      to: "/github",
      Icon: <FiGithub />,
    },
    {
      name: "LinkedIn",
      to: "/linkedin",
      Icon: <CiLinkedin />,
    },
  ];

  const navLinks = [
    {
      name: "Home",
      to: "/",
      Icon: <IoHomeOutline />,
    },
    {
      name: "About",
      to: "/",
      Icon: <CiCircleInfo />,
    },
    {
      name: "Resume",
      to: "/",
      Icon: <FaFileAlt />,
    },
    {
      name: "Portfolio",
      to: "/",
      Icon: <FaMedapps />,
    },
    {
      name: "Contact",
      to: "/",
      Icon: <FaPhoneAlt />,
    },
  ];

  return (
    <div
      className={`h-full fixed xl:translate-x-0 z-50 transition-transform duration-100 ease-in-out 
    ${showNav ? "translate-x-0" : "-translate-x-full"} bg-[#040b14] 
    `}
    >
      <Sidebar backgroundColor="#040b14">
        <div className="flex flex-col items-center ">
          <img
            className="rounded-full w-[120px] my-[15px] mx-auto"
            src="/profile-img.jpg"
            alt="image"
          />
          <h1 className="text-[#fff] mb-[15px] text-[28px] font-[700]">
            Pritish Bordoloi
          </h1>
          <div className="mb-[20px] text-[#fff] flex items-center justify-center">
            {socials.map((social, i) => (
              <a
                key={i}
                className=" mx-[2px] w-[40px] h-[40px] text-[22px] flex justify-center items-center hover:text-[#040b14] hover:bg-[#149ddd]  rounded-full"
                href={social.to}
              >
                {social.Icon}
              </a>
            ))}
          </div>
        </div>
        <Menu>
          {navLinks.map((el, index) => (
            <MenuItem
              onClick={() => setShowNav(false)}
              component={<a href={`#${el.name}`} />}
              style={{ backgroundColor: "#040b14" }}
              className="px-[10px] py-[10px] "
              key={index}
            >
              <div className="flex flex-row py-[15px] px-[10px] font-[400] text-[20px]  text-[#a8a9b4]  hover:text-[#149ddd]">
                <span className="mt-[3px] ">{el.Icon}</span>
                <h2 className="ml-[10px] ">{el.name}</h2>
              </div>
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
}
