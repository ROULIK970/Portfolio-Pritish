import React from "react";

export default function Resume() {
  return (
    <section data-aos="fade-up" className="py-[60px] container" id="Resume">
      <div className="mx-auto pb-[60px] px-[12px] ">
        <h2 className="text-[32px] font-[700]  pb-[20px]">Resume</h2>
        <div className="border-b-4 border-b-[#149ddd] w-[50px] mb-[20px]"></div>
        <p>
          A dedicated and passionate Node.js and React.js developer with a
          strong foundation in building modern, scalable, and responsive web
          applications. I specialize in creating seamless user experiences and
          robust backend systems, from initial concept to deployment.
        </p>
      </div>

      <div className="mx-auto px-[12px]">
        <div className="flex lg:flex-row  flex-col">
          <div className="px-[12px] lg:w-1/2 flex flex-col">
            <div>
              <h3 className="text-[26px] font-[700] my-[20px]">Summary</h3>
              <div className="ps-[20px] border-l-2 border-l-[#149ddd]">
                <h4 className="text-[18px] text-[#272829] font-[600] mb-[10px]">
                  PRITISH BORDOLOI
                </h4>
                <p className="italic mb-[16px] ">
                  Junior Frontend Developer with nearly 1 year of experience
                  with a track record of designing and implementing responsive,
                  user-centric ecommerce websites. Skilled at collaborating with
                  cross- functional teams to deliver high-quality products in a
                  scrum framework.
                </p>
                <ul className="ps-[20px] mb-[1rem] list-disc ">
                  <li className="pb-[10px]">Mumbai, India</li>
                  <li className="pb-[10px]">bordoloipritish97@gmail.com</li>
                  <li className="pb-[10px]">7002169563</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-[26px] font-[700] my-[20px]">Education</h3>
              <div className="ps-[20px] border-l-2 border-l-[#149ddd]">
                <h4 className="text-[18px] text-[#272829] font-[600] mb-[10px]">
                  Bachelor of Arts(Philosophy)
                </h4>
                <h5 className="py-[5px] px-[15px] text-[16px] mb-[10px] font-[600]">
                  2017 - 2020
                </h5>
                <p className="italic mb-[1rem]">
                  Banaras Hindu University(BHU), Varanasi,{" "}
                  <strong>(7.75 CGPA)</strong>
                </p>

                <ul className="ps-[20px] mb-[1rem] list-disc ">
                  <li className="pb-[10px]">
                    Started with Scrimba courses ‘Learn React for Free’ and ‘The
                    Advanced React Course’ mentored by Bob Ziroll in March 2022
                    and completed in June 2022.
                  </li>
                  <li className="pb-[10px]">
                    Started with Udemy course ‘Web Development Vanilla JS/React’
                    mentored by Colt Steele in January 2022 and completed in
                    February 2022.
                  </li>
                  <li className="pb-[10px]">
                    Completed NodeJS and ReactJS course at TryCatch, Mumbai from
                    April - July 2025{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-[12px] lg:w-1/2 flex flex-col">
            <h3 className="text-[26px] font-[700] my-[20px]">
              Professional Experience
            </h3>

            <div className="ps-[20px] border-l-2 border-l-[#149ddd]">
              <h4 className="text-[18px] text-[#272829] font-[600] mb-[10px]">
                JUNIOR FRONTEND DEVELOPER
              </h4>
              <h5 className="py-[5px] px-[15px] text-[16px] mb-[10px] font-[600]">
                March 2023 – December 2023
              </h5>
              <p className="italic mb-[1rem]">
                Arity Technologies, Gurugram, Delhi
              </p>
              <ul className="ps-[20px] mb-[1rem] list-disc ">
                <li className="pb-[10px]">
                  Have completed Button component functionality related bugs and
                  designing with React, React Router and SCSS in one sprint.
                </li>
                <li className="pb-[10px]">
                  Have completed 3 web pages designing bugs with SCSS in two
                  sprints. These web pages involved targeting media queries for
                  specific breakpoints across various devices.
                </li>
                <li className="pb-[10px]">
                  Collaborating with senior developer for constructive feedback
                  for fixing bugs relating to button functionality in one
                  sprint.
                </li>
                <li>
                  Collaborated with back-end developers to merge front-end
                  elements with server-side functionalities.
                </li>
                <li>
                  Ensured that components met accessibility standards (e.g.,
                  proper alt text for images, semantic HTML tags in two
                  sprints.)
                </li>
                <li>
                  Ensuring front-end validation with Bootstrap 5 in one sprint.
                </li>
              </ul>

              <h4 className="text-[18px] text-[#272829] font-[600] mb-[10px] mt-[20px]">
                TABLE TENNIS COACH
              </h4>
              <h5 className="py-[5px] px-[15px] text-[16px] mb-[10px] font-[600]">
                March 2024 – March 2025
              </h5>

              <p className="italic mb-[1rem]">Tree Of Skills, Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
