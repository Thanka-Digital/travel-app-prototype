import LocationCard from "@/pages/LocationPage/components/LocationCard";
import BackButton from "@/components/global/BackButton";
import TASlider from "@/components/swiper/TASlider";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { locationDetailsData, LocationInfo } from "@/utils/locationDetailsData";
import { Heart, MessageCircleMore } from "lucide-react";

export default function PostDetailsPage() {
  return (
    <main className="bg-white text-black">
      <MaxWidthWrapper>
        <BackButton />

        <div className="pt-16 flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <img
              src="SplashImg/s3.png"
              alt="profile image"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-medium">Jane Doe</p>
              <p className="text-gray-500 text-sm font-medium">Posted : 3 days ago</p>
            </div>
          </div>
          <p className="text-sm font-medium">
            Went to the phewa lake, was fun. 👋
          </p>

          <TASlider>
            {
              imgs.map((img, i) => (
                <div key={i}>
                  <img src={img} alt="images" className="h-40 w-full object-cover" />
                </div>
              ))
            }
          </TASlider>

          <div className="flex gap-4 my-4 font-medium">
            <div className="flex gap-1 items-center">
              <Heart size={24} fill="#FF7920" color="#FF7920" />
              <p>400k</p>
            </div>
            <div className="flex gap-1 items-center">
              <MessageCircleMore size={24} />
              <p>23.1k</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 -mt-3">
            <div className="flex gap-3 items-center">
              <img
                src="SplashImg/s3.png"
                alt="profile image"
                className="h-8 w-8 rounded-full"
              />
              <p className="text-sm font-medium">
                Wow what a beautiful beach.❤️
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src="SplashImg/s1.png"
                alt="profile image"
                className="h-8 w-8 rounded-full"
              />
              <p className="text-sm font-medium">Heaven is myth. This is real.😎</p>
            </div>
            <p className="text-gray-500 font-medium text-sm mt-1">View all comments</p>
          </div>
        </div>

        <div className="py-4 flex flex-col gap-4">
          <h1 className="text-lg font-medium">Posted About</h1>
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

        <div className="flex flex-col gap-2 pb-6">
          <p className="text-lg font-medium">
            Information shared by <span className="text-[#FF7920]">@jane</span>
          </p>

          {
            locationDetailsData.map((locationData, index) => (
              <div className="flex gap-2 items-start" key={index}>
                <span className="text-gray-500">{locationData.icon}</span>
                <ul className="text-left list-disc">
                  <p className=" text-sm font-medium">{locationData.label}</p>
                  {
                    locationData.types?.map((type) => (
                      <li key={type.id} className="ml-4">
                        {type.label}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

const imgs = [
  "SplashImg/s1.png",
  "SplashImg/s2.png",
  "SplashImg/s3.png",
  "SplashImg/s4.png",
  "SplashImg/s5.png",
];