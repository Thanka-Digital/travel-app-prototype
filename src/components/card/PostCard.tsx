import { Heart, MessageCircleMore } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PostCard() {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-3 bg-white p-3 rounded-2xl"
      style={{ boxShadow: "2px 2px 2px 2px #1F1F1F1F" }}
    >
      <div className="flex gap-3 items-center">
        <img
          src="SplashImg/s3.png"
          alt="profile image"
          className="h-12 w-12 rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-lg font-bold">Jane Doe</p>
          <p className="text-gray-500 font-medium">Posted : 3 days ago</p>
        </div>
      </div>
      <p className="text-md font-semibold">
        Went to the phewa lake, was fun. 👋
      </p>

      <div
        className="grid grid-rows-2 grid-flow-col gap-2 "
        onClick={() => navigate("/post-details")}
      >
        <div className="w-full row-span-2">
          <img
            src="SplashImg/s1.png"
            alt="post image"
            className="w-full h-full rounded-md"
          />
        </div>
        <div className=" row-span-1 ">
          <img
            src="SplashImg/s2.png"
            alt="post image"
            className="w-full rounded-md"
          />
        </div>
        <div className=" row-span-1 relative">
          <img
            src="SplashImg/s3.png"
            alt="post image"
            className="w-full rounded-md brightness-50"
          />
          <p className="absolute top-[45%] left-[40%] text-white text-xl font-semibold ">
            +3
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-1 items-center">
          <Heart size={32} fill="#FF7920" />
          <p className="text-lg font-medium">400k</p>
        </div>
        <div className="flex gap-1 items-center">
          <MessageCircleMore size={32} />
          <p className="text-lg font-medium">23.1k</p>
        </div>
      </div>
    </div>
  );
}
