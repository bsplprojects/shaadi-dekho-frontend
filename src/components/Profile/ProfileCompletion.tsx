import React, { Suspense } from "react";
import { Card, CardContent } from "../ui/card";
import { CheckCircle2, Hourglass, Sparkles } from "lucide-react";
import { Progress } from "../ui/progress";
import { useProfileStatus } from "@/features/profile/hook";
import { SECTION_FIELD_MAP } from "@/lib/constants";
import ProfileCompletionSkeleton from "../Skeleton/ProfileCompletionSkeleton";

const ProfileCompletion = () => {
  const { data } = useProfileStatus();

  const buildIncompleteSections = (emptyFields) => {
    return Object.entries(SECTION_FIELD_MAP)
      .map(([label, fields]) => {
        const isIncomplete = fields.some((f) => emptyFields.includes(f));

        return {
          label,
          done: !isIncomplete,
        };
      })
      .filter((item) => !item.done);
  };

  const incompleteSections = buildIncompleteSections(
    data?.data?.emptyFields || [],
  );

  return (
    <Suspense fallback={<ProfileCompletionSkeleton />}>
      <Card className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="font-display font-semibold text-base">
                Profile Completeness
              </h3>
            </div>
            <span className="text-2xl font-bold text-primary">
              {data?.data?.percentage}%
            </span>
          </div>
          <Progress value={data?.data?.percentage} className="h-3 mb-4" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {incompleteSections.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  item.done
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Hourglass size={14} className="spin" />
                {item.label}
                {item.done && <CheckCircle2 className="h-3.5 w-3.5 ml-auto" />}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Complete all sections to increase your visibility and get 3x more
            matches!
          </p>
        </CardContent>
      </Card>
    </Suspense>
  );
};

export default ProfileCompletion;
