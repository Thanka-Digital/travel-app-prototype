import FindFriendsListsCard from "@/components/card/FindFriendsListsCard";
import BackButton from "@/components/global/BackButton";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { friendsNearYou } from "@/utils/findfriendsData";
import { ChevronLeft } from "lucide-react";

export default function FriendsNearYou() {
  return (
    <MaxWidthWrapper className="mt-28">
      <BackButton topPosition="6%" icon={<ChevronLeft size={28} />} />
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">Friends Near You</p>
        <p className=" text-xs text-neutral font-semibold">
          Here are some friends near you
        </p>
      </div>

      <div className="my-5">
        <p className="text-xl font-semibold my-2">Results (20+)</p>
        {friendsNearYou?.map((friendNearYou) => (
          <FindFriendsListsCard
            key={friendNearYou.id}
            id={friendNearYou.id}
            image={friendNearYou.image}
            name={friendNearYou.name}
            username={friendNearYou.username}
            hashTags={friendNearYou.hashTags}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
