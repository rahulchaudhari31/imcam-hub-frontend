import {
  LayoutDashboard,
  Users,
  CreditCard,
  FileCheck,
  ClipboardList,
  Building2,
} from 'lucide-react';
import usePageMeta from '../../hooks/usePageMeta';
import bannerImg from '../../assets/images/features/Admin_banner.jpeg';
import Hero from './sections/Hero';
import Overview from './sections/Overview';
import Dashboard from './sections/Dashboard';
import Capabilities from './sections/Capabilities';
import Faq from './sections/Faq';
import Cta from './sections/Cta';

const title = 'Admin Dashboard';
const role = 'Admin / Practice Manager';
const introImage =
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop';

const defaultFeatures = [
  {
    icon: LayoutDashboard,
    title: 'Consolidated Case Dashboard',
    description:
      'Live metrics on total cases, in-progress work, delayed cases, and completions, giving managers instant visibility across the whole consultancy.',
  },
  {
    icon: Users,
    title: 'Caseworker & Team Management',
    description:
      'Add and manage caseworkers and admin users, assign cases, and monitor individual workload without needing constant status updates.',
  },
  {
    icon: FileCheck,
    title: 'Licence & CoS Request Tracking',
    description:
      'Track pending licence reviews and CoS requests in real time, keeping Sponsor Licence obligations moving without manual chasing.',
  },
  {
    icon: ClipboardList,
    title: 'Compliance Review Oversight',
    description:
      'Monitor pending compliance reviews and CCL fee approvals in one place, keeping your consultancy audit-ready at every stage.',
  },
  {
    icon: CreditCard,
    title: 'Revenue & Reporting Analytics',
    description:
      'Generate reports and track revenue alongside caseload data, giving managers a clear view of both operational and financial performance.',
  },
  {
    icon: Building2,
    title: 'Sponsor & Visa Alerts',
    description:
      'Get automatic sponsor and visa alerts on upcoming deadlines, so nothing tied to compliance or renewals is ever missed.',
  },
];

const defaultFaqs = [
  {
    question: 'Can I control what each staff member can access?',
    answer:
      'Yes. ImCam Hub provides granular role-based access control (RBAC). You can define custom roles, restrict access by case type, office location, or client — and even limit document-level permissions for sensitive cases.',
  },
  {
    question: 'What kind of compliance reports are available?',
    answer:
      'The platform generates audit-ready reports aligned to UKVI and Home Office sponsor licence duties — including case timelines, CoS allocation, pending compliance reviews, and full audit trails — exportable as PDF or CSV.',
  },
  {
    question: 'Does multi-office support include separate billing?',
    answer:
      'Yes. Each office can have its own billing rules and rate cards while still feeding into a consolidated consultancy-wide financial dashboard.',
  },
];

export default function Admin() {
  usePageMeta(
    'Admin Portal — ImCam Hub',
    'The command centre for UK immigration consultancies: oversee cases, caseworkers, CoS requests, compliance reviews, and revenue across Skilled Worker, Sponsor Licence, ILR, and Citizenship work.',
    'features'
  );

  const features = defaultFeatures;
  const faqs = defaultFaqs;

  return (
    <div>
      <Hero
        text="Built for Managers"
        subline="From caseloads to compliance, the Admin Portal keeps your entire consultancy visible, organised, and ahead of deadlines."
        color="bg-navy"
        image={bannerImg}
      />

      <Overview
        role={role}
        heading="Everything a Manager Needs, at a Glance"
        text={[
          "The Admin Portal is the command centre of ImCam Hub's immigration practice management software, giving managers a single, consolidated view of every case, caseworker, and compliance obligation across Skilled Worker visa, Sponsor Licence, ILR, and British Citizenship work.",
          'Track total cases and revenue, monitor pending licence and CoS requests, and stay ahead of sponsor licence compliance software requirements — all from one dashboard. Purpose-built for UK immigration consultancies, it replaces scattered spreadsheets and status-check emails with real-time oversight managers can act on.',
        ]}
        image={introImage}
        imageLabel="Admin Dashboard Preview"
      />

      <Dashboard />

      <Capabilities role={role} features={features} />

      <Faq faqs={faqs} />

      <Cta title={title} />
    </div>
  );
}
