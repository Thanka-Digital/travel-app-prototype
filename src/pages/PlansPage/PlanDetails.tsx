import LocationCard from "../LocationPage/components/LocationCard";
import Button from "@/components/form/button/Button";
import BackButton from "@/components/global/BackButton";
import { locationInfo } from "@/utils/locationDetailsData";
import { tripPlanData } from "@/utils/tripPlanData";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function PlanPageDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const plans = tripPlanData.find((t) => t.id === Number(id))

  return (
    <div className="flex flex-col justify-center items-center relative bg-white text-black pb-8">
      <BackButton />
      <img
        src={plans?.image}
        alt="location images"
        className="h-44 w-full object-cover"
      />

      <div className="max-w-[90%] mx-auto">
        <div className='mask min-h-[100px] bg-white -mb-2' />
        <p className="text-2xl font-medium">
          {plans?.name}
        </p>
        {plans?.isTripSuccess ? (
          <p className="text-gray-400">
            {plans.tripTimeStatus}
          </p>
        ) : (
          <p className="font-medium text-danger">
            {plans?.tripTimeStatus}
          </p>
        )}

        <div className="flex flex-wrap gap-3 py-4">
          {plans?.tripTypes.map((object) => (
            <GhostButton
              icon={object.icon}
              text={object.text}
              key={object.id}
            />
          ))}
        </div>

        <div className="pb-6">
          <p className="text-xl font-medium py-1">Location</p>
          {
            locationInfo.filter((l) => l.id === Number(id)).map((object) => (
              <LocationCard
                {...object}
                key={object.id}
              />
            ))
          }
        </div>
      </div>

      <Button
        onClick={() => navigate(`${plans?.isTripSuccess ? "/add-post" : "/trip-plan/create"}/`)}
        className={`rounded-3xl py-3 text-sm text-white ${plans?.isTripSuccess ? "bg-primary" : "bg-black"
          }`}
      >
        {plans?.isTripSuccess ? (
          <p>Create a post for this trip?</p>
        ) : (
          <p>Replan this trip?</p>
        )}
      </Button>
    </div>
  );
}

interface GhostButtonProps {
  icon?: React.ReactNode;
  text: string;
}
export const GhostButton = (props: GhostButtonProps) => {
  const { icon, text } = props;
  return (
    <button
      className="p-2 rounded-lg border border-primary text-primary"
    >
      <span className="flex gap-1 items-center">
        {icon}
        <p className="text-sm">{text}</p>
      </span>
    </button>
  );
};