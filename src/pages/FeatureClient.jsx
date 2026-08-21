import {
  LayoutDashboard,
  ShieldCheck,
  BarChart3,
  UserCheck,
  Bell,
  Sparkles,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import FeaturePageTemplate from '../components/FeaturePageTemplate';
import bannerImg from '../assets/images/features/Client_banner.png';
import introImg from '../assets/images/features/Client_dashboard_.png';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Licence Status at a Glance',
    description:
      'See your sponsor licence status, licence number, and expiry date instantly, with no need to track renewal dates manually.',
  },
  {
    icon: BarChart3,
    title: 'CoS Allocation Tracking',
    description:
      'Monitor available and used Certificate of Sponsorship allocation, so you always know your capacity for new sponsored workers.',
  },
  {
    icon: UserCheck,
    title: 'Sponsored Worker Records',
    description:
      'View every sponsored worker\'s visa type, case reference, job title, and status in one organised, easy-to-navigate table.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Reporting Obligations',
    description:
      'Track compliance documents, reporting obligations, and right-to-work checks, keeping your business audit-ready at every stage.',
  },
  {
    icon: Bell,
    title: 'Automatic Compliance Alerts',
    description:
      'Get automatic reminders on licence expiry, pending reviews, and overdue cases, so nothing critical is ever missed.',
  },
  {
    icon: Sparkles,
    title: 'AI-Flagged Compliance Risks',
    description:
      'AI reviews your licence and worker data for compliance risks and flags them early, before they become UKVI-facing problems.',
  },
];

const faqs = [
  {
    question: 'Can we see the status of every sponsored worker in one place?',
    answer:
      'Yes. The Business Portal tracks your sponsor licence, Certificate of Sponsorship allocation, and every sponsored worker\'s visa type, case reference, and status in one unified view — with compliance alerts specific to UKVI reporting duties.',
  },
  {
    question: 'How do document uploads work for our business?',
    answer:
      'From the Business Portal, you can upload documents directly against worker records. Each file is validated (format, size, expiry), automatically routed to the correct case, and the assigned caseworker is notified. You\'ll see a real-time status for each uploaded document.',
  },
  {
    question: 'Can different departments see different sets of workers?',
    answer:
      'Yes. Role-based access can be configured to scope visibility by department, office location, or cost centre. A department lead, for example, would only see workers sponsored by their department.',
  },
];

export default function FeatureClient() {
  usePageMeta(
    'Business/Sponsor Portal — ImCam Hub',
    'UK sponsor licence management for businesses: track licence status, CoS allocation, sponsored workers, and compliance obligations in one live portal.'
  );

  return (
    <FeaturePageTemplate
      title="Business/Sponsor Portal"
      roleName="Sponsoring Business"
      bannerText="Built for Sponsoring Businesses"
      bannerSubline="UK Sponsor Licence software for growing businesses."
      bannerColor="bg-navy"
      introHeading="UK Sponsor Licence Management Software, Built for Businesses"
      introText={[
        'The Business Portal gives sponsoring businesses a live, consolidated view of their sponsor licence, sponsored workers, and compliance obligations — without relying on spreadsheets or chasing updates from an immigration consultancy.',
        'See licence status, CoS allocation, worker records, and upcoming deadlines at a glance, with AI flagging compliance risks before they become UKVI-facing problems.',
      ]}
      introImageLabel="Business Portal Preview"
      introReverse
      bannerImage={bannerImg}
      introImage={introImg}
      features={features}
      faqs={faqs}
    />
  );
}
