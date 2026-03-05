import { Button } from "./ui/button";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { toast } from "@/hooks/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { Controller, useForm } from "react-hook-form";
import { otpPayload } from "@/features/auth/types";
import { useOtp } from "@/features/auth/hook";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginViaOTP = () => {
  const [step, setStep] = useState<string>("phone");
  const [phone, setPhone] = useState<string>("");
  const navigate = useNavigate();
  const otpMutate = useOtp();
  const { handleSubmit, control, setValue } = useForm<otpPayload>({
    defaultValues: {
      phone: "",
      otp: "",
    },
  });

  const phoneMutate = useMutation({
    mutationFn: async () => {
      const res = await api.post("/auth/phone", {
        phone,
      });
      return res.data;
    },
    onSuccess: () => {
      setValue("phone", phone);
      setStep("otp");
    },
    onError: (error: any) => {
      toast({
        title: error.response.data.message,
        description: error.response.data.message
          ? "Try again later"
          : "Too many requests. Please try again after 15 minutes",
      });
    },
  });

  const onOtpSubmit = (data: otpPayload) => {
    otpMutate.mutate(data);
  };

  return (
    <main className="max-w-4xl mx-auto py-10 ">
      {step === "phone" ? (
        <div className="max-w-lg sm:mx-auto mx-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 my-2 text-sm text-muted-foreground"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>
                Sign In via <span className="text-primary">OTP</span>
              </CardTitle>
              <CardDescription>We'll send you a code via SMS</CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="Phone Number"
                type="number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <Button
                disabled={!phone || phoneMutate.isPending}
                className="w-full"
                onClick={() => phoneMutate.mutate()}
              >
                {phoneMutate.isPending ? "Sending..." : "Send OTP"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <div className="max-w-lg sm:mx-auto mx-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 my-2 text-sm text-muted-foreground"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <form onSubmit={handleSubmit(onOtpSubmit)}>
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle>Verify OTP</CardTitle>
                <CardDescription>
                  Enter the 6-digit OTP sent to your phone
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 flex flex-col items-center">
                <Controller
                  name="otp"
                  control={control}
                  rules={{ required: true, minLength: 6 }}
                  render={({ field }) => (
                    <InputOTP
                      maxLength={6}
                      value={field.value}
                      onChange={field.onChange}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  )}
                />

                <p>
                  Your OTP will expire in{" "}
                  <span className="text-primary">5 minutes</span>
                </p>

                <Button type="submit" className="w-full">
                  Verify OTP
                </Button>
              </CardContent>
            </Card>
          </form>
        </div>
      )}
    </main>
  );
};

export default LoginViaOTP;
