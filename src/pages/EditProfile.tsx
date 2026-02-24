import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Camera, Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+91 98765 43210",
    dob: "1996-05-15",
    gender: "female",
    height: "5'4\"",
    weight: "55",
    maritalStatus: "never_married",
    motherTongue: "hindi",
    religion: "hindu",
    caste: "Sharma",
    city: "Mumbai",
    state: "Maharashtra",
    education: "masters",
    occupation: "Software Engineer",
    company: "TCS",
    income: "10-20 Lakh",
    aboutMe: "I am a fun-loving, family-oriented person who believes in traditional values with a modern outlook. I love travelling, cooking, and reading books.",
  });

  const handleChange = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const handleSave = () => {
    toast({ title: "Profile Updated", description: "Your profile has been saved successfully." });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 hero-gradient-soft">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-display font-bold mb-2">Edit Profile</h1>
        <p className="text-muted-foreground mb-8">Update your personal information</p>

        <div className="space-y-6">
          {/* Photo */}
          <Card>
            <CardContent className="pt-6 flex items-center gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24 border-4 border-primary/20">
                  <AvatarFallback className="bg-accent text-accent-foreground text-2xl font-semibold">
                    {user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-1.5 shadow-md">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{form.name}</h3>
                <p className="text-sm text-muted-foreground">{form.email}</p>
                <p className="text-xs text-muted-foreground mt-1">Profile ID: VB-2024-001</p>
              </div>
            </CardContent>
          </Card>

          {/* Basic Details */}
          <Card>
            <CardHeader><CardTitle className="text-lg font-sans">Basic Details</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} />
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
                  <Label>Marital Status</Label>
                  <Select value={form.maritalStatus} onValueChange={(v) => handleChange("maritalStatus", v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="never_married">Never Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Religion & Community */}
          <Card>
            <CardHeader><CardTitle className="text-lg font-sans">Religion & Community</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Religion</Label>
                  <Select value={form.religion} onValueChange={(v) => handleChange("religion", v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{["Hindu","Muslim","Christian","Sikh","Jain","Buddhist"].map(r => <SelectItem key={r} value={r.toLowerCase()}>{r}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Caste</Label>
                  <Input value={form.caste} onChange={(e) => handleChange("caste", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Mother Tongue</Label>
                  <Select value={form.motherTongue} onValueChange={(v) => handleChange("motherTongue", v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{["Hindi","Marathi","Tamil","Telugu","Kannada","Bengali","Gujarati","Punjabi","Malayalam"].map(l => <SelectItem key={l} value={l.toLowerCase()}>{l}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader><CardTitle className="text-lg font-sans">Location</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>City</Label>
                  <Input value={form.city} onChange={(e) => handleChange("city", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>State</Label>
                  <Input value={form.state} onChange={(e) => handleChange("state", e.target.value)} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional */}
          <Card>
            <CardHeader><CardTitle className="text-lg font-sans">Professional Details</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Education</Label>
                  <Select value={form.education} onValueChange={(v) => handleChange("education", v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelors">Bachelor's</SelectItem>
                      <SelectItem value="masters">Master's</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="professional">Professional Degree</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Occupation</Label>
                  <Input value={form.occupation} onChange={(e) => handleChange("occupation", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Company</Label>
                  <Input value={form.company} onChange={(e) => handleChange("company", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Annual Income</Label>
                  <Select value={form.income} onValueChange={(v) => handleChange("income", v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{["3-5 Lakh","5-10 Lakh","10-20 Lakh","20-50 Lakh","50 Lakh+"].map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About Me */}
          <Card>
            <CardHeader><CardTitle className="text-lg font-sans">About Me</CardTitle></CardHeader>
            <CardContent>
              <Textarea rows={4} value={form.aboutMe} onChange={(e) => handleChange("aboutMe", e.target.value)} placeholder="Tell potential matches about yourself..." />
            </CardContent>
          </Card>

          <div className="flex gap-3 justify-end pb-8">
            <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
            <Button onClick={handleSave} className="gap-2"><Save className="h-4 w-4" /> Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
