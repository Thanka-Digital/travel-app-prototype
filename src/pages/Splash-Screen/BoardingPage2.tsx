import { SplashScreen2Info } from "@/utils/splashScreenInfo";
import { BoardingPageLayout } from "./components/BoardingPageLayout";

export default function BoardingPage2() {
  return (
    <BoardingPageLayout
      bg="bg-splash2"
      link="/3"
      splashInfo={SplashScreen2Info}
      step={2}
      prefKey="place"
      titles={title}
    />
  );
}

const title = [{ titleO: "What kind of places", titleT: "you like to visit?" }];
