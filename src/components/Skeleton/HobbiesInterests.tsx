import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function HobbiesInterestsSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        {/* Section title */}
        <Skeleton className="h-5 w-40 mb-4" />

        {/* Hobbies */}
        <div className="mb-4">
          <Skeleton className="h-3 w-16 mb-3" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-16 rounded-full" />
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <Skeleton className="h-3 w-20 mb-3" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-20 rounded-full" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
