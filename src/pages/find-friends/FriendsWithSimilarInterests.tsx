import FindFriendsListsCard from "@/components/card/FindFriendsListsCard";
import BackButton from "@/components/global/BackButton";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { friendsWithSimilarInterests } from "@/utils/findfriendsData";
import { ChevronLeft } from "lucide-react";

export default function FriendsWithSimilarInterests() {
  return (
    <MaxWidthWrapper className="mt-28">
      <BackButton topPosition="6%" icon={<ChevronLeft size={28} />} />
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">Friends with same interests</p>
        <p className=" text-xs text-neutral font-semibold">
          Here are some friends with similar preference as you
        </p>
      </div>

      <div className="my-5">
        <p className="text-xl font-semibold my-2">Results (200+)</p>
        {friendsWithSimilarInterests?.map((friendWithSimilarInterest) => (
          <FindFriendsListsCard
            key={friendWithSimilarInterest.id}
            id={friendWithSimilarInterest.id}
            image={friendWithSimilarInterest.image}
            name={friendWithSimilarInterest.name}
            username={friendWithSimilarInterest.username}
            hashTags={friendWithSimilarInterest.hashTags}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
