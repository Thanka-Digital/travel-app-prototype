import Navbar from "@/components/global/Navbar";
import TASlider from "@/components/swiper/TASlider";
import { ReelContext, ReelStateDispatch } from "@/providers/Context/context";
import { Bookmark, LucideHeart, MessageCircleMore, Share2 } from "lucide-react";
import { useContext } from "react";

interface ReelStructureProps {
  index: number;
  path: string;
  user: string;
  description: string;
  likes: number;
  saves: number;
  comments: {
    [key: string]: any
  }[];
  shares: number;
  isLiked: boolean;
  isSaved: boolean;
}

const ReelStructure = (props: ReelStructureProps) => {
  const reelDispatch = useContext(ReelStateDispatch)

  const handleLike = () => {
    if (!props.isLiked) {
      reelDispatch({
        type: "LIKE",
        payload: props.index,
      })
    } else {
      reelDispatch({
        type: "UNLIKE",
        payload: props.index,
      })
    }
  }

  const {
    path,
    user,
    description,
    saves,
    comments,
    shares,
    likes,
  } = props;

  return (
    <div className="relative">
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
        <span className="flex flex-col gap-1 items-center">
          <Bookmark size={28} />
          {saves}
        </span>
        <span className="flex flex-col gap-1 items-center">
          <MessageCircleMore size={28} />
          {comments.length}
        </span>
        <span className="flex flex-col gap-1 items-center">
          <Share2 size={28} />
          {shares}
        </span>
      </section>

    </div>
  )
}

export default function ReelsPage() {
  const reels = useContext(ReelContext);

  return (
    <div className="h-full w-full">
      <TASlider vertical={true}>
        {
          reels.map((object, index) => (
            <ReelStructure
              {...object}
              index={index}
              key={index}
            />
          ))
        }
      </TASlider>
      <Navbar />
    </div>
  )
}