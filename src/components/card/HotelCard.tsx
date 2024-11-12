import Button from "../form/button/Button";

export default function HotelCard() {
  return (
    <div className="bg-white shadow-xl p-3 rounded-2xl">
      <div className="flex gap-4">
        <img
          src="SplashImg/s5.png"
          alt="hotel image"
          className="h-32 rounded-xl"
        />
        <div className="flex flex-col gap-1">
          <p className="Text-xl font-semibold">Hotel Phewa</p>
          <p className="">
            Lorem ipsum dolor sit amet cons ectetur adipisicing elit.
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <p className="text-orange-500 ">NPrs. 600 / day</p>
                <Button variant={"solid"} className="rounded-full">
                  <p className=" text-white text-sm font-semibold ">Details</p>
                </Button>
              </div>
              <div className="flex flex-wrap gap-1 text-sm font-semibold">
                <p>#cleanrooms</p>
                <p>#lakeview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
