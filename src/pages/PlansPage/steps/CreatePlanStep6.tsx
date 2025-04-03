import Button from "@/components/form/button/Button";
import { useNavigate } from "react-router-dom";
import CancelButton from "../components/CancelButton";
import { useContext } from "react";
import {
  UserPlanPrefContext,
  UserPlansContext,
} from "@/providers/Context/context";

export default function CreatePlanStep6() {
  const navigate = useNavigate();
  const { planDispatch } = useContext(UserPlansContext);
  const { pref, prefDispatch } = useContext(UserPlanPrefContext);

  return (
    <main className="relative h-screen bg-splash1">
      <CancelButton />
      <div className="absolute bottom-0 w-full text-black">
        <div className="mask min-h-[100px] bg-white -mb-1" />
        <div className="flex flex-col items-center gap-4 px-8 pb-10 bg-white">
          <p className="text-2xl font-medium text-black">
            Give your trip a name
          </p>
          <input
            placeholder="Trip name"
            className="p-3 mb-48 bg-white border-2 border-gray-200 rounded-md w-72"
            required
            value={pref.name}
            onChange={(e) =>
              prefDispatch({
                type: "ADD",
                payload: { key: "name", value: e.target.value },
              })
            }
          />
        </div>
      </div>

      <section className="absolute flex items-center justify-center w-full bottom-3">
        <Button
          className="px-12 py-3 text-white rounded-3xl"
          onClick={() => {
            planDispatch({
              payload: {
                id: Math.floor(Math.random() * 100),
                imageUrl: [
                  "/SplashImg/s1.png",
                  "/SplashImg/s2.png",
                  "/SplashImg/s3.png",
                  "/SplashImg/s4.png",
                ][Math.floor(Math.random() * 4)],
                status: "planning",
                tags: ["test"],
                prefData: pref,
              },
              type: "ADD",
            });
            navigate("/trip-plan/create");
          }}
        >
          Create my Trip
        </Button>
      </section>
    </main>
  );
}
