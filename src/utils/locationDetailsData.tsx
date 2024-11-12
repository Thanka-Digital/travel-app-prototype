import { AudioWaveform, Bike, SunSnow, TrendingUp } from "lucide-react";

export const locationDetailsData = [
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
