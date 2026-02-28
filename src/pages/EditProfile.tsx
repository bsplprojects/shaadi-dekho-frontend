import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Camera,
  Save,
  User,
  Heart,
  MapPin,
  Briefcase,
  Users,
  Star,
  Sparkles,
  ImagePlus,
  X,
  Wine,
  Cigarette,
  UtensilsCrossed,
  FileText,
  GraduationCap,
  Building2,
  IndianRupee,
  Clock,
  Globe,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMyProfile, useProfileStatus } from "@/features/profile/hook";
import { Controller, useForm } from "react-hook-form";
import { profilePayload } from "@/features/profile/types";
import { useEffect } from "react";
import {
  degrees,
  heights,
  occupations,
  religions,
  salaries,
} from "@/lib/constants";

const SectionIcon = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => (
  <div className="flex items-center gap-2.5">
    <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
      <Icon className="h-4 w-4 text-accent-foreground" />
    </div>
    <CardTitle className="text-lg font-sans">{label}</CardTitle>
  </div>
);

const EditProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: profileStatus } = useProfileStatus();
  const { data: profileData } = useMyProfile();

  const { data } = profileData ?? {};
  console.log(data);

  const {
    register,
    reset,
    control,
    formState: { isSubmitting },
  } = useForm<profilePayload>();

  useEffect(() => {
    if (!data) return;
    reset({
      ...data,
      basicDetails: {
        ...data?.basicDetails,
        dob: data?.basicDetails?.dob
          ? new Date(data?.basicDetails?.dob).toISOString().split("T")[0]
          : "",
      },
      horoscope: {
        ...data.horoscope,
        tob: data.horoscope?.tob
          ? new Date(data.horoscope.tob)
              .toISOString()
              .split("T")[1]
              ?.slice(0, 5)
          : "",
      },
    });
  }, [data, reset]);

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots relative">
      <div className="container max-w-3xl relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold mb-1">Edit Profile</h1>
          <p className="text-muted-foreground">
            Complete your profile to find better matches
          </p>
        </div>

        {/* Photo & Completeness Hero */}
        <Card className="mb-6 overflow-hidden border-0 shadow-lg">
          <div className="hero-gradient-soft p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <Avatar className="h-28 w-28 border-4 border-primary/20 shadow-md">
                  <AvatarFallback className="bg-accent text-accent-foreground text-3xl font-semibold">
                    {data?.basicDetails?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-1 right-1 bg-primary text-primary-foreground rounded-full p-2 shadow-md hover:scale-105 transition-transform">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-semibold font-sans">
                  {data?.basicDetails?.name}
                </h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Profile ID: {data?.memberId}
                </p>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Profile Completeness
                    </span>
                    <span className="font-semibold text-primary">
                      {profileStatus?.data?.percentage}%
                    </span>
                  </div>
                  <Progress
                    value={profileStatus?.data?.percentage}
                    className="h-2.5"
                  />
                  <p className="text-xs text-muted-foreground">
                    {profileStatus?.data?.percentage < 80
                      ? "Complete your profile to get 3x more matches!"
                      : "Great job! Your profile is looking strong 🎉"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="w-full flex-wrap h-auto gap-1 bg-card border p-1.5">
            <TabsTrigger value="basic" className="gap-1.5 text-xs">
              <User className="h-3.5 w-3.5" />
              Basic
            </TabsTrigger>
            <TabsTrigger value="lifestyle" className="gap-1.5 text-xs">
              <Heart className="h-3.5 w-3.5" />
              Lifestyle
            </TabsTrigger>
            <TabsTrigger value="religion" className="gap-1.5 text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Religion
            </TabsTrigger>
            <TabsTrigger value="location" className="gap-1.5 text-xs">
              <MapPin className="h-3.5 w-3.5" />
              Location
            </TabsTrigger>
            <TabsTrigger value="professional" className="gap-1.5 text-xs">
              <Briefcase className="h-3.5 w-3.5" />
              Career
            </TabsTrigger>
            <TabsTrigger value="family" className="gap-1.5 text-xs">
              <Users className="h-3.5 w-3.5" />
              Family
            </TabsTrigger>
            <TabsTrigger value="horoscope" className="gap-1.5 text-xs">
              <Star className="h-3.5 w-3.5" />
              Horoscope
            </TabsTrigger>
            <TabsTrigger value="photos" className="gap-1.5 text-xs">
              <ImagePlus className="h-3.5 w-3.5" />
              Photos
            </TabsTrigger>
          </TabsList>

          {/* BASIC DETAILS */}
          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <SectionIcon icon={User} label="Basic Details" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Profile For</Label>
                    <Controller
                      name="basicDetails.profileFor"
                      control={control}
                      rules={{ required: "Profile for is required" }}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Profile created for" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="self">Self</SelectItem>
                            <SelectItem value="son">Son</SelectItem>
                            <SelectItem value="daughter">Daughter</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input {...register("basicDetails.name")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Date of Birth</Label>
                    <Input
                      type="date"
                      {...register("basicDetails.dob", {
                        valueAsDate: true,
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <Controller
                      name="basicDetails.gender"
                      control={control}
                      rules={{ required: "Gender is required" }}
                      render={({ field, fieldState }) => (
                        <div className="space-y-2">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                          </Select>

                          {fieldState.error && (
                            <p className="text-xs text-red-500">
                              {fieldState.error.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                  {/* <div className="space-y-2">
                    <Label>Body Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {["Slim", "Athletic", "Average", "Heavy"].map((b) => (
                          <SelectItem key={b} value={b.toLowerCase()}>
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div> */}
                  <div className="space-y-2">
                    <Label>Physical Status</Label>
                    <Controller
                      name="basicDetails.physicalStatus"
                      control={control}
                      rules={{ required: "Physical Status is required" }}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select physical status" />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="normal">Normal</SelectItem>
                              <SelectItem value="disabled">
                                Physically Disabled
                              </SelectItem>
                            </SelectContent>
                          </Select>

                          {fieldState.error && (
                            <p className="text-xs text-red-500">
                              {fieldState.error.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Height</Label>
                    <Controller
                      name="basicDetails.height"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select height" />
                          </SelectTrigger>

                          <SelectContent>
                            {heights.map((h) => (
                              <SelectItem key={h} value={h}>
                                {h}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Weight (kg)</Label>
                    <Input {...register("basicDetails.weight")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Mother Tongue</Label>
                    <Input {...register("basicDetails.motherTongue")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Marital Status</Label>
                    <Controller
                      name="basicDetails.maritalStatus"
                      control={control}
                      rules={{ required: "Marital status is required" }}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="never_married">
                                Never Married
                              </SelectItem>
                              <SelectItem value="divorced">Divorced</SelectItem>
                              <SelectItem value="widowed">Widowed</SelectItem>
                            </SelectContent>
                          </Select>

                          {fieldState.error && (
                            <p className="text-xs text-red-500">
                              {fieldState.error.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* LIFESTYLE */}
          <TabsContent value="lifestyle">
            <Card>
              <CardHeader>
                <SectionIcon icon={Heart} label="Lifestyle" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5">Diet</Label>
                    <Controller
                      name="lifestyle.diet"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select diet" />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="vegetarian">
                                Vegetarian
                              </SelectItem>
                              <SelectItem value="non_vegetarian">
                                Non-Vegetarian
                              </SelectItem>
                              <SelectItem value="eggetarian">
                                Eggetarian
                              </SelectItem>
                              <SelectItem value="vegan">Vegan</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5">
                      <Wine className="h-3.5 w-3.5 text-muted-foreground" />{" "}
                      Drinking Habits
                    </Label>
                    <Controller
                      name="lifestyle.drinkingHabits"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="occasionally">
                                Occasionally
                              </SelectItem>
                              <SelectItem value="frequently">
                                Frequently
                              </SelectItem>
                              <SelectItem value="yes">Yes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5">
                      Smoking Habits
                    </Label>
                    <Controller
                      name="lifestyle.smokingHabits"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="occasionally">
                                Occasionally
                              </SelectItem>
                              <SelectItem value="frequently">
                                Frequently
                              </SelectItem>
                              <SelectItem value="yes">Yes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <Label className="flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5 text-muted-foreground" />{" "}
                    About Me
                  </Label>
                  <Textarea
                    rows={4}
                    placeholder="Tell potential matches about yourself..."
                    {...register("lifestyle.description")}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* RELIGION */}
          <TabsContent value="religion">
            <Card>
              <CardHeader>
                <SectionIcon icon={Sparkles} label="Religion & Community" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Religion</Label>
                    <Controller
                      name="religion.religion"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select religion" />
                            </SelectTrigger>

                            <SelectContent>
                              {religions.map((r) => (
                                <SelectItem key={r} value={r.toLowerCase()}>
                                  {r}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Caste</Label>
                    <Input
                      placeholder="Enter your caste"
                      {...register("religion.caste")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Sub-Caste</Label>
                    <Input
                      placeholder="Enter sub-caste (optional)"
                      {...register("religion.subCaste")}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* LOCATION */}
          <TabsContent value="location">
            <Card>
              <CardHeader>
                <SectionIcon icon={MapPin} label="Location" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5 text-muted-foreground" />{" "}
                      Country
                    </Label>
                    <Input {...register("location.country")} />
                  </div>
                  <div className="space-y-2">
                    <Label>State</Label>
                    {/* STATE SHOULD BE SELECT TYPE */}
                    <Input {...register("location.state")} />
                  </div>
                  <div className="space-y-2">
                    <Label>City</Label>
                    <Input {...register("location.city")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Citizenship</Label>
                    <Input {...register("location.citizenship")} />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Ancestral Origin</Label>
                    <Input
                      placeholder="e.g., Rajasthan, UP"
                      {...register("location.ancestralOrigin")}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PROFESSIONAL */}
          <TabsContent value="professional">
            <Card>
              <CardHeader>
                <SectionIcon icon={Briefcase} label="Professional Details" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5">
                      Highest Qualification
                    </Label>
                    <Controller
                      name="professional.education"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select qualification" />
                            </SelectTrigger>

                            <SelectContent>
                              {degrees.map((q) => (
                                <SelectItem
                                  key={q}
                                  value={q.toLowerCase().replace(/[' ]/g, "_")}
                                >
                                  {q}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Education Detail</Label>
                    <Input
                      placeholder="e.g., B.Tech in Computer Science"
                      {...register("professional.educationDetail")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>College / University</Label>
                    <Input
                      placeholder="Enter college name"
                      {...register("professional.college")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5">
                      Employment Sector
                    </Label>
                    <Controller
                      name="professional.employmentSector"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select employment sector" />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="private">Private</SelectItem>
                              <SelectItem value="public">Public</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Occupation</Label>
                    <Controller
                      name="professional.occupation"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select occupation" />
                            </SelectTrigger>

                            <SelectContent>
                              {occupations.map((o) => (
                                <SelectItem
                                  key={o}
                                  value={o.toLowerCase().replace(/ /g, "_")}
                                >
                                  {o}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Organization</Label>
                    <Input {...register("professional.organization")} />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5">
                      <IndianRupee className="h-3.5 w-3.5 text-muted-foreground" />{" "}
                      Annual Income
                    </Label>
                    <Controller
                      name="professional.annualIncome"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>

                            <SelectContent>
                              {salaries.map((i) => (
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
                  <div className="space-y-2">
                    <Label>Working City</Label>
                    <Input {...register("professional.workingCity")} />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label>Occupation Detail</Label>
                    <Textarea
                      placeholder="e.g., Senior Developer"
                      {...register("professional.occupationDetail")}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAMILY */}
          <TabsContent value="family">
            <Card>
              <CardHeader>
                <SectionIcon icon={Users} label="Family Details" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Father's Name</Label>
                    <Input {...register("family.fatherName")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Father's Occupation</Label>
                    <Controller
                      name="family.fatherOccupation"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select occupation" />
                            </SelectTrigger>

                            <SelectContent>
                              {occupations.map((o) => (
                                <SelectItem
                                  key={o}
                                  value={o.toLowerCase().replace(/ /g, "_")}
                                >
                                  {o}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Mother's Name</Label>
                    <Input {...register("family.motherName")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Mother's Occupation</Label>
                    <Controller
                      name="family.motherOccupation"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select occupation" />
                            </SelectTrigger>

                            <SelectContent>
                              {occupations.map((o) => (
                                <SelectItem
                                  key={o}
                                  value={o.toLowerCase().replace(/ /g, "_")}
                                >
                                  {o}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Family Type</Label>
                    <Controller
                      name="family.familyType"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select family type" />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="joint">
                                Joint Family
                              </SelectItem>
                              <SelectItem value="nuclear">
                                Nuclear Family
                              </SelectItem>
                              <SelectItem value="extended">
                                Extended Family
                              </SelectItem>
                              <SelectItem value="others">Others</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Family Values</Label>
                    <Textarea
                      placeholder="Honest and Hardworking"
                      {...register("family.familyValues")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Family Status</Label>
                    <Controller
                      name="family.status"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-1">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select family status" />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="lower">
                                Lower Middle Class
                              </SelectItem>
                              <SelectItem value="middle">
                                Middle Class
                              </SelectItem>
                              <SelectItem value="upper">
                                Upper Middle Class
                              </SelectItem>
                              <SelectItem value="rich">
                                Rich / Wealthy Class
                              </SelectItem>
                              <SelectItem value="others">Others</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Family Location</Label>
                    <Input {...register("family.familyLocation")} />
                  </div>
                  <div className="space-y-2">
                    <Label>No. of Brothers</Label>
                    <Input
                      type="number"
                      min="0"
                      {...register("family.brothers")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>No. of Sisters</Label>
                    <Input
                      type="number"
                      min="0"
                      {...register("family.sisters")}
                    />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <Label>About Family</Label>
                  <Textarea
                    rows={3}
                    placeholder="Tell us about your family..."
                    {...register("family.about")}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* HOROSCOPE */}
          <TabsContent value="horoscope">
            <Card>
              <CardHeader>
                <SectionIcon icon={Star} label="Horoscope Details" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-muted-foreground" />{" "}
                      Time of Birth
                    </Label>
                    <Input type="time" />
                  </div>
                  <div className="space-y-2">
                    <Label>Place of Birth</Label>
                    <Input placeholder="City of birth" />
                  </div>
                  <div className="space-y-2">
                    <Label>Star / Nakshatra</Label>
                    <Input placeholder="e.g., Rohini" />
                  </div>
                  <div className="space-y-2">
                    <Label>Raasi / Moon Sign</Label>
                    <Input placeholder="e.g., Vrishabha" />
                  </div>
                  <div className="space-y-2">
                    <Label>Manglik</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="partial">
                          Partial (Anshik)
                        </SelectItem>
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
              <CardHeader>
                <SectionIcon icon={ImagePlus} label="Photos" />
              </CardHeader>
              <CardContent>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                />
                <div className="grid grid-cols-3 gap-3">
                  {/* {photos.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-xl overflow-hidden border-2 border-border group"
                    >
                      <img
                        src={src}
                        alt={`Photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button className="absolute top-1.5 right-1.5 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))} */}
                  {/* {photos.length < 6 && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="aspect-square rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors bg-accent/30"
                    >
                      <Camera className="h-6 w-6" />
                      <span className="text-xs font-medium">Add Photo</span>
                    </button>
                  )} */}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Upload up to 6 photos. First photo will be your profile
                  picture.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save */}
        <div className="flex gap-3 justify-end py-8">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button
            // onClick={handleSave}
            className="gap-2 btn-gradient text-primary-foreground"
          >
            <Save className="h-4 w-4" /> Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
