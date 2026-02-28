import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Camera, Save, User, Heart, MapPin, Briefcase, Users, Star,
  Sparkles, ImagePlus, X, Wine, Cigarette, UtensilsCrossed, FileText,
  GraduationCap, Building2, IndianRupee, Clock, Globe
} from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [photos, setPhotos] = useState<string[]>([]);
  const [form, setForm] = useState({
    // Basic
    profileFor: "self",
    name: user?.name || "",
    dob: "1996-05-15",
    gender: "female",
    bodyType: "average",
    physicalStatus: "normal",
    height: "5'4\"",
    weight: "55",
    motherTongue: "hindi",
    maritalStatus: "never_married",
    // Lifestyle
    drinkingHabits: "no",
    smokingHabits: "no",
    diet: "vegetarian",
    description: "I am a fun-loving, family-oriented person who believes in traditional values with a modern outlook.",
    // Religion
    religion: "hindu",
    caste: "",
    subCaste: "",
    // Location
    country: "India",
    city: "Mumbai",
    state: "Maharashtra",
    citizenship: "Indian",
    ancestralOrigin: "",
    // Professional
    education: "masters",
    educationDetail: "",
    college: "",
    employmentSector: "private",
    occupation: "Software Engineer",
    occupationDetail: "",
    organization: "TCS",
    annualIncome: "10-20 Lakh",
    workingCity: "Mumbai",
    // Family
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    familyType: "nuclear",
    familyValues: "moderate",
    familyLocation: "",
    brothers: "0",
    sisters: "0",
    familyAbout: "",
    familyStatus: "middle_class",
    // Horoscope
    tob: "",
    pob: "",
    star: "",
    raasi: "",
    manglik: "no",
    // Hobbies
    hobbies: "",
    interests: "",
  });

  const handleChange = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) setPhotos((prev) => [...prev.slice(0, 5), ev.target!.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (idx: number) => setPhotos((prev) => prev.filter((_, i) => i !== idx));

  const filledFields = Object.values(form).filter((v) => v !== "").length;
  const totalFields = Object.keys(form).length;
  const completeness = Math.round((filledFields / totalFields) * 100);

  const handleSave = () => {
    toast({ title: "Profile Updated ✨", description: "Your profile has been saved successfully." });
  };

  const SectionIcon = ({ icon: Icon, label }: { icon: any; label: string }) => (
    <div className="flex items-center gap-2.5">
      <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
        <Icon className="h-4 w-4 text-accent-foreground" />
      </div>
      <CardTitle className="text-lg font-sans">{label}</CardTitle>
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots relative">
      <div className="container max-w-3xl relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold mb-1">Edit Profile</h1>
          <p className="text-muted-foreground">Complete your profile to find better matches</p>
        </div>

        {/* Photo & Completeness Hero */}
        <Card className="mb-6 overflow-hidden border-0 shadow-lg">
          <div className="hero-gradient-soft p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <Avatar className="h-28 w-28 border-4 border-primary/20 shadow-md">
                  <AvatarFallback className="bg-accent text-accent-foreground text-3xl font-semibold">
                    {user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-1 right-1 bg-primary text-primary-foreground rounded-full p-2 shadow-md hover:scale-105 transition-transform"
                >
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-semibold font-sans">{form.name || "Your Name"}</h2>
                <p className="text-sm text-muted-foreground mb-3">Profile ID: VB-2024-001</p>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Profile Completeness</span>
                    <span className="font-semibold text-primary">{completeness}%</span>
                  </div>
                  <Progress value={completeness} className="h-2.5" />
                  <p className="text-xs text-muted-foreground">
                    {completeness < 80 ? "Complete your profile to get 3x more matches!" : "Great job! Your profile is looking strong 🎉"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="w-full flex-wrap h-auto gap-1 bg-card border p-1.5">
            <TabsTrigger value="basic" className="gap-1.5 text-xs"><User className="h-3.5 w-3.5" />Basic</TabsTrigger>
            <TabsTrigger value="lifestyle" className="gap-1.5 text-xs"><Heart className="h-3.5 w-3.5" />Lifestyle</TabsTrigger>
            <TabsTrigger value="religion" className="gap-1.5 text-xs"><Sparkles className="h-3.5 w-3.5" />Religion</TabsTrigger>
            <TabsTrigger value="location" className="gap-1.5 text-xs"><MapPin className="h-3.5 w-3.5" />Location</TabsTrigger>
            <TabsTrigger value="professional" className="gap-1.5 text-xs"><Briefcase className="h-3.5 w-3.5" />Career</TabsTrigger>
            <TabsTrigger value="family" className="gap-1.5 text-xs"><Users className="h-3.5 w-3.5" />Family</TabsTrigger>
            <TabsTrigger value="horoscope" className="gap-1.5 text-xs"><Star className="h-3.5 w-3.5" />Horoscope</TabsTrigger>
            <TabsTrigger value="photos" className="gap-1.5 text-xs"><ImagePlus className="h-3.5 w-3.5" />Photos</TabsTrigger>
          </TabsList>

          {/* BASIC DETAILS */}
          <TabsContent value="basic">
            <Card>
              <CardHeader><SectionIcon icon={User} label="Basic Details" /></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Profile For</Label>
                    <Select value={form.profileFor} onValueChange={(v) => handleChange("profileFor", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["Self","Son","Daughter","Brother","Sister","Friend"].map(o => <SelectItem key={o} value={o.toLowerCase()}>{o}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Date of Birth</Label>
                    <Input type="date" value={form.dob} onChange={(e) => handleChange("dob", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <Select value={form.gender} onValueChange={(v) => handleChange("gender", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Body Type</Label>
                    <Select value={form.bodyType} onValueChange={(v) => handleChange("bodyType", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["Slim","Athletic","Average","Heavy"].map(b => <SelectItem key={b} value={b.toLowerCase()}>{b}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Physical Status</Label>
                    <Select value={form.physicalStatus} onValueChange={(v) => handleChange("physicalStatus", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="disabled">Physically Challenged</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Height</Label>
                    <Select value={form.height} onValueChange={(v) => handleChange("height", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>{["4'6\"","4'8\"","4'10\"","5'0\"","5'2\"","5'4\"","5'6\"","5'8\"","5'10\"","6'0\"","6'2\"","6'4\""].map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Weight (kg)</Label>
                    <Input value={form.weight} onChange={(e) => handleChange("weight", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Mother Tongue</Label>
                    <Select value={form.motherTongue} onValueChange={(v) => handleChange("motherTongue", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>{["Hindi","Marathi","Tamil","Telugu","Kannada","Bengali","Gujarati","Punjabi","Malayalam","Urdu","Odia"].map(l => <SelectItem key={l} value={l.toLowerCase()}>{l}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Marital Status</Label>
                    <Select value={form.maritalStatus} onValueChange={(v) => handleChange("maritalStatus", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="never_married">Never Married</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                        <SelectItem value="awaiting_divorce">Awaiting Divorce</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* LIFESTYLE */}
          <TabsContent value="lifestyle">
            <Card>
              <CardHeader><SectionIcon icon={Heart} label="Lifestyle" /></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5"><UtensilsCrossed className="h-3.5 w-3.5 text-muted-foreground" /> Diet</Label>
                    <Select value={form.diet} onValueChange={(v) => handleChange("diet", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="non_vegetarian">Non-Vegetarian</SelectItem>
                        <SelectItem value="eggetarian">Eggetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5"><Wine className="h-3.5 w-3.5 text-muted-foreground" /> Drinking Habits</Label>
                    <Select value={form.drinkingHabits} onValueChange={(v) => handleChange("drinkingHabits", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["No","Occasionally","Frequently","Yes"].map(o => <SelectItem key={o} value={o.toLowerCase()}>{o}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5"><Cigarette className="h-3.5 w-3.5 text-muted-foreground" /> Smoking Habits</Label>
                    <Select value={form.smokingHabits} onValueChange={(v) => handleChange("smokingHabits", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["No","Occasionally","Frequently","Yes"].map(o => <SelectItem key={o} value={o.toLowerCase()}>{o}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <Label className="flex items-center gap-1.5"><FileText className="h-3.5 w-3.5 text-muted-foreground" /> About Me</Label>
                  <Textarea rows={4} value={form.description} onChange={(e) => handleChange("description", e.target.value)} placeholder="Tell potential matches about yourself..." />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* RELIGION */}
          <TabsContent value="religion">
            <Card>
              <CardHeader><SectionIcon icon={Sparkles} label="Religion & Community" /></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Religion</Label>
                    <Select value={form.religion} onValueChange={(v) => handleChange("religion", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>{["Hindu","Muslim","Christian","Sikh","Jain","Buddhist","Parsi","Jewish","Other"].map(r => <SelectItem key={r} value={r.toLowerCase()}>{r}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Caste</Label>
                    <Input value={form.caste} onChange={(e) => handleChange("caste", e.target.value)} placeholder="Enter your caste" />
                  </div>
                  <div className="space-y-2">
                    <Label>Sub-Caste</Label>
                    <Input value={form.subCaste} onChange={(e) => handleChange("subCaste", e.target.value)} placeholder="Enter sub-caste (optional)" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* LOCATION */}
          <TabsContent value="location">
            <Card>
              <CardHeader><SectionIcon icon={MapPin} label="Location" /></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5"><Globe className="h-3.5 w-3.5 text-muted-foreground" /> Country</Label>
                    <Input value={form.country} onChange={(e) => handleChange("country", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>State</Label>
                    <Input value={form.state} onChange={(e) => handleChange("state", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>City</Label>
                    <Input value={form.city} onChange={(e) => handleChange("city", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Citizenship</Label>
                    <Input value={form.citizenship} onChange={(e) => handleChange("citizenship", e.target.value)} />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Ancestral Origin</Label>
                    <Input value={form.ancestralOrigin} onChange={(e) => handleChange("ancestralOrigin", e.target.value)} placeholder="e.g., Rajasthan, UP" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PROFESSIONAL */}
          <TabsContent value="professional">
            <Card>
              <CardHeader><SectionIcon icon={Briefcase} label="Professional Details" /></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5 text-muted-foreground" /> Education</Label>
                    <Select value={form.education} onValueChange={(v) => handleChange("education", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high_school">High School</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelors">Bachelor's</SelectItem>
                        <SelectItem value="masters">Master's</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="professional">Professional Degree</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Education Detail</Label>
                    <Input value={form.educationDetail} onChange={(e) => handleChange("educationDetail", e.target.value)} placeholder="e.g., B.Tech in Computer Science" />
                  </div>
                  <div className="space-y-2">
                    <Label>College / University</Label>
                    <Input value={form.college} onChange={(e) => handleChange("college", e.target.value)} placeholder="Enter college name" />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5 text-muted-foreground" /> Employment Sector</Label>
                    <Select value={form.employmentSector} onValueChange={(v) => handleChange("employmentSector", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["Private","Government","Business","Self-Employed","Not Working"].map(s => <SelectItem key={s} value={s.toLowerCase().replace(" ", "_")}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Occupation</Label>
                    <Input value={form.occupation} onChange={(e) => handleChange("occupation", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Occupation Detail</Label>
                    <Input value={form.occupationDetail} onChange={(e) => handleChange("occupationDetail", e.target.value)} placeholder="e.g., Senior Developer" />
                  </div>
                  <div className="space-y-2">
                    <Label>Organization</Label>
                    <Input value={form.organization} onChange={(e) => handleChange("organization", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5"><IndianRupee className="h-3.5 w-3.5 text-muted-foreground" /> Annual Income</Label>
                    <Select value={form.annualIncome} onValueChange={(v) => handleChange("annualIncome", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>{["Below 3 Lakh","3-5 Lakh","5-10 Lakh","10-20 Lakh","20-50 Lakh","50 Lakh+","1 Crore+"].map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Working City</Label>
                    <Input value={form.workingCity} onChange={(e) => handleChange("workingCity", e.target.value)} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAMILY */}
          <TabsContent value="family">
            <Card>
              <CardHeader><SectionIcon icon={Users} label="Family Details" /></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Father's Name</Label>
                    <Input value={form.fatherName} onChange={(e) => handleChange("fatherName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Father's Occupation</Label>
                    <Input value={form.fatherOccupation} onChange={(e) => handleChange("fatherOccupation", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Mother's Name</Label>
                    <Input value={form.motherName} onChange={(e) => handleChange("motherName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Mother's Occupation</Label>
                    <Input value={form.motherOccupation} onChange={(e) => handleChange("motherOccupation", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Family Type</Label>
                    <Select value={form.familyType} onValueChange={(v) => handleChange("familyType", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nuclear">Nuclear</SelectItem>
                        <SelectItem value="joint">Joint</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Family Values</Label>
                    <Select value={form.familyValues} onValueChange={(v) => handleChange("familyValues", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="traditional">Traditional</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="liberal">Liberal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Family Status</Label>
                    <Select value={form.familyStatus} onValueChange={(v) => handleChange("familyStatus", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="middle_class">Middle Class</SelectItem>
                        <SelectItem value="upper_middle">Upper Middle Class</SelectItem>
                        <SelectItem value="rich">Rich</SelectItem>
                        <SelectItem value="affluent">Affluent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Family Location</Label>
                    <Input value={form.familyLocation} onChange={(e) => handleChange("familyLocation", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>No. of Brothers</Label>
                    <Input type="number" min="0" value={form.brothers} onChange={(e) => handleChange("brothers", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>No. of Sisters</Label>
                    <Input type="number" min="0" value={form.sisters} onChange={(e) => handleChange("sisters", e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <Label>About Family</Label>
                  <Textarea rows={3} value={form.familyAbout} onChange={(e) => handleChange("familyAbout", e.target.value)} placeholder="Tell us about your family..." />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* HOROSCOPE */}
          <TabsContent value="horoscope">
            <Card>
              <CardHeader><SectionIcon icon={Star} label="Horoscope Details" /></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-muted-foreground" /> Time of Birth</Label>
                    <Input type="time" value={form.tob} onChange={(e) => handleChange("tob", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Place of Birth</Label>
                    <Input value={form.pob} onChange={(e) => handleChange("pob", e.target.value)} placeholder="City of birth" />
                  </div>
                  <div className="space-y-2">
                    <Label>Star / Nakshatra</Label>
                    <Input value={form.star} onChange={(e) => handleChange("star", e.target.value)} placeholder="e.g., Rohini" />
                  </div>
                  <div className="space-y-2">
                    <Label>Raasi / Moon Sign</Label>
                    <Input value={form.raasi} onChange={(e) => handleChange("raasi", e.target.value)} placeholder="e.g., Vrishabha" />
                  </div>
                  <div className="space-y-2">
                    <Label>Manglik</Label>
                    <Select value={form.manglik} onValueChange={(v) => handleChange("manglik", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="partial">Partial (Anshik)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PHOTOS */}
          <TabsContent value="photos">
            <Card>
              <CardHeader><SectionIcon icon={ImagePlus} label="Photos" /></CardHeader>
              <CardContent>
                <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={handlePhotoUpload} />
                <div className="grid grid-cols-3 gap-3">
                  {photos.map((src, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border-2 border-border group">
                      <img src={src} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                      <button onClick={() => removePhoto(idx)} className="absolute top-1.5 right-1.5 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                  {photos.length < 6 && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="aspect-square rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors bg-accent/30"
                    >
                      <Camera className="h-6 w-6" />
                      <span className="text-xs font-medium">Add Photo</span>
                    </button>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-3">Upload up to 6 photos. First photo will be your profile picture.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save */}
        <div className="flex gap-3 justify-end py-8">
          <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
          <Button onClick={handleSave} className="gap-2 btn-gradient text-primary-foreground"><Save className="h-4 w-4" /> Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
