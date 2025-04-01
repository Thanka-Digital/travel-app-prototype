import { useNavigate } from "react-router-dom";

interface FindFriendiCardProps {
  id: number;
  name: string;
  image: string;
}
export default function FindFriendCard(props: FindFriendiCardProps) {
  const { id, name, image } = props;
  const navigate = useNavigate();
  return (
    <div
      className="relative w-fit min-w-[120px] max-w-[140px] p-2 aspect-square"
      key={id}
      onClick={() => navigate("/profile")}
    >
      <img
        src={image}
        alt="image"
        className="object-cover w-full aspect-square brightness-75 rounded-2xl"
      />
      <p className="absolute text-xs font-semibold text-white bottom-4 left-4 right-4">
        @{name}
      </p>
    </div>
  );
}
