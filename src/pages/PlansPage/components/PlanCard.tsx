import { useNavigate } from "react-router-dom";

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

export default function PlanCard(props: TripPlanCardProps) {
  const { id, image, name, tripTimeStatus, hashTags, isTripSuccess } = props;
  const navigate = useNavigate();

  return (
    <div className="relative flex my-4" key={id}>
      <div className="flex gap-5">
        <img
          src={image}
          alt="find friend image"
          className="rounded-lg aspect-square min-h-20 max-h-24 object-cover"
        />
        <div className="flex flex-col justify-between py-2">
          <div className="text-sm">
            <p className="font-medium">{name}</p>
            <p
              className={`${isTripSuccess ? "text-gray-400" : "text-danger"}`}
            >
              {tripTimeStatus}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap text-[#FF7920] font-semibold text-sm">
            {hashTags?.map((hashTag) => (
              <p className="font-medium" key={hashTag.id}>
                {hashTag.label}
              </p>
            ))}
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-2 right-0 rounded-full px-4 py-1 bg-black text-white text-sm"
        onClick={() => navigate("/trip-plan/details")}
      >
        Details
      </button>
    </div>
  );
}