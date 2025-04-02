import Button from "../../../components/form/button/Button";
import { ArrowRight } from "lucide-react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface LocationCardProps {
  location: LocationInfo;
}

export default function LocationCard(props: LocationCardProps) {
  const navigate = useNavigate();
  const { location } = props;

  const visitorsCount = useCallback(() => {
    const hasOverthousand = location.visitorsCount / 1000;
    if (parseInt(hasOverthousand.toString()) !== 0) {
      const hasOverMillion = location.visitorsCount / 1000000;
      if (parseInt(hasOverMillion.toString()) !== 0) {
        return `${hasOverMillion}M+`;
      }
      return `${hasOverthousand}K+`;
    }

    return location.visitorsCount;
  }, [location.visitorsCount]);

  return (
    <div className="relative h-[40vh] shadow-sm w-full">
      <img
        src={location.imageUrl}
        alt="hotel image"
        className="object-cover w-full h-full rounded-xl brightness-50"
      />
      <div className="absolute flex items-center px-4 py-2 bg-white rounded-full top-3 left-3 opacity-70">
        <p className="font-semibold text-black text-md">
          {visitorsCount()} visitors
        </p>
      </div>
      <div className="absolute flex justify-between w-full px-4 bottom-3">
        <div>
          <p className="text-xl font-semibold text-white">{location.name}</p>
          <p className="text-[#FF7920] font-medium">{location.city}</p>
        </div>
        <Button
          variant="solid"
          className="flex items-center bg-white rounded-full h-11"
          onClick={() => {
            navigate(`/location-details/${location.id}`);
          }}
        >
          <p className="font-semibold text-black text-md">View</p>
          <div className="flex items-center justify-center px-2 py-1 bg-black rounded-2xl">
            <ArrowRight color="white" />
          </div>
        </Button>
      </div>
    </div>
  );
}
