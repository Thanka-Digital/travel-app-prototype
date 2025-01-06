import { useNavigate } from "react-router-dom";

interface ProfileStatCardProps {
  id: string;
  images: {
    id: string;
    image: string;
  }[];
  name: string;
}
export default function ProfileStatCard(props: ProfileStatCardProps) {
  const { id, images, name } = props;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-1" key={id}>
      <div className="flex">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.image}
            alt="image"
            className="h-10 w-10 rounded-full -ml-5 first:ml-0 border-2 border-white"
          />
        ))}
      </div>
      <p
        className="text-lg font-semibold"
        onClick={() => navigate("/services/find-friends")}
      >
        {name}
      </p>
    </div>
  );
}
