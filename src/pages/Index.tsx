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
  Check,
  Sparkles,
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

import { faqs, features, stats, successStories } from "@/lib/constants";



const Index = () => {
  const navigate = useNavigate();
  const [storyPage, setStoryPage] = useState(0);
  const storiesPerPage = 3;
  const totalPages = Math.ceil(successStories.length / storiesPerPage);
  const visibleStories = successStories.slice(
    storyPage * storiesPerPage,
    storyPage * storiesPerPage + storiesPerPage,
  );

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
              <Button size="lg" onClick={() => navigate("/matches")}>
                View Matches
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12 bg-gradient-to-r from-primary to-primary overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff20"
              d="M0,160L80,181.3C160,203,320,245,480,229.3C640,213,800,139,960,133.3C1120,128,1280,192,1360,224L1440,256V0H0Z"
            ></path>
          </svg>
        </div>

        <div className="container relative grid grid-cols-2 md:grid-cols-4 gap-6 text-center z-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-2xl 
        bg-white/10 
        backdrop-blur-lg 
        border border-white/20 
        shadow-lg 
        hover:scale-105 
        transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-white">
                {s.value}
              </div>

              <div className="text-sm text-white/80 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-full h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff20"
              d="M0,160L80,181.3C160,203,320,245,480,229.3C640,213,800,139,960,133.3C1120,128,1280,192,1360,224L1440,256V0H0Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Assisted Service */}
      <section className="py-16 bg-accent">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Assisted Service
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Find your match <span className="text-primary">10x faster</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Personalised matchmaking service through an expert Relationship
                Manager who works exclusively for you.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: UserCheck, label: "Guaranteed matches" },
                  { icon: MessageCircle, label: "Better response" },
                  { icon: Clock, label: "Save time & effort" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div className="h-16 w-16 rounded-xl bg-card border border-border flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                onClick={() => navigate("/matches")}
                className=""
              >
                Know More →
              </Button>
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

      {/* Features */}
      <section className="relative py-24 overflow-hidden bg-[#FFFDF9]">
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">
              The ShaadiDekho Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Crafting Connections That{" "}
              <span className="text-primary italic">Last Forever</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We understand that marriage is more than just a match. It's a
              union of families, values, and dreams. Discover why we are India's
              trusted choice.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Decorative hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="relative z-10">
                  <div
                    className={`h-14 w-14 rounded-xl bg-primary/20 text-primary shadow-lg shadow-primary/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <f.icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                    {f.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Find Your <span className="text-primary italic">Soulmate</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Invest in your future. Choose a plan that fits your journey toward
              a perfect union.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="group bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="mb-8">
                <div className="h-12 w-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Basic</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-slate-900">₹0</span>
                  <span className="text-slate-500 font-medium">/forever</span>
                </div>
                <p className="text-slate-500 text-sm">
                  Ideal for exploring our community and testing the waters.
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Create a detailed profile",
                  "Daily 20 profile views",
                  "Send 5 interests daily",
                  "Basic search filters",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600 text-sm"
                  >
                    <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl border-2 border-slate-100 font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                Get Started
              </button>
            </div>

            {/* Gold Plan - Featured */}
            <div className="relative group bg-white rounded-3xl border-2 border-primary p-8 shadow-2xl shadow-primary/10 flex flex-col scale-105 z-10">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                <Crown className="h-3 w-3" /> Most Popular
              </div>

              <div className="mb-8">
                <div className="h-12 w-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Gold</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-slate-900">
                    ₹999
                  </span>
                  <span className="text-slate-500 font-medium">/month</span>
                </div>
                <p className="text-slate-500 text-sm">
                  Our most effective plan for serious matchmaking.
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Unlimited profile views",
                  "Direct messaging & Chat",
                  "See who viewed you",
                  "Advanced search filters",
                  "Unlimited interests",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 text-sm font-medium"
                  >
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all">
                Upgrade to Gold
              </button>
            </div>

            {/* Diamond Plan - Premium */}
            <div className="group bg-slate-900 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-white">
              <div className="mb-8">
                <div className="h-12 w-12 bg-white/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <Gem className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Diamond</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">₹2,499</span>
                  <span className="text-slate-400 font-medium">/month</span>
                </div>
                <p className="text-slate-400 text-sm">
                  The VIP experience with human-led assistance.
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Everything in Gold",
                  "Personal Relationship Manager",
                  "Verified Horoscope matching",
                  "Priority profile placement",
                  "Identity privacy mode",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-300 text-sm"
                  >
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                Go Diamond
              </button>
            </div>
          </div>

          {/* Trusted Footer */}
          <p className="text-center text-slate-400 text-sm mt-12 flex items-center justify-center gap-2">
            Secure payment via Razorpay • Cancel anytime • No hidden charges
          </p>
        </div>
      </section>

      {/* ShaadiDekho Select — Premium Service */}
      <section className="py-20 bg-gradient-to-br from-accent/40 via-card to-accent/20 overflow-hidden">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={selectLogo}
                  alt="ShaadiDekho Select"
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-display font-bold">
                    ShaadiDekho <span className="text-primary">Select</span>
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Exclusive premium matchmaking
                  </p>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Experience <span className="text-primary">world-class</span>{" "}
                matchmaking
              </h2>
              <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                A white-glove service designed for discerning individuals. Our
                elite team of matchmakers curates highly compatible profiles,
                conducts background verification, and arranges introductions —
                so you can focus on finding love.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: Crown,
                    title: "VIP Treatment",
                    desc: "Dedicated advisor for your journey",
                  },
                  {
                    icon: HandHeart,
                    title: "Hand-picked Matches",
                    desc: "Curated profiles that truly fit",
                  },
                  {
                    icon: BadgeCheck,
                    title: "Verified Elites",
                    desc: "Thorough background checks",
                  },
                  {
                    icon: Gem,
                    title: "Priority Listing",
                    desc: "Be seen by premium members first",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 bg-card/80 border border-border rounded-xl p-4"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.desc}
                      </p>
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
                  <img
                    src={selectLogo}
                    alt="Select"
                    className="h-20 w-20 mx-auto mb-4 object-contain"
                  />
                  <h2 className="font-display font-bold text-2xl ">
                    Why Go <span className="text-primary">Select?</span>
                  </h2>
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
                  <p className="text-xs text-muted-foreground mb-1">
                    Starting at
                  </p>
                  <p className="text-2xl font-display font-bold text-primary">
                    ₹9,999
                    <span className="text-sm font-normal text-muted-foreground">
                      /mo
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section className="py-20 bg-foreground">
        <div className="container max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Lakhs of Happy Couples
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-10">
            Matched by <span className="text-primary">ShaadiDekho</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleStories.map((story) => (
              <div
                key={story.names}
                className="relative rounded-xl overflow-hidden h-56 flex flex-col justify-end border border-border/20"
              >
                {/* Background Image */}
                <img
                  src={story.img}
                  alt={story.names}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-display font-bold text-white italic">
                    {story.names}
                  </h3>
                  <p className="text-xs text-white/70 mt-1 uppercase tracking-wider">
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
            <span className="text-sm text-primary-foreground/60">
              {storyPage + 1} / {totalPages}
            </span>
            <button
              onClick={() =>
                setStoryPage((p) => Math.min(totalPages - 1, p + 1))
              }
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
            <p className="text-muted-foreground">
              Everything you need to know about ShaadiDekho
            </p>
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
            Create your profile in minutes and start connecting with verified
            matches.
          </p>
          <Button size="lg" onClick={() => navigate("/matches")}>
            Browse Matches
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
