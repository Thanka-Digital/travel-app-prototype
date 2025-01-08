import Button from "@/components/form/button/Button";
import BackButton from "@/components/global/BackButton";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { SplashScreenTags } from "@/pages/Splash-Screen/BoardingPage1";
import { SplashScreen1Info } from "@/utils/splashScreenInfo";
import { ChevronsRight, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TripPlanStep1() {
  const navigate = useNavigate();
  const [toggledArr, setToggleArr] = useState<string[]>([]);

  function handleClick(val: string, isSelected: boolean) {
    isSelected
      ? setToggleArr((prev) => [...prev, val])
      : setToggleArr((prev) => prev.filter((t) => t !== val));
  }
  return (
    <main className=" h-screen bg-white">
      <BackButton />
      <img src="/SplashImg/s4.png" alt="img" />
      <MaxWidthWrapper>
        <div className=" flex flex-col gap-10 my-8 bg-white">
          <p className="font-semibold text-2xl text-center">
            What kind of travel <br /> are you planning?
          </p>
          <section className="flex flex-wrap items-center justify-center gap-4">
            {SplashScreen1Info.map((object) => (
              <SplashScreenTags
                icon={object.icon}
                text={object.text}
                key={object.id}
                handleClick={handleClick}
              />
            ))}
          </section>
        </div>

        <section className="flex w-full justify-between items-center fixed bottom-0 left-0 px-6 py-4 bg-white">
          <p className="text-neutral_gray font-medium">1 of 6 steps</p>
          <Button
            className="rounded-full text-white px-6 h-9"
            disabled={toggledArr.length <= 0}
            onClick={() => {
              navigate("/trip-plan/steps-2");
            }}
          >
            Next <ChevronsRight />
          </Button>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}

interface BackButtonProps {
  icon?: React.ReactNode;
  topPosition?: string;
}
export const CrossButton = (props: BackButtonProps) => {
  const { icon = <X size={18} />, topPosition = "2%" } = props;
  return (
    <div
      className="absolute h-11 w-11 bg-white rounded-full flex justify-center items-center left-[2%] cursor-pointer shadow-md shadow-neutral_gray "
      style={{ top: topPosition }}
      onClick={() => {}}
    >
      {icon}
    </div>
  );
};
