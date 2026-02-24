import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, X, MapPin, Briefcase, GraduationCap, ChevronRight, Users, Star, Eye, UserCheck, Clock, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const mockProfiles = [
  { id: 1, name: "Ananya Sharma", age: 26, city: "Mumbai", profession: "Software Engineer", education: "B.Tech, IIT Bombay", religion: "Hindu", height: "5'4\"", initials: "AS" },
  { id: 2, name: "Riya Patel", age: 24, city: "Ahmedabad", profession: "Doctor", education: "MBBS, AIIMS", religion: "Hindu - Patel", height: "5'3\"", initials: "RP" },
  { id: 3, name: "Sneha Reddy", age: 27, city: "Hyderabad", profession: "Business Analyst", education: "MBA, ISB", religion: "Hindu - Reddy", height: "5'5\"", initials: "SR" },
  { id: 4, name: "Priya Kapoor", age: 25, city: "Delhi", profession: "Fashion Designer", education: "NIFT Delhi", religion: "Hindu - Khatri", height: "5'6\"", initials: "PK" },
  { id: 5, name: "Neha Gupta", age: 28, city: "Bangalore", profession: "Product Manager", education: "M.Tech, BITS Pilani", religion: "Hindu - Agarwal", height: "5'2\"", initials: "NG" },
  { id: 6, name: "Kavya Iyer", age: 26, city: "Chennai", profession: "Chartered Accountant", education: "B.Com, Loyola College", religion: "Hindu - Iyer", height: "5'4\"", initials: "KI" },
];

const sidebarSections = [
  {
    title: "All Matches",
    items: [
      { label: "Your Matches", description: "View all the profiles that match your preferences", icon: Users },
    ],
  },
  {
    title: "Based on activity",
    items: [
      { label: "Shortlisted by you", description: "Matches you have shortlisted", icon: Star },
      { label: "Viewed you", description: "Matches who have viewed your profile", icon: Eye },
      { label: "Shortlisted you", description: "Matches who have shortlisted your profile", icon: UserCheck },
      { label: "Viewed by you", description: "Matches you have viewed", icon: Eye },
    ],
  },
  {
    title: "Recently joined & nearby matches",
    items: [
      { label: "Recently joined", description: "New profiles that match your preferences", icon: Clock },
      { label: "Nearby matches", description: "Matches near your location", icon: MapPin },
    ],
  },
];

const quickFilters = ["Newly joined", "Not seen", "Profiles with photo", "Profiles with horoscope"];

const Matches = () => {
  const [activeItem, setActiveItem] = useState("Your Matches");
  const [activeQuickFilter, setActiveQuickFilter] = useState<string | null>(null);

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
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{section.title}</h3>
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
                          <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${isActive ? "text-primary" : "text-foreground"}`}>{item.label}</p>
                            <p className="text-xs text-muted-foreground truncate">{item.description}</p>
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
            <div className="mb-6">
              <h1 className="text-3xl font-display font-bold mb-1">
                {mockProfiles.length} Matches based on your <span className="text-primary">preferences</span>
              </h1>
            </div>

            {/* Filter bar */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Button variant="outline" size="sm"><SlidersHorizontal className="h-3.5 w-3.5 mr-1.5" />Filter</Button>
              {quickFilters.map((f) => (
                <Button
                  key={f}
                  variant={activeQuickFilter === f ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveQuickFilter(activeQuickFilter === f ? null : f)}
                >
                  {f}
                </Button>
              ))}
            </div>

            {/* Profile cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockProfiles.map((p) => (
                <Card key={p.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="h-48 bg-accent flex items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-2xl font-display font-bold text-primary">
                      {p.initials}
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{p.name}, {p.age}</h3>
                        <p className="text-sm text-muted-foreground">{p.height}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">{p.religion}</Badge>
                    </div>
                    <div className="space-y-1.5 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />{p.city}</div>
                      <div className="flex items-center gap-2"><Briefcase className="h-3.5 w-3.5" />{p.profession}</div>
                      <div className="flex items-center gap-2"><GraduationCap className="h-3.5 w-3.5" />{p.education}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1"><X className="h-4 w-4 mr-1" />Decline</Button>
                      <Button size="sm" className="flex-1"><Heart className="h-4 w-4 mr-1" />Interested</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
