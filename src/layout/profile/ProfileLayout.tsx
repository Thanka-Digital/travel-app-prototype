import {
  ProfileDetailsTabsData,
  profileFollowersData,
  profileFollowingData,
  profileTeamData,
} from "@/utils/profileData";
import ProfileStatCard from "./component/ProfileStatCard";
import MaxWidthWrapper from "../wrapper/MaxWidthWrapper";
import Tabs from "@/components/global/tabs/Tabs";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/global/Navbar";

export default function ProfileLayout() {
  const navigate = useNavigate();
  return (
    <main>
      <MaxWidthWrapper>
        <div className="mt-16">
          <div className="relative flex flex-col gap-2 items-center">
            <img
              src="SplashImg/s3.png"
              alt="profile image"
              className="h-[20vh] w-[20vh] rounded-full"
            />
            <div className="flex flex-col gap-1 items-center">
              <p className="text-2xl font-bold">Samuel Jackson</p>
              <p className="text-gray-500 font-medium">@rocker231</p>
            </div>
          </div>

          <div className="flex w-full justify-evenly mt-6">
            {profileFollowersData?.map((profileFollower) => (
              <ProfileStatCard
                key={profileFollower.id}
                id={profileFollower.id}
                images={profileFollower.images}
                name={profileFollower.name}
              />
            ))}

            {profileTeamData?.map((profileTeam) => (
              <ProfileStatCard
                key={profileTeam.id}
                id={profileTeam.id}
                images={profileTeam.images}
                name={profileTeam.name}
              />
            ))}

            {profileFollowingData?.map((profileFollowing) => (
              <ProfileStatCard
                key={profileFollowing.id}
                id={profileFollowing.id}
                images={profileFollowing.images}
                name={profileFollowing.name}
              />
            ))}
          </div>
          <hr className="h-1 bg-gray-400 rounded-lg my-4" />
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            molestias quasi fuga animi quae harum incidunt? Suscipit quo
            corporis voluptate necessitatibus corruption.
          </p>
          <div
            className="flex gap-4 flex-wrap text-[#FF7920] font-semibold my-4"
            onClick={() => navigate("/trip-plan")}
          >
            <p>#wanderer</p>
            <p>#nature</p>
            <p>#sunny</p>
          </div>
        </div>
      </MaxWidthWrapper>
      <Tabs tabsData={ProfileDetailsTabsData} />
      <Navbar />
    </main>
  );
}
