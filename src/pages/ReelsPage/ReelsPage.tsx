import Navbar from "@/components/global/Navbar";
import TASlider from "@/components/swiper/TASlider";
import { ReelContext } from "@/providers/Context/context";
import { Bookmark, Loader, LucideHeart, MessageCircleMore, Share2 } from "lucide-react";
import { useContext } from "react";
import { useState, useEffect } from "react";

const ReelStructure = (props: Reel) => {
  const [loading, setLoading] = useState(false);
  const { reelDispatch } = useContext(ReelContext)
  const {
    path,
    user,
    description,
    saves,
    comments,
    shares,
    likes,
    isLoading,
  } = props;

  const handleLike = () => {
    if (props.isLiked) {
      reelDispatch({
        type: "UNLIKE",
        payload: props.id,
      })
    } else {
      reelDispatch({
        type: "LIKE",
        payload: props.id,
      })
    }
  }

  const handleSave = () => {
    if (props.isSaved) {
      reelDispatch({
        type: "UNSAVE",
        payload: props.id,
      })
    } else {
      reelDispatch({
        type: "SAVE",
        payload: props.id,
      })
    }
  }

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      isLoading
    }, 400);
  }

  useEffect(handleLoad, [])

  return (
    <div className="relative h-screen">
      {
        loading &&
        <div className="bg-transparent h-full w-full flex items-center justify-center">
          <Loader />
        </div>
      }
      <video
        src={path}
        autoPlay={true}
        loop
        className="h-full w-full"
      />

      <section className="absolute bottom-24 left-6 text-white flex flex-col gap-1">
        <p className="text-2xl">{user}</p>
        <p className="text-xl">{description}</p>
      </section>

      <section className="absolute bottom-32 right-4 flex flex-col gap-4">
        <button className="flex flex-col gap-1 items-center"
          onClick={() => {
            handleLike()
          }}>
          <LucideHeart size={28} color={props.isLiked ? "red" : "white"} fill={props.isLiked ? "red" : "transparent"} />
          {likes}
        </button>
        <button className="flex flex-col gap-1 items-center"
          onClick={() => {
            handleSave()
          }}
        >
          <Bookmark size={28} color={props.isSaved ? "red" : "white"} fill={props.isSaved ? "red" : "transparent"} />
          {saves}
        </button>
        <button className="flex flex-col gap-1 items-center">
          <MessageCircleMore size={28} />
          {comments.length}
        </button>
        <button className="flex flex-col gap-1 items-center">
          <Share2 size={28} />
          {shares}
        </button>
      </section>
    </div>
  )
}

export default function ReelsPage() {
  const { reels } = useContext(ReelContext);
  return (
    <div className="h-full w-full">
      <TASlider vertical={true}>
        {
          reels.map((object) => (
            <ReelStructure
              {...object}
              key={object.id}
            />
          ))
        }
      </TASlider>
      <Navbar />
    </div>
  )
}