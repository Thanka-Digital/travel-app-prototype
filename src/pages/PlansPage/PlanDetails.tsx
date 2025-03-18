import LocationCard from "../LocationPage/components/LocationCard";
import Button from "@/components/form/button/Button";
import BackButton from "@/components/global/BackButton";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { viewTripPlanDetailsDatas } from "@/utils/tripPlanData";
import { useNavigate } from "react-router-dom";

export default function ViewTripPlanDetailsPage() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white h-screen">
      <BackButton />
      {viewTripPlanDetailsDatas?.map((viewTripPlanDetailsData) => (
        <div key={viewTripPlanDetailsData.id}>
          <div className="bg-gradient-to-r from-indigo-500">
            <img
              src={viewTripPlanDetailsData.image}
              alt="location images"
              height={50}
            />
          </div>
          <MaxWidthWrapper>
            <div className="my-4">
              <p className="text-2xl font-semibold">
                {viewTripPlanDetailsData.visitPlaceName}
              </p>
              {viewTripPlanDetailsData.isTripSucess ? (
                <p className="text-neutral_gray font-medium">
                  {viewTripPlanDetailsData.tripTimeStatus}
                </p>
              ) : (
                <p className="font-medium text-danger">
                  {viewTripPlanDetailsData.tripTimeStatus}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-3 my-6">
              {viewTripPlanDetailsData.chooseTripTypes.map((object) => (
                <GhostButton
                  icon={object.icon}
                  text={object.text}
                  key={object.id}
                  handleClick={() => { }}
                />
              ))}
            </div>

            <div>
              <p className="text-xl font-semibold my-2">Location</p>
              <LocationCard
                image={viewTripPlanDetailsData.image}
                placeName={viewTripPlanDetailsData.visitPlaceLocation}
                location={
                  viewTripPlanDetailsData.visitPlaceLocation
                }
                visitorsCount={viewTripPlanDetailsData.numberOfVisitors}
                id={viewTripPlanDetailsData.id}
              />
            </div>
            <Button
              onClick={() => navigate("/trip-plan/add")}
              className={`w-full flex justify-center rounded-full py-3 text-white my-6 ${viewTripPlanDetailsData.isTripSucess ? "bg-primary" : "bg-black"
                }`}
            >
              {viewTripPlanDetailsData.isTripSucess ? (
                <p className="">Create a post for this trip?</p>
              ) : (
                <p className="">Replan this trip?</p>
              )}
            </Button>
          </MaxWidthWrapper>
        </div>
      ))}
    </div>
  );
}
interface GhostButtonProps {
  icon?: React.ReactNode;
  text: string;
  handleClick: () => void;
}
export const GhostButton = (props: GhostButtonProps) => {
  const { icon, text, handleClick } = props;
  return (
    <button
      className="p-2 rounded-lg border border-primary text-primary transition duration-200"
      onClick={handleClick}
    >
      <span className="flex gap-1 items-center">
        {icon}
        <p className="text-sm">{text}</p>
      </span>
    </button>
  );
};