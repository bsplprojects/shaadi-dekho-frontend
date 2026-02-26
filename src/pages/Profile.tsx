import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, X, MapPin, Briefcase, GraduationCap, ArrowLeft, User, Ruler, BookOpen } from "lucide-react";

const mockProfiles = [
  { id: 1, name: "Ananya Sharma", age: 26, city: "Mumbai", profession: "Software Engineer", education: "B.Tech, IIT Bombay", religion: "Hindu", height: "5'4\"", initials: "AS", about: "A passionate software engineer who loves building products that make a difference. I enjoy reading, traveling, and trying out new cuisines. Looking for someone who shares similar values and a love for adventure.", motherTongue: "Hindi", maritalStatus: "Never Married", diet: "Vegetarian", drinking: "No", smoking: "No" },
  { id: 2, name: "Riya Patel", age: 24, city: "Ahmedabad", profession: "Doctor", education: "MBBS, AIIMS", religion: "Hindu - Patel", height: "5'3\"", initials: "RP", about: "A dedicated doctor who believes in making the world a healthier place. I love music, painting, and long walks. Seeking a kind and supportive partner to share life's journey.", motherTongue: "Gujarati", maritalStatus: "Never Married", diet: "Vegetarian", drinking: "No", smoking: "No" },
  { id: 3, name: "Sneha Reddy", age: 27, city: "Hyderabad", profession: "Business Analyst", education: "MBA, ISB", religion: "Hindu - Reddy", height: "5'5\"", initials: "SR", about: "A business analyst with a passion for data and strategy. When I'm not crunching numbers, you'll find me hiking or experimenting with new recipes. Looking for an ambitious and caring partner.", motherTongue: "Telugu", maritalStatus: "Never Married", diet: "Non-Vegetarian", drinking: "Occasionally", smoking: "No" },
  { id: 4, name: "Priya Kapoor", age: 25, city: "Delhi", profession: "Fashion Designer", education: "NIFT Delhi", religion: "Hindu - Khatri", height: "5'6\"", initials: "PK", about: "A creative fashion designer who draws inspiration from everything around me. I love art galleries, coffee shops, and spontaneous road trips. Seeking someone with a great sense of humor.", motherTongue: "Hindi", maritalStatus: "Never Married", diet: "Vegetarian", drinking: "Occasionally", smoking: "No" },
  { id: 5, name: "Neha Gupta", age: 28, city: "Bangalore", profession: "Product Manager", education: "M.Tech, BITS Pilani", religion: "Hindu - Agarwal", height: "5'2\"", initials: "NG", about: "A product manager who thrives on building user-centric experiences. I enjoy yoga, podcasts, and weekend getaways. Looking for a thoughtful and driven partner.", motherTongue: "Hindi", maritalStatus: "Never Married", diet: "Vegetarian", drinking: "No", smoking: "No" },
  { id: 6, name: "Kavya Iyer", age: 26, city: "Chennai", profession: "Chartered Accountant", education: "B.Com, Loyola College", religion: "Hindu - Iyer", height: "5'4\"", initials: "KI", about: "A chartered accountant with a love for classical music and dance. I believe in balancing work and life beautifully. Seeking a partner who values family and traditions.", motherTongue: "Tamil", maritalStatus: "Never Married", diet: "Vegetarian", drinking: "No", smoking: "No" },
];

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

  const details = [
    { label: "Location", value: profile.city, icon: MapPin },
    { label: "Profession", value: profile.profession, icon: Briefcase },
    { label: "Education", value: profile.education, icon: GraduationCap },
    { label: "Height", value: profile.height, icon: Ruler },
    { label: "Mother Tongue", value: profile.motherTongue, icon: BookOpen },
  ];

  const lifestyle = [
    { label: "Marital Status", value: profile.maritalStatus },
    { label: "Diet", value: profile.diet },
    { label: "Drinking", value: profile.drinking },
    { label: "Smoking", value: profile.smoking },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots">
      <div className="container max-w-4xl">
        <Button variant="ghost" size="sm" className="mb-4" onClick={() => navigate("/matches")}>
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Matches
        </Button>

        <Card className="overflow-hidden shadow-xl">
          {/* Header */}
          <div className="h-52 bg-gradient-to-br from-primary/20 via-accent to-primary/10 flex items-center justify-center relative">
            <div className="h-28 w-28 rounded-full bg-primary/10 border-4 border-background shadow-lg flex items-center justify-center text-4xl font-display font-bold text-primary">
              {profile.initials}
            </div>
          </div>

          <CardContent className="p-6 md:p-8">
            {/* Name & Religion */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-bold">
                  {profile.name}, <span className="text-primary">{profile.age}</span>
                </h1>
                <p className="text-muted-foreground">{profile.city}</p>
              </div>
              <Badge variant="secondary" className="self-start text-sm px-3 py-1">{profile.religion}</Badge>
            </div>

            {/* About */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">About</h2>
              <p className="text-muted-foreground leading-relaxed">{profile.about}</p>
            </div>

            {/* Details grid */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Personal Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {details.map((d) => {
                  const Icon = d.icon;
                  return (
                    <div key={d.label} className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                      <Icon className="h-4 w-4 text-primary shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">{d.label}</p>
                        <p className="text-sm font-medium">{d.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Lifestyle */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Lifestyle</h2>
              <div className="flex flex-wrap gap-3">
                {lifestyle.map((l) => (
                  <div key={l.label} className="px-4 py-2 rounded-lg bg-accent/50 text-sm">
                    <span className="text-muted-foreground">{l.label}:</span>{" "}
                    <span className="font-medium">{l.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <Button size="lg" variant="outline" className="flex-1">
                <X className="h-4 w-4 mr-2" /> Decline
              </Button>
              <Button size="lg" className="flex-1 btn-gradient">
                <Heart className="h-4 w-4 mr-2" /> Interested
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
