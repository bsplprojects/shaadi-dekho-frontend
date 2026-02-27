import { profilePayload } from "@/features/profile/types";

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
