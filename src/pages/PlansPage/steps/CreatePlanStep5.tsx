import Button from "@/components/form/button/Button";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/global/BackButton";

export default function CreatePlanStep5() {
  const navigate = useNavigate();

  return (
    <main className=" h-screen bg-white text-black">
      <BackButton />
      <img src="/SplashImg/s2.png" alt="img" />
      <MaxWidthWrapper>
        <div className=" flex flex-col gap-10 my-8 bg-white">
          <p className="font-medium text-2xl text-center">
            Find the time that <br /> works for you?
          </p>
          <input
            placeholder="Select date range"
            className="p-3 border-2 border-gray-200 text-gray-500 rounded-md bg-white focus:text-black focus:ring-2 focus:ring-blue-400"
            type="date"
          />
        </div>

        <section className="flex w-full justify-between items-center fixed bottom-0 left-0 px-6 py-4 bg-white">
          <p className="text-gray-400 font-medium">5 of 6 steps</p>
          <Button
            className="rounded-full text-white px-6 h-9"
            onClick={() => {
              navigate("/trip-plan/create/step-6");
            }}
          >
            Next <ChevronsRight />
          </Button>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}