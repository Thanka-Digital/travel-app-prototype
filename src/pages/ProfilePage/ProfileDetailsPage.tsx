import {
  ProfileDetailsTabsData,
  profileFollowersData,
  profileFollowingData,
  profileTeamData,
} from "@/utils/profileData";
import ProfileStatCard from "./components/ProfileStatCard";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import Tabs from "@/components/global/tabs/CustomTab";
import Navbar from "@/components/global/Navbar";

export default function ProfileDetailsPage() {
  return (
    <main className="bg-white text-black">
      <MaxWidthWrapper>
        <div className="pt-8">
          <div className="relative flex flex-col gap-1 items-center">
            <img
              src="SplashImg/s3.png"
              alt="profile image"
              className="h-[10vh] w-[10vh] rounded-full"
            />
            <p className="font-semibold mt-1">Samuel Jackson</p>
            <p className="text-gray-500 text-xs">@rocker231</p>
          </div>

          <div className="flex w-full justify-evenly mt-4">
            {
              profileFollowersData?.map((profileFollower) => (
                <ProfileStatCard
                  key={profileFollower.id}
                  id={profileFollower.id}
                  images={profileFollower.images}
                  name={profileFollower.name}
                />
              ))
            }

            {
              profileTeamData?.map((profileTeam) => (
                <ProfileStatCard
                  key={profileTeam.id}
                  id={profileTeam.id}
                  images={profileTeam.images}
                  name={profileTeam.name}
                />
              ))
            }

            {
              profileFollowingData?.map((profileFollowing) => (
                <ProfileStatCard
                  key={profileFollowing.id}
                  id={profileFollowing.id}
                  images={profileFollowing.images}
                  name={profileFollowing.name}
                />
              ))
            }
          </div>

          <hr className="h-[2px] bg-gray-400 rounded-lg my-2" />
          <div className="px-3 mb-2">
            <p className="text-justify text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              molestias quasi fuga animi quae harum incidunt? Suscipit quo
              corporis voluptate necessitatibus corruption.
            </p>
            <div className="flex gap-2 text-sm text-[#FF7920] font-medium my-1">
              <p>#wanderer</p>
              <p>#nature</p>
              <p>#sunny</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <Tabs tabsData={ProfileDetailsTabsData} />
      <Navbar />
    </main>
  );
}