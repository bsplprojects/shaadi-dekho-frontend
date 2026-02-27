import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useFormContext } from "react-hook-form";
import { profilePayload } from "@/features/profile/types";

const Lifestyle = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<profilePayload>();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>Diet</Label>
        <Controller
          name="lifestyle.diet"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select diet" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="non_vegetarian">Non-Vegetarian</SelectItem>
                  <SelectItem value="eggetarian">Eggetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>
      <div className="space-y-2">
        <Label>Smoking</Label>
        <Controller
          name="lifestyle.smokingHabits"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="occasionally">Occasionally</SelectItem>
                  <SelectItem value="frequently">Frequently</SelectItem>
                  <SelectItem value="yes">Yes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>
      <div className="space-y-2">
        <Label>Drinking</Label>
        <Controller
          name="lifestyle.drinkingHabits"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="occasionally">Occasionally</SelectItem>
                  <SelectItem value="frequently">Frequently</SelectItem>
                  <SelectItem value="yes">Yes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>

      <div className="space-y-2 sm:col-span-2">
        <Label>About Yourself</Label>
        <Textarea
          placeholder="Tell us about yourself, your interests and what you're looking for..."
          rows={4}
          {...register("lifestyle.description")}
        />
      </div>
    </div>
  );
};

export default Lifestyle;
