import Headings from "../../../components/Headings";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useFetchAllBlogsQuery } from "../../../redux/api/baseApi";

const BlogSection = () => {
  const { data: blogs, isLoading } = useFetchAllBlogsQuery({});
  console.log("blogs", blogs);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div id="blogs" className="pt-12 bg-white text-gray-800">
          <Headings text={"My Blogs"} />
          {blogs?.data?.map((blog) => (
            <div
              key={blog?._id}
              className="flex xl:flex-row lg:flex-row sm:flex-row md:flex-col flex-col mb-4 items-start bg-white p-4 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="xl:w-[30%] lg:w-[30%] sm:w-[30%] md:w-full w-full h-[160px] rounded-lg overflow-hidden">
                <img
                  src={
                    blog?.images
                      ? blog.images
                      : "https://i.ibb.co/sJ6MZDH/default-image.jpg"
                  }
                  alt={blog?.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="xl:w-[70%] lg:w-[70%] sm:w-[70%] md:w-full w-full text-start mt-3 md:mt-0 px-4">
                <h3 className="text-lg font-semibold text-violet-600 mb-2 line-clamp-1">
                  {blog?.title}
                </h3>
                <div
                  className="text-sm text-gray-600 mb-3 line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: blog?.description,
                  }}
                ></div>
                <p className="text-xs text-gray-500">
                  <strong>Date:</strong>{" "}
                  {new Date(blog?.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BlogSection;
