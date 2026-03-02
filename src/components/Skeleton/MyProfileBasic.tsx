import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const MyProfileBasic = () => {
  return (
    <Card>
      <CardContent className="p-6">
        {/* Section Title */}
        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="h-5 w-5 rounded-md" />
          <Skeleton className="h-5 w-40" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-lg border border-border/50"
            >
              <Skeleton className="h-4 w-4 rounded-sm mt-1" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-full max-w-[120px]" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MyProfileBasic;
