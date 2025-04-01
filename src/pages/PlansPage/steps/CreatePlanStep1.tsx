import { SplashScreen1Info } from "@/utils/splashScreenInfo";
import { BoardingPageLayout } from "@/pages/Splash-Screen/components/BoardingPageLayout";
import CancelButton from "../components/CancelButton";

export default function CreatePlanStep1() {
  return (
    <div>
      <CancelButton />
      <BoardingPageLayout
        bg="bg-splash1"
        link="/trip-plan/create/step-2"
        splashInfo={SplashScreen1Info}
        prefKey="type"
        step={1}
        titles={title}
      />
    </div>
  );
}

const title = [{ titleO: "What kind of travel", titleT: "are you planning?" }];
