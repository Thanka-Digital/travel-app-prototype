import LocationMiniCard from "@/components/card/LocationMiniCard";
import PostCard from "@/components/card/PostCard";
import TASlider from "@/components/swiper/TASlider";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { LocationMiniCarddatas } from "@/utils/locationDetailsData";

export default function ExplorePage() {
  return (
    <MaxWidthWrapper>
      <div className="mt-6">
        <TASlider
          slidesToShow={2.15}
          slidesToScroll={1}
          isArrowsShow
          isDotsShow={false}
        >
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
        <div className="my-6">
          <PostCard />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
