import LocationMiniCard from "@/components/card/LocationMiniCard";
import PostCard from "@/components/card/PostCard";
import Input from "@/components/form/input/Input";
import { ExploreTabs } from "@/components/global/ExploreTabs";
import Navbar from "@/components/global/Navbar";
import TASlider from "@/components/swiper/TASlider";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { exploreTags } from "@/utils/exploreTags";
import { LocationMiniCarddatas } from "@/utils/locationDetailsData";
import { Search } from "lucide-react";

export default function ExplorePage() {
  return (
    <MaxWidthWrapper>
      <section className="px-3 flex items-center border mt-14 mb-3 rounded-full">
        <Search className="text-neutral_gray" size={22} />
        <Input
          className="bg-transparent outline-none text-black"
          placeholder="Search..."
          variant={"unstyled"}
        />
      </section>
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

        <div className="flex gap-3 my-3 overflow-auto no-scrollbar">
          {exploreTags?.map((tags, i) => (
            <ExploreTabs path={tags.path} text={tags.name} key={i} />
          ))}
        </div>
        <div className="mt-6 mb-24 flex flex-col gap-6">
          <PostCard />
          <PostCard />
        </div>
      </div>
      <Navbar />
    </MaxWidthWrapper>
  );
}
