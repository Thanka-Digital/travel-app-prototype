import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { createTripPlanListData } from "@/utils/tripPlanData";
import TripPlanCard from "./components/TripPlanCard";
import { Link } from "react-router-dom";

export default function AddTripPlanPage() {
  return (
    <MaxWidthWrapper className="mt-28">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">Create plans</p>
        <p className=" text-neutral_gray font-semibold">
          Plan trips you will likely able to go
        </p>
      </div>

      <div className="my-5">
        <div className="flex w-full justify-between items-center">
          <p className="text-xl font-semibold my-2">Plans till now</p>
          <Link
            to="/trip-plan"
            className="underline text-neutral_gray font-medium"
          >
            View all
          </Link>
        </div>
        {createTripPlanListData?.map((tripPlanData) => (
          <TripPlanCard
            key={tripPlanData.id}
            id={tripPlanData.id}
            image={tripPlanData.image}
            name={tripPlanData.name}
            isTripSuccess={tripPlanData.isTripSuccess}
            tripTimeStatus={tripPlanData.tripTimeStatus}
            hashTags={tripPlanData.hashTags}
          />
        ))}
      </div>

      <div>
        <p className="text-xl font-semibold my-6">Start new search</p>
        <div className="w-full border-2 border-primary rounded-md p-11">
          <p className="text-primary font-bold text-xl text-center">
            Plan new trip with new attitude
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
