import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const conversations = [
  { id: 1, name: "Riya Patel", lastMsg: "Hi! I liked your profile 😊", time: "2m ago", initials: "RP", unread: 2 },
  { id: 2, name: "Ananya Sharma", lastMsg: "Thank you! Let's connect.", time: "1h ago", initials: "AS", unread: 0 },
  { id: 3, name: "Sneha Reddy", lastMsg: "What are your hobbies?", time: "3h ago", initials: "SR", unread: 1 },
];

const messages = [
  { id: 1, from: "them", text: "Hi! I liked your profile 😊", time: "10:30 AM" },
  { id: 2, from: "me", text: "Thank you! Your profile looks great too.", time: "10:32 AM" },
  { id: 3, from: "them", text: "Would love to know more about you!", time: "10:33 AM" },
];

const Messages = () => {
  const [selected, setSelected] = useState(conversations[0]);
  const [input, setInput] = useState("");

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="container py-6">
        <h1 className="text-3xl font-display font-bold mb-6">Messages</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100vh-14rem)]">
          {/* Conversations list */}
          <Card className="md:col-span-1 overflow-auto">
            <CardContent className="p-0">
              {conversations.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c)}
                  className={`w-full flex items-center gap-3 p-4 text-left hover:bg-muted transition-colors border-b border-border ${selected.id === c.id ? "bg-accent" : ""}`}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">{c.initials}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{c.name}</span>
                      <span className="text-[10px] text-muted-foreground">{c.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{c.lastMsg}</p>
                  </div>
                  {c.unread > 0 && <span className="h-5 w-5 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold">{c.unread}</span>}
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Chat area */}
          <Card className="md:col-span-2 flex flex-col">
            <div className="p-4 border-b border-border flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">{selected.initials}</div>
              <span className="font-semibold">{selected.name}</span>
            </div>
            <CardContent className="flex-1 overflow-auto p-4 space-y-3">
              {messages.map(m => (
                <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm ${m.from === "me" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-muted rounded-bl-md"}`}>
                    {m.text}
                    <div className={`text-[10px] mt-1 ${m.from === "me" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{m.time}</div>
                  </div>
                </div>
              ))}
            </CardContent>
            <div className="p-4 border-t border-border flex gap-2">
              <Input
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button size="icon"><Send className="h-4 w-4" /></Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;
