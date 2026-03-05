export interface authPayload {
  email: string;
  phone?: string;
  credential?: string;
  password: string;
}

export interface otpPayload {
  phone: string;
  otp: string;
}
