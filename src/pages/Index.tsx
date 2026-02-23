import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Heart, Search, Shield, Users, Star, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";

const features = [
  { icon: Shield, title: "Verified Profiles", desc: "100% verified profiles with ID and photo verification for safety." },
  { icon: Search, title: "Smart Matchmaking", desc: "AI-powered matching based on preferences, horoscope & lifestyle." },
  { icon: Users, title: "Large Community", desc: "Millions of active profiles across all communities and regions." },
  { icon: Star, title: "Premium Experience", desc: "Dedicated relationship managers and priority customer support." },
  { icon: MessageCircle, title: "Secure Messaging", desc: "End-to-end encrypted chat to connect with your matches privately." },
  { icon: Heart, title: "Success Stories", desc: "Thousands of happy couples found their soulmate through us." },
];

const stats = [
  { value: "5M+", label: "Registered Users" },
  { value: "1.2M+", label: "Happy Marriages" },
  { value: "50+", label: "Communities" },
  { value: "99%", label: "Profile Verification" },
];

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Happy couple" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-24 md:py-36">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Find Your <span className="text-primary">Perfect</span> Life Partner
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 font-light">
              India's most trusted matrimonial service. Join millions who found love, companionship, and a lifelong bond.
            </p>
            <div className="flex flex-wrap gap-3">
              {isAuthenticated ? (
                <Button size="lg" onClick={() => navigate("/matches")}>
                  View Matches
                </Button>
              ) : (
                <>
                  <Button size="lg" onClick={() => navigate("/auth?mode=signup")}>
                    Register Free
                  </Button>
                  <Button size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20" onClick={() => navigate("/auth?mode=login")}>
                    Sign In
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="hero-gradient py-10">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">{s.value}</div>
              <div className="text-sm text-primary-foreground/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 warm-cream-bg">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Why Choose <span className="text-primary">VivahBandhan</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We combine traditional values with modern technology to help you find your perfect match.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-sans">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Begin Your Journey Today
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Create your profile in minutes and start connecting with verified matches.
          </p>
          <Button size="lg" onClick={() => navigate(isAuthenticated ? "/matches" : "/auth?mode=signup")}>
            {isAuthenticated ? "Browse Matches" : "Get Started Free"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
