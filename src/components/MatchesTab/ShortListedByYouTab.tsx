import { ProfileCardSkeletons } from "../Skeleton/ProfileCardsSkeleton";
import { useGetAllInterest } from "@/features/interest/hook";
import ProfileList from "../Profile/ProfileList";
import { useGetAllShortlist } from "@/features/matches/hook";

const ShortListedByYouTab = ({ activeTab }) => {
  // console.log("Actve", activeTab);
  const { data, isLoading } = useGetAllShortlist();
  const profiles = data?.data?.shortlistedByYou || [];
  // console.log("Profile", profiles);
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          <ProfileCardSkeletons />
        </div>
      ) : profiles.length === 0 ? (
        //  EMPTY STATE
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            No profiles shortlisted by you.
          </h2>
          <p className="text-gray-500 mt-2">
            Start exploring profiles and they will appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {profiles.map((profile) => (
            <ProfileList
              profile={profile}
              actionButton={{
                label: "Remove",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShortListedByYouTab;
