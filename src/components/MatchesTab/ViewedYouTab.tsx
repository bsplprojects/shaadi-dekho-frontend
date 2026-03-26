import React from "react";
import { ProfileCardSkeletons } from "../Skeleton/ProfileCardsSkeleton";
import { useGetAllViewedlist } from "@/features/matches/hook";
import ProfileList from "../Profile/ProfileList";

const ViewedYouTab = () => {
  const { data, isLoading } = useGetAllViewedlist();
  const profiles = data?.data?.viewedYou || [];
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          <ProfileCardSkeletons />
        </div>
      ) : profiles.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center">
          {/* <img
            src="/images/no-data.png" // 👉 add your image here
            alt="No profiles"
            className="w-40 h-40 object-contain mb-4"
          /> */}
          <h2 className="text-xl font-semibold text-gray-700">
            No profiles viewed by you yet
          </h2>
          {/* <p className="text-gray-500 mt-2">
            Start exploring profiles and they will appear here.
          </p> */}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {profiles.map((profile) => (
            <ProfileList key={profile._id} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewedYouTab;
