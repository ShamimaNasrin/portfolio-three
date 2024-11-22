/* eslint-disable no-unused-vars */
import Headings from "../../../components/Headings";
import { FaCircle } from "react-icons/fa";

const eduData = [
  {
    id: 1,
    year: "Sep, 2017 - Sep, 2021",
    degree: "Bachelor of Science in Computer Science and Engineering",
    institute: "Daffodil International University",
    gpa: "CGPA: 3.66 out of 4.00",
  },

  {
    id: 2,
    year: "2014 - 2016",
    degree: "Higher Secondary School Certificate",
    institute: "Panchagarh Govt. Women's College",
    gpa: "GPA: 4.25 out of 5.00",
  },

  {
    id: 3,
    year: "2009 - 2014",
    degree: "Secondary School Certificate",
    institute: "Panchagarh Govt. Girls High School",
    gpa: "GPA: 5.00 out of 5.00",
  },
];

const EducationSection = () => {
  return (
    <div id="education" className="my-12 bg-white ">
      <Headings text={"Education History"} />
      <div className="container mx-auto ">
        <div className="flex justify-between flex-col gap-16 items-start">
          {/* Text Content */}
          <div className="grid grid-cols-2 items-start md:grid-cols-1">
            {eduData.map((edu) => (
              <div key={edu.id} className="relative pl-14 pb-5 last:pb-2 ">
                {/* Vertical Line */}
                <div className="absolute inset-y-0 left-5 border-l border-gray-300"></div>
                {/* Icon */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center">
                  <FaCircle className="text-violet-600" />
                </div>
                {/* Content */}
                <span className="bg-gray-100 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                  {edu.year}
                </span>
                <h3 className="text-lg font-medium">{edu.degree}</h3>
                <h3 className="text-md text-gray-500 font-medium">
                  {edu.institute}
                </h3>
                <p className="text-sm leading-6 text-gray-600">{edu.gpa}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
