import React from "react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const ProfileCompletionSkeleton = () => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-4 w-40" />
          </div>
          <Skeleton className="h-6 w-12" />
        </div>

        {/* Progress bar */}
        <Skeleton className="h-3 w-full mb-4 rounded-full" />

        {/* Section pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg px-3 py-2"
            >
              <Skeleton className="h-3.5 w-3.5 rounded-full" />
              <Skeleton className="h-3 w-24" />
            </div>
          ))}
        </div>

        {/* Footer text */}
        <Skeleton className="h-3 w-3/4 mt-3" />
      </CardContent>
    </Card>
  );
};

export default ProfileCompletionSkeleton;
