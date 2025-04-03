import { SplashScreen1Info } from "@/utils/splashScreenInfo";
import CancelButton from "../components/CancelButton";
import { CreatePlanLayout } from "../components/CreatePlanLayout";

export default function CreatePlanStep1() {
  return (
    <div>
      <CancelButton />
      <CreatePlanLayout
        bg="bg-splash1"
        link="/trip-plan/create/step-2"
        splashInfo={SplashScreen1Info}
        prefKey="weather"
        step={1}
        titles={title}
      />
    </div>
  );
}

const title = [{ titleO: "What kind of travel", titleT: "are you planning?" }];
