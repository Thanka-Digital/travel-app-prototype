import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { locationDetailsData } from "@/utils/locationDetailsData";
import { CircleAlert } from "lucide-react";

export default function ExtraInfoTabContent() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="min-w-full flex flex-col gap-6 my-4">
          <div className="flex gap-3 justify-center items-center">
            <CircleAlert size={48} />
            <p className="font-semibold text-gray-600">
              <span className="text-[#FF7920]">Note:</span> The information
              shown are aggregated and average data from the community
            </p>
          </div>
          {locationDetailsData.map((locationData, index) => (
            <div className="flex gap-3 items-start" key={index}>
              {locationData.icon}
              <ul className="text-left list-disc">
                <p className=" text-lg font-semibold">{locationData.label}</p>
                {locationData.types?.map((type) => (
                  <li key={type.id} className="">
                    {type.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
