import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Briefcase, GraduationCap, Heart, MapPin, X } from "lucide-react";
import { Button } from "../ui/button";
import { useGetProfile } from "@/features/profile/hook";
import { useGetAllInterest, useInterest } from "@/features/interest/hook";
import { Bookmark } from "lucide-react";
import { useShortlist, useViewedList } from "@/features/matches/hook";

const ProfileList = ({ profile, actionButton }) => {
  const [viewedlistIds, setViewedlistIds] = useState([]);
  const navigate = useNavigate();
  const addInterest = useInterest();
  const addViewlist = useViewedList();
  const { data } = useGetAllInterest();

  const SaveInterest = (e: React.FormEvent, id) => {
    e.preventDefault();
    addInterest.mutate(id);
    // console.log("PLid", id);
  };

  const formatOptions = (val: string) => {
    return val?.replace(/_/g, " ")?.replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const handleProfileClick = (id) => {
    addViewlist.mutate(id, {
      onSuccess: () => {
        setViewedlistIds((prev) => [...prev, id]);
        navigate(`/profile/${id}`);
      },
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
      <div className="h-64 w-full overflow-hidden bg-muted relative">
        {/* Only render shortlist button if showShortlistButton is true */}
        {actionButton && (
          <span
            className={`absolute right-0 px-2 py-0.5 border-l border-b text-sm bg-white rounded-sm flex items-center gap-1 cursor-pointer ${actionButton.className || ""}`}
            onClick={(e) => {
              e.stopPropagation();
              actionButton.onClick(profile?._id);
            }}
          >
            {actionButton.icon}
            <span>{actionButton.label}</span>
          </span>
        )}
        <img
          key={profile.id}
          onClick={() => handleProfileClick(profile?._id)}
          src={profile?.images?.[0]}
          alt={profile?.memberId}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-lg capitalize">
              {profile?.basicDetails?.name},{" "}
              <span className="text-primary">{profile?.basicDetails?.age}</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              {profile?.basicDetails?.height}
            </p>
          </div>
          <Badge variant="secondary" className="text-xs capitalize">
            {profile?.religion?.religion}
          </Badge>
        </div>
        <div className="space-y-1.5 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2 capitalize">
            <MapPin className="h-3.5 w-3.5" />
            {profile?.location?.state}
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-3.5 w-3.5" />
            {formatOptions(profile?.professional?.occupation)}
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-3.5 w-3.5" />
            {formatOptions(profile?.professional?.education)}
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={(e) => e.stopPropagation()}
            size="sm"
            variant="outline"
            className="flex-1"
          >
            <X className="h-4 w-4 mr-1" />
            Decline
          </Button>
          <Button
            onClick={(e) => SaveInterest(e, profile?._id)}
            size="sm"
            className="flex-1"
          >
            <Heart className="h-4 w-4 mr-1" />
            Interested
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileList;
