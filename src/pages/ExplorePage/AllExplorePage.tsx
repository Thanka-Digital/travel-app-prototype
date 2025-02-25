import { locationInfo } from "@/utils/locationDetailsData";
import LocationCard from "@/pages/LocationPage/components/LocationCard";
import { ExplorePageLayout } from "./components/ExplorePageLayout";
import { ExplorePageLoadingState } from "./components/ExplorePageLoadingState";

export default function AllExplorePage() {
  return (
    <ExplorePageLayout>
      <div className="flex flex-col gap-4 px-6 py-2">
        {
          locationInfo.map((object) => (
            <ExplorePageLoadingState key={object.id}>
              <LocationCard
                {...object}
              />
            </ExplorePageLoadingState>
          ))
        }
      </div>
    </ExplorePageLayout>
  )
}