import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { employmentSectors, occupations, salaries } from "@/lib/constants";
import { Textarea } from "../ui/textarea";
import { Controller, useFormContext } from "react-hook-form";
import { profilePayload } from "@/features/profile/types";

const ProfessionalStep = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<profilePayload>();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>Occupation</Label>
        <Controller
          name="professional.occupation"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
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
        <Label>Company / Organization</Label>
        <Input
          placeholder="Where do you work?"
          {...register("professional.organization")}
        />
      </div>
      <div className="space-y-2">
        <Label>Annual Income</Label>
        <Controller
          name="professional.annualIncome"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
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
        <Input
          placeholder="City where you work"
          {...register("professional.workingCity")}
        />
      </div>

      <div className="space-y-2 sm:col-span-2">
        <Label>Employment Sector</Label>
        <Controller
          name="professional.employmentSector"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select employment sector" />
                </SelectTrigger>

                <SelectContent>
                  {employmentSectors.map((i) => (
                    <SelectItem
                      key={i.value}
                      value={i.value.toLowerCase().replace(/ /g, "_")}
                    >
                      {i.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>

      <div className="space-y-2 sm:col-span-2">
        <Label>Occupation Detail</Label>
        <Textarea
          placeholder="City where you work"
          {...register("professional.occupationDetail")}
        />
      </div>
    </div>
  );
};

export default ProfessionalStep;
