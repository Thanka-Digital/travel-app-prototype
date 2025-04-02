import { SplashScreen2Info } from "@/utils/splashScreenInfo";
import CancelButton from "../components/CancelButton";
import { CreatePlanLayout } from "../components/CreatePlanLayout";

export default function CreatePlanStep1() {
  return (
    <div>
      <CancelButton />
      <CreatePlanLayout
        prefKey="place"
        bg="bg-splash2"
        link="/trip-plan/create/step-3"
        splashInfo={SplashScreen2Info}
        step={2}
        titles={title}
      />
    </div>
  );
}

const title = [{ titleO: "What type of place", titleT: "you like to visit?" }];
