import PostCard from "@/pages/post/components/PostCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { userList } from "@/utils/userList";
import { useContext } from "react";
import { PostContext } from "@/providers/Context/context";
import { useParams } from "react-router-dom";

export default function SavedTabContent() {
  const { posts } = useContext(PostContext);
  const { id } = useParams();
  const user = userList.find((u) => u.id === Number(id));

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-3 mt-4 pb-28">
        {posts
          .filter((p) => user?.savedPosts.includes(p.id))
          .map((object) => (
            <PostCard post={object} key={object.id} />
          ))}
      </div>
    </MaxWidthWrapper>
  );
}
