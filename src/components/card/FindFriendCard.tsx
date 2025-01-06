import { useNavigate } from "react-router-dom";

interface FindFriendiCardProps {
  id: string;
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
        className="aspect-square w-full brightness-75 rounded-2xl object-cover"
      />
      <p className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold">
        @{name}
      </p>
    </div>
  );
}
