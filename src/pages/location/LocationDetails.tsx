import HotelCard from "@/components/card/HotelCard";
import BackButton from "@/components/global/BackButton";
import Tabs from "@/components/global/tabs/Tabs";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";

export default function LocationDetails() {
  return (
    <div className="relative bg-white h-screen">
      <BackButton />
      <div>
        <img src="/SplashImg/s3.png" alt="location images" height={50} />
        <MaxWidthWrapper>
          <div className="text-center my-4">
            <p className="text-2xl font-bold my-2">Phewa Lake</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              tempora vitae consequatur, laborum quod atque omnis maiores quo
              aliquid fuga odit! Ea sunt atque illum dignissimos, esse nam harum
              deleniti?
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="flex flex-col my-4 ">
        <hr className=" bg-black/35" />
        <div className="my-3 flex gap-3 justify-center items-center">
          <p className="text-md font-semibold">#Sightseeing</p>
          <hr className="bg-black/35 w-[2px] h-7 " />
          <p className="text-md font-semibold">Evening Time</p>
          <hr className="bg-black/35 w-[2px] h-7 " />
          <p className="text-md font-semibold">NPrs. 300</p>
        </div>
        <hr className=" bg-slate-300" />
      </div>
      <Tabs />
    </div>
  );
}
