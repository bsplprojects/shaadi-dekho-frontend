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
import { heights } from "@/lib/constants";
import { Controller, useFormContext } from "react-hook-form";
import { profilePayload } from "@/features/profile/types";
import { calculateAge } from "@/utils/ageCalculator";

const BasicStep = () => {
  const {
    register,
    formState: { errors },
    control,
    setValue,
  } = useFormContext<profilePayload>();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2 ">
        <Label>
          This profile is for ? <ImpStar />
        </Label>
        <Controller
          name="basicDetails.profileFor"
          control={control}
          rules={{ required: "Profile for is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
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

        {errors.basicDetails?.profileFor && (
          <p className="text-xs text-red-500">
            {errors.basicDetails.profileFor.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label>
          Name <ImpStar />
        </Label>
        <Input
          {...register("basicDetails.name", { required: "Name is required" })}
          type="text"
          placeholder="Rahul Sharma"
        />
        {errors.basicDetails?.name && (
          <p className="text-xs text-red-500">
            {errors.basicDetails.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label>
          Gender <ImpStar />
        </Label>
        <Controller
          name="basicDetails.gender"
          control={control}
          rules={{ required: "Gender is required" }}
          render={({ field, fieldState }) => (
            <div className="space-y-2">
              <Select value={field.value} onValueChange={field.onChange}>
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

      <div className="space-y-2">
        <Label>
          Date of Birth <ImpStar />
        </Label>
        <Input
          type="date"
          {...register("basicDetails.dob", {
            required: "Date of Birth is required",
            valueAsDate: true,
            onChange: (e) => {
              const dob = e.target.value;
              if (dob) {
                const age = calculateAge(dob);
                setValue("basicDetails.age", age);
              }
            },
          })}
        />
        {errors.basicDetails?.dob && (
          <p className="text-xs text-red-500">
            {errors.basicDetails.dob.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label>
          Age <ImpStar />
        </Label>
        <Input
          type="number"
          placeholder="20"
          {...register("basicDetails.age", {
            required: "Age is required",
            valueAsNumber: true,
          })}
        />
        {errors.basicDetails?.age && (
          <p className="text-xs text-red-500">
            {errors.basicDetails.age.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Physical Status</Label>
        <Controller
          name="basicDetails.physicalStatus"
          control={control}
          rules={{ required: "Physical Status is required" }}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select physical status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="disabled">Physically Disabled</SelectItem>
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
            <Select value={field.value} onValueChange={field.onChange}>
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
        <Label>Weight</Label>
        <Input placeholder="50 kg" {...register("basicDetails.weight")} />
      </div>

      <div className="space-y-2">
        <Label>Marital Status</Label>
        <Controller
          name="basicDetails.maritalStatus"
          control={control}
          rules={{ required: "Marital status is required" }}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="never_married">Never Married</SelectItem>
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

      <div className="space-y-2">
        <Label>Mother Tongue</Label>
        <Input placeholder="Hindi" {...register("basicDetails.motherTongue")} />
      </div>
    </div>
  );
};

export default BasicStep;

const ImpStar = () => {
  return <span className="text-red-500">*</span>;
};
