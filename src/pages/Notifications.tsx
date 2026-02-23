import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, MessageCircle, UserCheck, Bell } from "lucide-react";

const notifications = [
  { id: 1, type: "interest", icon: Heart, text: "Rohit Verma sent you an interest", time: "5 min ago", unread: true },
  { id: 2, type: "view", icon: Eye, text: "Kavya Iyer viewed your profile", time: "1 hour ago", unread: true },
  { id: 3, type: "message", icon: MessageCircle, text: "New message from Riya Patel", time: "2 hours ago", unread: true },
  { id: 4, type: "accept", icon: UserCheck, text: "Ananya Sharma accepted your interest", time: "1 day ago", unread: false },
  { id: 5, type: "view", icon: Eye, text: "Sneha Reddy viewed your profile", time: "2 days ago", unread: false },
  { id: 6, type: "interest", icon: Heart, text: "Amit Kumar sent you an interest", time: "3 days ago", unread: false },
];

const Notifications = () => (
  <div className="min-h-[calc(100vh-4rem)] py-8">
    <div className="container max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Bell className="h-7 w-7 text-primary" />
        <h1 className="text-3xl font-display font-bold">Notifications</h1>
      </div>
      <div className="space-y-2">
        {notifications.map(n => (
          <Card key={n.id} className={`transition-colors ${n.unread ? "border-primary/20 bg-accent/30" : ""}`}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${n.unread ? "bg-primary/10" : "bg-muted"}`}>
                <n.icon className={`h-5 w-5 ${n.unread ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <div className="flex-1">
                <p className={`text-sm ${n.unread ? "font-medium" : "text-muted-foreground"}`}>{n.text}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
              </div>
              {n.unread && <Badge variant="secondary" className="text-[10px]">New</Badge>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default Notifications;
