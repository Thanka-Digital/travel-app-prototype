import Button from "@/components/form/button/Button";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { SplashScreenTags } from "@/pages/Splash-Screen/BoardingPage1";
import { SplashScreen3Info } from "@/utils/splashScreenInfo";
import { ChevronsRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/global/BackButton";

export default function TripPlanStep3() {
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
      <img src="/SplashImg/s2.png" alt="img" />
      <MaxWidthWrapper>
        <div className=" flex flex-col gap-10 my-8 bg-white">
          <p className="font-semibold text-2xl text-center">
            What sort of weather <br /> are you looking at?
          </p>
          <section className="flex flex-wrap items-center justify-center gap-4">
            {SplashScreen3Info.map((object) => (
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
          <p className="text-neutral_gray font-medium">3 of 6 steps</p>
          <Button
            className="rounded-full text-white px-6 h-9"
            disabled={toggledArr.length <= 0}
            onClick={() => {
              navigate("/trip-plan/steps-4");
            }}
          >
            Next <ChevronsRight />
          </Button>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
