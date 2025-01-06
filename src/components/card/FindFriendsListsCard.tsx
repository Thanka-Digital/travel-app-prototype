import { useNavigate } from "react-router-dom";
import Button from "../form/button/Button";
interface FindFriendsListsCardProps {
  id: string;
  image: string;
  name: string;
  username: string;
  hashTags?: {
    id: string;
    label: string;
  }[];
}
export default function FindFriendsListsCard(props: FindFriendsListsCardProps) {
  const { id, image, name, username, hashTags } = props;
  const navigate = useNavigate();
  return (
    <div className=" relative flex my-4" key={id}>
      <div className="flex gap-5">
        <img
          src={image}
          alt="find friend image"
          className="rounded-lg aspect-square min-h-20 max-h-24 object-cover"
        />
        <div className="flex flex-col justify-between py-1">
          <div>
            <p className="text-md font-semibold">{name}</p>
            <p className="text-sm font-semibold text-neutral_gray">
              {username}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap text-[#FF7920] font-semibold">
            {hashTags?.map((hashTag) => (
              <p className="font-medium" key={hashTag.id}>
                {hashTag.label}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Button
        className="absolute bottom-2 right-0 h-fit rounded-full px-[6vw] bg-black text-white"
        onClick={() => navigate("/profile")}
      >
        Profile
      </Button>
    </div>
  );
}
