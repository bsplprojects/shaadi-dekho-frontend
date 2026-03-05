import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Save, Star, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Controller, useForm } from "react-hook-form";
import { HoroscopePayload } from "@/features/profile/types";
import { useAddHoroscope, useMyProfile } from "@/features/profile/hook";
import { nakshatras, rashis } from "@/lib/constants";

const Horoscope = () => {
  const navigate = useNavigate();
  const { data } = useMyProfile();
  const mutation = useAddHoroscope();
  const [showHoroscope, setShowHoroscope] = useState(true);

  const { register, handleSubmit, control } = useForm<HoroscopePayload>({
    defaultValues: {
      tob: "",
      pob: "",
      rashi: "",
      nakshatra: "",
      gotra: "",
      notes: "",
      manglik: "",
    },
  });

  const handleSave = (data: HoroscopePayload) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots relative">
      <div className="container max-w-2xl relative z-10">
        <h1 className="text-3xl font-display font-bold mb-2">
          Horoscope Details
        </h1>
        <p className="text-muted-foreground mb-8">
          Add your kundli details for better match compatibility
        </p>

        <form onSubmit={handleSubmit(handleSave)} className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-sans flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" /> Display Horoscope
                </CardTitle>
                <Switch
                  checked={showHoroscope}
                  onCheckedChange={setShowHoroscope}
                />
              </div>
            </CardHeader>
            {!showHoroscope && (
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your horoscope details will be hidden from your profile.
                </p>
              </CardContent>
            )}
          </Card>

          {showHoroscope && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-sans flex items-center gap-2">
                    <Sun className="h-5 w-5 text-primary" /> Birth Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Date of Birth</Label>
                      <Input
                        type="date"
                        disabled
                        value={
                          new Date(data?.data?.basicDetails?.dob)
                            ?.toISOString()
                            ?.split("T")[0]
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Time of Birth</Label>
                      <Input type="time" {...register("tob")} />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label>Place of Birth</Label>
                      <Input
                        placeholder="e.g. Mumbai, Maharashtra"
                        {...register("pob")}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-sans flex items-center gap-2">
                    <Moon className="h-5 w-5 text-primary" /> Kundli Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Rashi (Moon Sign)</Label>

                      <Controller
                        name="rashi"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Rashi" />
                            </SelectTrigger>
                            <SelectContent>
                              {rashis.map((r) => (
                                <SelectItem key={r} value={r.toLowerCase()}>
                                  {r}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Nakshatra</Label>
                      <Controller
                        name="nakshatra"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Nakshatra" />
                            </SelectTrigger>
                            <SelectContent>
                              {nakshatras.map((n) => (
                                <SelectItem key={n} value={n.toLowerCase()}>
                                  {n}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Gotra</Label>
                      <Input
                        placeholder="Enter your gotra"
                        {...register("gotra")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Manglik Status</Label>
                      <Controller
                        name="manglik"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Manglik status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="non-manglik">
                                Non-Manglik
                              </SelectItem>
                              <SelectItem value="manglik">Manglik</SelectItem>
                              <SelectItem value="anshik-manglik">
                                Anshik Manglik
                              </SelectItem>
                              <SelectItem value="dont-know">
                                Don't Know
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Additional Horoscope Notes</Label>
                    <Textarea
                      placeholder="Any additional details about your horoscope (optional)"
                      rows={3}
                      {...register("notes")}
                    />
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          <div className="flex gap-3 justify-end pb-8">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button type="submit" className="gap-2">
              <Save className="h-4 w-4" /> Save Horoscope
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Horoscope;
