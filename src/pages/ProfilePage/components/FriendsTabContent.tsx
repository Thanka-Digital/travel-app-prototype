import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { userList } from "@/utils/userList";
import { useParams } from "react-router-dom";

export default function FriendsTabContent() {
  const { id } = useParams();

  return (
    <MaxWidthWrapper className="flex flex-wrap gap-4 justify-evenly">
      {userList
        .filter((u) => u.id !== Number(id) && u.following.includes(Number(id)))
        .map((profileFriend) => (
          <PFriendCard
            id={profileFriend.id}
            name={profileFriend.name}
            image={profileFriend.profilePic}
            key={profileFriend.id}
          />
        ))}
    </MaxWidthWrapper>
  );
}

interface PFriendCardProps {
  id: number;
  name: string;
  image: string;
}

function PFriendCard(props: PFriendCardProps) {
  const { id, name, image } = props;
  return (
    <div className="flex flex-col items-center mb-5" key={id}>
      <img
        src={image}
        alt="friend image"
        className="object-cover w-20 h-20 rounded-full"
      />
      <p className="text-base font-semibold">{name}</p>
    </div>
  );
}
