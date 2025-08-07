import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import PortfolioSidebar from "./components/PortfolioSidebar/PortfolioSidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "./components/Footer/Footer";

function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const makeNavShow = () => {
    setShowNav(true);
  };
  const makeNavHide = () => {
    setShowNav(false);
  };

  return (
    <div className="flex flex-row ">
      <PortfolioSidebar showNav={showNav} setShowNav={setShowNav} />
      <div className="flex-1 z-0 bg-white xl:ml-[250px]">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
        {showNav ? (
          <IoClose
            onClick={makeNavHide}
            className=" xl:hidden bg-[#149ddd] fixed top-[20px] right-[20px] cursor-pointer text-white text-[34px] p-[4px] rounded-full"
          />
        ) : (
          <GiHamburgerMenu
            onClick={makeNavShow}
            className="fixed bg-[#149ddd] xl:hidden top-[20px] right-[20px] cursor-pointer text-white text-[34px] p-[4px] rounded-full"
          />
        )}
      </div>
    </div>
  );
}

export default App;
