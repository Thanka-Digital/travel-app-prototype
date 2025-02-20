import Button from "../../../components/form/button/Button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LocationCardProps {
  image: string;
  visitorsCount: string;
  placeName: string;
  city: string;
  link: string;
}

export default function LocationCard(props: LocationCardProps) {
  const navigate = useNavigate();
  const {
    image,
    visitorsCount,
    placeName,
    city,
    link
  } = props;

  return (
    <div className="relative h-[40vh] shadow-sm">
      <img
        src={image}
        alt="hotel image"
        className="h-full w-full rounded-xl brightness-50"
      />
      <div className="absolute top-3 left-3 py-2 px-4 rounded-full bg-white flex items-center opacity-70">
        <p className=" text-black text-md font-semibold ">{visitorsCount}</p>
      </div>
      <div className="absolute bottom-3 flex w-full justify-between px-4">
        <div>
          <p className="text-xl text-white font-semibold">{placeName}</p>
          <p className="text-[#FF7920] font-medium">{city}</p>
        </div>
        <Button
          variant="solid"
          className="h-11 rounded-full bg-white flex items-center"
          onClick={() => {
            navigate(link)
          }}
        >
          <p className=" text-black text-md font-semibold ">View</p>
          <div className="bg-black px-2 py-1 rounded-2xl flex justify-center items-center">
            <ArrowRight color="white" />
          </div>
        </Button>
      </div>
    </div>
  );
}