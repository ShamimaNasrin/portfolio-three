import { Link } from "react-router-dom";
import Headings from "../../../components/Headings";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useFetchAllProjectsQuery } from "../../../redux/api/baseApi";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const { data: projects, isLoading } = useFetchAllProjectsQuery({});

  // console.log("projects", projects);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div id="projects" className="pt-12 bg-white text-gray-800">
          <Headings text={"My Projects"} />
          <div className="flex flex-wrap gap-8">
            {projects?.data?.map((project) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                key={project?._id}
                className="bg-white w-full max-w-xs rounded-lg shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project?.images}
                    alt={project?.name}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-400 to-transparent opacity-60"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold text-violet-600 mb-2">
                    {project?.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {project?.description}
                  </p>

                  {/* Technologies */}
                  <p className="text-gray-500 text-xs mb-4">
                    <strong>Technologies:</strong> {project?.technologies}
                  </p>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    {project?.live_url && (
                      <a
                        href={project?.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-500 font-medium hover:underline"
                      >
                        Live Demo →
                      </a>
                    )}

                    <Link to={`/projectDetails/${project?._id}`}>
                      <button className="text-gray-600 text-sm hover:underline">
                        details
                      </button>
                    </Link>
                  </div>

                  {/* Decorative Animations */}
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-violet-200 rounded-full opacity-50 group-hover:scale-125 transform transition-all duration-300"></div>
                  <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-violet-300 rounded-full opacity-50 group-hover:scale-125 transform transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectSection;
