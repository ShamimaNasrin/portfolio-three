import Headings from "../../../components/Headings";

const About = () => {
  return (
    <div id="about" className="pt-12 bg-white text-gray-800">
      <Headings text={"About Me"} />
      <div className="container mx-auto ">
        <div className="flex justify-between flex-col gap-16 items-start">
          {/* Text Content */}
          <div className="max-w-[660px]">
            <p>
              Hello, I’m Shamima Nasrin a web developer from Bangladesh, I have
              completed my graduation in Computer Science and Engineering in
              2021.
            </p>
            <p className="mt-4">
              I enjoy building interactive and dynamic web applications, with a
              strong focus on the MERN stack.
            </p>
            <p className="mt-4">
              My goal is to create innovative and efficient solutions that
              enhance user experiences and push the boundaries of web
              development.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="text-center p-4 border-b-4 border-violet-600">
              <span className="text-violet-600 text-5xl font-bold">1+</span>
              <p className="mt-2 text-lg font-medium text-gray-700">
                Years of Experience
              </p>
            </div>
            <div className="text-center p-4 border-b-4 border-violet-600">
              <span className="text-violet-600 text-5xl font-bold">24/7</span>
              <p className="mt-2 text-lg font-medium text-gray-700">Support</p>
            </div>
            <div className="text-center p-4 border-b-4 border-violet-600">
              <span className="text-violet-600 text-5xl font-bold">8+</span>
              <p className="mt-2 text-lg font-medium text-gray-700">
                Completed Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
