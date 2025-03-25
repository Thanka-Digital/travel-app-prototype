import BackButton from "@/components/global/BackButton";
import Tabs from "@/components/global/tabs/CustomTab";
import {
  locationDetailsTabsData,
  locationInfo,
} from "@/utils/locationDetailsData";
import { useParams } from "react-router-dom";

export default function LocationDetailsPage() {
  const { id } = useParams();
  const location = locationInfo.find((l) => l.id === Number(id));

  return (
    <div className="relative h-screen text-black bg-white">
      <BackButton />
      <img
        src={location?.imageUrl}
        alt="location images"
        className="object-cover w-full h-56"
      />
      <div className="absolute mask min-h-[49px] w-full bg-white top-44 z-10" />
      <div className="mb-4 text-center">
        <p className="my-1 text-xl font-medium">{location?.name}</p>
        <p className="text-sm text-center">{location?.summary}</p>
      </div>

      <div className="flex flex-col">
        <hr className=" bg-black/35" />
        <div className="flex justify-center gap-3 my-3 text-sm font-medium divide-x-2">
          <p>#{location?.tags[0]}</p>
          <p className="pl-4">Evening Time</p>
          <p className="pl-4">NPrs. {location?.averageCost}</p>
        </div>
      </div>
      <Tabs tabsData={locationDetailsTabsData} />
    </div>
  );
}
