import { Link } from "react-router-dom";

export default function BoardingPage0() {
  return (
    <main className="relative h-[100svh] bg-splash0">
      <div className="absolute bottom-0 w-full">
        <div className="mask-zero min-h-[60px] bg-white -mb-1" />
        <div className="flex flex-col items-center gap-1 pb-8 text-black bg-white">
          <section className="flex flex-col items-center text-2xl font-bold">
            <p>Let's get to know you</p>
            <p>better</p>
          </section>
          <section className="flex flex-col items-center mb-4 text-md text-secondary">
            <p>Explore locations all around the globe as</p>
            <p> per your preferences</p>
          </section>
          <section>
            <Link
              to={"/1"}
              className="px-10 py-2 text-white bg-primary rounded-3xl"
            >
              Get Started
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
