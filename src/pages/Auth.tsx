import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Sparkles, Shield, Users } from "lucide-react";

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
      {/* Left panel - decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative hero-gradient items-center justify-center p-12">
        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary-foreground/5 blur-xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary-foreground/5 blur-xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-primary-foreground/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full border border-primary-foreground/5" />
        
        <div className="relative z-10 text-center text-primary-foreground max-w-md">
          <Heart className="h-16 w-16 mx-auto mb-8 fill-primary-foreground/20" />
          <h2 className="text-4xl font-display font-bold mb-4">Find Your Soulmate</h2>
          <p className="text-primary-foreground/70 text-lg mb-10">
            Join millions who found love, companionship, and a lifelong bond on VivahBandhan.
          </p>
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { icon: Users, label: "5M+ Members" },
              { icon: Shield, label: "Verified" },
              { icon: Sparkles, label: "AI Matching" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-primary-foreground/70">{item.label}</span>
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
