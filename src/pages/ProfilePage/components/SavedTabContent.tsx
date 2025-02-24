import PostCard from "@/pages/post/components/PostCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { postList } from "@/utils/postList";
import { userList } from "@/utils/userList";

export default function SavedTabContent() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-3 mt-4 pb-28">
        {
          postList.filter((p) => userList[0].savedPost.includes(p.id)).map((object) => (
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