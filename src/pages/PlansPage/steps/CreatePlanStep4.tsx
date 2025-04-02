import LocationCard from "@/pages/LocationPage/components/LocationCard";
import Button from "@/components/form/button/Button";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { ChevronsRight } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { locationInfo } from "@/utils/locationDetailsData";
import CancelButton from "../components/CancelButton";
import { UserPlanPrefContext } from "@/providers/Context/context";

export default function CreatePlanStep4() {
  const navigate = useNavigate();
  const [locationId, setLocationId] = useState<number | null>();
  const { pref } = useContext(UserPlanPrefContext);

  function handleClick(id: number) {
    if (id === locationId) {
      setLocationId(null);
      return;
    }
    setLocationId(id);
  }

  return (
    <main className="text-black bg-white">
      <CancelButton />
      <MaxWidthWrapper>
        <div className="flex flex-col gap-6 pt-8 pb-24 bg-white ">
          <p className="text-2xl font-medium text-center">Select a location</p>
          <section className="flex flex-col gap-4">
            {locationInfo
              ?.filter((l) => pref.type.includes(l.type))
              .map((locationInfo) => (
                <div
                  onClick={() => handleClick(locationInfo.id)}
                  key={locationInfo.id}
                  className={`${
                    locationId === locationInfo.id
                      ? "outline outline-primary rounded-xl outline-offset-2"
                      : ""
                  }`}
                >
                  <LocationCard key={locationInfo.id} location={locationInfo} />
                </div>
              ))}
          </section>
        </div>

        <section className="mask flex w-full justify-between items-center fixed bottom-0 left-0 px-6 min-h-[80px] bg-white">
          <p className="font-medium text-neutral_gray">4 of 6 steps</p>
          <Button
            className="h-8 text-white rounded-full"
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
