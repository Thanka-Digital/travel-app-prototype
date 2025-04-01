import { useNavigate } from "react-router-dom";
import Button from "../form/button/Button";
interface FindFriendsListsCardProps {
  id: number;
  image: string;
  name: string;
  username: string;
  hashTags?: string[];
}
export default function FindFriendsListsCard(props: FindFriendsListsCardProps) {
  const { id, image, name, username, hashTags } = props;
  const navigate = useNavigate();
  return (
    <div className="relative flex my-4 " key={id}>
      <div className="flex gap-5">
        <img
          src={image}
          alt="find friend image"
          className="object-cover rounded-lg aspect-square min-h-20 max-h-24"
        />
        <div className="flex flex-col justify-between py-1">
          <div>
            <p className="font-semibold text-md">{name}</p>
            <p className="text-sm font-semibold text-neutral_gray">
              @{username}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap text-[#FF7920] font-semibold">
            {hashTags?.map((hashTag, i) => (
              <p className="font-medium" key={i}>
                {hashTag}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Button
        className="absolute bottom-2 right-0 h-fit rounded-full px-[6vw] bg-black text-white"
        onClick={() => navigate("/user-profile")}
      >
        Profile
      </Button>
    </div>
  );
}
