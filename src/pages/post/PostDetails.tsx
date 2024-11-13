import LocationCard from "@/components/card/LocationCard";
import BackButton from "@/components/global/BackButton";
import TASlider from "@/components/swiper/TASlider";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { locationDetailsData, LocationInfo } from "@/utils/locationDetailsData";
import { Heart, MessageCircleMore } from "lucide-react";

export default function PostDetails() {
  return (
    <MaxWidthWrapper>
      <BackButton />
      <section className="mt-16 mb-4 flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <img
            src="SplashImg/s3.png"
            alt="profile image"
            className="h-12 w-12 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-lg font-bold">Jane Doe</p>
            <p className="text-gray-500 font-medium">Posted : 3 days ago</p>
          </div>
        </div>
        <p className="text-md font-semibold">
          Went to the phewa lake, was fun. 👋
        </p>
      </section>
      <TASlider />
      <div className="flex gap-4 my-4">
        <div className="flex gap-1 items-center">
          <Heart size={32} fill="#FF7920" />
          <p className="text-lg font-medium">400k</p>
        </div>
        <div className="flex gap-1 items-center">
          <MessageCircleMore size={32} />
          <p className="text-lg font-medium">23.1k</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <img
            src="SplashImg/s3.png"
            alt="profile image"
            className="h-10 w-10 rounded-full"
          />
          <p className="text-sm font-medium">
            Wow what a beautiful beach. Falling in love with the pics.❤️
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src="SplashImg/s1.png"
            alt="profile image"
            className="h-10 w-10 rounded-full"
          />
          <p className="text-sm font-medium">Heaven is myth. This is real.😎</p>
        </div>
        <p className="text-gray-500 font-medium">View all comments</p>
      </div>

      <div className="mt-6 mb-4 flex flex-col gap-4">
        <h1 className="text-xl font-bold">Posted About</h1>
        {
          LocationInfo.map((object, index) => (
            <LocationCard
              city={object.city}
              image={object.image}
              link={object.link}
              placeName={object.placeName}
              visitorsCount={object.visitorsCount}
              key={index}
            />
          ))
        }
      </div>

      <div className="min-w-full flex flex-col gap-2 my-4">
        <p className="text-xl font-bold">
          Information shared by <span className="text-[#FF7920]">@jane</span>
        </p>
        {locationDetailsData.map((locationData, index) => (
          <div className="flex gap-3 items-start" key={index}>
            <span className="text-gray-500">{locationData.icon}</span>
            <ul className="text-left list-disc">
              <p className=" text-lg">{locationData.label}</p>
              {locationData.types?.map((type) => (
                <li key={type.id} className="">
                  {type.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}