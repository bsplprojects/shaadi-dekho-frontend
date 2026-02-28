import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Eye,
  Phone,
  MapPin,
  AlertTriangle,
  UserX,
  Lock,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const tips = [
  {
    icon: Shield,
    title: "Verify Before You Trust",
    points: [
      "Look for the verified badge on profiles before engaging",
      "Ask for a video call before meeting in person",
      "Cross-check details like workplace, education, and social media",
      "Be cautious of profiles with only one photo or very limited information",
    ],
  },
  {
    icon: Eye,
    title: "Protect Your Personal Information",
    points: [
      "Never share financial details, bank info, or passwords with anyone",
      "Avoid sharing your home address until you're comfortable",
      "Use the in-app messaging system instead of personal phone numbers initially",
      "Be wary of anyone asking for money or financial assistance",
    ],
  },
  {
    icon: Phone,
    title: "Communicate Safely",
    points: [
      "Use ShaadiDekho's messaging for initial conversations",
      "Move to phone or video calls only when you feel comfortable",
      "Trust your instincts — if something feels off, it probably is",
      "Don't feel pressured to share photos or information you're not comfortable with",
    ],
  },
  {
    icon: MapPin,
    title: "Meet Safely",
    points: [
      "Always meet in a public place for the first few meetings",
      "Inform a family member or friend about your meeting details",
      "Arrange your own transportation to and from the meeting",
      "Don't consume food or drinks left unattended",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Recognize Red Flags",
    points: [
      "Inconsistent stories or contradicting information",
      "Reluctance to share photos, video call, or meet family",
      "Requests for money, gifts, or financial help",
      "Pressuring you to make quick decisions about marriage",
      "Avoiding questions about their background",
    ],
  },
  {
    icon: UserX,
    title: "Report & Block",
    points: [
      "Report suspicious profiles immediately using the report feature",
      "Block anyone who makes you uncomfortable",
      "Our safety team reviews reports within 24 hours",
      "You can report harassment, fake profiles, and inappropriate behavior",
    ],
  },
];

const SafetyTips = () => (
  <div className="min-h-[calc(100vh-4rem)] page-pattern page-dots relative">
    {/* Hero */}
    <div className="hero-gradient py-14 text-center">
      <div className="container max-w-2xl">
        <Lock className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-3">
          Safety Tips
        </h1>
        <p className="text-primary-foreground/70 max-w-lg mx-auto">
          Your safety is our top priority. Follow these guidelines to have a
          safe and positive experience on ShaadiDekho.
        </p>
      </div>
    </div>

    <div className="container max-w-4xl py-10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip) => (
          <Card key={tip.title} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <tip.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold font-sans">{tip.title}</h3>
              </div>
              <ul className="space-y-2">
                {tip.points.map((p, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex gap-2"
                  >
                    <span className="text-primary mt-1 shrink-0">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-10" />

      <div className="text-center py-8 bg-accent/30 rounded-lg">
        <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
        <h3 className="font-display font-bold text-lg mb-1">
          Need to Report Something?
        </h3>
        <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
          If you've experienced harassment or encountered a suspicious profile,
          please report it immediately.
        </p>
        <Link to="/contact">
          <button className="btn-gradient text-primary-foreground px-6 py-2.5 rounded-md text-sm font-medium border-t border-t-[hsl(0_0%_100%/0.25)]">
            Report an Issue
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default SafetyTips;
