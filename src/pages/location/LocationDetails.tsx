import BackButton from "@/components/global/BackButton";
import { ArrowLeft } from "lucide-react";

export default function LocationDetails() {
  return (
    <div className="relative">
      <BackButton />
      <div>
        <img src="/SplashImg/s3.png" alt="location images" height={50} />
        <div>
          <p className="text-2xl font-bold">Phewa Lake</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            tempora vitae consequatur, laborum quod atque omnis maiores quo
            aliquid fuga odit! Ea sunt atque illum dignissimos, esse nam harum
            deleniti?
          </p>
        </div>
      </div>
      <div className="flex flex-col my-8">
        <hr className=" bg-black/35" />
        <div className="my-3 flex gap-3 justify-center items-center">
          <p className="text-lg font-semibold">#Sightseeing</p>
          <hr className="bg-black/35 w-[2px] h-8 " />
          <p className="text-lg font-semibold">Evening Time</p>
          <hr className="bg-black/35 w-[2px] h-8 " />
          <p className="text-lg font-semibold">Nprs. 300</p>
        </div>
        <hr className="h-.3 bg-slate-300" />
      </div>
    </div>
  );
}
