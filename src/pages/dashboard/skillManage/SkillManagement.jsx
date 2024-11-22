/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { AiOutlineEdit } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import LoadingSpinner from "../../../components/LoadingSpinner";
import SkillFormModal from "./SkillFormModal";
import ConfirmationModal from "../../../components/ConfirmationModal";
import NoDataFound from "../../../components/NoDataFound";
import {
  useAddNewSkillsMutation,
  useDeleteSkillsMutation,
  useFetchAllSkillsQuery,
} from "../../../redux/api/baseApi";

const headings = ["Skill Name", "Category", "Actions"];

const SkillManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  //   const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { data: skills, isLoading } = useFetchAllSkillsQuery();
  const [addNewSkill] = useAddNewSkillsMutation();
  const [deleteSkill] = useDeleteSkillsMutation();

  const handleAddSkill = async (newSkill) => {
    try {
      await addNewSkill(newSkill).unwrap();
      toast.success("Skill added successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add skill");
    }
    setShowAddModal(false);
  };

  //   const handleUpdateSkill = async (updatedSkill) => {
  //     try {
  //       // Assuming update mutation logic is added later
  //       toast.success("Skill updated successfully!");
  //     } catch (err) {
  //       console.error(err);
  //       toast.error("Failed to update skill");
  //     }
  //     setShowUpdateModal(false);
  //   };

  const handleDeleteSkill = async (id) => {
    try {
      await deleteSkill(id).unwrap();
      toast.success("Skill deleted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete skill");
    }
    setShowDeleteModal(false);
  };

  return (
    <div className="min-h-[70vh] xl:py-12 lg:py-10 py-7 xl:px-16 lg:px-16 md:px-10 px-7 bg-zinc-100">
      <h1 className="text-3xl font-bold mb-8 text-violet-600">
        Skill Management
      </h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-violet-600 text-white px-4 py-2 rounded-none hover:bg-violet-700 transition"
        >
          Add Skill
        </button>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <table className="mx-auto xl:w-[80%] lg:w-[80%] md:w-[70%] w-full text-left table-auto border-collapse">
          <thead>
            <tr>
              {headings.map((h, i) => (
                <th key={i} className="border-b border-gray-700 px-2 py-4">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {skills?.data?.length ? (
              skills?.data?.map((item) => (
                <tr key={item?._id}>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.name}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.category}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {/* <button
                      onClick={() => {
                        setSelectedItem(item);
                        // setShowUpdateModal(true);
                      }}
                      className="mr-2 text-lg"
                    >
                      <AiOutlineEdit />
                    </button> */}
                    <button
                      onClick={() => {
                        setSelectedItem(item);
                        setShowDeleteModal(true);
                      }}
                      className="text-lg text-red-600"
                    >
                      <FiTrash2 />
                    </button>

                    <ConfirmationModal
                      isOpen={showDeleteModal}
                      onClose={() => setShowDeleteModal(false)}
                      onConfirm={() => handleDeleteSkill(item?._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <NoDataFound />
            )}
          </tbody>
        </table>
      )}

      {showAddModal && (
        <SkillFormModal
          setCloseModal={setShowAddModal}
          onSubmit={handleAddSkill}
          isUpdating={false}
        />
      )}

      {/* {showUpdateModal && selectedItem && (
        <SkillFormModal
          setCloseModal={setShowUpdateModal}
          onSubmit={handleUpdateSkill}
          isUpdating={true}
          skill={selectedItem}
        />
      )} */}
    </div>
  );
};

export default SkillManagement;
