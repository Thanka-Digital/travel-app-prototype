import Button from "@/components/form/button/Button";
import BackButton from "@/components/global/BackButton";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { useNavigate } from "react-router-dom";

export default function CreatePlanStep6() {
  const navigate = useNavigate();

  return (
    <main className=" h-screen bg-white">
      <BackButton />
      <img src="/SplashImg/s5.png" alt="img" />
      <MaxWidthWrapper>
        <div className=" flex flex-col gap-10 my-8 bg-white">
          <p className="font-semibold text-2xl text-center">
            Give your trip a name
          </p>
          <input
            placeholder="Trip name"
            className="p-3 border-2 border-neutral_gray2 rounded-md"
            required
          />
        </div>

        <section className="flex w-full justify-center items-center fixed bottom-0 left-0 px-6 py-4 bg-white">
          <Button
            className="rounded-full text-white px-8"
            onClick={() => {
              navigate("trip-plan/create");
            }}
          >
            Create my trip
          </Button>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}