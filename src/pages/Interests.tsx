import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  useGetAllInterest,
  useUpdateInterestStatus,
} from "@/features/interest/hook";

const sidebarSections = [
  {
    title: "Interests Received",
    filters: ["All", "Accepted", "Declined"],
  },
  {
    title: "Interests Sent",
    filters: ["All", "Accepted", "Declined"],
  },
];

const statusBadge = (status: string) => {
  if (status === "accepted")
    return (
      <Badge variant="secondary" className="border-0">
        Accepted
      </Badge>
    );
  if (status === "declined")
    return <Badge variant="destructive">Declined</Badge>;
  return <Badge variant="secondary">Pending</Badge>;
};

type Section = "received" | "sent";

const Interests = () => {
  const [activeSection, setActiveSection] = useState<Section>("received");
  const [activeFilter, setActiveFilter] = useState("All");
  const { data } = useGetAllInterest();

  // console.log("DATA", data);
  const updateInterest = useUpdateInterestStatus();
  // Map backend response to a flat list
  const receivedInterests = data?.data?.interestedToYou || [];
  const sentInterests = data?.data?.interestedByYou || [];

  const filteredData = (
    activeSection === "received" ? receivedInterests : sentInterests
  )
    .filter((item) => {
      if (activeFilter === "All") return true;

      return item.status?.toLowerCase() === activeFilter.toLowerCase();
    })
    .map((item) => ({
      _id: item._id,
      name: item.basicDetails?.name || "Unknown",
      age: item.basicDetails?.age || "-",
      status: item.status || "pending",
      user: item.user,
      initials: (item.basicDetails?.name || "U")
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase(),
    }));

  const handleSidebarClick = (sectionIdx: number, filter: string) => {
    setActiveSection(sectionIdx === 0 ? "received" : "sent");
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8">
      <div className="container max-w-5xl">
        <h1 className="text-3xl font-display font-bold mb-6">Interests</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-4 space-y-4">
                {sidebarSections.map((section, sIdx) => (
                  <div key={section.title}>
                    <h3 className="font-semibold text-sm mb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.filters.map((f) => {
                        const isActive =
                          (sIdx === 0 ? "received" : "sent") ===
                            activeSection && activeFilter === f;
                        return (
                          <li key={`${sIdx}-${f}`}>
                            <button
                              onClick={() => handleSidebarClick(sIdx, f)}
                              className={cn(
                                "w-full text-left text-sm px-3 py-1.5 rounded-md transition-colors",
                                isActive
                                  ? "text-primary font-semibold bg-primary/5"
                                  : "text-muted-foreground hover:text-foreground hover:bg-accent",
                              )}
                            >
                              {f}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    {sIdx < sidebarSections.length - 1 && (
                      <div className="border-b border-border my-3" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-3 space-y-3">
            <div className="mb-2">
              <h2 className="text-xl font-semibold">
                {activeFilter} Interests{" "}
                {activeSection === "received" ? "Received" : "Sent"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {activeSection === "received"
                  ? "Interests and responses from members"
                  : "Interests you have sent to members"}
              </p>
            </div>
            {filteredData.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <p className="font-semibold mb-1">No interests found</p>
              </div>
            ) : (
              filteredData.map((p) => (
                <Card key={p._id}>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center font-display font-bold text-primary">
                      {p.initials}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{p.name}</h3>
                      <p>Age: {p.age}</p>
                    </div>
                    {statusBadge(p.status)}
                    {p.status === "pending" && activeSection === "received" && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            updateInterest.mutate({
                              targetUserId: p.user,
                              status: "declined",
                            })
                          }
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={() =>
                            updateInterest.mutate({
                              targetUserId: p.user,
                              status: "accepted",
                            })
                          }
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
