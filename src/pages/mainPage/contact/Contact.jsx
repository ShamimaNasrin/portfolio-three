import { useForm } from "react-hook-form";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import Headings from "../../../components/Headings";

const arr = [
  {
    id: 1,
    title: "Call me",
    content: "+880 000003333",
    icon: <FaPhoneAlt />,
  },
  {
    id: 2,
    title: "Email",
    content: "shamima01221@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    id: 3,
    title: "Location",
    content: "Dhaka, Bangladesh",
    icon: <FaMapMarkerAlt />,
  },
];

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div id="contact" className="bg-white py-12 ">
      <Headings text={"Contact Me"} />

      {/* Contact Info and Form */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          {arr.map((contact) => (
            <div key={contact.id} className="flex items-center gap-4">
              <div className="bg-violet-600 text-white p-3 rounded-full text-xl">
                {contact.icon}
              </div>
              <div>
                <p className="text-gray-500 text-sm">{contact.title}</p>
                <h3 className="text-md font-medium">{contact.content}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-gray-50 shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-violet-600 mb-6">
            Send a Message
          </h3>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true })}
                className="border border-gray-300 rounded-md p-3 mt-1 focus:ring-2 focus:ring-violet-600 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                className="border border-gray-300 rounded-md p-3 mt-1 focus:ring-2 focus:ring-violet-600 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                {...register("message", { required: true })}
                className="border border-gray-300 rounded-md p-3 mt-1 focus:ring-2 focus:ring-violet-600 focus:outline-none"
                placeholder="Write your message"
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-violet-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-violet-700 transition duration-300 flex items-center gap-2 justify-center"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
