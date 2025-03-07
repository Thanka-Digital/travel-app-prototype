import PostCard from "@/pages/post/components/PostCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { useContext } from "react";
import { PostContext } from "@/providers/Context/context";

export default function PostTabContent() {
  const post = useContext(PostContext)

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-3 mt-4 pb-28">
        {
          post.filter((p) => p.userId === 1).reverse().map((object) => (
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