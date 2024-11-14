import LocationMiniCard from "@/components/card/LocationMiniCard";
import TASlider from "@/components/swiper/TASlider";
import { LocationMiniCarddatas } from "@/utils/locationDetailsData";

export default function ExplorePage() {
  return (
    <div className="mt-6">
      <TASlider slidesToShow={2} slidesToScroll={1} isArrowsShow>
        {LocationMiniCarddatas?.map((LocationMiniCarddata) => (
          <LocationMiniCard
            key={LocationMiniCarddata.id}
            id={LocationMiniCarddata.id}
            name={LocationMiniCarddata.name}
            address={LocationMiniCarddata.address}
            image={LocationMiniCarddata.image}
          />
        ))}
      </TASlider>
    </div>
  );
}
