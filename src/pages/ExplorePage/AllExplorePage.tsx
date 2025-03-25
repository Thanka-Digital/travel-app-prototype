import { locationInfo } from "@/utils/locationDetailsData";
import LocationCard from "@/pages/LocationPage/components/LocationCard";
import { ExplorePageLayout } from "./components/ExplorePageLayout";
import { ExplorePageLoadingState } from "./components/ExplorePageLoadingState";
import { useEffect, useState } from "react";

export default function AllExplorePage() {
  const [locations, setLocations] = useState<LocationInfo[]>([]);
  const [type, setType] = useState<string>("all");

  useEffect(() => {
    if (type === "all") {
      setLocations(locationInfo);
    } else {
      setLocations(locationInfo.filter((l) => l.type === type));
    }
  }, [type]);

  return (
    <ExplorePageLayout currentTag={type} setCurrentTag={setType}>
      <div className="flex flex-col gap-4 px-6 py-2">
        {locations.map((location) => (
          <ExplorePageLoadingState key={location.id}>
            <LocationCard location={location} />
          </ExplorePageLoadingState>
        ))}
      </div>
    </ExplorePageLayout>
  );
}
