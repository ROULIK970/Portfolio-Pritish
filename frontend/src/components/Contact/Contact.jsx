import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "../ContactForm/ContactForm";

export default function Contact() {
  return (
    <section data-aos="fade-up" id="Contact" className="py-[60px]">
      <div className="mx-auto pb-[60px] px-[12px] container">
        <h2 className="text-[32px] font-[700]  pb-[20px]">Contact</h2>
        <div className="border-b-4 border-b-[#149ddd] w-[50px] mb-[20px]"></div>
        <p>
          A dedicated and passionate Node.js and React.js developer with a
          strong foundation in building modern, scalable, and responsive web
          applications. I specialize in creating seamless user experiences and
          robust backend systems, from initial concept to deployment.
        </p>
      </div>

      <div className="px-[12px] mx-auto">
        <div className="flex lg:flex-row flex-col">
          <div className="mt-[24px] px-[12px] lg:w-[41.66%]">
            <div className="p-[30px] flex flex-col shadow-2xl">
              <div className="mb-[40px] flex">
                <CiLocationOn className="text-[20px] text-[#149ddd] w-[44px] h-[44px] mr-[15px] flex justify-center items-center rounded-full hover:bg-[#149ddd] hover:text-[#fff]" />
                <div className="flex flex-col">
                  <h3 className="mb-[5px] text-[18px] font-[700]">Address</h3>
                  <p className="text-[14px]">Thane, Mumbai, India</p>
                </div>
              </div>
              <div className="mb-[40px] flex">
                <FaPhoneAlt className="text-[20px] text-[#149ddd] w-[44px] h-[44px] mr-[15px] flex justify-center items-center rounded-full hover:bg-[#149ddd] hover:text-[#fff]" />
                <div className="flex flex-col">
                  <h3 className="mb-[5px] text-[18px] font-[700]">Call Me</h3>
                  <p className="text-[14px]">7002169563</p>
                </div>
              </div>
              <div className="mb-[40px] flex">
                <MdOutlineEmail className="text-[20px] text-[#149ddd] w-[44px] h-[44px] mr-[15px] flex justify-center items-center rounded-full hover:bg-[#149ddd] hover:text-[#fff]" />
                <div className="flex flex-col">
                  <h3 className="mb-[5px] text-[18px] font-[700]">Email Me</h3>
                  <p className="text-[14px]">bordoloipritish97@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
}
