import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface BackButtonProps {
  icon?: React.ReactNode;
  topPosition?: string;
}
export default function BackButton(props: BackButtonProps) {
  const { icon = <ArrowLeft />, topPosition = "2%" } = props;
  const navigate = useNavigate();
  return (
    <div
      className="absolute h-9 w-9 bg-white rounded-full flex justify-center items-center left-[2%] cursor-pointer shadow-md shadow-neutral_gray"
      style={{ top: topPosition }}
      onClick={() => navigate(-1)}
    >
      {icon}
    </div>
  );
}
