import HotelCard from "@/components/card/HotelCard";
import PostCard from "@/components/card/PostCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { locationDetailsData } from "@/utils/locationDetailsData";
import { CircleAlert } from "lucide-react";
import { useState } from "react";

export default function Tabs() {
  const tabs = [
    { id: "tab1", label: "Posts" },
    { id: "tab2", label: "Hotels" },
    { id: "tab3", label: "Extra Info" },
  ];
  const [activeTab, setActiveTab] = useState("tab1");
  const tabContents: any = {
    tab1: (
      <>
        <MaxWidthWrapper>
          <div className="flex flex-col gap-3 my-4">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </MaxWidthWrapper>
      </>
    ),
    tab2: (
      <>
        <MaxWidthWrapper>
          <div className=" flex flex-col gap-3 my-4">
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </div>
        </MaxWidthWrapper>
      </>
    ),
    tab3: (
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
    ),
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`font-bold uppercase ${
              activeTab === tab.id ? "text-[#FF7920]" : ""
            }  `}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="relative">
        <hr className="bg-slate-300" />
        <div
          className={`absolute -top-1 h-2 w-[33%] bg-orange-500 rounded-md`}
          style={{
            left:
              activeTab === "tab1"
                ? "0%"
                : activeTab === "tab2"
                ? "29%"
                : activeTab === "tab3"
                ? "66%"
                : "0%",
          }}
        />
      </div>

      <div>{tabContents[activeTab]}</div>
    </div>
  );
}
