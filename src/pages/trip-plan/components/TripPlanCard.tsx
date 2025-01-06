import Button from "@/components/form/button/Button";
import { useNavigate, useParams } from "react-router-dom";

interface TripPlanCardProps {
  id: string;
  image: string;
  name: string;
  isTripSuccess: boolean;
  tripTimeStatus: string;
  hashTags?: {
    id: string;
    label: string;
  }[];
}
export default function TripPlanCard(props: TripPlanCardProps) {
  const { id, image, name, tripTimeStatus, hashTags, isTripSuccess } = props;
  const navigate = useNavigate();
  // const { params } = useParams();
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
            <p
              className={`text-sm font-semibold ${
                isTripSuccess ? "text-neutral_gray" : "text-danger"
              }`}
            >
              {tripTimeStatus}
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
        onClick={() => navigate("/trip-plan/details")}
      >
        Details
      </Button>
    </div>
  );
}
