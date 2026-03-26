import ProfileList from "../Profile/ProfileList";
import { ProfileCardSkeletons } from "../Skeleton/ProfileCardsSkeleton";
import { Bookmark } from "lucide-react";
import { useState } from "react";
import {
  useGetAllShortlist,
  useShortlist,
  useUpdateShortlistedStatus,
} from "@/features/matches/hook";
import { useGetProfiles } from "@/features/profile/hook";
const YourMatchTab = ({ activeTab }) => {
  const { data: profilesData, isLoading: profilesLoading } = useGetProfiles();
  const { data: shortlistData, isLoading: shortlistLoading } =
    useGetAllShortlist();
  // console.log("Data", data);

  const addShortlist = useShortlist();

  const shortlistedIds =
    shortlistData?.data?.shortlistedByYou
      ?.filter((item) => item.status === "shortlisted")
      .map((item) => item.user?.toString()) || [];

  const saveShortList = (id) => {
    addShortlist.mutate(id);
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-display font-bold mb-1">
          {profilesData?.data?.length} Matches based on your{" "}
          <span className="text-primary">preferences</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {profilesLoading ? (
          <ProfileCardSkeletons />
        ) : (
          profilesData?.data?.map((p) => {
            const isShortlisted = shortlistedIds.includes(p.user?.toString());

            return (
              <ProfileList
                key={p?._id}
                profile={p}
                actionButton={
                  isShortlisted
                    ? null // hide after shortlist
                    : {
                        label: "Shortlist",
                        icon: <Bookmark size={15} />,
                        onClick: saveShortList,
                      }
                }
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default YourMatchTab;
