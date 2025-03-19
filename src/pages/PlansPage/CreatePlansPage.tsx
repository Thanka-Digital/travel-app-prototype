import { tripPlanData } from "@/utils/tripPlanData";
import PlanCard from "./components/PlanCard";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/global/Navbar";

export default function CreatePlansPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black h-screen px-4 py-4 ">
      <div>
        <p className="text-2xl font-medium">Create plans</p>
        <p className="text-sm text-gray-400 font-semibold">
          Plan trips you will likely able to go </p>
      </div>

      <div className="my-4">
        <div className="flex w-full justify-between items-center">
          <p className="font-medium">Plans till now</p>
          <Link
            to="/trip-plan/all"
            className="underline text-gray-400 font-medium text-sm"
          >
            View all
          </Link>
        </div>

        {tripPlanData.filter((i) => i.id < 3).map((trip) => (
          <PlanCard
            key={trip.id}
            id={trip.id}
            image={trip.image}
            name={trip.name}
            isTripSuccess={trip.isTripSuccess}
            tripTimeStatus={trip.tripTimeStatus}
            hashTags={trip.hashTags}
          />
        ))}
      </div>

      <div className="text-md font-medium">
        <p className="my-3">Start new search</p>
        <section
          className="w-full border-2 border-primary rounded-md p-7"
          onClick={() => navigate("/trip-plan/create/step-1")}
        >
          <p className="text-primary text-center">
            Plan new trip with new <br /> attitude
          </p>
        </section>
      </div>

      <Navbar />
    </div>
  );
}