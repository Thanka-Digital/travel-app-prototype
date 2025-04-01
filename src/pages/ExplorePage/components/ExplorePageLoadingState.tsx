export const ExplorePageLoadingState = () => {
  return (
    <div className="relative h-[40vh] rounded-md bg-gray-300">
      <div className="flex space-x-4 animate-pulse">
        <div className="absolute w-32 h-10 bg-white rounded-full top-3 left-3 opacity-70"></div>
        <div className="absolute left-0 flex flex-col gap-5 bottom-5">
          <div className="w-20 h-2 bg-white rounded-full opacity-70" />
          <div className="w-16 h-2 bg-white rounded-full opacity-70" />
        </div>
        <div className="absolute h-10 bg-white rounded-full bottom-6 right-5 w-28 opacity-70" />
      </div>
    </div>
  );
};
