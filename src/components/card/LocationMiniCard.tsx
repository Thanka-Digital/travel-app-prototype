import { LocationMiniCarddatas } from "@/utils/locationDetailsData";
import Button from "../form/button/Button";
import { ChevronsRight } from "lucide-react";
import TASlider from "../swiper/TASlider";
interface LocationMiniCardProps {
  id: string;
  name: string;
  address: string;
  image: string;
}
export default function LocationMiniCard(props: LocationMiniCardProps) {
  const { id, name, address, image } = props;
  return (
    <div
      className="relative w-fit min-w-[180px] max-w-[200px] p-2 aspect-square"
      key={id}
    >
      <img
        src={image}
        alt="image"
        className="aspect-square w-full brightness-50 rounded-3xl"
      />
      <div className="absolute bottom-5 left-4 right-4 flex gap-2 justify-between items-center px-1">
        <div>
          <p className=" text-white font-semibold">{name}</p>
          <p className="text-sm text-[#FF7920] font-medium">{address}</p>
        </div>
        <Button
          variant="solid"
          style={{
            margin: 0,
            padding: 0,
            height: "4vh",
            width: "4vh",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "100%",
          }}
        >
          <ChevronsRight />
        </Button>
      </div>
    </div>
  );
}
