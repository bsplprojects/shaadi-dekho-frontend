import { profilePayload } from "@/features/profile/types";
import { Clock, Eye, MapPin, Star, UserCheck, Users } from "lucide-react";

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
