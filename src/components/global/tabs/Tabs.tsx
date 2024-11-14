import { useState } from "react";
interface LocationDetailsTabDataProps {
  id: string;
  label: string;
  component: () => JSX.Element;
}
export default function Tabs({
  tabsData,
}: {
  tabsData: LocationDetailsTabDataProps[];
}) {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const ActiveTabComponent = tabsData.find(
    (tab) => tab.id === activeTab
  )?.component;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-around items-center">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`font-semibold uppercase ${
              activeTab === tab.id ? "text-[#FF7920]" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <hr className="bg-slate-300" />
        <div
          className="absolute -top-1 h-2 w-[33%] bg-orange-500 rounded-md"
          style={{
            left:
              activeTab === tabsData[0].id
                ? "0%"
                : activeTab === tabsData[1].id
                ? "29%"
                : "66%",
          }}
        />
      </div>

      <div className="py-4">
        {ActiveTabComponent ? (
          <ActiveTabComponent />
        ) : (
          <p>No content available</p>
        )}
      </div>
    </div>
  );
}
