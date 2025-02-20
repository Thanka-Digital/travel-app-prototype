import PostCard from "@/components/card/PostCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";

export default function ProfileSavedContent() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-3 my-4">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </MaxWidthWrapper>
  );
}