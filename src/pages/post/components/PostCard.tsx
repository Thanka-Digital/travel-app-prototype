import { PostStateDispatch } from "@/providers/Context/context";
import { userList } from "@/utils/userList";
import { Bookmark, Heart } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  post: Post
}

export default function PostCard(props: PostCardProps) {
  const postDispatch = useContext(PostStateDispatch)
  const {
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

  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 bg-white shadow-lg p-3 rounded-2xl">

      <div className="flex gap-2 items-center">
        <img
          src={user?.userImage}
          alt="profile image"
          className="h-12 w-12 rounded-full"
        />
        <div className="flex flex-col">
          <p className="font-medium">{user?.userName}</p>
          <p className="text-gray-500 text-sm font-medium">Posted : 3 days ago</p>
        </div>
      </div>

      <p className="text-md">
        {caption}
      </p>

      <div
        className="grid grid-rows-2 grid-cols-5 gap-2 "
        onClick={() => navigate("/post-detail")}
      >
        {
          images.map((object, index) => (
            <img
              src={object}
              alt={object}
              className={`w-full rounded-md object-cover
                 ${index == 0 ? "h-[120px] row-span-2 col-span-3" : "h-[56px] row-span-1 col-span-2"}`}
              key={index}
            />
          ))
        }
      </div>

      <div className="flex gap-4 font-medium">
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