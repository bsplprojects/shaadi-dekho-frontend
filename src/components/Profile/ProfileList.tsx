import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Briefcase, GraduationCap, Heart, MapPin, X } from "lucide-react";
import { Button } from "../ui/button";
import { useGetProfile } from "@/features/profile/hook";
import { useInterest } from "@/features/interest/hook";

const ProfileList = ({ profile }) => {
  const navigate = useNavigate();
  const addInterest = useInterest();
  const SaveInterest = (e: React.FormEvent, id) => {
    e.preventDefault();
    addInterest.mutate(id);
  };

  const formatOptions = (val: string) => {
    return val?.replace(/_/g, " ")?.replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <Card
      key={profile.id}
      className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
      onClick={() => navigate(`/profile/${profile?._id}`)}
    >
      <div className="h-64 w-full overflow-hidden bg-muted">
        <img
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
