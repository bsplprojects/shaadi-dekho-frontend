import { profilePayload } from "@/features/profile/types";
import { Camera, ImagePlus, Plus, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

const MAX_PHOTOS = 6;

const ProfilePicture = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<profilePayload>();

  // RHF is the source of truth
  const photos = watch("images") ?? [];

  useEffect(() => {
    register("images");
  }, [register]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const remainingSlots = MAX_PHOTOS - photos.length;
    const selectedFiles = Array.from(files).slice(0, remainingSlots);

    setValue("images", [...photos, ...selectedFiles], {
      shouldDirty: true,
      shouldValidate: true,
    });

    e.target.value = "";
  };

  const removePhoto = (index: number) => {
    const updated = photos.filter((_, i) => i !== index);
    setValue("images", updated, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Camera className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-semibold text-lg">Upload Your Photos</h3>
        <p className="text-sm text-muted-foreground">
          Add up to 6 photos. Your first photo will be your profile picture.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {/* Main photo */}
        <div
          className="aspect-square relative rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => fileInputRef.current?.click()}
        >
          {photos[0] ? (
            <>
              <img
                src={URL.createObjectURL(photos[0])}
                className="h-full w-full object-cover"
                alt="Profile"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removePhoto(0);
                }}
                className="absolute top-1 right-1 bg-destructive rounded-full p-0.5"
              >
                <X className="h-3 w-3 text-white" />
              </button>
              <span className="absolute bottom-1 left-1 text-[10px] bg-primary text-white px-1.5 py-0.5 rounded-full">
                Main
              </span>
            </>
          ) : (
            <ImagePlus className="h-6 w-6 text-primary" />
          )}
        </div>

        {/* Additional slots */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="aspect-square rounded-xl border-2 border-dashed bg-muted/30 flex items-center justify-center cursor-pointer overflow-hidden"
            onClick={() => fileInputRef.current?.click()}
          >
            {photos[i] ? (
              <>
                <img
                  src={URL.createObjectURL(photos[i])}
                  className="h-full w-full object-cover"
                  alt={`Photo ${i + 1}`}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removePhoto(i);
                  }}
                  className="absolute top-1 right-1 bg-destructive rounded-full p-0.5"
                >
                  <X className="h-3 w-3 text-white" />
                </button>
              </>
            ) : (
              <Plus className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={handleFileChange}
      />

      {errors.images && (
        <p className="text-sm text-destructive">
          {errors.images.message as string}
        </p>
      )}
    </div>
  );
};

export default ProfilePicture;
