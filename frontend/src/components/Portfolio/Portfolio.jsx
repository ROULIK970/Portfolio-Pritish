import React from "react";

export default function Portfolio() {
  const projects = [
    {
      name: "Puneri-Paltan",
      description: "A Website based on the Puneri-Paltan Kabbadi Team.",
      to: "https://puneri-kabbadi.netlify.app",
      thumbnail: "/puneri-paltan.png",
    },
    {
      name: "Dashboard",
      description: "lorem ipsum donero rigorto",
      to: "https://h-files-assignment.vercel.app/",
      thumbnail: "/h-files.png",
    },
    {
      name: "Tenzies",
      description: "lorem ipsum donero rigorto",
      to: "https://candid-daffodil-bc8876.netlify.app/",
      thumbnail: "/tenzies.png",
    },
  ];
  return (
    <section
      data-aos="fade-up"
      className="py-[60px] bg-[#f4fafd] "
      id="Portfolio"
    >
      <div className="mx-auto pb-[60px] px-[12px] container">
        <h2 className="text-[32px] font-[700]  pb-[20px]">Portfolio</h2>
        <div className="border-b-4 border-b-[#149ddd] w-[50px] mb-[20px]"></div>
        <p>
          A dedicated and passionate Node.js and React.js developer with a
          strong foundation in building modern, scalable, and responsive web
          applications. I specialize in creating seamless user experiences and
          robust backend systems, from initial concept to deployment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            className="group relative mx-auto transform transition-transform duration-500 hover:scale-105 cursor-pointer"
            href={project.to}
          >
            <div>
              <img
                className="h-[200px] w-[300px] rounded"
                src={project.thumbnail}
                alt=""
              />
              <div className="hidden absolute group-hover:flex top-0 right-0 left-0 bottom-0 text-white bg-black/60 h-full w-full p-[15px] items-center justify-center flex-col italic z-30">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
