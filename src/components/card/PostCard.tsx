import { Heart, MessageCircleMore } from "lucide-react";

export default function PostCard() {
  return (
    <div className="flex flex-col gap-3 bg-white shadow-xl p-3 rounded-2xl">
      <div className="flex gap-3 items-center">
        <img
          src="SplashImg/s3.png"
          alt="profile image"
          className="h-16 w-16 rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-xl font-bold">Jane Doe</p>
          <p className="text-gray-500">3 days ago</p>
        </div>
      </div>
      <p className="text-lg font-semibold">
        Went to the phewa lake, was fun. 👋
      </p>

      <div className="">
        <img src="SplashImg/s1.png" alt="post image" className="w-full h-52" />
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
