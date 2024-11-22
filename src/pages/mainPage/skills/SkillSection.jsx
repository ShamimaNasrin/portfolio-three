import Headings from "../../../components/Headings";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useFetchAllSkillsQuery } from "../../../redux/api/baseApi";

const SkillSection = () => {
  const { data: skills, isLoading } = useFetchAllSkillsQuery({});

  //   console.log("skills", skills);

  // Group skills by category
  const groupedSkills = skills?.data?.reduce((acc, skill) => {
    if (skill?.category) {
      acc[skill.category] = acc[skill.category] || [];
      acc[skill.category].push(skill);
    }
    return acc;
  }, {});

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div id="skills" className="pt-12 bg-white text-gray-800">
          <Headings text={"My Expertise"} />

          {groupedSkills && Object.keys(groupedSkills).length > 0 ? (
            Object.keys(groupedSkills).map((category) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-semibold text-violet-600 mb-6 capitalize">
                  {category}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedSkills[category].map((skill) => (
                    <div
                      key={skill._id}
                      className="flex flex-col items-center justify-center p-3 bg-white border border-violet-300 rounded-2xl shadow-lg hover:shadow-2xl hover:border-violet-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-md font-medium text-gray-800">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No skills data available.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default SkillSection;
