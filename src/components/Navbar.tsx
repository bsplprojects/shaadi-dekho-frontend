import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Heart,
  Bell,
  Menu,
  X,
  Home,
  Users,
  Search,
  MessageSquare,
  Sparkles,
  SlidersHorizontal,
  Star,
  Settings,
  User,
  Phone,
  LogOut,
  CircleUserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useLogout } from "@/features/auth/hook";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", path: "/", icon: Home, isAuth: true },
  // { label: "Pricing", path: "#pricing", icon: IndianRupee },
  { label: "Contact Us", path: "/contact", icon: Phone, isAuth: true },
  { label: "Matches", path: "/matches", icon: Users, isAuth: true },
  { label: "Search", path: "/search", icon: Search, isAuth: true },
  { label: "Interests", path: "/interests", icon: Sparkles, isAuth: true },
  { label: "Messages", path: "/messages", icon: MessageSquare, isAuth: true },
];

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();
  const logout = useLogout();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" width={170} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return link.isAuth && !isAuthenticated ? null : (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  location.pathname === link.path
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => navigate("/notifications")}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                  3
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-9 w-9 rounded-full"
                  >
                    <Avatar className="h-9 w-9 border-2 border-primary/20">
                      <AvatarFallback className="bg-accent text-accent-foreground font-semibold text-sm">
                        <CircleUserRound />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => navigate("/my-profile")}
                    className="gap-2"
                  >
                    <User className="h-4 w-4" /> My Profile
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={() => navigate("/edit-preferences")}
                    className="gap-2"
                  >
                    <SlidersHorizontal className="h-4 w-4" /> Partner
                    Preferences
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => navigate("/horoscope")}
                    className="gap-2"
                  >
                    <Star className="h-4 w-4" /> Horoscope
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => navigate("/notifications")}
                    className="gap-2"
                  >
                    <Bell className="h-4 w-4" /> Notifications
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => navigate("/settings")}
                    className="gap-2"
                  >
                    <Settings className="h-4 w-4" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => logout.mutate()}
                    className="text-destructive gap-2"
                  >
                    <LogOut className="h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                onClick={() => navigate("/auth?mode=login")}
              >
                Login
              </Button>
              <Button onClick={() => navigate("/auth?mode=signup")}>
                Sign Up Free
              </Button>
            </div>
          )}

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 ${
                    location.pathname === link.path
                      ? "text-primary bg-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
            {!isAuthenticated && (
              <div className="flex gap-2 pt-3 border-t border-border mt-2">
                <Button
                  variant="ghost"
                  className="flex-1"
                  onClick={() => {
                    navigate("/auth?mode=login");
                    setMobileOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => {
                    navigate("/auth?mode=signup");
                    setMobileOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
