import React from "react";
import { ProfileCardSkeletons } from "../Skeleton/ProfileCardsSkeleton";
import { useGetProfiles, useMyProfile } from "@/features/profile/hook";
import ProfileList from "../Profile/ProfileList";

const NearByMatchesTab = () => {
  const { data: myProfile, isLoading: myProfileLoading } = useMyProfile();

  const userGender = myProfile?.data?.basicDetails?.gender;
  const userState = myProfile?.data?.location?.state;
  const { data, isLoading } = useGetProfiles();

  const filteredProfiles =
    data?.data?.filter((p) => {
      const profileGender = p.basicDetails?.gender;
      const profileState = p.location?.state;
      return (
        userGender &&
        userState &&
        profileGender &&
        profileState &&
        profileGender !== userGender && // opposite gender
        profileState.toLowerCase() === userState.toLowerCase() // same state
      );
    }) || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {isLoading || myProfileLoading ? (
        <ProfileCardSkeletons />
      ) : filteredProfiles.length > 0 ? (
        filteredProfiles.map((p) => <ProfileList key={p?._id} profile={p} />)
      ) : (
        <p>No Nearby Matches Found.</p>
      )}
    </div>
  );
};

export default NearByMatchesTab;
