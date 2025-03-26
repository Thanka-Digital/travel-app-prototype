import LocationCard from "@/pages/LocationPage/components/LocationCard";
import BackButton from "@/components/global/BackButton";
import TASlider from "@/components/swiper/TASlider";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { locationDetailsData, locationInfo } from "@/utils/locationDetailsData";
import { Heart, MessageCircleMore } from "lucide-react";
import { useParams } from "react-router-dom";
import { PostContext } from "@/providers/Context/context";
import { useContext } from "react";
import { userList } from "@/utils/userList";

export default function PostDetailsPage() {
  const { id } = useParams();
  const { posts, postDispatch } = useContext(PostContext);
  const post = posts.find((p) => p.id === Number(id));
  const user = userList.find((user) => user.userId === post?.userId);

  const handleLike = () => {
    if (post) {
      if (post.isLiked) {
        postDispatch({
          type: "UNLIKE",
          payload: post?.id,
        });
      } else {
        postDispatch({
          type: "LIKE",
          payload: post?.id,
        });
      }
    }
  };

  return (
    <main className="text-black bg-white">
      <MaxWidthWrapper>
        <BackButton />

        <div className="flex flex-col gap-3 pt-16">
          <div className="flex items-center gap-2">
            <img
              src={user?.userImage}
              alt="profile image"
              className="object-cover w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-medium">{user?.userName}</p>
              <p className="text-sm font-medium text-gray-500">
                Posted : 3 days ago
              </p>
            </div>
          </div>
          <p className="text-sm font-medium">{post?.caption}</p>

          <TASlider>
            {post?.images.map((img, i) => (
              <div key={i}>
                <img
                  src={img}
                  alt="images"
                  className="object-cover w-full h-40"
                />
              </div>
            ))}
          </TASlider>

          <div className="flex gap-4 my-4 font-medium">
            <div className="flex items-center gap-1">
              <Heart
                size={24}
                fill={`${post?.isLiked ? "#FF7920" : "white"}`}
                color={`${post?.isLiked ? "#FF7920" : "#000000"}`}
                onClick={handleLike}
              />
              <p>{post?.likeCount}</p>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircleMore size={24} />
              <p>{post?.comments?.length}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 -mt-3">
            <img
              src="/SplashImg/s1.png"
              alt="profile image"
              className="w-8 h-8 rounded-full"
            />
            <section className="font-medium">
              <p className="text-sm">{post?.comments?.[0].user}</p>
              <p className="text-xs">{post?.comments?.[0].comment}</p>
            </section>
          </div>
          <p className="mt-1 text-sm font-medium text-gray-500">
            View all comments
          </p>
        </div>

        <div className="flex flex-col gap-4 py-4">
          <h1 className="text-lg font-medium">Posted About</h1>
          {locationInfo
            .filter((l) => l.id === Number(id))
            .map((object) => (
              <LocationCard location={object} key={object.id} />
            ))}
        </div>

        <div className="flex flex-col gap-2 pb-6">
          <p className="text-lg font-medium">
            Information shared by <span className="text-[#FF7920]">@jane</span>
          </p>

          {locationDetailsData.map((locationData, index) => (
            <div className="flex items-start gap-2" key={index}>
              <span className="text-gray-500">{locationData.icon}</span>
              <ul className="text-left list-disc">
                <p className="text-sm font-medium ">{locationData.label}</p>
                {locationData.types?.map((type) => (
                  <li key={type.id} className="ml-4">
                    {type.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
