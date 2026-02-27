import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import Matches from "./pages/Matches";
import SearchPage from "./pages/Search";
import Interests from "./pages/Interests";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Preferences from "./pages/Preferences";
import EditProfile from "./pages/EditProfile";
import EditPreferences from "./pages/EditPreferences";
import Horoscope from "./pages/Horoscope";
import Settings from "./pages/Settings";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import HelpCenter from "./pages/HelpCenter";
import SafetyTips from "./pages/SafetyTips";
import VerifyEmail from "./pages/VerifyEmail";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/preferences" element={<Preferences />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/edit-preferences" element={<EditPreferences />} />
                <Route path="/horoscope" element={<Horoscope />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/safety" element={<SafetyTips />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
