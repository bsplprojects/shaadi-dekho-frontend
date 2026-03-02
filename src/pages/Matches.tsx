import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCompletion from "@/components/Profile/ProfileCompletion";
import { quickFilters, sidebarSections } from "@/lib/constants";
import { useGetProfiles } from "@/features/profile/hook";
import ProfileList from "@/components/Profile/ProfileList";
import { ProfileCardSkeletons } from "@/components/Skeleton/ProfileCardsSkeleton";

const Matches = () => {
  const [activeItem, setActiveItem] = useState("Your Matches");
  const [activeQuickFilter, setActiveQuickFilter] = useState<string | null>(
    null,
  );
  const { data, isLoading } = useGetProfiles();

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-0">
                {sidebarSections.map((section, idx) => (
                  <div key={section.title}>
                    {idx > 0 && <div className="border-t border-border" />}
                    <div className="px-4 pt-4 pb-2">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        {section.title}
                      </h3>
                    </div>
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeItem === item.label;
                      return (
                        <button
                          key={item.label}
                          onClick={() => setActiveItem(item.label)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-accent/50 ${isActive ? "bg-accent border-l-2 border-primary" : ""}`}
                        >
                          <Icon
                            className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`}
                          />
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-sm font-medium ${isActive ? "text-primary" : "text-foreground"}`}
                            >
                              {item.label}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                              {item.description}
                            </p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ProfileCompletion />

            <div className="mb-6">
              <h1 className="text-3xl font-display font-bold mb-1">
                {data?.data?.length} Matches based on your{" "}
                <span className="text-primary">preferences</span>
              </h1>
            </div>

            {/* Filter bar */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-3.5 w-3.5 mr-1.5" />
                Filter
              </Button>
              {quickFilters.map((f) => (
                <Button
                  key={f}
                  variant={activeQuickFilter === f ? "default" : "outline"}
                  size="sm"
                  onClick={() =>
                    setActiveQuickFilter(activeQuickFilter === f ? null : f)
                  }
                >
                  {f}
                </Button>
              ))}
            </div>

            {/* Profile cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {isLoading ? (
                <ProfileCardSkeletons />
              ) : (
                data?.data?.map((p) => <ProfileList key={p?._id} profile={p} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
