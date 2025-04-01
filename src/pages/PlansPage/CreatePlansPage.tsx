import { tripPlanData } from "@/utils/tripPlanData";
import PlanCard from "./components/PlanCard";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/global/Navbar";

export default function CreatePlansPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen px-4 py-4 text-black bg-white ">
      <div>
        <p className="text-2xl font-medium">Create plans</p>
        <p className="text-sm font-semibold text-gray-400">
          Plan trips you will likely able to go{" "}
        </p>
      </div>

      <div className="my-4">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium">Plans till now</p>
          <Link
            to="/trip-plan/all"
            className="text-sm font-medium text-gray-400 underline"
          >
            View all
          </Link>
        </div>

        {tripPlanData.slice(0, 3).map((trip) => (
          <PlanCard key={trip.id} plan={trip} />
        ))}
      </div>

      <div className="font-medium text-md">
        <p className="my-3">Start new trip</p>
        <section
          className="w-full border-2 rounded-md border-primary p-7"
          onClick={() => navigate("/trip-plan/create/step-1")}
        >
          <p className="text-center text-primary">
            Plan new trip with new <br /> attitude
          </p>
        </section>
      </div>

      <Navbar />
    </div>
  );
}
