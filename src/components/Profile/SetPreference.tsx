import { useNavigate, useLocation } from "react-router-dom";
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
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Controller, useForm } from "react-hook-form";
import { PreferencePayload } from "@/features/profile/types";
import { useMutation } from "@tanstack/react-query";
import {
  useAddPreference,
  useGetPreferences,
  useUpdatePreference,
} from "@/features/preferences/hook";

const SetPreference = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const location = useLocation();
  // const [openToAll, setOpenToAll] = useState(false);
  const addPref = useAddPreference();
  const getPref = useGetPreferences();
  const updatePref = useUpdatePreference();
  const { register, handleSubmit, setValue, watch, reset, control } =
    useForm<PreferencePayload>({
      defaultValues: {
        ageRange: {
          min: 18,
          max: 50,
        },
        heightRange: {
          min: "4'0",
          max: "10'1",
        },
        maritalStatus: "any",
        bodyType: "any",
        religion: "any",
        caste: "",
        motherTongue: "any",
        minimumEducation: "any",
        preferOccupation: "",
        minimumAnnualIncome: "any",
        preferedLocation: "",
        diet: "any",
        smoking: "any",
      },
    });

 const ageRange = watch("ageRange") ?? { min: 18, max: 50 };
  const heightRange = watch("heightRange") ;
  
  const handleSave = (data: PreferencePayload) => {
    const isEdit = location.pathname === "/edit-preferences";
    if (isEdit) {
      updatePref.mutate(data, {
        onSuccess: () => {
          toast({ title: "Preferences updated successfully" });
          navigate(-1);
        },
      });
    } else {
      addPref.mutate(data, {
        onSuccess: () => {
          toast({ title: "Preferences saved successfully" });
          navigate("/matches");
        },
      });
    }
  };

  const renderLeftButton = () => {
    if (location.pathname === "/edit-preferences") {
      return (
        <Button variant="outline" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      );
    } else {
      return (
        <Button variant="outline" onClick={() => navigate("/")}>
          Skip for Now
        </Button>
      );
    }
  };

  useEffect(() => {
    if (location.pathname === "/edit-preferences" && getPref.data?.data) {
      const pref = getPref.data.data;

      if (!pref) return;
      reset({
        ...pref,
      });
    }
  }, [getPref.data, location.pathname, reset]);

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots relative">
      <form onSubmit={handleSubmit(handleSave)}>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-sans">
                Basic Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3">
                <Label>
                  Age Range: {ageRange.min} – {ageRange.max} years
                </Label>
                <Slider
                  min={18}
                  max={50}
                  step={1}
                  value={[ageRange.min, ageRange.max]}
                  onValueChange={(value) =>
                    setValue("ageRange", { min: value[0], max: value[1] })
                  }
                />
              </div>
              <div className="space-y-3">
                <Label>
                  Height Range: {Math.floor(Number(heightRange.min) / 12)}'
                  {Number(heightRange.min) % 12}" –
                  {Math.floor(Number(heightRange.max) / 12)}'
                  {Number(heightRange.max) % 12}"
                </Label>

                <Slider
                  min={48}
                  max={84}
                  step={1}
                  value={[Number(heightRange.min), Number(heightRange.max)]}
                  onValueChange={(value) =>
                    setValue("heightRange", {
                      min: value[0].toString(),
                      max: value[1].toString(),
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Marital Status</Label>
                <Controller
                  name="maritalStatus"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="never_married">
                          Never Married
                        </SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label>Body Type</Label>
                <Controller
                  name="bodyType"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="slim">Slim</SelectItem>
                        <SelectItem value="average">Average</SelectItem>
                        <SelectItem value="athletic">Athletic</SelectItem>
                        <SelectItem value="heavy">Heavy</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-sans">
                  Religion & Community
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Religion</Label>
                <Controller
                  name="religion"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select religion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="hindu">Hindu</SelectItem>
                        <SelectItem value="muslim">Muslim</SelectItem>
                        <SelectItem value="christian">Christian</SelectItem>
                        <SelectItem value="sikh">Sikh</SelectItem>
                        <SelectItem value="jain">Jain</SelectItem>
                        <SelectItem value="buddhist">Buddhist</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label>Caste</Label>
                <Input
                  placeholder="Preferred caste (optional)"
                  {...register("caste")}
                />
              </div>
              <div className="space-y-2">
                <Label>Mother Tongue</Label>
                <Controller
                  name="motherTongue"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
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
                  )}
                />
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
                <Controller
                  name="minimumEducation"
                  control={control}
                  render={({ field }) => (
                    <div className="space-y-2">
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select education" />
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
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label>Preferred Occupation</Label>
                <Input
                  placeholder="e.g. Doctor, Engineer, Business (optional)"
                  {...register("preferOccupation")}
                />
              </div>
              <div className="space-y-2">
                <Label>Minimum Annual Income</Label>
                <Controller
                  name="minimumAnnualIncome"
                  control={control}
                  render={({ field }) => (
                    <div className="space-y-2">
                    
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select income" />
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
                  )}
                />
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
                <Label>Preferred Location</Label>
                <Input
                  placeholder="City or state (optional)"
                  {...register("preferedLocation")}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Diet</Label>
                  <Controller
                    name="diet"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select diet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="non_vegetarian">
                            Non-Vegetarian
                          </SelectItem>
                          <SelectItem value="eggetarian">Eggetarian</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Smoking</Label>
                  <Controller
                    name="smoking"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select smoking preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Doesn't Matter</SelectItem>
                          <SelectItem value="no">Non-Smoker</SelectItem>
                          <SelectItem value="occasional">Occasional</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3 justify-end pb-8">
            {renderLeftButton()}
            <Button type="submit" className="gap-2">
              <Save className="h-4 w-4" />
              Save Preferences
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SetPreference;
