import { FaLaptopCode, FaTasks, FaBlog } from "react-icons/fa";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Skill Management",
    icon: <FaLaptopCode className="text-4xl text-blue-500" />,
    description: "Oversee and update skills to align with your goals.",
    bgColor: "bg-blue-100",
    link: "/dashboard/skill-management",
  },
  {
    title: "Project Management",
    icon: <FaTasks className="text-4xl text-teal-500" />,
    description: "Track, manage, and organize ongoing projects.",
    bgColor: "bg-teal-100",
    link: "/dashboard/project-management",
  },
  {
    title: "Blog Management",
    icon: <FaBlog className="text-4xl text-orange-500" />,
    description: "Write, edit, and maintain blog posts effectively.",
    bgColor: "bg-orange-100",
    link: "/dashboard/blog-management",
  },
];

const DashboardMain = () => {
  return (
    <div className="min-h-screen xl:py-12 lg:py-10 py-7 xl:px-16 lg:px-16 md:px-10 px-7 bg-zinc-100">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-center mb-8 text-violet-600"
      >
        Admin Dashboard
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: 20 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between items-center text-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ${section.bgColor}`}
          >
            <div className="mb-4">{section.icon}</div>
            <h2 className="text-xl font-bold text-gray-700">{section.title}</h2>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <a
              href={section.link}
              className="inline-block px-4 py-2 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Manage
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DashboardMain;
