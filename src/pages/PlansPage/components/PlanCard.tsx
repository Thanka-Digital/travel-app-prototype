import moment from "moment";
import { useNavigate } from "react-router-dom";

interface TripPlanCardProps {
  plan: Plan;
}

export default function PlanCard(props: TripPlanCardProps) {
  const { id, imageUrl, name, date, tags, status } = props.plan;
  const navigate = useNavigate();

  return (
    <div className="relative flex my-4" key={id}>
      <div className="flex gap-5">
        <img
          src={imageUrl}
          alt="find friend image"
          className="object-cover rounded-lg aspect-square min-h-20 max-h-24"
        />
        <div className="flex flex-col justify-between py-2">
          <div className="text-sm">
            <p className="font-medium">{name}</p>
            <p
              className={`${
                status === "visited"
                  ? "text-gray-400"
                  : status === "cancelled"
                  ? "text-danger"
                  : "text-warning"
              }`}
            >
              {moment(date).fromNow()}{" "}
              {status !== "visited" && (
                <>({status === "cancelled" ? "Cancelled" : "Planning"})</>
              )}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap text-[#FF7920] font-semibold text-sm">
            {tags?.map((hashTag, i) => (
              <p className="font-medium" key={i}>
                #{hashTag}
              </p>
            ))}
          </div>
        </div>
      </div>
      <button
        className="absolute right-0 px-4 py-1 text-sm text-white bg-black rounded-full bottom-2"
        onClick={() => navigate(`/trip-plan/details/${id}`)}
      >
        Details
      </button>
    </div>
  );
}
