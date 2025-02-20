import BackButton from "@/components/global/BackButton";
import Tabs from "@/components/global/tabs/CustomTab";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { locationDetailsTabsData } from "@/utils/locationDetailsData";

export default function LocationDetailsPage() {
  return (
    <div className="relative bg-white h-screen text-black">
      <BackButton />
      <img src="/SplashImg/s3.png" alt="location images" className="w-full h-56" />
      <MaxWidthWrapper>
        <div className="text-center mb-4">
          <p className="text-xl font-medium my-1">Phewa Lake</p>
          <p className="text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            tempora vitae consequatur, laborum quod atque omnis maiores quo
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
        <hr className=" bg-black/35" />
      </div>
      <Tabs tabsData={locationDetailsTabsData} />
    </div>
  );
}