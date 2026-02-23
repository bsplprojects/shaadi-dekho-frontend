import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, X, MapPin, Briefcase, GraduationCap } from "lucide-react";

const mockProfiles = [
  { id: 1, name: "Ananya Sharma", age: 26, city: "Mumbai", profession: "Software Engineer", education: "B.Tech, IIT Bombay", religion: "Hindu", height: "5'4\"", initials: "AS" },
  { id: 2, name: "Riya Patel", age: 24, city: "Ahmedabad", profession: "Doctor", education: "MBBS, AIIMS", religion: "Hindu - Patel", height: "5'3\"", initials: "RP" },
  { id: 3, name: "Sneha Reddy", age: 27, city: "Hyderabad", profession: "Business Analyst", education: "MBA, ISB", religion: "Hindu - Reddy", height: "5'5\"", initials: "SR" },
  { id: 4, name: "Priya Kapoor", age: 25, city: "Delhi", profession: "Fashion Designer", education: "NIFT Delhi", religion: "Hindu - Khatri", height: "5'6\"", initials: "PK" },
  { id: 5, name: "Neha Gupta", age: 28, city: "Bangalore", profession: "Product Manager", education: "M.Tech, BITS Pilani", religion: "Hindu - Agarwal", height: "5'2\"", initials: "NG" },
  { id: 6, name: "Kavya Iyer", age: 26, city: "Chennai", profession: "Chartered Accountant", education: "B.Com, Loyola College", religion: "Hindu - Iyer", height: "5'4\"", initials: "KI" },
];

const Matches = () => (
  <div className="min-h-[calc(100vh-4rem)] py-8">
    <div className="container">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold mb-2">Your Matches</h1>
        <p className="text-muted-foreground">Profiles that match your preferences</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
);

export default Matches;
