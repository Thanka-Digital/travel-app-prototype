import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { locationDetailsData } from "@/utils/locationDetailsData";
import { CircleAlert } from "lucide-react";

export default function ExtraInfoTabContent() {
  return (
    <MaxWidthWrapper>
      <div className="min-w-full flex flex-col gap-4 my-3">
        <div className="flex gap-2 justify-center items-center text-sm">
          <CircleAlert size={42} />
          <p className="font-medium text-gray-600">
            <span className="text-[#FF7920]">Note:</span> The information
            shown are aggregated and average data from the community
          </p>
        </div>

        {
          locationDetailsData.map((locationData, index) => (
            <div className="flex gap-2 items-start" key={index}>
              {locationData.icon}
              <ul className="text-left list-disc">
                <p className="text-sm font-medium">{locationData.label}</p>
                {locationData.types?.map((type) => (
                  <li key={type.id} className="ml-5 text-sm">
                    {type.label}
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>
    </MaxWidthWrapper>
  );
}