import FindFriendCard from "@/components/card/FindFirendCard";
import Navbar from "@/components/global/Navbar";
import TASlider from "@/components/swiper/TASlider";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { userList } from "@/utils/userList";
import { useNavigate } from "react-router-dom";

export default function FriendSearchPage() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col gap-4 mt-14">
      <div>
        <MaxWidthWrapper className="justify-start ">
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-semibold">Friends search</p>
            <p className="text-xs font-semibold text-neutral">
              Find Friends to travel with together
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
      <div>
        <MaxWidthWrapper>
          <p className="text-sm font-semibold ">
            Recommended from recent activities
          </p>
        </MaxWidthWrapper>
        <TASlider
          isArrowsShow={false}
          isDotsShow={false}
          slidesToShow={3.3}
          slidesToScroll={3}
        >
          {userList
            .filter((u) => u.id !== 1 && !u.followers.includes(1))
            .map((findFriend) => (
              <div className="flex flex-wrap gap-3" key={findFriend.id}>
                <FindFriendCard
                  key={findFriend.id}
                  id={findFriend.id}
                  name={findFriend.username}
                  image={findFriend.profilePic}
                />
              </div>
            ))}
        </TASlider>
      </div>

      <div>
        <MaxWidthWrapper className="flex flex-col gap-1">
          <p className="text-sm font-semibold ">Start new search</p>
          <div className="flex w-full gap-3 mb-2 ">
            <div
              className="flex items-center justify-center w-full p-6 border-2 min-h-36 border-neutral_gray2 rounded-xl"
              onClick={() => navigate("/services/friends-near-you")}
            >
              <p className="font-semibold text-center text-md text-neutral_gray">
                Find someone <span className="text-black ">near</span> me
              </p>
            </div>
            <div
              className="flex items-center justify-center w-full p-6 border-2 min-h-36 border-primary rounded-xl"
              onClick={() =>
                navigate("/services/friends-with-similar-interests")
              }
            >
              <p className="font-semibold text-center text-md text-neutral">
                <span className="text-primary ">Find someone with</span> similar
                interest
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      {/* <div>
        <MaxWidthWrapper>
          <p className="text-sm font-semibold ">Your friends</p>
        </MaxWidthWrapper>
        <TASlider
          isArrowsShow={false}
          isDotsShow={false}
          slidesToShow={3.3}
          slidesToScroll={3}
        >
          {userList
            .filter((u) => u.following.includes(1))
            .map((findFriend) => (
              <div className="flex flex-wrap gap-3" key={findFriend.id}>
                <FindFriendCard
                  key={findFriend.id}
                  id={findFriend.id}
                  name={findFriend.name}
                  image={findFriend.profilePic}
                />
              </div>
            ))}
        </TASlider>
      </div> */}
      <MaxWidthWrapper>
        <Navbar />
      </MaxWidthWrapper>
    </main>
  );
}
