import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Heart,
  MapPin,
  Briefcase,
  GraduationCap,
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
  Pencil,
  Sparkles,
  Music,
  Palette,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { useMyProfile, useProfileStatus } from "@/features/profile/hook";
import { Suspense } from "react";
import MyProfileHeroCard from "@/components/Skeleton/MyProfileHeroCard";
import MyProfileBasic from "@/components/Skeleton/MyProfileBasic";
import { profilePayload } from "@/features/profile/types";

const formatIncome = (income: string) => {
  const num = parseInt(income);
  if (num >= 100000) return `₹${(num / 100000).toFixed(1)} LPA`;
  return `₹${num.toLocaleString("en-IN")}`;
};

const SectionTitle = ({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <h2 className="text-lg font-display font-semibold mb-3 flex items-center gap-2">
    <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="h-3.5 w-3.5 text-primary" />
    </div>
    {children}
  </h2>
);

const InfoItem = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value?: string | null;
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

const formatOptions = (val: string) => {
  return val?.replace(/_/g, " ")?.replace(/\b\w/g, (c) => c.toUpperCase());
};

const MyProfile = () => {
  const navigate = useNavigate();
  const { data: my } = useMyProfile();
  const { data: profileStatus } = useProfileStatus();
  const { data } = my ?? {};
  const b = data?.basicDetails ?? {};
  const r = data?.religion ?? {};
  const l = data?.location ?? {};
  const pr = data?.professional ?? {};
  const f = data?.family ?? {};
  const h = data?.horoscope ?? {};
  const lf = data?.lifestyle ?? {};

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots">
      <div className="container max-w-5xl">
        {/* Hero Card */}
        <Suspense fallback={<MyProfileHeroCard />}>
          
          <Card className="overflow-hidden shadow-xl mb-6 border-0">
            <div className="h-48 md:h-56 bg-gradient-to-br from-primary/20 via-accent to-primary/10 relative">
              <div className="absolute top-5 right-5 flex gap-2">
                {data?.verified && (
                  <Badge className="bg-primary/90 text-primary-foreground border-0 gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Verified
                  </Badge>
                )}
                <Badge className="bg-primary/90 text-primary-foreground border-0 capitalize">
                  {data?.memberType}
                </Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end gap-5">
                <Avatar className="h-28 w-28 border-4 border-background shadow-xl -mb-14 relative z-10">
                  <AvatarImage
                    src={data?.images?.[0]}
                    className="bg-cover object-cover"
                  />
                  <AvatarFallback className="bg-primary/10 text-primary text-3xl font-display font-bold">
                    {b?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>

            <CardContent className="pt-18 p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mt-10">
                <div>
                  <h1 className="text-2xl md:text-3xl font-display font-bold">
                    {b?.name}, <span className="text-primary">{b.age}</span>
                  </h1>
                  <p className="text-muted-foreground flex items-center gap-1.5 mt-1">
                    <MapPin className="h-3.5 w-3.5" /> {l.city}, {l.state}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    ID: {data?.memberId}
                  </p>
                </div>
                <Button
                  onClick={() => navigate("/edit-profile")}
                  className="gap-2 btn-gradient text-primary-foreground"
                >
                  <Pencil className="h-4 w-4" /> Edit Profile
                </Button>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">
                {lf?.description}
              </p>

              {/* Completeness */}
              <div className="mt-5 p-4 rounded-xl bg-accent/50 border border-border/50">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground font-medium">
                    Profile Completeness
                  </span>
                  <span className="font-bold text-primary">
                    {profileStatus?.data?.percentage}%
                  </span>
                </div>
                <Progress
                  value={profileStatus?.data?.percentage}
                  className="h-2.5"
                />
                <p className="text-xs text-muted-foreground mt-1.5">
                  {profileStatus?.data?.percentage < 80
                    ? "Complete your profile to get 3x more matches!"
                    : "Great profile! You're getting maximum visibility 🎉"}
                </p>
              </div>
            </CardContent>
          </Card>
        </Suspense>

        <div className="space-y-6">
          {/* Basic Details */}
          <Suspense fallback={<MyProfileBasic />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle icon={User}>Basic Details</SectionTitle>
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
                    label="Marital Status"
                    value={formatOptions(b.maritalStatus)}
                  />
                </div>
              </CardContent>
            </Card>
          </Suspense>

          {/* Professional */}
          <Suspense fallback={<MyProfileBasic />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle icon={Briefcase}>
                  Professional Details
                </SectionTitle>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <InfoItem
                    icon={GraduationCap}
                    label="Education"
                    value={`${formatOptions(pr.education)} — ${pr.educationDetail}`}
                  />
                  <InfoItem
                    icon={Building2}
                    label="College"
                    value={pr.college}
                  />
                  <InfoItem
                    icon={Briefcase}
                    label="Occupation"
                    value={formatOptions(pr.occupation)}
                  />
                  <InfoItem
                    icon={Briefcase}
                    label="Specialization"
                    value={pr.occupationDetail}
                  />
                  <InfoItem
                    icon={Building2}
                    label="Organization"
                    value={pr.organization}
                  />
                  <InfoItem
                    icon={IndianRupee}
                    label="Annual Income"
                    value={formatIncome(pr.annualIncome)}
                  />
                </div>
              </CardContent>
            </Card>
          </Suspense>

          {/* Family */}
          <Suspense fallback={<MyProfileBasic />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle icon={Users}>Family Details</SectionTitle>
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
                <SectionTitle icon={Heart}>Lifestyle</SectionTitle>
                <div className="grid grid-cols-3 gap-3">
                  <InfoItem
                    icon={Utensils}
                    label="Diet"
                    value={formatOptions(lf?.diet)}
                  />
                  <InfoItem
                    icon={Wine}
                    label="Drinking"
                    value={lf?.drinkingHabits}
                  />
                  <InfoItem
                    icon={Cigarette}
                    label="Smoking"
                    value={lf?.smokingHabits}
                  />
                </div>
              </CardContent>
            </Card>
          </Suspense>

          {/* Religion */}
          <Suspense fallback={<MyProfileBasic />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle icon={Sparkles}>Religion & Astro</SectionTitle>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <InfoItem
                    icon={BookOpen}
                    label="Religion / Caste"
                    value={`${r.religion} — ${r.caste}`}
                  />
                  <InfoItem icon={Star} label="Sub Caste" value={r.subCaste} />
                  <InfoItem
                    icon={Star}
                    label="Star / Raasi"
                    value={`${h.rashi}`}
                  />
                  <InfoItem icon={Star} label="Manglik" value={h.manglik} />
                  <InfoItem icon={Clock} label="Time of Birth" value={h.tob} />
                  <InfoItem
                    icon={MapPin}
                    label="Place of Birth"
                    value={h.pob}
                  />
                </div>
              </CardContent>
            </Card>
          </Suspense>

          {/* Location */}
          <Suspense fallback={<MyProfileBasic />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle icon={Globe}>Location</SectionTitle>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
          <Suspense fallback={<MyProfileBasic />}>
            <Card>
              <CardContent className="p-6">
                <SectionTitle icon={Palette}>Hobbies & Interests</SectionTitle>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Music className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium">Hobbies</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data?.hobbies?.map((hobby) => (
                      <Badge
                        key={hobby}
                        variant="secondary"
                        className="text-xs px-3 py-1"
                      >
                        {hobby}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium">Interests</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data?.interests?.map((interest) => (
                      <Badge
                        key={interest}
                        variant="outline"
                        className="text-xs px-3 py-1"
                      >
                        {interest}
                      </Badge>
                    ))}
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

export default MyProfile;
