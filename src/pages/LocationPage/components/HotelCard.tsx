interface HotelCardProps {
  hotelName: string;
  image: string;
  price: number;
  description: string;
}

export default function HotelCard(props: HotelCardProps) {
  const {
    hotelName,
    image,
    description,
    price
  } = props

  return (
    <div className="bg-white shadow-lg p-3 rounded-2xl">
      <div className="flex gap-3">
        <img
          src={image}
          alt="hotel image"
          className="h-24 object-cover rounded-xl"
        />
        <div className="flex flex-col">
          <p className="font-medium text-sm">{hotelName}</p>
          <p className="text-xs">
            {description}
          </p>

          <div className="flex flex-col mt-2">
            <p className="text-orange-500 text-xs">NPrs. {price}/ day</p>
            {/* <section className="flex gap-1 text-xs font-medium">
              <p>#cleanrooms</p>
              <p>#lakeview</p>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
}