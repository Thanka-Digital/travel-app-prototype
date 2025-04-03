import Button from "@/components/form/button/Button";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CancelButton from "../components/CancelButton";
import { useContext } from "react";
import { UserPlanPrefContext } from "@/providers/Context/context";

export default function CreatePlanStep5() {
  const navigate = useNavigate();
  const { pref, prefDispatch } = useContext(UserPlanPrefContext);

  return (
    <main className="relative h-screen bg-splash1">
      <CancelButton />
      <div className="absolute bottom-0 w-full text-black">
        <div className="mask min-h-[100px] bg-white -mb-1" />
        <div className="flex flex-col items-center gap-4 px-8 pb-10 bg-white">
          <section className="flex flex-col items-center text-2xl font-medium text-black">
            <p>Find the time that</p>
            <p>works for you</p>
          </section>
          <input
            placeholder="Select date range"
            className="p-3 mb-48 text-gray-500 bg-white border-2 border-gray-200 rounded-md w-72 focus:text-black focus:ring-2 focus:ring-blue-400"
            type="date"
            required
            value={pref.date ?? ""}
            onChange={(e) => {
              prefDispatch({
                type: "ADD",
                payload: { key: "date", value: e.target.value },
              });
            }}
          />
        </div>
      </div>

      <section className="absolute flex items-center justify-between w-full px-8 bottom-3">
        <p className="text-secondary">5 of 6 steps</p>
        <Button
          className="text-sm text-white bg-blue-700 rounded-3xl"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ChevronsLeft /> NextPrev
        </Button>
        <Button
          className="text-white rounded-3xl"
          // disabled={disabled}
          onClick={() => {
            navigate("/trip-plan/create/step-6");
          }}
        >
          Next <ChevronsRight />
        </Button>
      </section>
    </main>
  );
}
