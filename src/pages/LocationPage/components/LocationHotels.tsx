import HotelCard from "@/pages/LocationPage/components/HotelCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { hotelInfo } from "@/utils/locationDetailsData";
import { useParams } from "react-router-dom";

export default function LocationHotels() {
  const { id } = useParams();

  return (
    <MaxWidthWrapper>
      <div className=" flex flex-col gap-3 my-4">
        {
          hotelInfo.filter((h) => h.id === Number(id)).map((object) => (
            <HotelCard
              {...object}
              key={object.id}
            />
          ))
        }
      </div>
    </MaxWidthWrapper>
  );
}