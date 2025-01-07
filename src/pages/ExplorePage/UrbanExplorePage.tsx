import { LocationInfo } from "@/utils/locationDetailsData";
import LocationCard from "@/components/card/LocationCard";
import { LoadingState } from "@/components/loading/LoadingState";
import { ExplorePageLayout } from "./ExplorePageLayout";

export default function UrbanExplorePage() {
  return (
    <ExplorePageLayout>
      <div className="flex flex-col gap-4 px-6 py-2 min-h-screen">
        {
          LocationInfo.map((object, index) => (
            <LoadingState>
              <LocationCard
                city={object.city}
                image={object.image}
                link={object.link}
                placeName={object.placeName}
                visitorsCount={object.visitorsCount}
                key={index}
              />
            </LoadingState>
          ))
        }
      </div>
    </ExplorePageLayout>
  )
}