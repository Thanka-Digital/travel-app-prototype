import LocationCard from "@/pages/LocationPage/components/LocationCard";
import Button from "@/components/form/button/Button";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { ChevronsRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/global/BackButton";
import { locationInfo } from "@/utils/locationDetailsData";
import CancelButton from "../components/CancelButton";

export default function CreatePlanStep4() {
  const navigate = useNavigate();
  const [locationId, setLocationId] = useState<String | null>();

  function handleClick(id: String) {
    if (id === locationId) {
      setLocationId(null);
      return;
    }
    setLocationId(id);
  }

  return (
    <main className="bg-white text-black">
      <CancelButton />
      <MaxWidthWrapper>
        <div className=" flex flex-col gap-6 pt-8 pb-24 bg-white">
          <p className="font-medium text-2xl text-center">
            Select a location
          </p>
          <section className="flex flex-col gap-4">
            {locationInfo?.map((locationInfo) => (
              // <div
              //   onClick={() => handleClick(locationInfo.id)}
              //   key={locationInfo.id}
              //   className={`${locationId === locationInfo.id
              //     ? "outline outline-primary rounded-xl outline-offset-2"
              //     : ""
              //     }`}
              // >
              <LocationCard
                id={locationInfo.id}
                image={locationInfo.image}
                placeName={locationInfo.placeName}
                location={locationInfo.location}
                visitorsCount={locationInfo.visitorsCount}
              />
              // </div>
            ))}
          </section>
        </div>

        <section className="mask flex w-full justify-between items-center fixed bottom-0 left-0 px-6 min-h-[80px] bg-white">
          <p className="text-neutral_gray font-medium">4 of 6 steps</p>
          <Button
            className="rounded-full text-white h-8"
            disabled={!locationId}
            onClick={() => {
              navigate("/trip-plan/create/step-5");
            }}
          >
            Next <ChevronsRight />
          </Button>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}