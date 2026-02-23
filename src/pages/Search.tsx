import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search as SearchIcon, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const results = [
  { id: 1, name: "Meera Joshi", age: 25, city: "Pune", profession: "Data Scientist", education: "M.Sc, IISc", religion: "Hindu", initials: "MJ" },
  { id: 2, name: "Divya Nair", age: 27, city: "Kochi", profession: "Architect", education: "B.Arch, CEPT", religion: "Hindu - Nair", initials: "DN" },
  { id: 3, name: "Pooja Singh", age: 24, city: "Lucknow", profession: "Civil Services", education: "BA, DU", religion: "Hindu - Rajput", initials: "PS" },
];

const SearchPage = () => (
  <div className="min-h-[calc(100vh-4rem)] py-8">
    <div className="container">
      <h1 className="text-3xl font-display font-bold mb-6">Search Profiles</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters */}
        <Card className="lg:col-span-1 h-fit">
          <CardHeader><CardTitle className="text-lg font-sans">Filters</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><Label>Age Range</Label><div className="flex gap-2"><Input placeholder="Min" type="number" /><Input placeholder="Max" type="number" /></div></div>
            <div className="space-y-2"><Label>Religion</Label><Select><SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger><SelectContent>{["Hindu","Muslim","Christian","Sikh","Jain"].map(r => <SelectItem key={r} value={r.toLowerCase()}>{r}</SelectItem>)}</SelectContent></Select></div>
            <div className="space-y-2"><Label>City</Label><Input placeholder="Enter city" /></div>
            <div className="space-y-2"><Label>Education</Label><Select><SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger><SelectContent>{["Bachelor's","Master's","PhD","Professional"].map(e => <SelectItem key={e} value={e.toLowerCase()}>{e}</SelectItem>)}</SelectContent></Select></div>
            <div className="space-y-2"><Label>Profession</Label><Input placeholder="Enter profession" /></div>
            <Button className="w-full"><SearchIcon className="h-4 w-4 mr-2" />Search</Button>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="lg:col-span-3 space-y-4">
          <p className="text-sm text-muted-foreground">{results.length} profiles found</p>
          {results.map((p) => (
            <Card key={p.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5 flex gap-5 items-center">
                <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center text-lg font-display font-bold text-primary shrink-0">
                  {p.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{p.name}, {p.age}</h3>
                    <Badge variant="secondary" className="text-xs">{p.religion}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{p.city}</span>
                    <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{p.profession}</span>
                    <span className="flex items-center gap-1"><GraduationCap className="h-3.5 w-3.5" />{p.education}</span>
                  </div>
                </div>
                <Button size="sm">View Profile</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SearchPage;
