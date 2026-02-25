import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, Star } from "lucide-react";
import authImage from "@/assets/auth-couple.jpg";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  const [isLogin, setIsLogin] = useState(mode === "login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      login(email, password);
      navigate("/");
    } else {
      signup(name, email, password);
      navigate("/onboarding");
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex relative overflow-hidden">
      {/* Left panel - image + content */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img src={authImage} alt="Happy couple" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />
        <div className="relative z-10 flex flex-col justify-end p-12 pb-16 text-primary-foreground">
          <h2 className="text-4xl font-display font-bold mb-3 leading-tight">
            Find Your <br />Perfect Life Partner
          </h2>
          <p className="text-primary-foreground/75 text-base mb-8 max-w-sm">
            Join millions who found love, companionship, and a lifelong bond on VivahBandhan.
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
                <div className="text-[11px] text-primary-foreground/60">{item.label}</div>
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
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              <Button type="submit" className="w-full h-11 text-base" size="lg">
                {isLogin ? "Sign In" : "Create Account"}
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
