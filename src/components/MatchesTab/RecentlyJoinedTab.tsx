import React, { useEffect } from "react";
import { ProfileCardSkeletons } from "../Skeleton/ProfileCardsSkeleton";
import ProfileList from "../Profile/ProfileList";
import {
  useGetProfiles,
  useGetProfile,
  useMyProfile,
} from "@/features/profile/hook";
import { useAuth } from "@/contexts/AuthContext";

const RecentlyJoinedTab = () => {
  const { data: myProfile, isLoading: myProfileLoading } = useMyProfile();
  // console.log("myProfile:", myProfile);

  const userGender = myProfile?.data?.basicDetails?.gender;

  //  1 day ago
  const tenDayAgo = new Date();
  tenDayAgo.setDate(tenDayAgo.getDate() - 10);
  const { data, isLoading } = useGetProfiles();

  const filteredProfiles =
    data?.data?.filter((p) => {
      const profileGender = p.basicDetails?.gender;
      const createdAt = new Date(p.createdAt);
      return (
        userGender && // ensure we have current user's gender
        profileGender &&
        profileGender !== userGender && // opposite gender
        createdAt >= tenDayAgo // joined within 10 day
      );
    }) || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {isLoading || myProfileLoading ? (
        <ProfileCardSkeletons />
      ) : filteredProfiles.length > 0 ? (
        filteredProfiles.map((p) => <ProfileList key={p?._id} profile={p} />)
      ) : (
        <p>No recently joined profiles found.</p>
      )}
    </div>
  );
};

export default RecentlyJoinedTab;
