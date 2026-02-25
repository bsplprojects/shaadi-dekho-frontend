import { Separator } from "@/components/ui/separator";

const sections = [
  {
    title: "1. Eligibility",
    content: `You must be at least 18 years of age (21 for males in India as per law) to register on VivahBandhan. By creating an account, you confirm that you are legally eligible for marriage and that all information provided is accurate and truthful.`,
  },
  {
    title: "2. Account Registration",
    content: `You agree to provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility. Notify us immediately of any unauthorized access.`,
  },
  {
    title: "3. Acceptable Use",
    content: `You agree to use VivahBandhan solely for the purpose of finding a life partner. You must not use the platform for commercial purposes, harassment, fraud, or any illegal activity. Sharing false information, uploading inappropriate content, or impersonating another person is strictly prohibited.`,
  },
  {
    title: "4. Profile Content",
    content: `You retain ownership of content you upload. By posting content, you grant VivahBandhan a non-exclusive license to display it on the platform. We reserve the right to remove any content that violates our guidelines without prior notice.`,
  },
  {
    title: "5. Membership & Payments",
    content: `Free accounts have limited features. Paid memberships unlock premium features as described on our pricing page. All payments are non-refundable unless otherwise stated. Membership auto-renewal can be managed in your account settings. Prices are subject to change with prior notice.`,
  },
  {
    title: "6. Privacy",
    content: `Your use of VivahBandhan is also governed by our Privacy Policy. By using our services, you consent to the collection and use of your information as described in the Privacy Policy.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `VivahBandhan serves as a platform to connect individuals seeking marriage. We do not guarantee the accuracy of user profiles, the behavior of members, or the success of any relationship. We are not liable for any damages arising from your interactions with other members.`,
  },
  {
    title: "8. Termination",
    content: `We reserve the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or conduct that we deem harmful to other members or the platform. You may also delete your account at any time through Settings.`,
  },
  {
    title: "9. Dispute Resolution",
    content: `Any disputes arising from the use of VivahBandhan shall be governed by the laws of India. Disputes will be resolved through arbitration in Gurugram, Haryana, under the Arbitration and Conciliation Act, 1996.`,
  },
  {
    title: "10. Changes to Terms",
    content: `We may modify these Terms of Service at any time. Changes take effect upon posting. Continued use of the platform after changes constitutes acceptance. We will notify users of significant changes via email.`,
  },
];

const TermsOfService = () => (
  <div className="min-h-[calc(100vh-4rem)] py-12 page-pattern page-dots relative">
    <div className="container max-w-3xl relative z-10">
      <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Terms of Service</h1>
      <p className="text-muted-foreground mb-2">Last updated: February 25, 2026</p>
      <Separator className="mb-8" />

      <p className="text-sm text-muted-foreground mb-8">
        Welcome to VivahBandhan. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-lg font-semibold font-sans mb-2">{s.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TermsOfService;
