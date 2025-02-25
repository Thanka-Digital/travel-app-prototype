import BackButton from "@/components/global/BackButton";
import Tabs from "@/components/global/tabs/CustomTab";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { locationDetailsTabsData, locationInfo } from "@/utils/locationDetailsData";
import { useParams } from "react-router-dom";

export default function LocationDetailsPage() {
  const { id } = useParams()
  const location = locationInfo.find((l) => l.id === Number(id))

  return (
    <div className="relative bg-white h-screen text-black">
      <BackButton />
      <img src={location?.image} alt="location images" className="w-full h-56" />
      <MaxWidthWrapper>
        <div className="text-center mb-4">
          <p className="text-xl font-medium my-1">{location?.placeName}</p>
          <p className="text-center text-sm">
            {location?.description}
          </p>
        </div>
      </MaxWidthWrapper>

      <div className="flex flex-col">
        <hr className=" bg-black/35" />
        <div className="my-3 flex gap-3 justify-center divide-x-2 text-sm font-medium">
          <p>#Sightseeing</p>
          <p className="pl-4">Evening Time</p>
          <p className="pl-4">NPrs. 300</p>
        </div>
      </div>
      <Tabs tabsData={locationDetailsTabsData} />
    </div>
  );
}