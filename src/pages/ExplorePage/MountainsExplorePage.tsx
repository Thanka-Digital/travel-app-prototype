import { LocationInfo } from "@/utils/locationDetailsData";
import LocationCard from "@/pages/LocationPage/components/LocationCard";
import { ExplorePageLoadingState } from "./components/ExplorePageLoadingState";
import { ExplorePageLayout } from "./components/ExplorePageLayout";

export default function MountainsExplorePage() {
  return (
    <ExplorePageLayout>
      <div className="flex flex-col gap-4 px-6 py-2 min-h-screen">
        {
          LocationInfo.map((object, index) => (
            <ExplorePageLoadingState key={index}>
              <LocationCard
                city={object.city}
                image={object.image}
                link={object.link}
                placeName={object.placeName}
                visitorsCount={object.visitorsCount}
              />
            </ExplorePageLoadingState>
          ))
        }
      </div>
    </ExplorePageLayout>
  )
}