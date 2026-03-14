export interface profilePayload {
  basicDetails: {
    profileFor: string;
    name: string;
    gender: string;
    age: number;
    maritalStatus: string;
    physicalStatus: string;
    dob: string;
    height: string;
    weight: string;
    motherTongue: string;
  };

  professional: {
    education: string;
    educationDetail: string;
    college: string;
    employmentSector: string;
    occupation: string;
    occupationDetail: string;
    organization: string;
    annualIncome: string;
    workingCity: string;
  };
  religion: {
    religion: string;
    caste: string;
    subCaste: string;
  };
  lifestyle: {
    diet: string;
    smokingHabits: string;
    drinkingHabits: string;
    description: string;
  };
  location: {
    country: string;
    state: string;
    city: string;
    citizenship: string;
    ancestralOrigin: string;
  };
  family: {
    fatherName: string;
    fatherOccupation: string;
    motherName: string;
    motherOccupation: string;
    familyType: string;
    familyValues: string;
    familyLocation: string;
    brothers: number;
    sisters: number;
    about: string;
    status: string;
  };
  horoscope?: {
    tob: string;
    pob: string;
    rashi: string;
    nakshatra: string;
    gotra: string;
    notes: string;
    manglik: string;
  };
  images: File[];
  hobbies?: string[];
  interests?: string[];
}

export interface HoroscopePayload {
  tob: string;
  pob: string;
  rashi: string;
  nakshatra: string;
  gotra: string;
  notes: string;
  manglik: string;
}

export interface PreferencePayload {
  ageRange:{
    min:number,
    max:number,
  };
  heightRange:{
    min:string,
    max:string,
  };
  maritalStatus:string;
  bodyType:string;
  religion:string;
  caste:string;
  motherTongue:string;
  minimumEducation:string;
  preferOccupation:string;
  minimumAnnualIncome:string;
  preferedLocation:string;
  diet:string;
  smoking:string
}
