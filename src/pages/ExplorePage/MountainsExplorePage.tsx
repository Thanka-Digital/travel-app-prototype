import { locationInfo } from "@/utils/locationDetailsData";
import LocationCard from "@/pages/LocationPage/components/LocationCard";
import { ExplorePageLoadingState } from "./components/ExplorePageLoadingState";
import { ExplorePageLayout } from "./components/ExplorePageLayout";

export default function MountainsExplorePage() {
  return (
    <ExplorePageLayout>
      <div className="flex flex-col gap-4 px-6 py-2">
        {
          locationInfo.filter((m) => m.category === "mountains").map((object) => (
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