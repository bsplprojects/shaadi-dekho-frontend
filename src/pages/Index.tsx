import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Search,
  Shield,
  Users,
  Star,
  MessageCircle,
  Camera,
  BadgeCheck,
  Home,
  Phone,
  MessageSquare,
  ThumbsUp,
  Eye,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import heroImage from "@/assets/hero-couple.jpg";

const features = [
  {
    icon: Shield,
    title: "Verified Profiles",
    desc: "100% verified profiles with ID and photo verification for safety.",
  },
  {
    icon: Search,
    title: "Smart Matchmaking",
    desc: "AI-powered matching based on preferences, horoscope & lifestyle.",
  },
  {
    icon: Users,
    title: "Large Community",
    desc: "Millions of active profiles across all communities and regions.",
  },
  {
    icon: Star,
    title: "Premium Experience",
    desc: "Dedicated relationship managers and priority customer support.",
  },
  {
    icon: MessageCircle,
    title: "Secure Messaging",
    desc: "End-to-end encrypted chat to connect with your matches privately.",
  },
  {
    icon: Heart,
    title: "Success Stories",
    desc: "Thousands of happy couples found their soulmate through us.",
  },
];

const stats = [
  { value: "5M+", label: "Registered Users" },
  { value: "1.2M+", label: "Happy Marriages" },
  { value: "50+", label: "Communities" },
  { value: "99%", label: "Profile Verification" },
];

const Index = () => {
  // const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Happy couple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-24 md:py-36">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Find Your <span className="text-primary">Perfect</span> Life
              Partner
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 font-light">
              India's most trusted matrimonial service. Join millions who found
              love, companionship, and a lifelong bond.
            </p>
            <div className="flex flex-wrap gap-3">
              {true ? (
                <Button size="lg" onClick={() => navigate("/matches")}>
                  View Matches
                </Button>
              ) : (
                <>
                  <Button
                    size="lg"
                    onClick={() => navigate("/auth?mode=signup")}
                  >
                    Register Free
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
                    onClick={() => navigate("/auth?mode=login")}
                  >
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
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                {s.value}
              </div>
              <div className="text-sm text-primary-foreground/70 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Your Profile */}
      {true && (
        <section className="py-10 bg-accent/30">
          <div className="container max-w-4xl">
            <h2 className="text-xl font-display font-bold mb-1">
              Complete Your Profile
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm text-muted-foreground">
                Profile completeness score
              </span>
              <span className="text-sm font-semibold text-primary">41%</span>
              <Progress value={41} className="w-24 h-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Camera,
                  label: "Add Photo(s)",
                  color: "text-green-600 bg-green-50",
                },
                {
                  icon: BadgeCheck,
                  label: "Verify Profile",
                  color: "text-blue-600 bg-blue-50",
                },
                {
                  icon: Home,
                  label: "Family Details",
                  color: "text-orange-600 bg-orange-50",
                },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate("/edit-profile")}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg px-5 py-4 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${item.color}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Become a Paid Member */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="bg-card border border-border rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-display font-bold mb-2">
                Become a paid member
              </h2>
              <p className="text-lg mb-5">
                Get up to{" "}
                <span className="font-bold text-primary">71% OFF</span> on paid
                membership!
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  { icon: Phone, text: "Call/WhatsApp matches" },
                  { icon: MessageSquare, text: "Unlimited messages" },
                  { icon: ThumbsUp, text: "Higher chances of response" },
                  { icon: Eye, text: "View and match horoscopes" },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 text-sm"
                  >
                    <item.icon className="h-4 w-4 text-primary shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                onClick={() =>
                  navigate(true ? "/matches" : "/auth?mode=signup")
                }
              >
                See membership plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 warm-cream-bg">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Why Choose <span className="text-primary">ShaadiDekho</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We combine traditional values with modern technology to help you
              find your perfect match.
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
                <h3 className="text-lg font-semibold mb-2 font-sans">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20" id="pricing">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Choose Your <span className="text-primary">Plan</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Start free and upgrade when you're ready to connect with your
              perfect match.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free */}
            <div className="bg-card rounded-lg border border-border p-8 flex flex-col">
              <h3 className="text-lg font-semibold font-sans mb-1">Free</h3>
              <div className="text-3xl font-display font-bold mb-1">₹0</div>
              <p className="text-sm text-muted-foreground mb-6">
                Get started at no cost
              </p>
              <ul className="text-sm text-muted-foreground space-y-3 mb-8 flex-1">
                <li className="flex gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />{" "}
                  Create & share your profile
                </li>
                <li className="flex gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />{" "}
                  Browse up to 20 profiles/day
                </li>
                <li className="flex gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />{" "}
                  Send 5 interests/day
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  navigate(true ? "/matches" : "/auth?mode=signup")
                }
              >
                Get Started
              </Button>
            </div>
            {/* Gold */}
            <div className="bg-card rounded-lg border-2 border-primary p-8 flex flex-col relative shadow-lg">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="text-lg font-semibold font-sans mb-1">Gold</h3>
              <div className="text-3xl font-display font-bold mb-1">
                ₹999
                <span className="text-base font-normal text-muted-foreground">
                  /mo
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                For serious seekers
              </p>
              <ul className="text-sm text-muted-foreground space-y-3 mb-8 flex-1">
                <li className="flex gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />{" "}
                  Unlimited profile views
                </li>
                <li className="flex gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />{" "}
                  Unlimited interests
                </li>
                <li className="flex gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />{" "}
                  Direct messaging
                </li>
                <li className="flex gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" /> See
                  who viewed your profile
                </li>
              </ul>
              <Button
                className="w-full"
                onClick={() =>
                  navigate(true ? "/matches" : "/auth?mode=signup")
                }
              >
                Upgrade to Gold
              </Button>
            </div>
            {/* Diamond */}
            <div className="bg-card rounded-lg border border-border p-8 flex flex-col">
              <h3 className="text-lg font-semibold font-sans mb-1">Diamond</h3>
              <div className="text-3xl font-display font-bold mb-1">
                ₹2,499
                <span className="text-base font-normal text-muted-foreground">
                  /mo
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Premium experience
              </p>
              <ul className="text-sm text-muted-foreground space-y-3 mb-8 flex-1">
                <li className="flex gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />{" "}
                  Everything in Gold
                </li>
                <li className="flex gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />{" "}
                  Dedicated relationship manager
                </li>
                <li className="flex gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />{" "}
                  Priority profile highlighting
                </li>
                <li className="flex gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />{" "}
                  Horoscope matching
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  navigate(true ? "/matches" : "/auth?mode=signup")
                }
              >
                Go Diamond
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 warm-cream-bg">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Begin Your Journey Today
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Create your profile in minutes and start connecting with verified
            matches.
          </p>
          <Button
            size="lg"
            onClick={() => navigate(true ? "/matches" : "/auth?mode=signup")}
          >
            {true ? "Browse Matches" : "Get Started Free"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
