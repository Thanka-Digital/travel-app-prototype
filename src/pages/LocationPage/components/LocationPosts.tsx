import PostCard from "@/pages/post/components/PostCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "@/providers/Context/context";

export default function LocationPosts() {
  const { id } = useParams();
  const { posts } = useContext(PostContext);

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-3 mt-4 pb-28">
        {
          posts.filter((p) => p.locationId === Number(id)).map((object) => (
            <PostCard
              post={object}
              key={object.id}
            />
          ))
        }
      </div>
    </MaxWidthWrapper>
  );
}