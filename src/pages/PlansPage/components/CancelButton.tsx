import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CancelButton() {
  const navigate = useNavigate();
  return (
    <div
      className="absolute z-10 p-2 rounded-full bg-gray-50 text-lg shadow-xl text-black flex justify-center items-center left-[3%] top-[2%] cursor-pointer"
      onClick={() => navigate("/trip-plan/create")}
    >
      <X />
    </div>
  );
}