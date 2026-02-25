import { Separator } from "@/components/ui/separator";

const sections = [
  {
    title: "1. Information We Collect",
    content: `When you register on VivahBandhan, we collect personal information including your name, email address, phone number, date of birth, gender, photographs, religious background, educational qualifications, professional details, and partner preferences. We may also collect device information, IP addresses, and usage data to improve our services.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `Your information is used to create and manage your profile, suggest compatible matches, facilitate communication between members, process payments, send notifications, and improve our platform. We use AI-powered algorithms to provide relevant match recommendations based on your preferences.`,
  },
  {
    title: "3. Information Sharing",
    content: `Your profile information is visible to other registered members based on your privacy settings. We do not sell your personal data to third parties. We may share information with trusted service providers who assist in operating our platform, processing payments, or sending communications on our behalf.`,
  },
  {
    title: "4. Data Security",
    content: `We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your personal information. However, no method of electronic transmission is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "5. Your Rights",
    content: `You have the right to access, update, or delete your personal information at any time through your account settings. You can control your profile visibility, manage notification preferences, and request a complete copy of your data. You may also request account deletion, which will permanently remove your data from our systems within 30 days.`,
  },
  {
    title: "6. Cookies & Tracking",
    content: `We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze site traffic. You can manage cookie preferences through your browser settings. Disabling cookies may limit certain features of the platform.`,
  },
  {
    title: "7. Third-Party Services",
    content: `Our platform may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We recommend reviewing their privacy policies before providing any personal information.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Significant changes will be communicated via email or in-app notifications. Continued use of the platform after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "9. Contact Us",
    content: `If you have questions about this Privacy Policy, please contact us at privacy@vivahbandhan.com or call +91 1800-123-4567.`,
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-[calc(100vh-4rem)] py-12 page-pattern page-dots relative">
    <div className="container max-w-3xl relative z-10">
      <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground mb-2">Last updated: February 25, 2026</p>
      <Separator className="mb-8" />

      <p className="text-sm text-muted-foreground mb-8">
        At VivahBandhan, we are committed to protecting the privacy and security of our members. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our matrimonial platform.
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

export default PrivacyPolicy;
