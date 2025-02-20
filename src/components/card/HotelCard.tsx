import Button from "../form/button/Button";

export default function HotelCard() {
  return (
    <div className="bg-white shadow-lg p-3 rounded-2xl">
      <div className="flex gap-3">
        <img
          src="SplashImg/s5.png"
          alt="hotel image"
          className="h-24 object-cover rounded-xl"
        />
        <div className="flex flex-col">
          <p className="font-medium text-sm">Hotel Phewa</p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet cons ectetur adipisicing elit.
          </p>

          <div className="flex justify-between gap-2 items-center py-2">
            <div>
              <p className="text-orange-500 text-xs">NPrs. 600 / day</p>
              <div className="flex gap-1 text-xs font-medium">
                <p>#cleanrooms</p>
                <p>#lakeview</p>
              </div>
            </div>

            <Button variant={"solid"} className="rounded-full px-3 py-1 bg-black">
              <p className=" text-white text-xs">Details</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}