import BackButton from "@/components/global/BackButton";
import { tripPlanListData } from "@/utils/tripPlanData";
import PlanCard from "./components/PlanCard";

export default function AllPlansPage() {
  return (
    <div className="bg-white text-black px-4 py-14">
      <BackButton />
      <div>
        <p className="text-2xl font-medium">All your trip plans</p>
        <p className="text-gray-400 text-sm font-medium">
          Enjoy your life to fullest
        </p>
      </div>

      <div className="my-5">
        {tripPlanListData?.map((tripPlanData) => (
          <PlanCard
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
    </div>
  );
}