import FindFriendsListsCard from "@/components/card/FindFriendsListsCard";
import BackButton from "@/components/global/BackButton";
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import { userList } from "@/utils/userList";
import { useEffect, useState } from "react";

export default function FriendsNearYou() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, [2200, 1850, 2000][Math.floor(Math.random() * 3) + 1]);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <MaxWidthWrapper className="mt-14">
      <BackButton />
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">Friends Near You</p>
        <p className="text-xs font-semibold text-neutral">
          Here are some friends near you
        </p>
      </div>

      <div className="my-5">
        <p className="my-2 text-xl font-semibold">Results (5+)</p>
        {isLoading ? (
          Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-[14vh] mb-4 flex items-end gap-4">
              <div className="w-32 h-full bg-gray-200 rounded-md"></div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="w-32 h-6 mb-4 bg-gray-200 rounded-md" />
                  <div className="w-24 h-4 bg-gray-200 rounded-md" />
                </div>

                <div className="h-3 bg-gray-200 rounded-md w-28" />
              </div>
            </div>
          ))
        ) : (
          <>
            {userList
              .filter((u) => u.id !== 1 && !u.followers.includes(1))
              .map((friendNearYou) => (
                <FindFriendsListsCard
                  key={friendNearYou.id}
                  id={friendNearYou.id}
                  image={friendNearYou.profilePic}
                  name={friendNearYou.name}
                  username={friendNearYou.username}
                  hashTags={["tags"]}
                />
              ))}
          </>
        )}
      </div>
    </MaxWidthWrapper>
  );
}
