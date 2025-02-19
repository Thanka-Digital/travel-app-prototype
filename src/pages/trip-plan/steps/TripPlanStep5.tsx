import Button from "@/components/form/button/Button";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { ChevronsRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CrossButton } from "./TripPlanStep1";
import BackButton from "@/components/global/BackButton";

export default function TripPlanStep5() {
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
            Find the time that <br /> works for you?
          </p>
          {/* <input
            placeholder="Select date range"
            className="p-3 border-2 border-neutral_gray2 rounded-md"
          /> */}
          {/* <TADateRange /> */}
        </div>

        <section className="flex w-full justify-between items-center fixed bottom-0 left-0 px-6 py-4 bg-white">
          <p className="text-neutral_gray font-medium">5 of 6 steps</p>
          <Button
            className="rounded-full text-white px-6 h-9"
            // disabled={toggledArr.length <= 0}
            onClick={() => {
              navigate("/trip-plan/steps-6");
            }}
          >
            Next <ChevronsRight />
          </Button>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface TADateRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

export const TADateRange = () => {
  const [selectionRange, setSelectionRange] = useState<TADateRange>({
    startDate: new Date(),
    endDate: new Date(),
    key: "tadrp",
  });

  const handleSelect = (ranges: any) => {
    setSelectionRange(ranges.selection);
  };

  return (
    <div>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        // editableDateInputs={true}
        // moveRangeOnFirstSelection={false}
      />
    </div>
  );
};
