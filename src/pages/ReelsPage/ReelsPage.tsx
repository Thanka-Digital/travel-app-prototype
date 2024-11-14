import Navbar from "@/components/global/Navbar";
import { reelsVidinfo } from "@/utils/reelsVidinfo";
import { Bookmark, LucideHeart, MessageCircleMore, Share2 } from "lucide-react";

interface ReelStructureProps {
  path: string;
  user: string;
  description: string;
  likes: string;
  saves: string;
  comments: string;
  shares: string;
}

const ReelStructure = (props: ReelStructureProps) => {
  const {
    path,
    user,
    description,
    likes,
    saves,
    comments,
    shares,
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
        <span className="flex flex-col gap-1 items-center">
          <LucideHeart size={28} />
          {likes}
        </span>
        <span className="flex flex-col gap-1 items-center">
          <Bookmark size={28} />
          {saves}
        </span>
        <span className="flex flex-col gap-1 items-center">
          <MessageCircleMore size={28} />
          {comments}
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
  return (
    <div className="h-full w-full">
      {
        reelsVidinfo.map((object, index) => (
          <ReelStructure
            path={object.path}
            user={object.user}
            description={object.description}
            likes={object.likes}
            saves={object.saves}
            comments={object.comments}
            shares={object.shares}
            key={index}
          />
        ))
      }

      <Navbar />
    </div>
  )
}