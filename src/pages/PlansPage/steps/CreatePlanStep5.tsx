import Button from "@/components/form/button/Button";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CancelButton from "../components/CancelButton";

export default function CreatePlanStep5() {
  const navigate = useNavigate();

  return (
    <main className="relative bg-splash1 h-screen">
      <CancelButton />
      <div className='absolute bottom-0 w-full text-black'>
        <div className='mask min-h-[100px] bg-white -mb-1' />
        <div className='flex flex-col items-center gap-4 bg-white pb-10 px-8'>
          <section className="flex flex-col items-center text-2xl font-medium text-black">
            <p >Find the time that</p>
            <p>works for you</p>
          </section>
          <input
            placeholder="Select date range"
            className="p-3 w-72 border-2 border-gray-200 text-gray-500 rounded-md mb-48 bg-white focus:text-black focus:ring-2 focus:ring-blue-400"
            type="date"
            required
          />
        </div>
      </div>

      <section className='flex w-full px-8 justify-between items-center absolute bottom-3'>
        <p className='text-secondary'>5 of 6 steps</p>
        <Button
          className='rounded-3xl text-white'
          // disabled={disabled}
          onClick={() => {
            navigate("/trip-plan/create/step-6")
          }}
        >Next <ChevronsRight /></Button>
      </section>
    </main>
  );
}