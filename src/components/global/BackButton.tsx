import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div
      className="absolute h-10 w-10 bg-white rounded-full flex justify-center items-center left-[2%] top-[2%]"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft />
    </div>
  );
}
