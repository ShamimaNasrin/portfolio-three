/* eslint-disable react/prop-types */
import { useState } from "react";

const SkillFormModal = ({ setCloseModal, onSubmit, isUpdating, skill }) => {
  const [formData, setFormData] = useState({
    name: skill?.name || "",
    category: skill?.category || "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrorMessage("");
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.category.trim()) {
      setErrorMessage("All fields are required.");
      return;
    }

    setErrorMessage("");
    onSubmit(formData); // Pass the data to the parent
    setCloseModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-7 w-[450px] max-h-[85vh] overflow-y-auto rounded-md relative">
        <button
          onClick={() => setCloseModal(false)}
          className="absolute right-2 top-2 text-white bg-violet-600 hover:bg-gray-700 px-2 py-1"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          {isUpdating ? "Update Skill" : "Add Skill"}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Skill Name */}
          <label className="block mb-4">
            <span className="block text-gray-800 font-medium mb-2">
              Skill Name
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter skill name"
              className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </label>

          {/* Skill Category */}
          <label className="block mb-4">
            <span className="block text-gray-800 font-medium mb-2">
              Category
            </span>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="tools">Tools</option>
            </select>
          </label>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-violet-500 text-white rounded-lg shadow-sm hover:bg-violet-900 transition"
            disabled={
              !formData.name || !formData.category || errorMessage !== ""
            }
          >
            {isUpdating ? "Update Skill" : "Add Skill"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillFormModal;
