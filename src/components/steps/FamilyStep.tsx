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
import { occupations } from "@/lib/constants";
import { Textarea } from "../ui/textarea";
import { Controller, useFormContext } from "react-hook-form";
import { profilePayload } from "@/features/profile/types";

const FamilyStep = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<profilePayload>();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>Father's Name</Label>
        <Input
          type="text"
          placeholder="Deepak Sharma"
          {...register("family.fatherName")}
        />
      </div>
      <div className="space-y-2">
        <Label>Father's Occupation</Label>
        <Controller
          name="family.fatherOccupation"
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
        <Label>Mother's Name</Label>
        <Input
          type="text"
          placeholder="Ankita Sharma"
          {...register("family.motherName")}
        />
      </div>
      <div className="space-y-2">
        <Label>Mother's Occupation</Label>
        <Controller
          name="family.motherOccupation"
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
        <Label>Family Type</Label>
        <Controller
          name="family.familyType"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select family type" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="joint">Joint Family</SelectItem>
                  <SelectItem value="nuclear">Nuclear Family</SelectItem>
                  <SelectItem value="extended">Extended Family</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>
      <div className="space-y-2">
        <Label>Family Location</Label>
        <Input
          type="text"
          placeholder="Raipur"
          {...register("family.familyLocation")}
        />
      </div>
      <div className="space-y-2">
        <Label>Number of Brothers</Label>
        <Input
          type="number"
          placeholder="2"
          {...register("family.brothers", {
            valueAsNumber: true,
          })}
        />
      </div>
      <div className="space-y-2">
        <Label>Number of Sisters</Label>
        <Input
          type="number"
          placeholder="1"
          {...register("family.sisters", {
            valueAsNumber: true,
          })}
        />
      </div>
      <div className="space-y-2">
        <Label>Status</Label>
        <Controller
          name="family.status"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select family status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="lower">Lower Middle Class</SelectItem>
                  <SelectItem value="middle">Middle Class</SelectItem>
                  <SelectItem value="upper">Upper Middle Class</SelectItem>
                  <SelectItem value="rich">Rich / Wealthy Class</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>

      <div className="space-y-2 sm:col-span-2">
        <Label>Family values</Label>
        <Textarea
          placeholder="Honest and Hardworking"
          {...register("family.familyValues")}
        />
      </div>

      <div className="space-y-2 sm:col-span-2">
        <Label>About Family</Label>
        <Textarea
          placeholder="Add more about your family"
          {...register("family.about")}
        />
      </div>
    </div>
  );
};

export default FamilyStep;
