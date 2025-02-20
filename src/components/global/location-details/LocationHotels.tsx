import HotelCard from "@/components/card/HotelCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";

export default function LocationHotels() {
  return (
    <MaxWidthWrapper>
      <div className=" flex flex-col gap-3 my-4">
        <HotelCard />
        <HotelCard />
      </div>
    </MaxWidthWrapper>
  );
}