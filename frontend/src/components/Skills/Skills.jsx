import React from 'react'

export default function names() {
    
    const skills = [
      { name: "React", progress: "90%" },
      { name: "Node.js", progress: "90%" },
      { name: "MongoDB", progress: "70%" },
      { name: "JavaScript", progress: "80%" },
      { name: "Express", progress: "70%" },
      { name: "Tailwind CSS", progress: "90%" },
      { name: "NextJs", progress: "60%" },
      { name: "Redux", progress: "80%" },
    ];


  return (
    <section data-aos="fade-up" className="py-[60px] bg-[#f4fafd]">
      <div className='container'>
        <div className="mx-auto pb-[60px] px-[12px] ">
          <h2 className="text-[32px] font-[700]  pb-[20px]">Skills</h2>
          <div className="border-b-4 border-b-[#149ddd] w-[50px] mb-[20px]"></div>         
        </div>
        <div className="px-[12px] mx-auto ">
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-6">
            {skills.map((skill) => (
              <div>
                <h2>{skill.name}</h2>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full "
                    style={{ width: skill.progress }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
