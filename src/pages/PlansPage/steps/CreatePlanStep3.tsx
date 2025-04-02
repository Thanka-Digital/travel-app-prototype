import { SplashScreen3Info } from "@/utils/splashScreenInfo";
import CancelButton from "../components/CancelButton";
import { CreatePlanLayout } from "../components/CreatePlanLayout";

export default function CreatePlanStep1() {
  return (
    <div>
      <CancelButton />
      <CreatePlanLayout
        prefKey="weather"
        bg="bg-splash3"
        link="/trip-plan/create/step-4"
        splashInfo={SplashScreen3Info}
        step={3}
        titles={title}
      />
    </div>
  );
}

const title = [
  { titleO: "What sort of weather", titleT: "are you looking at?" },
];
