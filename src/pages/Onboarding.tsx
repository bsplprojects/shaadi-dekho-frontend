import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, LoaderCircle } from "lucide-react";
import BasicStep from "../components/steps/BasicStep";
import ProfessionalStep from "../components/steps/ProfessionalStep";
import EducationStep from "../components/steps/EducationStep";
import ReligionStep from "../components/steps/ReligionStep";
import LifestyleStep from "../components/steps/LifestyleStep";
import { STEP_FIELDS, steps } from "@/lib/constants";
import LocationStep from "@/components/steps/LocationStep";
import FamilyStep from "@/components/steps/FamilyStep";
import { FormProvider, useForm } from "react-hook-form";
import { profilePayload } from "@/features/profile/types";
import { useCreateProfile } from "@/features/profile/hook";
import ProfilePicture from "@/components/steps/ProfilePicture";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const create = useCreateProfile();

  const progress = ((step + 1) / steps.length) * 100;

  const methods = useForm<profilePayload>({
    mode: "onBlur",
    shouldUnregister: false,
    defaultValues: {
      basicDetails: {},
      professional: {},
      religion: {},
      lifestyle: {},
      location: {},
      family: {},
      images: [],
    },
  });

  const {
    trigger,
    formState: { isSubmitting },
  } = methods;

  const next = async () => {
    const fields = STEP_FIELDS[step] ?? [];

    const isStepValid = await trigger(fields as any, { shouldFocus: true });
    if (!isStepValid) return;

    if (step < steps.length - 1) {
      setStep((s) => s + 1);
      return;
    }

    methods.handleSubmit(onSubmit)();
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  const onSubmit = (data: profilePayload) => {
    const formData = new FormData();
    data.images.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("basicDetails", JSON.stringify(data.basicDetails));
    formData.append("professional", JSON.stringify(data.professional));
    formData.append("religion", JSON.stringify(data.religion));
    formData.append("lifestyle", JSON.stringify(data.lifestyle));
    formData.append("location", JSON.stringify(data.location));
    formData.append("family", JSON.stringify(data.family));

    create.mutate(formData, {
      onSuccess: () => {
        navigate("/preferences");
      },
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-10 px-4 hero-gradient-soft">
      <div className="container max-w-4xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-3">
            {steps.map((s, i) => (
              <div key={s} className="flex flex-col items-center flex-1">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-colors ${
                    i < step
                      ? "bg-primary border-primary text-primary-foreground"
                      : i === step
                        ? "border-primary text-primary bg-card"
                        : "border-border text-muted-foreground bg-card"
                  }`}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span
                  className={`text-[10px] mt-1 text-center hidden sm:block ${i <= step ? "text-primary font-medium" : "text-muted-foreground"}`}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="font-display text-xl">
              {steps[step]}
            </CardTitle>
            <CardDescription>
              Step {step + 1} of {steps.length}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <FormProvider {...methods}>
              <form>
                {step === 0 && <BasicStep />}
                {step === 1 && <ProfessionalStep />}
                {step === 2 && <EducationStep />}
                {step === 3 && <ReligionStep />}
                {step === 4 && <LifestyleStep />}
                {step === 5 && <LocationStep />}
                {step === 6 && <FamilyStep />}
                {step === 7 && <ProfilePicture />}

                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    type="button"
                    onClick={prev}
                    disabled={step === 0}
                  >
                    Previous
                  </Button>
                  {step === steps.length - 1 ? (
                    <Button
                      type="button"
                      onClick={next}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <LoaderCircle className="animate-spin" />
                          Creating your profile...
                        </>
                      ) : (
                        "Complete Profile"
                      )}
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={next}
                      disabled={isSubmitting}
                    >
                      Next Step
                    </Button>
                  )}
                </div>
              </form>
            </FormProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
