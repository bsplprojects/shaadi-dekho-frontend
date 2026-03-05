import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-auto">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img src={logo} alt="logo" width={170} />
          </Link>
          <p className="text-sm text-muted-foreground mb-4">
            India's most trusted matrimonial service. We combine traditional
            values with modern technology to help millions find their perfect
            life partner.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <span>support@shaadidekho.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-sm mb-3 font-sans">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/search" className="hover:text-primary transition-colors">
              Search Profiles
            </Link>
            <Link
              to="/matches"
              className="hover:text-primary transition-colors"
            >
              My Matches
            </Link>
            <Link
              to="/interests"
              className="hover:text-primary transition-colors"
            >
              Interests
            </Link>
            <Link
              to="/messages"
              className="hover:text-primary transition-colors"
            >
              Messages
            </Link>
            <Link
              to="/my-profile"
              className="hover:text-primary transition-colors"
            >
              My Profile
            </Link>
            <Link
              to="/edit-profile"
              className="hover:text-primary transition-colors"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-sm mb-3 font-sans">Support</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/help" className="hover:text-primary transition-colors">
              Help Center
            </Link>
            <Link to="/safety" className="hover:text-primary transition-colors">
              Safety Tips
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/settings"
              className="hover:text-primary transition-colors"
            >
              Settings
            </Link>
            <Link
              to="/notifications"
              className="hover:text-primary transition-colors"
            >
              Notifications
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-sm mb-3 font-sans">Legal</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
          <h4 className="font-semibold text-sm mb-3 mt-6 font-sans">Explore</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link
              to="/horoscope"
              className="hover:text-primary transition-colors"
            >
              Horoscope
            </Link>
            <Link
              to="/preferences"
              className="hover:text-primary transition-colors"
            >
              Partner Preferences
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© 2026 ShaadiDekho. All rights reserved.</span>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
