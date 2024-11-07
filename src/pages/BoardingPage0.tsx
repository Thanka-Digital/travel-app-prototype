import { Link } from "react-router-dom";
import Button from "@/components/form/button/Button";

export default function BoardingPage0() {
  return (
    <main className="bg-splash0 h-screen">
      <div className="flex flex-col gap-3 items-center bg-white text-black absolute shadow-xl shadow-white bottom-0 p-8">
        <p className="text-2xl font-bold">Let's get to know you better</p>
        <p className="text-secondary">Explore locations all around the globe as per your preferences</p>
        <Button
          className="rounded-3xl text-white"
          colorscheme="primary"
        >Get Started</Button>
      </div>
    </main>
  );
}