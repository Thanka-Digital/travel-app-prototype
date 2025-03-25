interface HotelCardProps {
  hotel: HotelInfo;
}

export default function HotelCard(props: HotelCardProps) {
  const { hotel } = props;

  return (
    <div className="p-3 bg-white shadow-lg rounded-2xl">
      <div className="flex gap-3">
        <img
          src={hotel.imageUrl}
          alt="hotel image"
          className="object-cover h-24 rounded-xl"
        />
        <div className="flex flex-col">
          <p className="text-sm font-medium">{hotel.name}</p>
          <p className="text-xs">{hotel.summary}</p>

          <div className="flex flex-col mt-2">
            <p className="text-xs text-orange-500">
              NPrs. {hotel.perDayPrice}/ day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
