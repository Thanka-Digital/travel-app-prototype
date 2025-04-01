import { SplashScreen4Info } from "@/utils/splashScreenInfo";
import { BoardingPageLayout } from "./components/BoardingPageLayout";

export default function BoardingPage4() {
  return (
    <BoardingPageLayout
      bg="bg-splash4"
      link="/explore-page"
      splashInfo={SplashScreen4Info}
      step={4}
      prefKey="frequency"
      titles={title}
    />
  );
}

const title = [{ titleO: "How often do you", titleT: "travel?" }];
