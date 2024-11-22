import shamima from "../../assets/images/portrait.jpg";

const sidebarNavItems = [
  { link: "#experience" },
  { link: "#projects" },
  { link: "#skills" },
  { link: "#blogs" },
  { link: "#contact" },
];

const SideBar = () => {
  return (
    <div className="lg:w-[360px] bg-white p-6">
      <div className="h-40 w-40 mx-auto relative">
        <img
          src={shamima}
          alt="Shamima Nasrin"
          className="h-full w-full object-cover rounded-full relative z-10 border-4 border-violet-600"
        />
      </div>

      <div className="text-center mt-6">
        <h2 className="text-3xl font-bold text-gray-800">Shamima Nasrin</h2>
        <h3 className="text-lg mt-2 text-gray-600">Web Developer</h3>
        <p className="text-gray-600 mt-4">
          Passionate about building intuitive and scalable web applications. I
          specialize in creating efficient and user-friendly experiences.
        </p>
      </div>

      <div className="text-center mt-6">
        <a
          href="https://drive.google.com/file/d/1hHzCR5kW1HAhTz0BAJE63YCCbw4KvM00/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-violet-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-violet-700 transition duration-200"
        >
          Download Resume
        </a>
      </div>

      <div className="mt-8">
        <ul className="flex items-center gap-4">
          {sidebarNavItems.map(({ link }, index) => (
            <li key={index}>
              <a
                href={link}
                className="text-gray-700 font-medium hover:text-violet-600 transition duration-200"
              >
                {link?.charAt(1).toUpperCase() + link.slice(2)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
