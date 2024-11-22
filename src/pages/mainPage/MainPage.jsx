import SideBar from "./SideBar";
import About from "./about/About";
import EducationSection from "./education/EducationSection";

const MainPage = () => {
  return (
    <>
      <div className="bg-white flex gap-8 lg:px-4 md:px-8 px-4 relative z-50 ">
        <div className="lg:block hidden fixed top-1/2 -translate-y-1/2 ">
          <SideBar />
        </div>
        <div className="lg:ml-[450px] ">
          <About />
          <EducationSection />
        </div>
      </div>
    </>
  );
};

export default MainPage;
