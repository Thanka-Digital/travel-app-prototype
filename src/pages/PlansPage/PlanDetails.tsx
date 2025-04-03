import LocationCard from "../LocationPage/components/LocationCard";
// import Button from "@/components/form/button/Button";
import BackButton from "@/components/global/BackButton";
import { UserPlansContext } from "@/providers/Context/context";
import { locationInfo } from "@/utils/locationDetailsData";
import { Map, SunSnow } from "lucide-react";
import moment from "moment";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function PlanPageDetails() {
  // const navigate = useNavigate();
  const { id } = useParams();
  const { plans } = useContext(UserPlansContext);

  const plan = plans.find((t) => t.id === Number(id));

  return (
    <div className="relative flex flex-col items-end w-full text-black bg-white">
      <BackButton />
      <img
        src={plan?.imageUrl}
        alt="location images"
        className="object-cover w-full h-44"
      />

      <div className="relative w-full px-4">
        <div className="mask min-h-[30px] bg-white -mb-2" />
        <p className="text-2xl font-medium">{plan?.prefData.name}</p>
        {plan?.status === "visited" ? (
          <p className="text-gray-400">
            {moment(plan.prefData.date).fromNow()}
          </p>
        ) : (
          <p className="font-medium text-danger">
            {moment(plan?.prefData.date).fromNow()}
          </p>
        )}

        {plan && (
          <div className="flex flex-wrap gap-3 py-4">
            {Object.keys(plan.prefData).map((object, i) => {
              if (["place", "weather"].includes(object)) {
                return (
                  <GhostButton
                    icon={
                      {
                        place: <Map />,
                        weather: <SunSnow />,
                      }[object]
                    }
                    text={plan.prefData[
                      object as keyof typeof plan.prefData
                    ]!.toString()}
                    key={i}
                  />
                );
              }
            })}
          </div>
        )}

        <div className="w-full pb-6">
          <p className="py-1 text-xl font-medium">Location</p>
          {locationInfo
            .filter((l) => l.id === plan?.prefData.locationId)
            .map((object) => (
              <LocationCard location={object} key={object.id} />
            ))}
        </div>
      </div>

      {/* <Button
        onClick={() =>
          navigate(
            `${
              plans?.status === "visited" ? "/add-post" : "/trip-plan/create"
            }/`
          )
        }
        className={`rounded-3xl py-3 mr-4 text-sm text-white ${
          plans?.status === "visited" ? "bg-primary" : "bg-black"
        }`}
      >
        {plans?.status === "visited" ? (
          <p>Create a post for this trip?</p>
        ) : (
          <p>Replan this trip?</p>
        )}
      </Button> */}
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
    <button className="p-2 border rounded-lg border-primary text-primary">
      <span className="flex items-center gap-1">
        {icon}
        <p className="text-sm">{text}</p>
      </span>
    </button>
  );
};
