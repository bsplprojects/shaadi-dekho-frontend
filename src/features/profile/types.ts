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
  images: File[];
}
