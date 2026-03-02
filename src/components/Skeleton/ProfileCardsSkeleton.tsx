import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProfileCardSkeletons({ count = 6 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Card
          key={i}
          className="overflow-hidden hover:shadow-lg transition-shadow"
        >
          {/* Header */}
          <div className="h-48 bg-accent flex items-center justify-center">
            <Skeleton className="h-24 w-24 rounded-full" />
          </div>

          <CardContent className="p-5">
            {/* Name + badge */}
            <div className="flex items-start justify-between mb-3">
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>

            {/* Info rows */}
            <div className="space-y-2 mb-4">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-4 w-44" />
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <Skeleton className="h-9 flex-1" />
              <Skeleton className="h-9 flex-1" />
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
