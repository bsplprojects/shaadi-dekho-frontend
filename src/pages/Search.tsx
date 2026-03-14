import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search as SearchIcon,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Profilenotfound from "../assets/ProfileNotFound.png";
import { useState } from "react";
import { useFilterProfile } from "@/features/profile/hook";
import ProfileList from "@/components/Profile/ProfileList";
import { ProfileCardSkeletons } from "@/components/Skeleton/ProfileCardsSkeleton";

const SearchPage = () => {
  const [filters, setFilters] = useState({
    memberID:"",
    minAge: "",
    maxAge: "",
    religion: "",
    city: "",
    education: "",
    profession: "",
  });

  const mutation = useFilterProfile();

  const handleFilter = () => {
    mutation.mutate(filters);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8">
      <div className="container">
        <h1 className="text-3xl font-display font-bold mb-6">
          Search Profiles
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 overflow-auto">
          {/* Filters */}
          <Card className="lg:col-span-1 h-fit">
            <CardHeader>
              <CardTitle className="text-lg font-sans">Filters</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Member Id */}
              <div className="space-y-2">
                <Label>Member ID</Label>

                <Input
                  placeholder="Enter member Id"
                  onChange={(e) =>
                    setFilters({ ...filters, memberID: e.target.value })
                  }
                />
              </div>
              {/* Age */}
              <div className="space-y-2">
                <Label>Age Range</Label>

                <div className="flex gap-2">
                  <Input
                    placeholder="Min"
                    type="number"
                    onChange={(e) =>
                      setFilters({ ...filters, minAge: e.target.value })
                    }
                  />

                  <Input
                    placeholder="Max"
                    type="number"
                    onChange={(e) =>
                      setFilters({ ...filters, maxAge: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Religion */}
              <div className="space-y-2">
                <Label>Religion</Label>

                <Select
                  onValueChange={(value) =>
                    setFilters({ ...filters, religion: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>

                  <SelectContent>
                    {["Hindu", "Muslim", "Christian", "Sikh", "Jain"].map(
                      (r) => (
                        <SelectItem key={r} value={r.toLowerCase()}>
                          {r}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>

              {/* City */}
              <div className="space-y-2">
                <Label>City</Label>

                <Input
                  placeholder="Enter city"
                  onChange={(e) =>
                    setFilters({ ...filters, city: e.target.value })
                  }
                />
              </div>

              {/* Education */}
              <div className="space-y-2">
                <Label>Education</Label>

                <Select
                  onValueChange={(value) =>
                    setFilters({ ...filters, education: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>

                  <SelectContent>
                    {["Bachelor's", "Master's", "PhD", "Professional"].map(
                      (e) => (
                        <SelectItem key={e} value={e.toLowerCase()}>
                          {e}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>

              {/* Profession */}
              <div className="space-y-2">
                <Label>Profession</Label>

                <Input
                  placeholder="Enter profession"
                  onChange={(e) =>
                    setFilters({ ...filters, profession: e.target.value })
                  }
                />
              </div>

              <Button className="w-full" onClick={handleFilter}>
                Search
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 h-fit ">
            {mutation.isPending ? (
              <ProfileCardSkeletons />
            ) : mutation.data?.data?.length > 0 ? (
              mutation.data?.data?.map((p) => (
                <ProfileList key={p?._id} profile={p} />
              ))
            ) : (
              <div className="flex flex-col items-center col-span-full">
                <h2 className="text-xl font-bold">Profile Not Found</h2>
                <img src={Profilenotfound} width={450} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
