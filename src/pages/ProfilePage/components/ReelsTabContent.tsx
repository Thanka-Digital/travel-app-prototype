import { reelsVidinfo } from "@/utils/reelsVidinfo";
import { Eye } from "lucide-react";
import { useRef } from "react";

export default function ReelsTabContent() {
  return (
    <div className="grid grid-cols-3 mx-4 pb-24">
      {
        reelsVidinfo.map((object, index) => (
          <ProfileReels
            path={object.path}
            views={object.views}
            key={index}
          />
        ))
      }
    </div>
  )
}

const ProfileReels = ({ path, views }: { path: string, views: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  }

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current!.currentTime = 0;
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={path}
        autoPlay={false}
        loop
        className="h-auto w-full p-2 brightness-50 rounded-xl"
      />
      <span className="flex gap-1 absolute bottom-4 left-4 text-xs text-white">
        <Eye color="white" size={16} />
        {views}
        <p>views</p>
      </span>
    </div>
  )
}