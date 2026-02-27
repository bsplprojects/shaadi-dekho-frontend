import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, UserPlus, CreditCard, Shield, MessageCircle, Settings, Heart, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { icon: UserPlus, title: "Account & Registration", count: 4 },
  { icon: Heart, title: "Matches & Interests", count: 3 },
  { icon: CreditCard, title: "Billing & Membership", count: 3 },
  { icon: Shield, title: "Privacy & Safety", count: 3 },
  { icon: MessageCircle, title: "Messaging", count: 2 },
  { icon: Settings, title: "Account Settings", count: 3 },
];

const faqs = [
  { q: "How do I create a profile?", a: "Click 'Sign Up Free' on the homepage, fill in your basic details, and follow the onboarding steps to complete your profile with photos, preferences, and horoscope details." },
  { q: "Is my profile verified?", a: "We verify profiles through email, phone number, and optional ID verification. Verified profiles get a badge and higher visibility in search results." },
  { q: "How does matchmaking work?", a: "Our AI-powered algorithm considers your preferences, horoscope compatibility, location, education, and lifestyle to suggest the most compatible matches." },
  { q: "How do I send an interest?", a: "Visit a profile you like and click the 'Send Interest' button. The other person will be notified and can accept or decline your interest." },
  { q: "What are the membership plans?", a: "We offer Free, Gold (₹999/mo), and Diamond (₹2,499/mo) plans. Paid plans unlock features like unlimited messaging, contact details, and horoscope matching." },
  { q: "Can I get a refund?", a: "Memberships are generally non-refundable. However, if you experience technical issues, contact our support team within 7 days of purchase for assistance." },
  { q: "How do I hide my profile?", a: "Go to Settings > Privacy and toggle off 'Profile Visibility'. Your profile will be hidden from search results and matches." },
  { q: "How do I report a suspicious profile?", a: "Click the three-dot menu on any profile and select 'Report'. Choose a reason and our safety team will review it within 24 hours." },
  { q: "How do I delete my account?", a: "Go to Settings > Danger Zone and click 'Delete Account'. This action is permanent and removes all your data within 30 days." },
  { q: "Can I block someone?", a: "Yes, visit their profile and click the three-dot menu, then select 'Block'. They will no longer be able to view your profile or contact you." },
];

const HelpCenter = () => {
  const [search, setSearch] = useState("");
  const filtered = faqs.filter((f) => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-[calc(100vh-4rem)] page-pattern page-dots relative">
      {/* Hero */}
      <div className="hero-gradient py-14 text-center">
        <div className="container max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-3">How can we help you?</h1>
          <p className="text-primary-foreground/70 mb-6">Search our knowledge base or browse categories below</p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for answers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-11 bg-primary-foreground border-0"
            />
          </div>
        </div>
      </div>

      <div className="container max-w-4xl py-10 relative z-10">
        {/* Categories */}
        {!search && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {categories.map((cat) => (
              <Card key={cat.title} className="hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
                <CardContent className="flex items-center gap-3 pt-5 pb-4">
                  <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <cat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm font-sans">{cat.title}</h3>
                    <p className="text-xs text-muted-foreground">{cat.count} articles</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* FAQs */}
        <h2 className="text-xl font-display font-bold mb-4">{search ? `Results for "${search}"` : "Frequently Asked Questions"}</h2>
        {filtered.length === 0 ? (
          <p className="text-muted-foreground text-sm py-8 text-center">No results found. Try a different search or <Link to="/contact" className="text-primary hover:underline">contact us</Link>.</p>
        ) : (
          <Accordion type="single" collapsible className="space-y-2">
            {filtered.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-sm font-medium font-sans hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        <div className="text-center mt-10 py-8 bg-accent/30 rounded-lg">
          <Eye className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="font-display font-bold text-lg mb-1">Still need help?</h3>
          <p className="text-sm text-muted-foreground mb-4">Our support team is available Mon–Sat, 9 AM – 7 PM IST</p>
          <Link to="/contact">
            <button className="btn-gradient text-primary-foreground px-6 py-2.5 rounded-md text-sm font-medium border-t border-t-[hsl(0_0%_100%/0.25)]">Contact Support</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
