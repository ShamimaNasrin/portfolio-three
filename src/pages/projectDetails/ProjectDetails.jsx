import { useParams } from "react-router-dom";
import { useFetchProjectByIdQuery } from "../../redux/api/baseApi";
import LoadingSpinner from "../../components/LoadingSpinner";

const ProjectDetails = () => {
  const { id } = useParams();
  const { data: project, isLoading } = useFetchProjectByIdQuery(id);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div
          id="projects"
          className="pt-12 bg-gray-100 text-gray-800 min-h-screen"
        >
          <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-start gap-8 px-5 py-10 max-w-6xl mx-auto bg-white shadow-lg rounded-md">
            {/* Image Section */}
            <div className="xl:w-[40%] lg:w-[40%] md:w-[40%] w-full">
              <img
                src={
                  project?.data?.images ||
                  "https://i.ibb.co/sJ6MZDH/default-image.jpg"
                }
                alt={project?.data?.name}
                className="w-full h-auto rounded-md shadow-sm"
              />
            </div>

            {/* Details Section */}
            <div className="xl:w-[60%] lg:w-[60%] md:w-[60%] w-full">
              <h2 className="text-2xl font-bold mb-4">{project?.data?.name}</h2>
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-semibold">Company:</span>{" "}
                {project?.data?.company || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-semibold">Technologies:</span>{" "}
                {project?.data?.technologies}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {project?.data?.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project?.data?.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-gray-900 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project?.data?.clientgit_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-800 text-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition"
                >
                  Client Repo
                </a>
                <a
                  href={project?.data?.servergit_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-800 text-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition"
                >
                  Server Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
