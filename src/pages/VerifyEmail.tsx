import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 page-pattern page-dots">
      <Card className="w-full max-w-md animate-fade-in shadow-xl border-border/60">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-3 h-14 w-14 rounded-full btn-gradient flex items-center justify-center shadow-lg">
            {sent ? (
              <CheckCircle2 className="h-7 w-7 text-primary-foreground" />
            ) : (
              <Mail className="h-7 w-7 text-primary-foreground" />
            )}
          </div>
          <CardTitle className="text-2xl font-display">
            {sent ? "Verification Sent!" : "Verify Your Email"}
          </CardTitle>
          <CardDescription>
            {sent
              ? `We've sent a verification link to ${email}. Please check your inbox.`
              : "Enter your email address and we'll send you a verification link."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="space-y-4 text-center">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground">
                  Didn't receive the email? Check your spam folder or click below to resend.
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full h-11"
                onClick={() => setSent(false)}
              >
                Resend Verification Email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="verify-email">Email Address</Label>
                <Input
                  id="verify-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              <Button type="submit" className="w-full h-11 btn-gradient text-base">
                Verify Email <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyEmail;
