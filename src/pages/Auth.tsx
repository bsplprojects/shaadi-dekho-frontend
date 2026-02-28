import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Shield, Users, Star } from "lucide-react";
import authImage from "@/assets/auth-couple.jpg";
import { useForm } from "react-hook-form";
import { authPayload } from "@/features/auth/types";
import { useLogin, useRegister } from "@/features/auth/hook";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  const [isLogin, setIsLogin] = useState(mode === "login");
  const login = useLogin();
  const signup = useRegister();

  const { register, handleSubmit, formState, reset } = useForm<authPayload>({
    mode: "onBlur",
  });

  const action = isLogin ? login : signup;
  const onSubmit = (data: authPayload) => {
    action.mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  useEffect(() => {
    if (mode === "signup") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [mode]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex relative overflow-hidden">
      {/* Left panel - image + content */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src={authImage}
          alt="Happy couple"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />
        <div className="relative z-10 flex flex-col justify-end p-12 pb-16 text-primary-foreground">
          <h2 className="text-4xl font-display font-bold mb-3 leading-tight">
            Find Your <br />
            Perfect Life Partner
          </h2>
          <p className="text-primary-foreground/75 text-base mb-8 max-w-sm">
            Join millions who found love, companionship, and a lifelong bond on
            ShaadiDekho.
          </p>
          <div className="flex gap-6">
            {[
              { icon: Users, value: "5M+", label: "Members" },
              { icon: Shield, value: "100%", label: "Verified" },
              { icon: Star, value: "1.2M+", label: "Marriages" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="h-10 w-10 mx-auto rounded-full bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center mb-1.5">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold">{item.value}</div>
                <div className="text-[11px] text-primary-foreground/60">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 page-pattern page-dots">
        <Card className="w-full max-w-md animate-fade-in shadow-xl border-border/60">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-3 h-14 w-14 rounded-full btn-gradient flex items-center justify-center shadow-lg">
              <Heart className="h-7 w-7 text-primary-foreground fill-primary-foreground/30" />
            </div>
            <CardTitle className="text-2xl font-display">
              {isLogin ? "Welcome Back" : "Start Your Journey"}
            </CardTitle>
            <CardDescription>
              {isLogin
                ? "Sign in to find your perfect match"
                : "Create your account to begin your matrimonial journey"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter phone number"
                  className="h-11"
                  {...register("phone", {
                    pattern: {
                      value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
              </div>

              {formState.errors.phone && (
                <small className="text-red-500">
                  {formState.errors.phone.message}
                </small>
              )}

              <div className="flex items-center gap-3">
                <span className="h-0.5 w-full bg-muted" />
                <p className="text-muted-foreground text-sm">OR</p>
                <span className="h-0.5 w-full bg-muted" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-11"
                  {...register("email", {
                    pattern: {
                      value:
                        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>

              {formState.errors.email && (
                <small className="text-red-500">
                  {formState.errors.email.message}
                </small>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="h-11"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
              </div>

              {formState.errors.password && (
                <small className="text-red-500">
                  {formState.errors.password.message}
                </small>
              )}
              <Button
                disabled={action.isPending}
                type="submit"
                className="w-full h-11 text-base"
                size="lg"
              >
                {isLogin && action.isPending
                  ? "Signing in..."
                  : action.isPending
                    ? "Creating account..."
                    : isLogin
                      ? "Sign In"
                      : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-medium hover:underline"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
