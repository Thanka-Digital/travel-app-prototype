import FindFriendCard from "@/components/card/FindFriendCard";
import Navbar from "@/components/global/Navbar";
import TASlider from "@/components/swiper/TASlider";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import {
  findRecommendedFriendsData,
  yourOldFriendsData,
} from "@/utils/findfriendsData";
import { useNavigate } from "react-router-dom";

export default function FriendSearchPage() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col gap-4 mt-14">
      <div>
        <MaxWidthWrapper className=" justify-start">
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-semibold">Friends search</p>
            <p className=" text-xs text-neutral font-semibold">
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
          {findRecommendedFriendsData?.map((findFriend) => (
            <div className="flex flex-wrap gap-3" key={findFriend.id}>
              <FindFriendCard
                key={findFriend.id}
                id={findFriend.id}
                name={findFriend.name}
                image={findFriend.image}
              />
            </div>
          ))}
        </TASlider>
      </div>

      <div>
        <MaxWidthWrapper className="flex flex-col gap-1">
          <p className="text-sm font-semibold ">Start new search</p>
          <div className=" w-full flex gap-3 mb-2">
            <div
              className="flex w-full min-h-36 items-center justify-center border-2 border-neutral_gray2 p-6 rounded-xl"
              onClick={() => navigate("/services/friends-near-you")}
            >
              <p className="text-md font-semibold text-neutral_gray text-center">
                Find someone <span className="text-black ">near</span> me
              </p>
            </div>
            <div
              className="flex w-full min-h-36 items-center justify-center border-2 border-primary p-6 rounded-xl"
              onClick={() =>
                navigate("/services/friends-with-similar-interests")
              }
            >
              <p className="text-md font-semibold text-neutral text-center">
                <span className="text-primary ">Find someone with</span> similar
                interest
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div>
        <MaxWidthWrapper>
          <p className="text-sm font-semibold ">Your old friends</p>
        </MaxWidthWrapper>
        <TASlider
          isArrowsShow={false}
          isDotsShow={false}
          slidesToShow={3.3}
          slidesToScroll={3}
        >
          {yourOldFriendsData?.map((findFriend) => (
            <div className="flex flex-wrap gap-3" key={findFriend.id}>
              <FindFriendCard
                key={findFriend.id}
                id={findFriend.id}
                name={findFriend.name}
                image={findFriend.image}
              />
            </div>
          ))}
        </TASlider>
      </div>
      <MaxWidthWrapper>
        <Navbar />
      </MaxWidthWrapper>
    </main>
  );
}
