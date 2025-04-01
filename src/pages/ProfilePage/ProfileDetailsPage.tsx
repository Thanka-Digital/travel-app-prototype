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
    <main className="text-black bg-white">
      <MaxWidthWrapper>
        <div className="pt-8">
          <div className="relative flex flex-col items-center gap-1">
            <img
              src="https://api.dicebear.com/9.x/initials/png?seed=Thanka Digital"
              alt="profile image"
              className="h-[10vh] w-[10vh] rounded-full"
            />
            <p className="mt-1 font-semibold">Thanka Digital</p>
            <p className="text-xs text-gray-500">@IT company</p>
          </div>

          <div className="flex w-full mt-4 text-sm font-medium text-center justify-evenly">
            <div>
              <section className="flex">
                {userList
                  .filter((u) => u.userId > 1 && u.userId <= 5)
                  .map((object) => (
                    <ProfileStatCard {...object} key={object.userId} />
                  ))}
              </section>
              <p className="mt-1">234 followers</p>
            </div>

            {/* <div>
              <section className="flex">
                {userList
                  .filter((u) => u.userId > 5 && u.userId <= 8)
                  .map((object) => (
                    <ProfileStatCard {...object} key={object.userId} />
                  ))}
              </section>
              <p className="mt-1">8 teams</p>
            </div> */}

            <div>
              <section className="flex">
                {userList
                  .filter((u) => u.userId > 7 && u.userId <= 11)
                  .map((object) => (
                    <ProfileStatCard {...object} key={object.userId} />
                  ))}
              </section>
              <p className="mt-1">90 following</p>
            </div>
          </div>

          <hr className="my-4 bg-gray-400" />
          <div className="px-3 mb-2">
            <p className="text-sm text-justify">
              Innovating with nature in mind. We blend technology and
              sustainability to build a greener future.
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
    <div key={userId} className="-ml-3 first:ml-0">
      <img
        src={userImage}
        alt="image"
        className="object-cover border-2 border-white rounded-full h-7 w-7"
      />
    </div>
  );
};
