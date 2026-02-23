import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ArrowUpRight, ArrowDownLeft, Check, X } from "lucide-react";

const sent = [
  { id: 1, name: "Ananya Sharma", age: 26, city: "Mumbai", status: "pending", initials: "AS" },
  { id: 2, name: "Riya Patel", age: 24, city: "Ahmedabad", status: "accepted", initials: "RP" },
];

const received = [
  { id: 3, name: "Rohit Verma", age: 28, city: "Delhi", status: "pending", initials: "RV" },
  { id: 4, name: "Amit Kumar", age: 30, city: "Bangalore", status: "pending", initials: "AK" },
];

const statusBadge = (status: string) => {
  if (status === "accepted") return <Badge variant="secondary" className="border-0">Accepted</Badge>;
  if (status === "declined") return <Badge variant="destructive">Declined</Badge>;
  return <Badge variant="secondary">Pending</Badge>;
};

const Interests = () => (
  <div className="min-h-[calc(100vh-4rem)] py-8">
    <div className="container max-w-3xl">
      <h1 className="text-3xl font-display font-bold mb-6">Interests</h1>
      <Tabs defaultValue="received">
        <TabsList className="mb-6">
          <TabsTrigger value="received" className="gap-1"><ArrowDownLeft className="h-4 w-4" />Received ({received.length})</TabsTrigger>
          <TabsTrigger value="sent" className="gap-1"><ArrowUpRight className="h-4 w-4" />Sent ({sent.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="received" className="space-y-3">
          {received.map(p => (
            <Card key={p.id}>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center font-display font-bold text-primary">{p.initials}</div>
                <div className="flex-1">
                  <h3 className="font-semibold">{p.name}, {p.age}</h3>
                  <p className="text-sm text-muted-foreground">{p.city}</p>
                </div>
                {statusBadge(p.status)}
                {p.status === "pending" && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline"><X className="h-4 w-4" /></Button>
                    <Button size="sm"><Check className="h-4 w-4" /></Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="sent" className="space-y-3">
          {sent.map(p => (
            <Card key={p.id}>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center font-display font-bold text-primary">{p.initials}</div>
                <div className="flex-1">
                  <h3 className="font-semibold">{p.name}, {p.age}</h3>
                  <p className="text-sm text-muted-foreground">{p.city}</p>
                </div>
                {statusBadge(p.status)}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  </div>
);

export default Interests;
