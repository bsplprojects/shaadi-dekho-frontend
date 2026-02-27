import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart, X, MapPin, Briefcase, GraduationCap, ArrowLeft, User, Ruler,
  BookOpen, Calendar, Globe, Users, Star, Dumbbell, Music, Utensils,
  Wine, Cigarette, Building2, IndianRupee, Home, Hash
} from "lucide-react";

const mockProfiles = [
  {
    id: 1,
    description: "I am a software engineer looking for a compatible life partner.",
    basicDetails: { profileFor: "self", name: "Ananya Sharma", dob: "1998-03-22", age: 26, bodyType: "Slim", physicalStatus: "Normal", height: "5ft 4in", weight: "55kg", motherTongue: "Hindi", maritalStatus: "Never Married", eatingHabits: "Vegetarian", drinkingHabits: "No", smokingHabits: "No" },
    religion: { religion: "Hindu", caste: "Brahmin", subCaste: "Kanyakubja", star: "Ashwini", raasi: "Mesha", dosh: "No" },
    location: { country: "India", state: "Maharashtra", city: "Mumbai", citizenship: "Indian", ancestralOrigin: "Uttar Pradesh" },
    professional: { education: "B.Tech", educationDetail: "Computer Science", college: "IIT Bombay", employmentSector: "Private", occupation: "Software Engineer", occupationDetail: "Frontend Developer", organization: "InnoTech Pvt Ltd", annualIncome: "2000000" },
    family: { fatherName: "Ramesh Sharma", fatherOccupation: "Government Service", motherName: "Sunita Sharma", motherOccupation: "Teacher", familyType: "Joint", familyValues: "Moderate", familyLocation: "Lucknow", brothers: 1, sisters: 1, about: "Well-educated and progressive family", status: "Upper Middle Class" },
    horoscope: { tob: "1998-03-22T05:15:00.000Z", pob: "Lucknow, Uttar Pradesh" },
    hobbies: ["Reading", "Yoga", "Cooking"],
    interests: ["Technology", "Travel", "Photography"],
    initials: "AS",
  },
  {
    id: 2,
    description: "A dedicated doctor who believes in making the world a healthier place.",
    basicDetails: { profileFor: "self", name: "Riya Patel", dob: "2000-07-10", age: 24, bodyType: "Average", physicalStatus: "Normal", height: "5ft 3in", weight: "52kg", motherTongue: "Gujarati", maritalStatus: "Never Married", eatingHabits: "Vegetarian", drinkingHabits: "No", smokingHabits: "No" },
    religion: { religion: "Hindu", caste: "Patel", subCaste: "Leuva Patel", star: "Mrigashira", raasi: "Vrishabha", dosh: "No" },
    location: { country: "India", state: "Gujarat", city: "Ahmedabad", citizenship: "Indian", ancestralOrigin: "Gujarat" },
    professional: { education: "MBBS", educationDetail: "Medicine", college: "AIIMS", employmentSector: "Government", occupation: "Doctor", occupationDetail: "General Physician", organization: "AIIMS Hospital", annualIncome: "1500000" },
    family: { fatherName: "Mahesh Patel", fatherOccupation: "Business", motherName: "Kavita Patel", motherOccupation: "Homemaker", familyType: "Nuclear", familyValues: "Traditional", familyLocation: "Ahmedabad", brothers: 0, sisters: 1, about: "Business family with strong values", status: "Upper Middle Class" },
    horoscope: { tob: "2000-07-10T08:00:00.000Z", pob: "Ahmedabad, Gujarat" },
    hobbies: ["Music", "Painting", "Walking"],
    interests: ["Healthcare", "Art", "Nature"],
    initials: "RP",
  },
  {
    id: 3,
    description: "A business analyst with a passion for data and strategy.",
    basicDetails: { profileFor: "self", name: "Sneha Reddy", dob: "1997-11-05", age: 27, bodyType: "Average", physicalStatus: "Normal", height: "5ft 5in", weight: "58kg", motherTongue: "Telugu", maritalStatus: "Never Married", eatingHabits: "Non-Vegetarian", drinkingHabits: "Occasionally", smokingHabits: "No" },
    religion: { religion: "Hindu", caste: "Reddy", subCaste: "Kapu", star: "Swati", raasi: "Tula", dosh: "No" },
    location: { country: "India", state: "Telangana", city: "Hyderabad", citizenship: "Indian", ancestralOrigin: "Andhra Pradesh" },
    professional: { education: "MBA", educationDetail: "Business Analytics", college: "ISB", employmentSector: "Private", occupation: "Business Analyst", occupationDetail: "Senior Analyst", organization: "Deloitte", annualIncome: "2200000" },
    family: { fatherName: "Venkat Reddy", fatherOccupation: "Retired", motherName: "Lakshmi Reddy", motherOccupation: "Homemaker", familyType: "Nuclear", familyValues: "Moderate", familyLocation: "Hyderabad", brothers: 1, sisters: 0, about: "Close-knit and supportive family", status: "Upper Middle Class" },
    horoscope: { tob: "1997-11-05T10:30:00.000Z", pob: "Hyderabad, Telangana" },
    hobbies: ["Hiking", "Cooking", "Reading"],
    interests: ["Data Science", "Fitness", "Travel"],
    initials: "SR",
  },
  {
    id: 4,
    description: "A creative fashion designer who draws inspiration from everything around me.",
    basicDetails: { profileFor: "self", name: "Priya Kapoor", dob: "1999-01-20", age: 25, bodyType: "Slim", physicalStatus: "Normal", height: "5ft 6in", weight: "54kg", motherTongue: "Hindi", maritalStatus: "Never Married", eatingHabits: "Vegetarian", drinkingHabits: "Occasionally", smokingHabits: "No" },
    religion: { religion: "Hindu", caste: "Khatri", subCaste: "Arora", star: "Pushya", raasi: "Karka", dosh: "No" },
    location: { country: "India", state: "Delhi", city: "Delhi", citizenship: "Indian", ancestralOrigin: "Punjab" },
    professional: { education: "B.Des", educationDetail: "Fashion Design", college: "NIFT Delhi", employmentSector: "Private", occupation: "Fashion Designer", occupationDetail: "Senior Designer", organization: "FabIndia", annualIncome: "1200000" },
    family: { fatherName: "Rajiv Kapoor", fatherOccupation: "Business", motherName: "Meena Kapoor", motherOccupation: "Homemaker", familyType: "Nuclear", familyValues: "Liberal", familyLocation: "Delhi", brothers: 0, sisters: 1, about: "Modern and open-minded family", status: "Upper Class" },
    horoscope: { tob: "1999-01-20T14:00:00.000Z", pob: "Delhi" },
    hobbies: ["Sketching", "Traveling", "Photography"],
    interests: ["Fashion", "Art", "Music"],
    initials: "PK",
  },
  {
    id: 5,
    description: "A product manager who thrives on building user-centric experiences.",
    basicDetails: { profileFor: "self", name: "Neha Gupta", dob: "1996-09-12", age: 28, bodyType: "Average", physicalStatus: "Normal", height: "5ft 2in", weight: "50kg", motherTongue: "Hindi", maritalStatus: "Never Married", eatingHabits: "Vegetarian", drinkingHabits: "No", smokingHabits: "No" },
    religion: { religion: "Hindu", caste: "Agarwal", subCaste: "Gupta", star: "Hasta", raasi: "Kanya", dosh: "No" },
    location: { country: "India", state: "Karnataka", city: "Bangalore", citizenship: "Indian", ancestralOrigin: "Uttar Pradesh" },
    professional: { education: "M.Tech", educationDetail: "Information Technology", college: "BITS Pilani", employmentSector: "Private", occupation: "Product Manager", occupationDetail: "Senior PM", organization: "Flipkart", annualIncome: "2500000" },
    family: { fatherName: "Anil Gupta", fatherOccupation: "Business", motherName: "Shalini Gupta", motherOccupation: "Homemaker", familyType: "Joint", familyValues: "Traditional", familyLocation: "Kanpur", brothers: 1, sisters: 1, about: "Large, loving joint family", status: "Upper Middle Class" },
    horoscope: { tob: "1996-09-12T07:45:00.000Z", pob: "Kanpur, Uttar Pradesh" },
    hobbies: ["Yoga", "Podcasts", "Traveling"],
    interests: ["Technology", "Fitness", "Startups"],
    initials: "NG",
  },
  {
    id: 6,
    description: "A chartered accountant with a love for classical music and dance.",
    basicDetails: { profileFor: "self", name: "Kavya Iyer", dob: "1998-06-30", age: 26, bodyType: "Slim", physicalStatus: "Normal", height: "5ft 4in", weight: "53kg", motherTongue: "Tamil", maritalStatus: "Never Married", eatingHabits: "Vegetarian", drinkingHabits: "No", smokingHabits: "No" },
    religion: { religion: "Hindu", caste: "Iyer", subCaste: "Vadama", star: "Punarvasu", raasi: "Mithuna", dosh: "No" },
    location: { country: "India", state: "Tamil Nadu", city: "Chennai", citizenship: "Indian", ancestralOrigin: "Tamil Nadu" },
    professional: { education: "B.Com + CA", educationDetail: "Chartered Accountancy", college: "Loyola College", employmentSector: "Private", occupation: "Chartered Accountant", occupationDetail: "Senior Associate", organization: "EY", annualIncome: "1800000" },
    family: { fatherName: "Srinivasan Iyer", fatherOccupation: "Professor", motherName: "Lakshmi Iyer", motherOccupation: "Teacher", familyType: "Nuclear", familyValues: "Traditional", familyLocation: "Chennai", brothers: 1, sisters: 0, about: "Academic family with deep cultural roots", status: "Upper Middle Class" },
    horoscope: { tob: "1998-06-30T04:30:00.000Z", pob: "Chennai, Tamil Nadu" },
    hobbies: ["Classical Dance", "Carnatic Music", "Reading"],
    interests: ["Finance", "Arts", "Culture"],
    initials: "KI",
  },
];

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

const InfoItem = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/40 border border-border/50">
    <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
    <div className="min-w-0">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-medium truncate">{value}</p>
    </div>
  </div>
);

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = mockProfiles.find((p) => p.id === Number(id));

  if (!profile) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center page-pattern page-dots">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <User className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-display font-bold mb-2">Profile Not Found</h2>
            <p className="text-muted-foreground mb-4">The profile you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/matches")}>Back to Matches</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const b = profile.basicDetails;
  const r = profile.religion;
  const l = profile.location;
  const p = profile.professional;
  const f = profile.family;

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots">
      <div className="container max-w-5xl">
        <Button variant="ghost" size="sm" className="mb-4" onClick={() => navigate("/matches")}>
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Matches
        </Button>

        {/* Hero Card */}
        <Card className="overflow-hidden shadow-xl mb-6">
          <div className="h-48 md:h-56 bg-gradient-to-br from-primary/20 via-accent to-primary/10 relative flex items-end">
            <div className="absolute top-6 right-6 flex gap-2">
              <Badge className="bg-background/80 backdrop-blur text-foreground border-border/50">{b.maritalStatus}</Badge>
              <Badge className="bg-background/80 backdrop-blur text-foreground border-border/50">{r.religion} — {r.caste}</Badge>
            </div>
            <div className="flex items-end gap-5 p-6 w-full">
              <div className="h-24 w-24 md:h-28 md:w-28 rounded-2xl bg-primary/10 border-4 border-background shadow-lg flex items-center justify-center text-3xl md:text-4xl font-display font-bold text-primary shrink-0 -mb-12 relative z-10">
                {profile.initials}
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
                <Button size="sm" variant="outline"><X className="h-4 w-4 mr-1" /> Decline</Button>
                <Button size="sm" className="btn-gradient"><Heart className="h-4 w-4 mr-1" /> Interested</Button>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">{profile.description}</p>
          </CardContent>
        </Card>

        <div className="space-y-6">
            {/* Basic Details */}
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Basic Details</SectionTitle>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <InfoItem icon={Calendar} label="Date of Birth" value={new Date(b.dob).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} />
                  <InfoItem icon={Ruler} label="Height" value={b.height} />
                  <InfoItem icon={Hash} label="Weight" value={b.weight} />
                  <InfoItem icon={User} label="Body Type" value={b.bodyType} />
                  <InfoItem icon={BookOpen} label="Mother Tongue" value={b.motherTongue} />
                  <InfoItem icon={User} label="Physical Status" value={b.physicalStatus} />
                </div>
              </CardContent>
            </Card>

            {/* Professional Details */}
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Professional Details</SectionTitle>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <InfoItem icon={GraduationCap} label="Education" value={`${p.education} — ${p.educationDetail}`} />
                  <InfoItem icon={Building2} label="College" value={p.college} />
                  <InfoItem icon={Briefcase} label="Occupation" value={p.occupation} />
                  <InfoItem icon={Briefcase} label="Specialization" value={p.occupationDetail} />
                  <InfoItem icon={Building2} label="Organization" value={p.organization} />
                  <InfoItem icon={IndianRupee} label="Annual Income" value={formatIncome(p.annualIncome)} />
                </div>
              </CardContent>
            </Card>

            {/* Family Details */}
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Family Details</SectionTitle>
                <p className="text-muted-foreground text-sm mb-4">{f.about}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <InfoItem icon={User} label="Father" value={`${f.fatherName} (${f.fatherOccupation})`} />
                  <InfoItem icon={User} label="Mother" value={`${f.motherName} (${f.motherOccupation})`} />
                  <InfoItem icon={Home} label="Family Type" value={`${f.familyType} · ${f.familyValues}`} />
                  <InfoItem icon={MapPin} label="Family Location" value={f.familyLocation} />
                  <InfoItem icon={Users} label="Siblings" value={`${f.brothers} Brother(s), ${f.sisters} Sister(s)`} />
                  <InfoItem icon={Star} label="Family Status" value={f.status} />
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle */}
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Lifestyle</SectionTitle>
                <div className="space-y-3">
                  <InfoItem icon={Utensils} label="Diet" value={b.eatingHabits} />
                  <InfoItem icon={Wine} label="Drinking" value={b.drinkingHabits} />
                  <InfoItem icon={Cigarette} label="Smoking" value={b.smokingHabits} />
                </div>
              </CardContent>
            </Card>

            {/* Religion & Astro */}
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Religion & Astro</SectionTitle>
                <div className="space-y-3">
                  <InfoItem icon={BookOpen} label="Religion / Caste" value={`${r.religion} — ${r.caste}`} />
                  <InfoItem icon={Star} label="Sub Caste" value={r.subCaste} />
                  <InfoItem icon={Star} label="Star / Raasi" value={`${r.star} · ${r.raasi}`} />
                  <InfoItem icon={Star} label="Manglik / Dosh" value={r.dosh} />
                  <InfoItem icon={MapPin} label="Place of Birth" value={profile.horoscope.pob} />
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Location</SectionTitle>
                <div className="space-y-3">
                  <InfoItem icon={Globe} label="Country / Citizenship" value={`${l.country} · ${l.citizenship}`} />
                  <InfoItem icon={MapPin} label="Current City" value={`${l.city}, ${l.state}`} />
                  <InfoItem icon={MapPin} label="Ancestral Origin" value={l.ancestralOrigin} />
                </div>
              </CardContent>
            </Card>

            {/* Hobbies & Interests */}
            <Card>
              <CardContent className="p-6">
                <SectionTitle>Hobbies & Interests</SectionTitle>
                <div className="mb-3">
                  <p className="text-xs text-muted-foreground mb-2">Hobbies</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.hobbies.map((h) => (
                      <Badge key={h} variant="secondary" className="text-xs">{h}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Interests</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((i) => (
                      <Badge key={i} variant="outline" className="text-xs">{i}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
