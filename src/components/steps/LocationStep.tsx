import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { states } from "@/lib/constants";
import { Controller, useFormContext } from "react-hook-form";
import { profilePayload } from "@/features/profile/types";

const LocationStep = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<profilePayload>();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2 ">
        <Label>Country</Label>
        <Input placeholder="India" {...register("location.country")} />
      </div>
      <div className="space-y-2 ">
        <Label>City</Label>
        <Input placeholder="Ranchi" {...register("location.city")} />
      </div>
      <div className="space-y-2 ">
        <Label>State</Label>
        <Controller
          name="location.state"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>

                <SelectContent>
                  {states.map((s) => (
                    <SelectItem
                      key={s}
                      value={s.toLowerCase().replace(/ /g, "_")}
                    >
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>
      <div className="space-y-2 ">
        <Label>Citizenship</Label>
        <Input placeholder="Indian" {...register("location.citizenship")} />
      </div>
      <div className="space-y-2 ">
        <Label>Ancestral Origin</Label>
        <Input placeholder="Ranchi" {...register("location.ancestralOrigin")} />
      </div>
    </div>
  );
};

export default LocationStep;
