import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  X,
  MapPin,
  Briefcase,
  GraduationCap,
  ArrowLeft,
  User,
  Ruler,
  BookOpen,
  Calendar,
  Globe,
  Users,
  Star,
  Utensils,
  Wine,
  Cigarette,
  Building2,
  IndianRupee,
  Home,
  Hash,
  Clock,
  Paperclip,
} from "lucide-react";
import { useGetProfile } from "@/features/profile/hook";
import { Suspense } from "react";
import MyProfileHeroCard from "@/components/Skeleton/MyProfileHeroCard";
import MyProfileBasic from "@/components/Skeleton/MyProfileBasic";
import { HobbiesInterestsSkeleton } from "@/components/Skeleton/HobbiesInterests";
import { useInterest } from "@/features/interest/hook";

const formatIncome = (income: string) => {
  const num = parseInt(income);
  if (num >= 100000) return `₹${(num / 100000).toFixed(1)} LPA`;
  return `₹${num.toLocaleString("en-IN")}`;
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-display font-semibold mb-3 flex items-center gap-2">
    <span className="h-1 w-5 rounded-full bg-primary inline-block" />
    {children}
  </h2>
);

const formatOptions = (val: string) => {
  return val?.replace(/_/g, " ")?.replace(/\b\w/g, (c) => c.toUpperCase());
};

const InfoItem = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => {
  const displayValue =
    value && value !== "undefined" && value !== "null" ? value : "-";
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/40 border border-border/50">
      <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium truncate capitalize">
          {displayValue}
        </p>
      </div>
    </div>
  );
};

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetProfile(id);
  const addInterest = useInterest();

  if (!data?.data) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center page-pattern page-dots">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <User className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-display font-bold mb-2">
              Profile Not Found
            </h2>
            <p className="text-muted-foreground mb-4">
              The profile you're looking for doesn't exist.
            </p>
            <Button onClick={() => navigate("/matches")}>
              Back to Matches
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const memberId = data?.data?.memberId;
  const b = data?.data?.basicDetails;
  const r = data?.data?.religion;
  const l = data?.data?.location;
  const p = data?.data?.professional;
  const f = data?.data?.family;
  const ls = data?.data?.lifestyle;
  const hsc = data?.data?.horoscope;
  const h = data?.data?.hobbies;
  const i = data?.data?.interests;

  const saveInterest = () => {
    addInterest.mutate(id);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots">
      <div className="container max-w-5xl">
        <Button
          variant="ghost"
          size="sm"
          className="mb-4"
          onClick={() => navigate("/matches")}
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Matches
        </Button>

        {/* Hero Card */}
        <Suspense fallback={<MyProfileHeroCard />}>
          <Card className="overflow-hidden shadow-xl mb-6">
            <div className="h-48 md:h-56 bg-gradient-to-br from-primary/20 via-accent to-primary/10 relative flex items-end">
              <div className="absolute top-6 right-6 flex gap-2">
                <Badge className="bg-background/80 backdrop-blur text-foreground border-border/50">
                  {formatOptions(b.maritalStatus)}
                </Badge>
                <Badge className="bg-background/80 backdrop-blur text-foreground border-border/50 capitalize">
                  {r.religion} — {r.caste}
                </Badge>
              </div>
              <div className="flex items-end gap-5 p-6 w-full">
                <div className="h-24 w-24 md:h-28 md:w-28 rounded-2xl bg-primary/10 border-4 border-background shadow-lg flex items-center justify-center text-3xl md:text-4xl font-display font-bold text-primary shrink-0 -mb-12 relative z-10 overflow-hidden">
                  <img
                    src={data?.data?.images?.[0]}
                    alt={b.name[0]}
                    className="object-cover h-full"
                  />
                </div>
              </div>
            </div>

            <CardContent className="pt-16 p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                <div>
                  <h1 className="text-2xl md:text-3xl font-display font-bold">
                    {b.name}, <span className="text-primary">{b.age}</span>
                  </h1>
                  <p className="text-muted-foreground flex items-center gap-1.5 mt-1">
                    <MapPin className="h-3.5 w-3.5" /> {l.city}, {l.state}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <X className="h-4 w-4 mr-1" /> Decline
                  </Button>
                  <Button
                    onClick={saveInterest}
                    size="sm"
                    className="btn-gradient"
                  >
                    <Heart className="h-4 w-4 mr-1" /> Interested
                  </Button>
                </div>
              </div>
              <small className="text-primary font-semibold">{memberId}</small>
              <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">
                {ls?.description}
              </p>
            </CardContent>
          </Card>
        </Suspense>

        <div className="space-y-6">
          {/* Basic Details */}
          <Suspense fallback={<MyProfileBasic />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Basic Details</SectionTitle>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <InfoItem
                    icon={Calendar}
                    label="Date of Birth"
                    value={new Date(b.dob).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  />
                  <InfoItem icon={Ruler} label="Height" value={b.height} />
                  <InfoItem icon={Hash} label="Weight" value={b.weight} />
                  <InfoItem icon={User} label="Body Type" value={b.bodyType} />
                  <InfoItem
                    icon={BookOpen}
                    label="Mother Tongue"
                    value={b.motherTongue}
                  />
                  <InfoItem
                    icon={User}
                    label="Physical Status"
                    value={b.physicalStatus}
                  />
                </div>
              </CardContent>
            </Card>
          </Suspense>

          {/* Professional Details */}
          <Suspense fallback={<MyProfileBasic />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Professional Details</SectionTitle>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <InfoItem
                    icon={GraduationCap}
                    label="Education"
                    value={`${formatOptions(p.education)} — ${p.educationDetail}`}
                  />
                  <InfoItem
                    icon={Building2}
                    label="College"
                    value={p.college}
                  />
                  <InfoItem
                    icon={Briefcase}
                    label="Occupation"
                    value={formatOptions(p.occupation)}
                  />
                  <InfoItem
                    icon={Briefcase}
                    label="Specialization"
                    value={p.occupationDetail}
                  />
                  <InfoItem
                    icon={Building2}
                    label="Organization"
                    value={p.organization}
                  />
                  <InfoItem
                    icon={IndianRupee}
                    label="Annual Income"
                    value={formatIncome(p.annualIncome)}
                  />
                </div>
              </CardContent>
            </Card>
          </Suspense>

          {/* Family Details */}
          <Suspense fallback={<MyProfileBasic />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Family Details</SectionTitle>
                <p className="text-muted-foreground text-sm mb-4">{f.about}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <InfoItem
                    icon={User}
                    label="Father"
                    value={`${f.fatherName} (${f.fatherOccupation})`}
                  />
                  <InfoItem
                    icon={User}
                    label="Mother"
                    value={`${f.motherName} (${f.motherOccupation})`}
                  />
                  <InfoItem
                    icon={Home}
                    label="Family Type"
                    value={`${f.familyType} · ${f.familyValues}`}
                  />
                  <InfoItem
                    icon={MapPin}
                    label="Family Location"
                    value={f.familyLocation}
                  />
                  <InfoItem
                    icon={Users}
                    label="Siblings"
                    value={`${f.brothers} Brother(s), ${f.sisters} Sister(s)`}
                  />
                  <InfoItem
                    icon={Star}
                    label="Family Status"
                    value={f.status}
                  />
                </div>
              </CardContent>
            </Card>
          </Suspense>

          {/* Lifestyle */}
          <Suspense fallback={<MyProfileBasic />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Lifestyle</SectionTitle>
                <div className="space-y-3">
                  <InfoItem
                    icon={Utensils}
                    label="Diet"
                    value={formatOptions(ls.diet)}
                  />
                  <InfoItem
                    icon={Wine}
                    label="Drinking"
                    value={formatOptions(ls.drinkingHabits)}
                  />
                  <InfoItem
                    icon={Cigarette}
                    label="Smoking"
                    value={formatOptions(ls.smokingHabits)}
                  />
                </div>
              </CardContent>
            </Card>
          </Suspense>

          {/* Religion & Astro */}
          <Suspense fallback={<MyProfileBasic />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Religion & Astro</SectionTitle>
                <div className="space-y-3">
                  <InfoItem
                    icon={BookOpen}
                    label="Religion / Caste"
                    value={`${r.religion} — ${r.caste}`}
                  />
                  <InfoItem icon={Star} label="Sub Caste" value={r.subCaste} />

                  {hsc?.manglik && (
                    <InfoItem
                      icon={Star}
                      label="Manglik / Dosh"
                      value={hsc?.manglik}
                    />
                  )}

                  {hsc?.pob && (
                    <InfoItem
                      icon={MapPin}
                      label="Place of Birth"
                      value={hsc?.pob}
                    />
                  )}

                  {hsc?.tob && (
                    <InfoItem
                      icon={Clock}
                      label="Time of Birth"
                      value={hsc?.tob}
                    />
                  )}

                  {hsc?.nakshatra && (
                    <InfoItem
                      icon={Star}
                      label="Nakshatra"
                      value={hsc?.nakshatra}
                    />
                  )}

                  {hsc?.gotra && (
                    <InfoItem icon={Clock} label="Gotra" value={hsc?.gotra} />
                  )}

                  {hsc?.notes && (
                    <InfoItem
                      icon={Paperclip}
                      label="Notes"
                      value={hsc?.notes}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </Suspense>

          {/* Location */}
          <Suspense fallback={<MyProfileBasic />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Location</SectionTitle>
                <div className="space-y-3">
                  <InfoItem
                    icon={Globe}
                    label="Country / Citizenship"
                    value={`${l.country} · ${l.citizenship}`}
                  />
                  <InfoItem
                    icon={MapPin}
                    label="Current City"
                    value={`${l.city}, ${l.state}`}
                  />
                  <InfoItem
                    icon={MapPin}
                    label="Ancestral Origin"
                    value={l.ancestralOrigin}
                  />
                </div>
              </CardContent>
            </Card>
          </Suspense>

          {/* Hobbies & Interests */}
          <Suspense fallback={<HobbiesInterestsSkeleton />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Hobbies & Interests</SectionTitle>
                <div className="mb-3">
                  <p className="text-xs text-muted-foreground mb-2">Hobbies</p>
                  <div className="flex flex-wrap gap-2">
                    {h?.length > 0 ? (
                      h?.map((h) => (
                        <Badge key={h} variant="secondary" className="text-xs">
                          {h}
                        </Badge>
                      ))
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        Not mentioned
                      </Badge>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Interests
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {i?.length > 0 ? (
                      i?.map((i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {i}
                        </Badge>
                      ))
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        Not mentioned
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Profile;
