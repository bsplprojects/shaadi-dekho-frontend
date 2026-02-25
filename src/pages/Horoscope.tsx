import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Save, Star, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const nakshatras = ["Ashwini","Bharani","Krittika","Rohini","Mrigashira","Ardra","Punarvasu","Pushya","Ashlesha","Magha","Purva Phalguni","Uttara Phalguni","Hasta","Chitra","Swati","Vishakha","Anuradha","Jyeshtha","Mula","Purva Ashadha","Uttara Ashadha","Shravana","Dhanishta","Shatabhisha","Purva Bhadrapada","Uttara Bhadrapada","Revati"];
const rashis = ["Mesha (Aries)","Vrishabha (Taurus)","Mithuna (Gemini)","Karka (Cancer)","Simha (Leo)","Kanya (Virgo)","Tula (Libra)","Vrishchika (Scorpio)","Dhanu (Sagittarius)","Makara (Capricorn)","Kumbha (Aquarius)","Meena (Pisces)"];

const Horoscope = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showHoroscope, setShowHoroscope] = useState(true);
  const [manglik, setManglik] = useState("no");

  const handleSave = () => {
    toast({ title: "Horoscope Updated", description: "Your horoscope details have been saved." });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots relative">
      <div className="container max-w-2xl relative z-10">
        <h1 className="text-3xl font-display font-bold mb-2">Horoscope Details</h1>
        <p className="text-muted-foreground mb-8">Add your kundli details for better match compatibility</p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-sans flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" /> Display Horoscope
                </CardTitle>
                <Switch checked={showHoroscope} onCheckedChange={setShowHoroscope} />
              </div>
            </CardHeader>
            {!showHoroscope && (
              <CardContent>
                <p className="text-sm text-muted-foreground">Your horoscope details will be hidden from your profile.</p>
              </CardContent>
            )}
          </Card>

          {showHoroscope && (
            <>
              <Card>
                <CardHeader><CardTitle className="text-lg font-sans flex items-center gap-2"><Sun className="h-5 w-5 text-primary" /> Birth Details</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Date of Birth</Label>
                      <Input type="date" defaultValue="1996-05-15" />
                    </div>
                    <div className="space-y-2">
                      <Label>Time of Birth</Label>
                      <Input type="time" defaultValue="06:30" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label>Place of Birth</Label>
                      <Input placeholder="e.g. Mumbai, Maharashtra" defaultValue="Mumbai, Maharashtra" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="text-lg font-sans flex items-center gap-2"><Moon className="h-5 w-5 text-primary" /> Kundli Details</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Rashi (Moon Sign)</Label>
                      <Select defaultValue="simha (leo)">
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{rashis.map(r => <SelectItem key={r} value={r.toLowerCase()}>{r}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Nakshatra</Label>
                      <Select defaultValue="magha">
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{nakshatras.map(n => <SelectItem key={n} value={n.toLowerCase()}>{n}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Gotra</Label>
                      <Input placeholder="Enter your gotra" defaultValue="Kashyap" />
                    </div>
                    <div className="space-y-2">
                      <Label>Manglik Status</Label>
                      <Select value={manglik} onValueChange={setManglik}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">Non-Manglik</SelectItem>
                          <SelectItem value="yes">Manglik</SelectItem>
                          <SelectItem value="partial">Anshik Manglik</SelectItem>
                          <SelectItem value="unknown">Don't Know</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Additional Horoscope Notes</Label>
                    <Textarea placeholder="Any additional details about your horoscope (optional)" rows={3} />
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          <div className="flex gap-3 justify-end pb-8">
            <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
            <Button onClick={handleSave} className="gap-2"><Save className="h-4 w-4" /> Save Horoscope</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horoscope;
