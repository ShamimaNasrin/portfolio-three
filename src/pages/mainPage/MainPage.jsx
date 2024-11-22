import SideBar from "./SideBar";
import About from "./about/About";
import BlogSection from "./blogs/BlogSection";
import Contact from "./contact/Contact";
import EducationSection from "./education/EducationSection";
import ProjectSection from "./projects/ProjectSection";
import SkillSection from "./skills/SkillSection";

const MainPage = () => {
  return (
    <>
      <div className="bg-white flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col gap-8 lg:px-4 md:px-8 px-4 relative z-50 ">
        <div className="lg:block xl:fixed lg:fixed md:fixed top-1/2 -translate-y-1/2 ">
          <SideBar />
        </div>
        <div className="lg:ml-[450px] ">
          <About />
          <EducationSection />
          <SkillSection />
          <ProjectSection />
          <BlogSection />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default MainPage;
