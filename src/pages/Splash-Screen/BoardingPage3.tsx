import { SplashScreen3Info } from "@/utils/splashScreenInfo";
import { BoardingPageLayout } from "./components/BoardingPageLayout";

export default function BoardingPage3() {
  return (
    <BoardingPageLayout
      bg="bg-splash3"
      link="/4"
      splashInfo={SplashScreen3Info}
      step={3}
      prefKey={"weather"}
      titles={title}
    />
  );
}

const title = [{ titleO: "What kind of weathers", titleT: "you prefer?" }];
