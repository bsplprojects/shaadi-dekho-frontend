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
import { degrees } from "@/lib/constants";
import { Controller, useFormContext } from "react-hook-form";
import { profilePayload } from "@/features/profile/types";

const EducationStep = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<profilePayload>();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>Highest Qualification</Label>
        <Controller
          name="professional.education"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
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
        <Label>Field of Study</Label>
        <Input
          placeholder="e.g. Computer Science, Medicine"
          {...register("professional.educationDetail")}
        />
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Label>College / University</Label>
        <Input
          placeholder="Name of your institution"
          {...register("professional.college")}
        />
      </div>
    </div>
  );
};

export default EducationStep;
