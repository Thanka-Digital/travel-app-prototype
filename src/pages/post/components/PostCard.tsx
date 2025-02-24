import { Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostCard() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(200);

  const handleLike = () => {
    like ? setCount(count - 1)
      : setCount(count + 1);
    setLike(!like);
  }

  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 bg-white shadow-lg p-3 rounded-2xl">
      <div className="flex gap-2 items-center">
        <img
          src="SplashImg/s3.png"
          alt="profile image"
          className="h-12 w-12 rounded-full"
        />
        <div className="flex flex-col">
          <p className="font-medium">Jane Doe</p>
          <p className="text-gray-500 text-sm font-medium">Posted : 3 days ago</p>
        </div>
      </div>
      <p className="text-md">
        Went to the phewa lake, was fun. 👋
      </p>

      <div
        className="grid grid-rows-2 grid-cols-5 gap-2 "
        onClick={() => navigate("/post-detail")}
      >
        <img
          src="SplashImg/s1.png"
          alt="post image"
          className="w-full h-[120px] rounded-md  row-span-2 col-span-3 object-cover"
        />
        <img
          src="SplashImg/s2.png"
          alt="post image"
          className="w-full h-[56px] rounded-md row-span-1 col-span-2 object-cover"
        />
        <img
          src="SplashImg/s3.png"
          alt="post image"
          className="w-full h-[56px] rounded-md row-span-1 col-span-2 object-cover"
        />
      </div>

      <div className="flex gap-4 font-medium">
        <span className="flex gap-1 items-center">
          <Heart size={24}
            fill={`${like ? "#FF7920" : "white"}`}
            color={`${like ? "#FF7920" : "#000000"}`}
            onClick={handleLike}
          />
          <p>{count}</p>
        </span>
        {/* <div className="flex gap-1 items-center">
          <MessageCircleMore size={24} />
          <p>23.1k</p>
        </div> */}
      </div>
    </div>
  );
}