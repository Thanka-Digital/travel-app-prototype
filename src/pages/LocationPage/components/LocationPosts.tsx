import PostCard from "@/pages/post/components/PostCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { postList } from "@/utils/postList";

export default function LocationPosts() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-3 mt-4 pb-28">
        {
          postList.map((object) => (
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