import { ProfileDetailsTabsData } from "@/utils/profileData";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import Tabs from "@/components/global/tabs/CustomTab";
import Navbar from "@/components/global/Navbar";
import { userList } from "@/utils/userList";
import { useParams } from "react-router-dom";

interface ProfileStatCardProps {
  profilePic: string;
}

export default function OthersProfilePage() {
  const { id } = useParams();
  const user = userList.find((u) => u.id === Number(id));

  return (
    <main className="text-black bg-white">
      <MaxWidthWrapper>
        <div className="pt-8">
          <div className="relative flex flex-col items-center gap-1">
            <img
              src={`https://api.dicebear.com/9.x/initials/png?seed=${user?.name}`}
              alt="profile image"
              className="h-[10vh] w-[10vh] rounded-full"
            />
            <p className="mt-1 font-semibold">{user?.name}</p>
            <p className="text-xs text-gray-500">@{user?.username}</p>
          </div>

          <div className="flex w-full mt-4 text-sm font-medium text-center justify-evenly">
            <div>
              <section className="flex">
                {userList
                  .filter((u) => u.id !== Number(id))
                  .slice(0, 5)
                  .map((object) => (
                    <ProfileStatCard {...object} key={object.id} />
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
                  .filter((u) => u.id !== Number(id))
                  .slice(5, 10)
                  .map((object) => (
                    <ProfileStatCard {...object} key={object.id} />
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
  const { profilePic } = props;

  return (
    <div className="-ml-3 first:ml-0">
      <img
        src={profilePic}
        alt="image"
        className="object-cover border-2 border-white rounded-full h-7 w-7"
      />
    </div>
  );
};
