import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-auto">
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <span className="text-lg font-display font-bold">
              Vivah<span className="text-primary">Bandhan</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Find your perfect life partner with India's trusted matrimonial service.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3 font-sans">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/search" className="hover:text-primary transition-colors">Search</Link>
            <Link to="/matches" className="hover:text-primary transition-colors">Matches</Link>
            <Link to="/interests" className="hover:text-primary transition-colors">Interests</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3 font-sans">Support</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/help" className="hover:text-primary transition-colors">Help Center</Link>
            <Link to="/safety" className="hover:text-primary transition-colors">Safety Tips</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3 font-sans">Legal</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
        © 2026 VivahBandhan. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
