import LocationCard from "../LocationPage/components/LocationCard";
import Button from "@/components/form/button/Button";
import BackButton from "@/components/global/BackButton";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { locationInfo } from "@/utils/locationDetailsData";
import { tripPlanData } from "@/utils/tripPlanData";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function PlanPageDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const plans = tripPlanData.find((t) => t.id === Number(id))

  return (
    <div className="relative bg-white h-screen text-black">
      <BackButton />
      <div className="bg-gradient-to-r from-indigo-500">
        <img
          src={plans?.image}
          alt="location images"
          height={50}
        />
      </div>
      <MaxWidthWrapper>
        <div className="my-4">
          <p className="text-2xl font-semibold">
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
        </div>

        <div className="flex flex-wrap gap-3 my-6">
          {plans?.tripTypes.map((object) => (
            <GhostButton
              icon={object.icon}
              text={object.text}
              key={object.id}
            />
          ))}
        </div>

        <div>
          <p className="text-xl font-semibold my-2">Location</p>
          {
            locationInfo.filter((l) => l.id === Number(id)).map((object) => (
              <LocationCard
                {...object}
                key={object.id}
              />
            ))
          }
        </div>
        <Button
          onClick={() => navigate(`/trip-plan/details/${id}`)}
          className={`w-full flex justify-center rounded-full py-3 text-white my-6 ${plans?.isTripSuccess ? "bg-primary" : "bg-black"
            }`}
        >
          {plans?.isTripSuccess ? (
            <p className="">Create a post for this trip?</p>
          ) : (
            <p className="">Replan this trip?</p>
          )}
        </Button>
      </MaxWidthWrapper>
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
      className="p-2 rounded-lg border border-primary text-primary transition duration-200"
    >
      <span className="flex gap-1 items-center">
        {icon}
        <p className="text-sm">{text}</p>
      </span>
    </button>
  );
};