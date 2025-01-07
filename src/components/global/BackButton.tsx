import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div
      className="absolute h-8 w-8 rounded-lg bg-gray-50 flex justify-center items-center left-[3%] top-[3%] cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft />
    </div>
  );
}
