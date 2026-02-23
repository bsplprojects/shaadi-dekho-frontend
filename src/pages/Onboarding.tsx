import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check } from "lucide-react";

const steps = ["Basic Details", "Professional", "Education", "Religion & Community", "Lifestyle & About"];

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const { completeOnboarding } = useAuth();
  const navigate = useNavigate();

  const progress = ((step + 1) / steps.length) * 100;

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else {
      completeOnboarding();
      navigate("/preferences");
    }
  };
  const prev = () => { if (step > 0) setStep(step - 1); };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-10 px-4 hero-gradient-soft">
      <div className="container max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-3">
            {steps.map((s, i) => (
              <div key={s} className="flex flex-col items-center flex-1">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-colors ${
                  i < step ? "bg-primary border-primary text-primary-foreground" :
                  i === step ? "border-primary text-primary bg-card" :
                  "border-border text-muted-foreground bg-card"
                }`}>
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span className={`text-[10px] mt-1 text-center hidden sm:block ${i <= step ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  {s}
                </span>
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="font-display text-xl">{steps[step]}</CardTitle>
            <CardDescription>Step {step + 1} of {steps.length}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {step === 0 && <BasicStep />}
            {step === 1 && <ProfessionalStep />}
            {step === 2 && <EducationStep />}
            {step === 3 && <ReligionStep />}
            {step === 4 && <LifestyleStep />}

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={prev} disabled={step === 0}>
                Previous
              </Button>
              <Button onClick={next}>
                {step === steps.length - 1 ? "Complete Profile" : "Next Step"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const BasicStep = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label>Date of Birth</Label>
      <Input type="date" />
    </div>
    <div className="space-y-2">
      <Label>Gender</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label>Height</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select height" /></SelectTrigger>
        <SelectContent>
          {["4'6\"","4'8\"","4'10\"","5'0\"","5'2\"","5'4\"","5'6\"","5'8\"","5'10\"","6'0\"","6'2\"","6'4\""].map(h => (
            <SelectItem key={h} value={h}>{h}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label>Marital Status</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="never_married">Never Married</SelectItem>
          <SelectItem value="divorced">Divorced</SelectItem>
          <SelectItem value="widowed">Widowed</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2 sm:col-span-2">
      <Label>City</Label>
      <Input placeholder="Enter your city" />
    </div>
    <div className="space-y-2 sm:col-span-2">
      <Label>State</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
        <SelectContent>
          {["Maharashtra","Delhi","Karnataka","Tamil Nadu","Gujarat","Rajasthan","Uttar Pradesh","West Bengal","Kerala","Punjab","Other"].map(s => (
            <SelectItem key={s} value={s.toLowerCase().replace(/ /g,"_")}>{s}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </div>
);

const ProfessionalStep = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label>Occupation</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select occupation" /></SelectTrigger>
        <SelectContent>
          {["Software Engineer","Doctor","Business Owner","Teacher","Government Employee","Lawyer","Accountant","Other"].map(o => (
            <SelectItem key={o} value={o.toLowerCase().replace(/ /g,"_")}>{o}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label>Company / Organization</Label>
      <Input placeholder="Where do you work?" />
    </div>
    <div className="space-y-2">
      <Label>Annual Income</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
        <SelectContent>
          {["Below 3 Lakh","3-5 Lakh","5-10 Lakh","10-20 Lakh","20-50 Lakh","50 Lakh - 1 Crore","1 Crore+"].map(i => (
            <SelectItem key={i} value={i.toLowerCase().replace(/ /g,"_")}>{i}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label>Working City</Label>
      <Input placeholder="City where you work" />
    </div>
  </div>
);

const EducationStep = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label>Highest Qualification</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select qualification" /></SelectTrigger>
        <SelectContent>
          {["High School","Diploma","Bachelor's","Master's","PhD","Professional Degree"].map(q => (
            <SelectItem key={q} value={q.toLowerCase().replace(/[' ]/g,"_")}>{q}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label>Field of Study</Label>
      <Input placeholder="e.g. Computer Science, Medicine" />
    </div>
    <div className="space-y-2 sm:col-span-2">
      <Label>College / University</Label>
      <Input placeholder="Name of your institution" />
    </div>
  </div>
);

const ReligionStep = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label>Religion</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select religion" /></SelectTrigger>
        <SelectContent>
          {["Hindu","Muslim","Christian","Sikh","Jain","Buddhist","Parsi","Other"].map(r => (
            <SelectItem key={r} value={r.toLowerCase()}>{r}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label>Caste</Label>
      <Input placeholder="Enter your caste" />
    </div>
    <div className="space-y-2">
      <Label>Sub-Caste</Label>
      <Input placeholder="Enter sub-caste (optional)" />
    </div>
    <div className="space-y-2">
      <Label>Mother Tongue</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select language" /></SelectTrigger>
        <SelectContent>
          {["Hindi","Marathi","Tamil","Telugu","Kannada","Bengali","Gujarati","Punjabi","Malayalam","Urdu","Other"].map(l => (
            <SelectItem key={l} value={l.toLowerCase()}>{l}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2 sm:col-span-2">
      <Label>Gothra</Label>
      <Input placeholder="Enter gothra (optional)" />
    </div>
    <div className="space-y-2 sm:col-span-2">
      <Label>Manglik</Label>
      <RadioGroup defaultValue="no" className="flex gap-4 pt-1">
        <div className="flex items-center gap-2"><RadioGroupItem value="yes" id="manglik-yes" /><Label htmlFor="manglik-yes">Yes</Label></div>
        <div className="flex items-center gap-2"><RadioGroupItem value="no" id="manglik-no" /><Label htmlFor="manglik-no">No</Label></div>
        <div className="flex items-center gap-2"><RadioGroupItem value="partial" id="manglik-partial" /><Label htmlFor="manglik-partial">Partial</Label></div>
      </RadioGroup>
    </div>
  </div>
);

const LifestyleStep = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label>Diet</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select diet" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="vegetarian">Vegetarian</SelectItem>
          <SelectItem value="non_vegetarian">Non-Vegetarian</SelectItem>
          <SelectItem value="eggetarian">Eggetarian</SelectItem>
          <SelectItem value="vegan">Vegan</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label>Smoking</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="no">No</SelectItem>
          <SelectItem value="occasionally">Occasionally</SelectItem>
          <SelectItem value="yes">Yes</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label>Drinking</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="no">No</SelectItem>
          <SelectItem value="occasionally">Occasionally</SelectItem>
          <SelectItem value="yes">Yes</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label>Family Type</Label>
      <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="joint">Joint Family</SelectItem>
          <SelectItem value="nuclear">Nuclear Family</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2 sm:col-span-2">
      <Label>About Yourself</Label>
      <Textarea placeholder="Tell us about yourself, your interests and what you're looking for..." rows={4} />
    </div>
  </div>
);

export default Onboarding;
