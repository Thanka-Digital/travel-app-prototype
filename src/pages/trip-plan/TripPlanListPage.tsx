import BackButton from "@/components/global/BackButton";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { tripPlanListData } from "@/utils/tripPlanData";
import { ChevronLeft } from "lucide-react";
import TripPlanCard from "./components/TripPlanCard";

export default function TripPlanListPage() {
  return (
    <MaxWidthWrapper className="mt-28">
      <BackButton topPosition="6%" icon={<ChevronLeft size={28} />} />
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">All your trip plans</p>
        <p className=" text-neutral_gray font-semibold">
          Enjoy youe life to fullest
        </p>
      </div>

      <div className="my-5">
        {tripPlanListData?.map((tripPlanData) => (
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
    </MaxWidthWrapper>
  );
}
