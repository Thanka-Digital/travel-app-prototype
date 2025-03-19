import Button from "@/components/form/button/Button";
import { useNavigate } from "react-router-dom";
import CancelButton from "../components/CancelButton";

export default function CreatePlanStep6() {
  const navigate = useNavigate();

  return (
    <main className="relative bg-splash1 h-screen">
      <CancelButton />
      <div className='absolute bottom-0 w-full text-black'>
        <div className='mask min-h-[100px] bg-white -mb-1' />
        <div className='flex flex-col items-center gap-4 bg-white pb-10 px-8'>
          <p className="text-2xl font-medium text-black">Give your trip a name</p>
          <input
            placeholder="Trip name"
            className="p-3 w-72 border-2 border-gray-200 rounded-md mb-48 bg-white"
            required
          />
        </div>
      </div>

      <section className='flex justify-center w-full items-center absolute bottom-3'>
        <Button
          className='rounded-3xl text-white px-12 py-3'
          // disabled={disabled}
          onClick={() => {
            navigate("/trip-plan/create")
          }}
        >Create my Trip</Button>
      </section>
    </main>
  );
}