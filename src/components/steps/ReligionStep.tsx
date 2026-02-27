import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { religions } from "@/lib/constants";
import { Controller, useFormContext } from "react-hook-form";
import { profilePayload } from "@/features/profile/types";

const ReligionStep = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<profilePayload>();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>Religion</Label>
        <Controller
          name="religion.religion"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
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
        <Input placeholder="Enter your caste" {...register("religion.caste")} />
      </div>
      <div className="space-y-2">
        <Label>Sub-Caste</Label>
        <Input
          placeholder="Enter sub-caste (optional)"
          {...register("religion.subCaste")}
        />
      </div>
    </div>
  );
};

export default ReligionStep;
