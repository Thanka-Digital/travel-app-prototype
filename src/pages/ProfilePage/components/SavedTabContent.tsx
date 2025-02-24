import PostCard from "@/pages/post/components/PostCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";

export default function SavedTabContent() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-3 mt-4 pb-28">
        <PostCard />
        <PostCard />
      </div>
    </MaxWidthWrapper>
  );
}