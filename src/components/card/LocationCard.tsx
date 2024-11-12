import Button from "../form/button/Button";
import { ArrowRight } from "lucide-react";

export default function LocationCard() {
  return (
    <div className="relative bg-white shadow-xl rounded-2xl">
      <img
        src="SplashImg/s5.png"
        alt="hotel image"
        className=" h-52 w-full rounded-xl brightness-75"
      />

      <div className=" absolute top-3 left-3 py-2 px-4 rounded-full bg-white flex items-center  opacity-80">
        <p className=" text-black text-md font-semibold ">143k+ visitors</p>
      </div>
      <div className="absolute bottom-3 flex w-full justify-between px-3">
        <div>
          <p className="text-xl text-white font-semibold">Hawaii Beach</p>
          <p className=" text-[#FF7920] font-medium">Hawaii</p>
        </div>
        <Button
          variant="solid"
          className="h-11 rounded-full bg-white flex items-center"
        >
          <p className=" text-black text-md font-semibold ">View</p>
          <div className="bg-black h-7 w-10 rounded-xl flex justify-center items-center">
            <ArrowRight color="white" />
          </div>
        </Button>
      </div>
    </div>
  );
}
