import { SplashScreen1Info } from "@/utils/splashScreenInfo";
import { BoardingPageLayout } from "./components/BoardingPageLayout";

export default function BoardingPage2() {
  return (
    <BoardingPageLayout
      bg="bg-splash1"
      prefKey="type"
      link="/2"
      splashInfo={SplashScreen1Info}
      step={1}
      titles={title}
    />
  );
}

const title = [{ titleO: "What kind of traveler", titleT: "are you?" }];
