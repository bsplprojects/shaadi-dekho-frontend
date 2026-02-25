import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Message Sent", description: "We'll get back to you within 24 hours." });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 page-pattern page-dots relative">
      <div className="container max-w-5xl relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">Contact Us</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a question or need assistance? We're here to help you on your journey to finding the perfect partner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {[
              { icon: Mail, title: "Email Us", detail: "support@vivahbandhan.com", sub: "We reply within 24 hours" },
              { icon: Phone, title: "Call Us", detail: "+91 1800-123-4567", sub: "Mon–Sat, 9 AM – 7 PM IST" },
              { icon: MapPin, title: "Visit Us", detail: "Tower B, Cyber City", sub: "Gurugram, Haryana 122002" },
              { icon: Clock, title: "Working Hours", detail: "Mon – Sat: 9 AM – 7 PM", sub: "Sunday: Closed" },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="flex items-start gap-4 pt-5 pb-4">
                  <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm font-sans">{item.title}</h3>
                    <p className="text-sm text-foreground">{item.detail}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-sans">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <Send className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">Your message has been sent. We'll respond within 24 hours.</p>
                  <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input type="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Phone (Optional)</Label>
                      <Input placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <Label>Subject</Label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Select a topic" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="account">Account Issues</SelectItem>
                          <SelectItem value="billing">Billing & Payments</SelectItem>
                          <SelectItem value="report">Report a Profile</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Message</Label>
                    <Textarea placeholder="Describe your query in detail..." rows={5} required />
                  </div>
                  <Button type="submit" className="gap-2"><Send className="h-4 w-4" /> Send Message</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
