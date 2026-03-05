import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Search,
  Shield,
  Users,
  Star,
  MessageCircle,
  Phone,
  MessageSquare,
  ThumbsUp,
  Eye,
  UserCheck,
  Clock,
  ChevronLeft,
  ChevronRight,
  Crown,
  Gem,
  HandHeart,
  BadgeCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-couple.jpg";
import managerImage from "@/assets/relationship-manager.jpg";
import selectLogo from "@/assets/select-logo.png";
import { useState } from "react";

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

const successStories = [
  { names: "Rahul & Priya", date: "March 15, 2025", location: "Mumbai" },
  { names: "Vikram & Sneha", date: "January 8, 2025", location: "Delhi" },
  { names: "Arjun & Kavya", date: "November 22, 2024", location: "Bangalore" },
  { names: "Amit & Neha", date: "September 5, 2024", location: "Pune" },
  { names: "Sanjay & Divya", date: "July 12, 2024", location: "Chennai" },
  { names: "Kunal & Ritu", date: "May 30, 2024", location: "Hyderabad" },
];

const faqs = [
  {
    q: "How does ShaadiDekho verify profiles?",
    a: "Every profile goes through a multi-step verification process including ID verification, phone number verification, and photo screening. Our team manually reviews flagged profiles to ensure authenticity and safety for all members.",
  },
  {
    q: "Is it free to create a profile?",
    a: "Yes! Creating a profile on ShaadiDekho is completely free. You can browse profiles, set preferences, and receive match recommendations at no cost. Premium plans unlock additional features like direct messaging and advanced filters.",
  },
  {
    q: "How does the matchmaking algorithm work?",
    a: "Our AI-powered algorithm considers over 30 parameters including community preferences, education, lifestyle, location, and horoscope compatibility. The more complete your profile, the better your matches will be.",
  },
  {
    q: "Can I hide my profile temporarily?",
    a: "Absolutely. You can deactivate your profile anytime from Settings. Your data stays safe, and you can reactivate whenever you're ready to resume your search.",
  },
  {
    q: "What is the Assisted Service?",
    a: "Our Assisted Service pairs you with a dedicated Relationship Manager who hand-picks matches, coordinates communication, and guides you through the entire process — saving you time and effort.",
  },
  {
    q: "How do I upgrade to a premium plan?",
    a: "Navigate to the pricing section or your account settings and choose from our Gold or Diamond plans. Payment is secure and you can cancel or change plans anytime.",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [storyPage, setStoryPage] = useState(0);
  const storiesPerPage = 3;
  const totalPages = Math.ceil(successStories.length / storiesPerPage);
  const visibleStories = successStories.slice(
    storyPage * storiesPerPage,
    storyPage * storiesPerPage + storiesPerPage
  );

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
              <Button size="lg" onClick={() => navigate("/matches")}>View Matches</Button>
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

      {/* Assisted Service */}
      <section className="py-16 bg-accent/30">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Assisted Service</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Find your match <span className="text-primary">10x faster</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Personalised matchmaking service through an expert Relationship Manager who works exclusively for you.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: UserCheck, label: "Guaranteed matches" },
                  { icon: MessageCircle, label: "Better response" },
                  { icon: Clock, label: "Save time & effort" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center text-center gap-2">
                    <div className="h-14 w-14 rounded-xl bg-card border border-border flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" onClick={() => navigate("/matches")}>Know More →</Button>
            </div>
            <div className="flex justify-center">
              <img
                src={managerImage}
                alt="Relationship Manager"
                className="rounded-2xl shadow-xl max-h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Become a Paid Member */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="bg-card border border-border rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-display font-bold mb-2">Become a paid member</h2>
              <p className="text-lg mb-5">
                Get up to <span className="font-bold text-primary">71% OFF</span> on paid membership!
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  { icon: Phone, text: "Call/WhatsApp matches" },
                  { icon: MessageSquare, text: "Unlimited messages" },
                  { icon: ThumbsUp, text: "Higher chances of response" },
                  { icon: Eye, text: "View and match horoscopes" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm">
                    <item.icon className="h-4 w-4 text-primary shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" onClick={() => navigate("/matches")}>See membership plans</Button>
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

      {/* Pricing */}
      <section className="py-20" id="pricing">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Choose Your <span className="text-primary">Plan</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Start free and upgrade when you're ready to connect with your perfect match.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free */}
            <div className="bg-card rounded-lg border border-border p-8 flex flex-col">
              <h3 className="text-lg font-semibold font-sans mb-1">Free</h3>
              <div className="text-3xl font-display font-bold mb-1">₹0</div>
              <p className="text-sm text-muted-foreground mb-6">Get started at no cost</p>
              <ul className="text-sm text-muted-foreground space-y-3 mb-8 flex-1">
                <li className="flex gap-2"><Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Create & share your profile</li>
                <li className="flex gap-2"><Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Browse up to 20 profiles/day</li>
                <li className="flex gap-2"><Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Send 5 interests/day</li>
              </ul>
              <Button variant="outline" className="w-full" onClick={() => navigate("/matches")}>Get Started</Button>
            </div>
            {/* Gold */}
            <div className="bg-card rounded-lg border-2 border-primary p-8 flex flex-col relative shadow-lg">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
              <h3 className="text-lg font-semibold font-sans mb-1">Gold</h3>
              <div className="text-3xl font-display font-bold mb-1">₹999<span className="text-base font-normal text-muted-foreground">/mo</span></div>
              <p className="text-sm text-muted-foreground mb-6">For serious seekers</p>
              <ul className="text-sm text-muted-foreground space-y-3 mb-8 flex-1">
                <li className="flex gap-2"><Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Unlimited profile views</li>
                <li className="flex gap-2"><Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Unlimited interests</li>
                <li className="flex gap-2"><Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Direct messaging</li>
                <li className="flex gap-2"><Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" /> See who viewed your profile</li>
              </ul>
              <Button className="w-full" onClick={() => navigate("/matches")}>Upgrade to Gold</Button>
            </div>
            {/* Diamond */}
            <div className="bg-card rounded-lg border border-border p-8 flex flex-col">
              <h3 className="text-lg font-semibold font-sans mb-1">Diamond</h3>
              <div className="text-3xl font-display font-bold mb-1">₹2,499<span className="text-base font-normal text-muted-foreground">/mo</span></div>
              <p className="text-sm text-muted-foreground mb-6">Premium experience</p>
              <ul className="text-sm text-muted-foreground space-y-3 mb-8 flex-1">
                <li className="flex gap-2"><Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Everything in Gold</li>
                <li className="flex gap-2"><Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Dedicated relationship manager</li>
                <li className="flex gap-2"><Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Priority profile highlighting</li>
                <li className="flex gap-2"><Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Horoscope matching</li>
              </ul>
              <Button variant="outline" className="w-full" onClick={() => navigate("/matches")}>Go Diamond</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ShaadiDekho Select — Premium Service */}
      <section className="py-20 bg-gradient-to-br from-accent/40 via-card to-accent/20 overflow-hidden">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={selectLogo} alt="ShaadiDekho Select" className="h-16 w-16 object-contain" />
                <div>
                  <h3 className="text-xl font-display font-bold">ShaadiDekho <span className="text-primary">Select</span></h3>
                  <p className="text-xs text-muted-foreground">Exclusive premium matchmaking</p>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Experience <span className="text-primary">world-class</span> matchmaking
              </h2>
              <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                A white-glove service designed for discerning individuals. Our elite team of matchmakers curates highly compatible profiles, conducts background verification, and arranges introductions — so you can focus on finding love.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Crown, title: "VIP Treatment", desc: "Dedicated advisor for your journey" },
                  { icon: HandHeart, title: "Hand-picked Matches", desc: "Curated profiles that truly fit" },
                  { icon: BadgeCheck, title: "Verified Elites", desc: "Thorough background checks" },
                  { icon: Gem, title: "Priority Listing", desc: "Be seen by premium members first" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-card/80 border border-border rounded-xl p-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" onClick={() => navigate("/matches")}>
                Explore Select →
              </Button>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute -inset-6 rounded-3xl bg-primary/5 blur-3xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-xl max-w-sm w-full">
                <div className="text-center mb-6">
                  <img src={selectLogo} alt="Select" className="h-20 w-20 mx-auto mb-4 object-contain" />
                  <h4 className="font-display font-bold text-lg">Why Go Select?</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "Personal relationship manager assigned to you",
                    "Up to 15 hand-picked matches every month",
                    "Professional photoshoot for your profile",
                    "Background & family verification included",
                    "Dedicated WhatsApp support line",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-border text-center">
                  <p className="text-xs text-muted-foreground mb-1">Starting at</p>
                  <p className="text-2xl font-display font-bold text-primary">₹9,999<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section className="py-20 bg-foreground">
        <div className="container max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Lakhs of Happy Couples</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-10">
            Matched by <span className="text-primary">ShaadiDekho</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleStories.map((story) => (
              <div
                key={story.names}
                className="relative rounded-xl overflow-hidden bg-gradient-to-t from-foreground/90 to-muted/30 h-56 flex flex-col justify-end p-6 border border-border/20"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold text-primary-foreground italic">{story.names}</h3>
                  <p className="text-xs text-primary-foreground/60 mt-1 uppercase tracking-wider">
                    Marriage Date: {story.date} • {story.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setStoryPage((p) => Math.max(0, p - 1))}
              disabled={storyPage === 0}
              className="h-10 w-10 rounded-full border border-border/30 flex items-center justify-center text-primary-foreground disabled:opacity-30 hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-primary-foreground/60">{storyPage + 1} / {totalPages}</span>
            <button
              onClick={() => setStoryPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={storyPage === totalPages - 1}
              className="h-10 w-10 rounded-full border border-border/30 flex items-center justify-center text-primary-foreground disabled:opacity-30 hover:bg-primary/10 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 warm-cream-bg">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">Everything you need to know about ShaadiDekho</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Begin Your Journey Today
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
            Create your profile in minutes and start connecting with verified matches.
          </p>
          <Button size="lg" onClick={() => navigate("/matches")}>Browse Matches</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
