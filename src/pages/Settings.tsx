import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Shield, Bell, Eye, Globe, Trash2, Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const handleLogout = () => { setUser(null); navigate("/"); };
  const { toast } = useToast();

  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);
  const [profileVisible, setProfileVisible] = useState(true);
  const [showPhone, setShowPhone] = useState(false);
  const [showLastSeen, setShowLastSeen] = useState(true);

  const handleSave = () => {
    toast({ title: "Settings Saved", description: "Your settings have been updated." });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots relative">
      <div className="container max-w-2xl relative z-10">
        <h1 className="text-3xl font-display font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground mb-8">Manage your account and privacy settings</p>

        <div className="space-y-6">
          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-sans flex items-center gap-2"><Bell className="h-5 w-5 text-primary" /> Notifications</CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div><Label>Email Notifications</Label><p className="text-xs text-muted-foreground">Receive match and interest alerts via email</p></div>
                <Switch checked={emailNotif} onCheckedChange={setEmailNotif} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div><Label>SMS Notifications</Label><p className="text-xs text-muted-foreground">Get SMS alerts for important updates</p></div>
                <Switch checked={smsNotif} onCheckedChange={setSmsNotif} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div><Label>Push Notifications</Label><p className="text-xs text-muted-foreground">Browser push notifications</p></div>
                <Switch checked={pushNotif} onCheckedChange={setPushNotif} />
              </div>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-sans flex items-center gap-2"><Eye className="h-5 w-5 text-primary" /> Privacy</CardTitle>
              <CardDescription>Control who can see your information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div><Label>Profile Visibility</Label><p className="text-xs text-muted-foreground">Make your profile visible to other members</p></div>
                <Switch checked={profileVisible} onCheckedChange={setProfileVisible} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div><Label>Show Phone Number</Label><p className="text-xs text-muted-foreground">Allow matched members to see your phone</p></div>
                <Switch checked={showPhone} onCheckedChange={setShowPhone} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div><Label>Show Last Seen</Label><p className="text-xs text-muted-foreground">Let others see when you were last active</p></div>
                <Switch checked={showLastSeen} onCheckedChange={setShowLastSeen} />
              </div>
            </CardContent>
          </Card>

          {/* Account */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-sans flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /> Account Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Change Password</Label>
                <Input type="password" placeholder="Current password" />
                <Input type="password" placeholder="New password" />
                <Input type="password" placeholder="Confirm new password" />
              </div>
            </CardContent>
          </Card>

          {/* Language */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-sans flex items-center gap-2"><Globe className="h-5 w-5 text-primary" /> Language & Region</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="hi">हिन्दी</SelectItem>
                    <SelectItem value="mr">मराठी</SelectItem>
                    <SelectItem value="ta">தமிழ்</SelectItem>
                    <SelectItem value="te">తెలుగు</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-destructive/30">
            <CardHeader>
              <CardTitle className="text-lg font-sans flex items-center gap-2 text-destructive"><Trash2 className="h-5 w-5" /> Danger Zone</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data. This action cannot be undone.</p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleLogout}>Deactivate Account</Button>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3 justify-end pb-8">
            <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
            <Button onClick={handleSave} className="gap-2"><Save className="h-4 w-4" /> Save Settings</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
