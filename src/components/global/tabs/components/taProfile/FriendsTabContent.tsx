import PFriendCard from "@/components/card/PFriendCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { profileFriendsData } from "@/utils/profileData";

export default function FriendsTabContent() {
  return (
    <MaxWidthWrapper className="flex flex-wrap justify-evenly">
      {profileFriendsData?.map((profileFriend) => (
        <PFriendCard
          id={profileFriend.id}
          name={profileFriend.name}
          image={profileFriend.image}
          key={profileFriend.id}
        />
      ))}
    </MaxWidthWrapper>
  );
}
