import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="absolute p-2 rounded-full text-black bg-white flex justify-center items-center left-[3%] top-[2%] cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft />
    </button>
  );
}
