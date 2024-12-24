
import { getDataHandler } from "@/app/actions/users/getData"; 
import { getMyblog } from "@/app/constans/constans";
import AddBlog from "@/app/components/Globals/AddBlog";
import BlogPost from "../ProfileComponents/BlogPost";


// (profile) home
export default async function ProfileHomePage() {

  const blogData = await getDataHandler(getMyblog)

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className=" w-full md:w-[40%] bg-white p-4 rounded shadow-md md:h-[600px] md:overflow-y-auto">
        <AddBlog />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[58%] bg-gray-50 p-4 rounded shadow-md">
        <BlogPost blog={blogData} />

      </div>
    </div>
  );
}
