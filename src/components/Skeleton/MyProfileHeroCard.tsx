import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const MyProfileHeroCard = () => {
  return (
    <Card className="overflow-hidden shadow-xl mb-6 border-0">
      {/* Cover */}
      <div className="h-48 md:h-56 bg-muted relative">
        {/* Badges */}
        <div className="absolute top-5 right-5 flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>

        {/* Avatar */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end gap-5">
          <Skeleton className="h-28 w-28 rounded-full border-4 border-background -mb-14" />
        </div>
      </div>

      <CardContent className="pt-18 p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mt-10">
          <div className="space-y-2">
            <Skeleton className="h-8 w-56" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-24" />
          </div>

          <Skeleton className="h-10 w-36 rounded-md" />
        </div>

        {/* Description */}
        <div className="mt-4 space-y-2 max-w-2xl">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-9/12" />
        </div>

        {/* Profile Completeness */}
        <div className="mt-5 p-4 rounded-xl bg-muted/50 border border-border/50">
          <div className="flex items-center justify-between mb-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-10" />
          </div>

          <Skeleton className="h-2.5 w-full rounded-full" />
          <Skeleton className="h-3 w-64 mt-2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default MyProfileHeroCard;
