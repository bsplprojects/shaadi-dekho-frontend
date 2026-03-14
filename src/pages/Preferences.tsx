import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  Sparkles,
  User,
  Heart,
  Briefcase,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import profileSuccessImg from "@/assets/profile-success.png";
import ProfileCompletion from "@/components/Profile/ProfileCompletion";
import SetPreference from "@/components/Profile/SetPreference";

const Preferences = () => {
  const navigate = useNavigate();
  const [ageRange, setAgeRange] = useState([22, 30]);

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots relative">
      <div className="container max-w-2xl relative z-10">
        {/* Success Banner */}
        <Card className="mb-6 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 dark:border-green-800 overflow-hidden animate-fade-in">
          <CardContent className="p-6 flex items-center gap-5">
            <img
              src={profileSuccessImg}
              alt="Profile created successfully"
              className="w-20 h-20 object-contain flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h2 className="text-lg font-display font-bold text-green-800 dark:text-green-300">
                  Your Profile Has Been Created! 🎉
                </h2>
              </div>
              <p className="text-sm text-green-700 dark:text-green-400">
                Great job! Now set your partner preferences below to get better,
                more relevant matches tailored just for you.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Profile Completeness */}
        <ProfileCompletion />

        <h1 className="text-3xl font-display font-bold mb-2">
          Partner Preferences
        </h1>
        <p className="text-muted-foreground mb-8">
          Set your preferences to find the best matches
        </p>

        {/* <div className="space-y-6">
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-sans">
                Basic Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3">
                <Label>
                  Age Range: {ageRange[0]} - {ageRange[1]} years
                </Label>
                <Slider
                  min={18}
                  max={50}
                  step={1}
                  value={ageRange}
                  onValueChange={setAgeRange}
                  className="mt-2"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Height (Min)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "4'6\"",
                        "4'8\"",
                        "4'10\"",
                        "5'0\"",
                        "5'2\"",
                        "5'4\"",
                        "5'6\"",
                        "5'8\"",
                      ].map((h) => (
                        <SelectItem key={h} value={h}>
                          {h}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Height (Max)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "5'4\"",
                        "5'6\"",
                        "5'8\"",
                        "5'10\"",
                        "6'0\"",
                        "6'2\"",
                        "6'4\"",
                      ].map((h) => (
                        <SelectItem key={h} value={h}>
                          {h}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Marital Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="never_married">Never Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

    
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-sans">
                Religion & Community
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Religion</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Any",
                      "Hindu",
                      "Muslim",
                      "Christian",
                      "Sikh",
                      "Jain",
                      "Buddhist",
                    ].map((r) => (
                      <SelectItem key={r} value={r.toLowerCase()}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Caste</Label>
                <Input placeholder="Enter preferred caste (optional)" />
              </div>
              <div className="space-y-2">
                <Label>Mother Tongue</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Any",
                      "Hindi",
                      "Marathi",
                      "Tamil",
                      "Telugu",
                      "Kannada",
                      "Bengali",
                      "Gujarati",
                      "Punjabi",
                      "Malayalam",
                    ].map((l) => (
                      <SelectItem key={l} value={l.toLowerCase()}>
                        {l}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

    
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-sans">
                Education & Career
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Minimum Education</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Any",
                      "Bachelor's",
                      "Master's",
                      "PhD",
                      "Professional Degree",
                    ].map((e) => (
                      <SelectItem key={e} value={e.toLowerCase()}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Minimum Income</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Any",
                      "3-5 Lakh",
                      "5-10 Lakh",
                      "10-20 Lakh",
                      "20-50 Lakh",
                      "50 Lakh+",
                    ].map((i) => (
                      <SelectItem
                        key={i}
                        value={i.toLowerCase().replace(/ /g, "_")}
                      >
                        {i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-sans">
                Location & Lifestyle
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Preferred City</Label>
                <Input placeholder="Enter preferred city (optional)" />
              </div>
              <div className="space-y-2">
                <Label>Diet</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="non_vegetarian">
                      Non-Vegetarian
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => navigate("/")}>
              Skip for Now
            </Button>
            <Button onClick={() => navigate("/matches")}>
              Save Preferences
            </Button>
          </div>
        </div> */}

        <SetPreference/>
      </div>
    </div>
  );
};

export default Preferences;
