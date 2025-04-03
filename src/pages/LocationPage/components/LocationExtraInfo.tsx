import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import {
  AudioWaveform,
  Bike,
  CircleAlert,
  SunSnow,
  TrendingUp,
} from "lucide-react";
// import { localeData } from "moment";
// import { useParams } from "react-router-dom";

const locationDetailsData = [
  {
    icon: <SunSnow size={28} />,
    label: "28 C, Rainy",
  },
  {
    icon: <TrendingUp size={28} />,
    label: "742m",
  },
  {
    icon: <Bike size={28} />,
    label: "All mode of transportation is avaiable",
    types: [
      {
        id: "tp1",
        label: "Bus",
      },
      {
        id: "tp2",
        label: "Taxi",
      },
      {
        id: "tp3",
        label: "Train",
      },
      {
        id: "tp4",
        label: "Airplane",
      },
    ],
  },
  {
    icon: <AudioWaveform size={28} />,
    label: "Activities avaiable to do",
    types: [
      {
        id: "ep1",
        label: "Boating",
      },
      {
        id: "ep2",
        label: "Sightseeing",
      },
      {
        id: "ep3",
        label: "Night Life",
      },
      {
        id: "ep4",
        label: "Cable car ride to sarankot",
      },
    ],
  },
];

export default function LocationExtraInfo() {
  // const { id } = useParams();
  // const location = locationInfo.find((l) => l.id === Number(id));

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col min-w-full gap-4 my-3">
        <div className="flex items-center justify-center gap-2 text-sm">
          <CircleAlert size={42} />
          <p className="font-medium text-gray-600">
            <span className="text-[#FF7920]">Note:</span> The information shown
            are aggregated and average data from the community
          </p>
        </div>

        {locationDetailsData.map((locationData, index) => (
          <div className="flex items-start gap-2" key={index}>
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
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
