import { useEffect, useState } from "react";
import { locationInfo } from "@/utils/locationDetailsData";
import LocationCard from "@/pages/LocationPage/components/LocationCard";
import { ExplorePageLayout } from "./components/ExplorePageLayout";
import { ExplorePageLoadingState } from "./components/ExplorePageLoadingState";

export default function AllExplorePage() {
  const [locations, setLocations] = useState<LocationInfo[]>([]);
  const [type, setType] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const changeType = (tag: string) => {
    setIsLoading(true);
    setType(tag);
  };

  useEffect(() => {
    if (isLoading) {
      const firstLoadTimeout = setTimeout(() => {
        if (type === "all") {
          setLocations(locationInfo);
        } else {
          setLocations(locationInfo.filter((l) => l.type === type));
        }
        setIsLoading(false);
      }, [750, 1000, 1200][Math.floor(Math.random() * 3)]);
      return () => {
        clearTimeout(firstLoadTimeout);
      };
    }
  }, [type, isLoading]);

  return (
    <ExplorePageLayout currentTag={type} setCurrentTag={changeType}>
      <div className="flex flex-col gap-4 px-6 py-2">
        {isLoading ? (
          <>
            {Array.from({ length: 10 }).map((_, i) => (
              <ExplorePageLoadingState key={i} />
            ))}
          </>
        ) : (
          <>
            {locations.map((location) => (
              <LocationCard location={location} key={location.id} />
            ))}
          </>
        )}
      </div>
    </ExplorePageLayout>
  );
}
