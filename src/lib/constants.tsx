import { profilePayload } from "@/features/profile/types";
import {
  Clock,
  Eye,
  Heart,
  MapPin,
  MessageCircle,
  Search,
  Shield,
  Star,
  UserCheck,
  Users,
} from "lucide-react";

import couple1 from "../assets/couple1.png";
import couple2 from "../assets/couple2.png";
import couple3 from "../assets/couple3.png";
import couple4 from "../assets/couple4.png";
import couple5 from "../assets/couple5.png";
import couple6 from "../assets/couple6.png";

export const steps = [
  "Basic Details",
  "Professional",
  "Education",
  "Religion & Community",
  "Lifestyle & About",
  "Location",
  "Family",
  "Profile Picture",
];

export const heights = [
  "4'6\"",
  "4'8\"",
  "4'10\"",
  "5'0\"",
  "5'2\"",
  "5'4\"",
  "5'6\"",
  "5'8\"",
  "5'10\"",
  "6'0\"",
  "6'2\"",
  "6'4\"",
];

export const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export const degrees = [
  "High School",
  "Diploma",
  "Bachelor's",
  "Master's",
  "PhD",
  "Professional Degree",
];

export const occupations = [
  "Software Engineer",
  "Doctor",
  "Business Owner",
  "Teacher",
  "Government Employee",
  "Lawyer",
  "Accountant",
  "Others",
];

export const salaries = [
  "Below 3 Lakh",
  "3-5 Lakh",
  "5-10 Lakh",
  "10-20 Lakh",
  "20-50 Lakh",
  "50 Lakh - 1 Crore",
  "1 Crore+",
];

export const religions = [
  "Hindu",
  "Muslim",
  "Christian",
  "Sikh",
  "Jain",
  "Buddhist",
  "Parsi",
  "Others",
];

export const employmentSectors = [
  { value: "private", label: "Private Sector" },
  { value: "public", label: "Public / Government" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "engineering", label: "Engineering & Technical" },
  { value: "manufacturing", label: "Manufacturing & Industrial" },
  { value: "business", label: "Business / Self-Employed" },
  { value: "accounting", label: "Accounting / Legal" },
  { value: "transports", label: "Transport & Logistics" },
  { value: "construction", label: "Construction & Real Estate" },
  { value: "media", label: "Creative & Media" },
  { value: "retail", label: "Retail & Hospitality" },
  { value: "agriculture", label: "Agriculture & Allied" },
  { value: "security", label: "Security & Services" },
  { value: "others", label: "Others" },
];

export const languages = [
  "Hindi",
  "Marathi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Bengali",
  "Gujarati",
  "Punjabi",
  "Malayalam",
  "Urdu",
  "Others",
];

export const STEP_FIELDS: Record<
  number,
  Array<keyof profilePayload | string>
> = {
  0: [
    "basicDetails.profileFor",
    "basicDetails.gender",
    "basicDetails.name",
    "basicDetails.dob",
    "basicDetails.age",
  ],
  1: ["professional.employment", "professional.company", "professional.income"],
  2: ["education.highestQualification", "education.college"],
  3: ["religion.religion", "religion.caste", "religion.community"],
  4: [
    "lifestyle.food",
    "lifestyle.drinking",
    "lifestyle.smoking",
    "lifestyle.about",
  ],
  5: ["location.country", "location.state", "location.city"],
  6: ["family.fatherOccupation", "family.motherOccupation"],
  7: ["images"],
};

export const SECTION_FIELD_MAP = {
  "Basic Details": [
    "basicDetails.profileFor",
    "basicDetails.name",
    "basicDetails.dob",
    "basicDetails.gender",
    "basicDetails.bodyType",
    "basicDetails.age",
    "basicDetails.physicalStatus",
    "basicDetails.maritalStatus",
  ],

  "Education & Career": [
    "professional.education",
    "professional.educationDetail",
    "professional.college",
    "professional.employmentSector",
    "professional.occupation",
    "professional.organization",
  ],

  "Family Details": [
    "family.fatherName",
    "family.motherName",
    "family.familyType",
  ],

  Horoscope: [
    "horoscope.tob",
    "horoscope.pob",
    "horoscope.star",
    "horoscope.raasi",
    "horoscope.manglik",
  ],

  "Photo Upload": ["images"],

  Hobbies: ["hobbies"],
  Interests: ["interests"],
};

export const nakshatras = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashira",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishta",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati",
];

export const rashis = [
  "Mesha (Aries)",
  "Vrishabha (Taurus)",
  "Mithuna (Gemini)",
  "Karka (Cancer)",
  "Simha (Leo)",
  "Kanya (Virgo)",
  "Tula (Libra)",
  "Vrishchika (Scorpio)",
  "Dhanu (Sagittarius)",
  "Makara (Capricorn)",
  "Kumbha (Aquarius)",
  "Meena (Pisces)",
];

export const sidebarSections = [
  {
    title: "All Matches",
    items: [
      {
        label: "Your Matches",
        description: "View all the profiles that match your preferences",
        icon: Users,
      },
    ],
  },
  {
    title: "Based on activity",
    items: [
      {
        label: "Shortlisted by you",
        description: "Matches you have shortlisted",
        icon: Star,
      },
      {
        label: "Viewed you",
        description: "Matches who have viewed your profile",
        icon: Eye,
      },
      {
        label: "Shortlisted you",
        description: "Matches who have shortlisted your profile",
        icon: UserCheck,
      },
      {
        label: "Viewed by you",
        description: "Matches you have viewed",
        icon: Eye,
      },
    ],
  },
  {
    title: "Recently joined & nearby matches",
    items: [
      {
        label: "Recently joined",
        description: "New profiles that match your preferences",
        icon: Clock,
      },
      {
        label: "Nearby matches",
        description: "Matches near your location",
        icon: MapPin,
      },
    ],
  },
];

export const quickFilters = [
  "Newly joined",
  "Not seen",
  "Profiles with photo",
  "Profiles with horoscope",
];

export const hobbies = [
  "Reading",
  "Cooking",
  "Traveling",
  "Yoga",
  "Dancing",
  "Painting",
  "Gardening",
  "Photography",
  "Swimming",
  "Cycling",
  "Hiking",
  "Gaming",
  "Singing",
  "Writing",
  "Crafting",
  "Fishing",
  "Meditation",
  "Running",
];

export const interests = [
  "Technology",
  "Finance",
  "Healthcare",
  "Art",
  "Music",
  "Sports",
  "Fashion",
  "Science",
  "Politics",
  "Fitness",
  "Travel",
  "Food",
  "Movies",
  "Spirituality",
  "Nature",
  "Startups",
  "Education",
  "History",
];

export const features = [
  {
    icon: Shield,
    title: "Verified Profiles",
    desc: "100% verified profiles with ID and photo verification for safety.",
  },
  {
    icon: Search,
    title: "Smart Matchmaking",
    desc: "AI-powered matching based on preferences, horoscope & lifestyle.",
  },
  {
    icon: Users,
    title: "Large Community",
    desc: "Millions of active profiles across all communities and regions.",
  },
  {
    icon: Star,
    title: "Premium Experience",
    desc: "Dedicated relationship managers and priority customer support.",
  },
  {
    icon: MessageCircle,
    title: "Secure Messaging",
    desc: "End-to-end encrypted chat to connect with your matches privately.",
  },
  {
    icon: Heart,
    title: "Success Stories",
    desc: "Thousands of happy couples found their soulmate through us.",
  },
];

export const stats = [
  { value: "5M+", label: "Registered Users" },
  { value: "1.2M+", label: "Happy Marriages" },
  { value: "50+", label: "Communities" },
  { value: "99%", label: "Profile Verification" },
];

export const successStories = [
  {
    names: "Rahul & Priya",
    date: "March 15, 2025",
    location: "Mumbai",
    img: couple1,
  },
  {
    names: "Harkirat & Sneha",
    date: "January 8, 2025",
    location: "Delhi",
    img: couple2,
  },
  {
    names: "Arjun & Kavya",
    date: "November 22, 2024",
    location: "Bangalore",
    img: couple3,
  },
  {
    names: "Amit & Neha",
    date: "September 5, 2024",
    location: "Pune",
    img: couple4,
  },
  {
    names: "Sanjay & Divya",
    date: "July 12, 2024",
    location: "Chennai",
    img: couple5,
  },
  {
    names: "Kunal & Ritu",
    date: "May 30, 2024",
    location: "Hyderabad",
    img: couple6,
  },
];

export const faqs = [
  {
    q: "How does ShaadiDekho verify profiles?",
    a: "Every profile goes through a multi-step verification process including ID verification, phone number verification, and photo screening. Our team manually reviews flagged profiles to ensure authenticity and safety for all members.",
  },
  {
    q: "Is it free to create a profile?",
    a: "Yes! Creating a profile on ShaadiDekho is completely free. You can browse profiles, set preferences, and receive match recommendations at no cost. Premium plans unlock additional features like direct messaging and advanced filters.",
  },
  {
    q: "How does the matchmaking algorithm work?",
    a: "Our AI-powered algorithm considers over 30 parameters including community preferences, education, lifestyle, location, and horoscope compatibility. The more complete your profile, the better your matches will be.",
  },
  {
    q: "Can I hide my profile temporarily?",
    a: "Absolutely. You can deactivate your profile anytime from Settings. Your data stays safe, and you can reactivate whenever you're ready to resume your search.",
  },
  {
    q: "What is the Assisted Service?",
    a: "Our Assisted Service pairs you with a dedicated Relationship Manager who hand-picks matches, coordinates communication, and guides you through the entire process — saving you time and effort.",
  },
  {
    q: "How do I upgrade to a premium plan?",
    a: "Navigate to the pricing section or your account settings and choose from our Gold or Diamond plans. Payment is secure and you can cancel or change plans anytime.",
  },
];
