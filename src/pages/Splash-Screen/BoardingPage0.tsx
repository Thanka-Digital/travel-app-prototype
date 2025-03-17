import { Link } from "react-router-dom";

export default function BoardingPage0() {
  return (
    <main className="relative bg-splash0 h-screen">
      <div className='absolute bottom-0 w-full'>
        <div className='mask-zero min-h-[50px] bg-white' />
        <div className='flex flex-col items-center gap-1 bg-white pb-8 text-black'>
          <section className="flex flex-col items-center font-bold text-2xl">
            <p>Let's get to know you</p>
            <p>better</p>
          </section>
          <section className="flex flex-col items-center text-md text-secondary mb-4">
            <p>Explore locations all around the globe as</p>
            <p> per your preferences</p>
          </section>
          <section>
            <Link to={"/1"}
              className="bg-primary text-white rounded-3xl px-10 py-2">Get Started</Link>
          </section>
        </div>
      </div>
    </main>
  );
}