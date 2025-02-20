
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

          <div className="flex flex-col mt-2">
            <p className="text-orange-500 text-xs">NPrs. 600 / day</p>
            <section className="flex gap-1 text-xs font-medium">
              <p>#cleanrooms</p>
              <p>#lakeview</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}