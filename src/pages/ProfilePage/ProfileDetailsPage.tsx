import { ProfileDetailsTabsData } from "@/utils/profileData";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import Tabs from "@/components/global/tabs/CustomTab";
import Navbar from "@/components/global/Navbar";
import { userList } from "@/utils/userList";

interface ProfileStatCardProps {
  userId: number;
  userImage: string;
}

export default function ProfileDetailsPage() {
  return (
    <main className="bg-white text-black">
      <MaxWidthWrapper>
        <div className="pt-8">
          <div className="relative flex flex-col gap-1 items-center">
            <img
              src="/logo.png"
              alt="profile image"
              className="h-[10vh] w-[10vh] rounded-full"
            />
            <p className="font-semibold mt-1">Thanka Digital</p>
            <p className="text-gray-500 text-xs">@IT company</p>
          </div>

          <div className="flex w-full justify-evenly mt-4 text-sm font-medium text-center">
            <div>
              <section className="flex">
                {
                  userList.filter((u) => u.userId > 1 && u.userId <= 5).map((object) => (
                    <ProfileStatCard
                      {...object}
                      key={object.userId}
                    />
                  ))
                }
              </section>
              <p className="mt-1">234 followers</p>
            </div>

            <div>
              <section className="flex">
                {
                  userList.filter((u) => u.userId > 5 && u.userId <= 8).map((object) => (
                    <ProfileStatCard
                      {...object}
                      key={object.userId}
                    />
                  ))
                }
              </section>
              <p className="mt-1">8 teams</p>
            </div>

            <div>
              <section className="flex">
                {
                  userList.filter((u) => u.userId > 7 && u.userId <= 11).map((object) => (
                    <ProfileStatCard
                      {...object}
                      key={object.userId}
                    />
                  ))
                }
              </section>
              <p className="mt-1">90 following</p>
            </div>
          </div>

          <hr className="h-[2px] bg-gray-400 rounded-lg my-2" />
          <div className="px-3 mb-2">
            <p className="text-justify text-sm">
              Innovating with nature in mind. We blend technology and sustainability to build a greener future.
              <span className="font-medium">🌿💻 #TechForNature</span>
            </p>
            <div className="flex gap-2 text-sm text-[#FF7920] font-medium my-1">
              <p>#wanderer</p>
              <p>#nature</p>
              <p>#technology</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <Tabs tabsData={ProfileDetailsTabsData} />
      <Navbar />
    </main>
  );
}

const ProfileStatCard = (props: ProfileStatCardProps) => {
  const { userId, userImage } = props;

  return (
    <div key={userId} className="first:ml-0 -ml-3">
      <img
        src={userImage}
        alt="image"
        className="h-7 w-7 rounded-full border-2 border-white object-cover"
      />
    </div>
  );
}