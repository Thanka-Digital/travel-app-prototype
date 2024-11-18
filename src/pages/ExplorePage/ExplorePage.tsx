import Input from "@/components/form/input/Input";
import { exploreTags } from "@/utils/exploreTags";
import { LocationInfo } from "@/utils/locationDetailsData";
import LocationCard from "@/components/card/LocationCard";
import { ExploreTabs } from "@/components/global/ExploreTabs";
import Navbar from "@/components/global/Navbar";
import { Search } from "lucide-react";

export default function ExplorePage() {
  return (
    <div className="bg-white">
      <section className="px-3">
        <Input
          className="bg-white"
          placeholder="Search..."
          icon={<Search color="gray" />}
          variant={"unstyled"}
        />
      </section>

      <section className="flex gap-2 mx-4 overflow-x-scroll no-scrollbar">
        {
          exploreTags.map((object, index) => (
            <ExploreTabs
              text={object.name}
              key={index}
              path={object.path}
            />
          ))
        }
      </section>

      <div className="flex flex-col gap-4 px-6 py-2">
        {
          LocationInfo.map((object, index) => (
            <LocationCard
              city={object.city}
              image={object.image}
              link={object.link}
              placeName={object.placeName}
              visitorsCount={object.visitorsCount}
              key={index}
            />
          ))
        }
      </div>

      <Navbar />

    </div >
  )
}