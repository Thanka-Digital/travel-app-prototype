import { useNavigate } from "react-router-dom";

export default function CancelButton() {
  const navigate = useNavigate();
  return (
    <div
      className="absolute z-10 px-3 py-1 rounded-full bg-gray-100 text-lg shadow-lg text-black flex justify-center items-center left-[3%] top-[2%] cursor-pointer"
      onClick={() => navigate("/trip-plan/create")}
    >
      X
    </div>
  );
}