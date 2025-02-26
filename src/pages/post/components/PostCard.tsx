import { PostStateDispatch } from "@/providers/Context/context";
import { userList } from "@/utils/userList";
import { Bookmark, Heart } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  post: Post
}

export default function PostCard(props: PostCardProps) {
  const navigate = useNavigate();
  const postDispatch = useContext(PostStateDispatch)
  const {
    id,
    caption,
    userId,
    likeCount,
    images,
    profile = false
  } = props.post;

  const handleLike = () => {
    if (props.post.isLiked) {
      postDispatch({
        type: "UNLIKE",
        payload: props.post.id,
      })
    } else {
      postDispatch({
        type: "LIKE",
        payload: props.post.id,
      })
    }
  }

  const [bookmark, setBookmark] = useState(false);

  const user = userList.find((user) => user.userId === userId)

  const handleBookmark = () => {
    setBookmark(!bookmark)
  }

  return (
    <div
      className="flex flex-col gap-2 bg-white shadow-lg p-3 rounded-2xl"
      onClick={() => navigate(`/post-details/${id}`)}
    >

      <div className="flex gap-2 items-center">
        <img
          src={user?.userImage}
          alt="profile image"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="font-medium">{user?.userName}</p>
          <p className="text-gray-500 text-sm font-medium">Posted : 3 days ago</p>
        </div>
      </div>

      <p className="text-md">
        {caption}
      </p>

      <div className={`grid grid-rows-2 gap-2 grid-cols-4 max-h-[120px]`}>
        {
          images.slice(0, 3).map((object, index) => (
            <div
              key={index}
              className={`relative
                ${images.length === 1 && "row-span-2 col-span-4"} 
                ${images.length === 2 && "row-span-2 col-span-2"}
                ${images.length >= 3 && index === 0 ? "row-span-2 col-span-2" : "row-span-1 col-span-2"}
                `}
            >
              <img
                src={object}
                alt={object}
                className={`w-full rounded-md object-cover h-full`}
              />
              {(images.length > 3 && index === 2) && (
                <span className="absolute rounded-md top-0 bottom-0 right-0 left-0 bg-black/35 flex items-center justify-center text-white text-xl">
                  +{images.length - 3}
                </span>
              )}
            </div>
          ))
        }
      </div>

      <div className="flex gap-4 font-medium" onClick={(e) => e.stopPropagation()}>
        <span className="flex gap-1 items-center">
          <Heart size={24}
            fill={`${props.post.isLiked ? "#FF7920" : "white"}`}
            color={`${props.post.isLiked ? "#FF7920" : "#000000"}`}
            onClick={handleLike}
          />
          <p>{likeCount}</p>
        </span>
        {
          profile &&
          <Bookmark size={24}
            fill={`${bookmark ? "#FF7920" : "white"}`}
            color={`${bookmark ? "#FF7920" : "#000000"}`}
            onClick={handleBookmark}
          />
        }

      </div>
    </div>
  );
}