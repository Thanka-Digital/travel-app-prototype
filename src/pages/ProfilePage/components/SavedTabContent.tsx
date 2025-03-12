import PostCard from "@/pages/post/components/PostCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { userList } from "@/utils/userList";
import { useContext } from "react";
import { PostContext } from "@/providers/Context/context";

export default function SavedTabContent() {
  const { posts } = useContext(PostContext)

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-3 mt-4 pb-28">
        {
          posts.filter((p) => userList[0].savedPost.includes(p.id)).map((object) => (
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