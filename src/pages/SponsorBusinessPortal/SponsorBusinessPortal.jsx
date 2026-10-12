import {
  LayoutDashboard,
  ShieldCheck,
  BarChart3,
  UserCheck,
  Bell,
  Sparkles,
} from 'lucide-react';
import usePageMeta from '../../hooks/usePageMeta';
import bannerImg from '../../assets/images/Candidate banner .jpeg';
import introImg from '../../assets/images/Candidate dashboard.png';
import Hero from './sections/Hero';
import Overview from './sections/Overview';
import Dashboard from './sections/Dashboard';
import Capabilities from './sections/Capabilities';
import Faq from './sections/Faq';
import Cta from './sections/Cta';

const title = 'Sponsor/Business Portal';
const role = 'Sponsoring Business';

const defaultFeatures = [
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
      "View every sponsored worker's visa type, case reference, job title, and status in one organised, easy-to-navigate table.",
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

const defaultFaqs = [
  {
    question: 'Can we see the status of every sponsored worker in one place?',
    answer:
      "Yes. The Business Portal tracks your sponsor licence, Certificate of Sponsorship allocation, and every sponsored worker's visa type, case reference, and status in one unified view — with compliance alerts specific to UKVI reporting duties.",
  },
  {
    question: 'How do document uploads work for our business?',
    answer:
      "From the Business Portal, you can upload documents directly against worker records. Each file is validated (format, size, expiry), automatically routed to the correct case, and the assigned caseworker is notified. You'll see a real-time status for each uploaded document.",
  },
  {
    question: 'Can different departments see different sets of workers?',
    answer:
      'Yes. Role-based access can be configured to scope visibility by department, office location, or cost centre. A department lead, for example, would only see workers sponsored by their department.',
  },
];

export default function SponsorBusinessPortal() {
  usePageMeta(
    'Sponsor/Business Portal — ImCam Hub',
    'UK sponsor licence management for businesses: track licence status, CoS allocation, sponsored workers, and compliance obligations in one live portal.',
    'features'
  );

  const features = defaultFeatures;
  const faqs = defaultFaqs;

  return (
    <div>
      <Hero
        text="Built for Sponsoring Businesses"
        subline="UK Sponsor Licence software for growing businesses."
        color="bg-navy"
        image={bannerImg}
      />

      <Overview
        role={role}
        heading="UK Sponsor Licence Management Software, Built for Businesses"
        text={[
          "The Business Portal gives sponsoring businesses a live, consolidated view of their sponsor licence, sponsored workers, and compliance obligations, without relying on spreadsheets or chasing updates from an immigration consultancy.",
          "See your licence status, available CoS allocation, and upcoming renewal deadlines at a glance, alongside every sponsored worker's case progress. Built as part of ImCam Hub's UK immigration case management software, it keeps sponsor licence compliance straightforward, transparent, and audit-ready at every stage.",
        ]}
        image={introImg}
        imageLabel="Business Portal Preview"
        reverse
      />

      <Dashboard />

      <Capabilities role={role} features={features} />

      <Faq faqs={faqs} />

      <Cta title={title} />
    </div>
  );
}
