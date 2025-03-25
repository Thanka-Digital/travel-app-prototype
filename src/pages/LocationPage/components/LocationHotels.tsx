import HotelCard from "@/pages/LocationPage/components/HotelCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { hotelInfo, locationInfo } from "@/utils/locationDetailsData";
import { useParams } from "react-router-dom";

export default function LocationHotels() {
  const { id } = useParams();
  const location = locationInfo.find((l) => l.id === Number(id));

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-3 my-4 ">
        {hotelInfo
          .filter((h) => location?.hotels.includes(h.id))
          .map((object) => (
            <HotelCard hotel={object} key={object.id} />
          ))}
      </div>
    </MaxWidthWrapper>
  );
}
