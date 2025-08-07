import React from "react";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div data-aos="fade-up" className="relative" id="Home">
      <img className="w-full h-full mx-auto grayscale" src="/profile-img.jpg" alt="" />
      <h2 data-aos="fade-up" className="mb-[5px] absolute left-[70px] top-[50%] text-[32px] md:text-[64px] text-white drop-shadow-lg font-[400]">
        Pritish Bordoloi
      </h2>
      

      <ReactTyped
        strings={["Web Developer", "MERN Stack Developer", "Athlete"]}
        typeSpeed={50}
        backSpeed={30}
        loop
        className="absolute left-[70px] top-[60%] text-[18px] md:text-[26px] border-b-4 mt-4 border-b-[#149ddd] text-white drop-shadow-lg font-[400]"
        data-aos="fade-up"
      />
    </div>
  );
}
