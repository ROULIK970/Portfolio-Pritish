import React from "react";

import { FcNext } from "react-icons/fc";
import Skills from "../Skills/Skills";

 
export default function About() {

const aboutDetails = [
  { key: "Website: ", value: "https://pritish-portfolio.vercel.app" },
  { key: "Phone: ", value: "7002169563" },
  { key: "City: ", value: "Mumbai, India" },
  { key: "Degree: ", value: "Bachelor's" },
  { key: "Email: ", value: "bordoloipritish97@gmail.com" },
  { key: "Freelance: ", value: "Available" },
];



  return (
    <>
      <section data-aos="fade-up" className="py-[60px] " id="About">
        <div className="pb-[60px] px-[12px] mx-auto container">
          <div className="mb-[20px] ">
            <h2 className=" pb-[20px] text-[32px] font-[700] text-[#050d18] ">
              About
            </h2>
            <div className="border-b-4 border-b-[#149ddd] w-[50px]"></div>
          </div>
          <p>
            Hey I am a Junior Frontend Developer with nearly 1 year of
            experience with a track record of designing and implementing
            responsive, user-centric ecommerce websites. Skilled at
            collaborating with cross- functional teams to deliver high-quality
            products in a scrum framework.
          </p>
        </div>

        <div className="px-[12px] mx-auto container">
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-1/3 mt-[24px] px-[12px]">
              <img src="/about-img.png" alt="" />
            </div>
            <div className="lg:w-2/3 mt-[24px] px-[12px]">
              <h2 className="text-[#050d18] text-[24px] font-[700] mb-[8px]">
                MERN stack Developer | Full Stack Developer | UI/UX Designer
              </h2>
              <p className="py-[1rem] italic mb-[1rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, consequatur sapiente! Vero accusamus quisquam ut
                labore, magnam, inventore deserunt, nesciunt velit sed ratione
                quae. Repudiandae et quibusdam optio illum? Libero.
              </p>
              <div>
                <div className="flex flex-col px-[12px]">
                  <ul className="mb-[16px] grid grid-cols-1 lg:grid-cols-2">
                    {aboutDetails.map((detail) => (
                      <li className="flex mb-[20px]">
                        <FcNext className="mr-[5px] text-[16px] mt-[5px]" />
                        <div className="text-[13px] sm:text-[16px]">
                          {" "}
                          <strong className="mr-[10px]">{detail.key}</strong>
                          <span>{detail.value}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="py-[1rem] mb-[1rem]">
                My Name is Pritish Bordoloi and I am a Web Developer by
                profession and a part-time Table Tennis Coach by passion. That
                being said, I am a self-taught Developer or precisely, being
                taught by the likes of Colt Steele, Bob Ziroll and Hitesh
                Choudhary over the internet.I have started coding since after my
                graduation from BHU, initially learning HTML and CSS from
                Freedodecamp and then Udemy and hence forth built some personal
                projects of mine that you can view in Projects.I have worked as
                a Junior FrontEnd Developer with Arity Technologies and worked
                on issues like button functionality bugs, page responsiveness
                etc.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </>
  );
}




