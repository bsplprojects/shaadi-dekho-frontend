import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EditPreferences = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [ageRange, setAgeRange] = useState([22, 30]);
  const [heightRange, setHeightRange] = useState([60, 72]);
  const [openToAll, setOpenToAll] = useState(false);

  const handleSave = () => {
    toast({ title: "Preferences Updated", description: "Your partner preferences have been saved." });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots relative">
      <div className="container max-w-2xl relative z-10">
        <h1 className="text-3xl font-display font-bold mb-2">Edit Partner Preferences</h1>
        <p className="text-muted-foreground mb-8">Refine what you're looking for in a life partner</p>

        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle className="text-lg font-sans">Basic Preferences</CardTitle></CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3">
                <Label>Age Range: {ageRange[0]} – {ageRange[1]} years</Label>
                <Slider min={18} max={50} step={1} value={ageRange} onValueChange={setAgeRange} />
              </div>
              <div className="space-y-3">
                <Label>Height Range: {Math.floor(heightRange[0] / 12)}'{heightRange[0] % 12}" – {Math.floor(heightRange[1] / 12)}'{heightRange[1] % 12}"</Label>
                <Slider min={48} max={84} step={1} value={heightRange} onValueChange={setHeightRange} />
              </div>
              <div className="space-y-2">
                <Label>Marital Status</Label>
                <Select defaultValue="any">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="never_married">Never Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Body Type</Label>
                <Select defaultValue="any">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="slim">Slim</SelectItem>
                    <SelectItem value="average">Average</SelectItem>
                    <SelectItem value="athletic">Athletic</SelectItem>
                    <SelectItem value="heavy">Heavy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-sans">Religion & Community</CardTitle>
                <div className="flex items-center gap-2">
                  <Label className="text-sm text-muted-foreground">Open to all</Label>
                  <Switch checked={openToAll} onCheckedChange={setOpenToAll} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {!openToAll && (
                <>
                  <div className="space-y-2">
                    <Label>Religion</Label>
                    <Select defaultValue="any">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>{["Any","Hindu","Muslim","Christian","Sikh","Jain","Buddhist"].map(r => <SelectItem key={r} value={r.toLowerCase()}>{r}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Caste</Label>
                    <Input placeholder="Preferred caste (optional)" />
                  </div>
                  <div className="space-y-2">
                    <Label>Mother Tongue</Label>
                    <Select defaultValue="any">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>{["Any","Hindi","Marathi","Tamil","Telugu","Kannada","Bengali","Gujarati","Punjabi","Malayalam"].map(l => <SelectItem key={l} value={l.toLowerCase()}>{l}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                </>
              )}
              {openToAll && <p className="text-sm text-muted-foreground py-2">You'll see matches from all religions and communities.</p>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-lg font-sans">Education & Career</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Minimum Education</Label>
                <Select defaultValue="any">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{["Any","Bachelor's","Master's","PhD","Professional Degree"].map(e => <SelectItem key={e} value={e.toLowerCase()}>{e}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Preferred Occupation</Label>
                <Input placeholder="e.g. Doctor, Engineer, Business (optional)" />
              </div>
              <div className="space-y-2">
                <Label>Minimum Annual Income</Label>
                <Select defaultValue="any">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{["Any","3-5 Lakh","5-10 Lakh","10-20 Lakh","20-50 Lakh","50 Lakh+"].map(i => <SelectItem key={i} value={i.toLowerCase().replace(/ /g,"_")}>{i}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-lg font-sans">Location & Lifestyle</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Preferred Location</Label>
                <Input placeholder="City or state (optional)" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Diet</Label>
                  <Select defaultValue="any">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="non_vegetarian">Non-Vegetarian</SelectItem>
                      <SelectItem value="eggetarian">Eggetarian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Smoking</Label>
                  <Select defaultValue="any">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Doesn't Matter</SelectItem>
                      <SelectItem value="no">Non-Smoker</SelectItem>
                      <SelectItem value="occasional">Occasional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3 justify-end pb-8">
            <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
            <Button onClick={handleSave} className="gap-2"><Save className="h-4 w-4" /> Save Preferences</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPreferences;
