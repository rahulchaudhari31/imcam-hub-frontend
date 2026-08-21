import {
  ClipboardList,
  FileCheck,
  Clock,
  Workflow,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import FeaturePageTemplate from '../components/FeaturePageTemplate';
import caseworkerImg from '../assets/images/features/Caseworker_image.jpg';
import bannerImg from '../assets/images/features/Caseworker_banner.jpeg';
import introImg from '../assets/images/features/Caseworker_dashboard.png';

const features = [
  {
    icon: ClipboardList,
    title: 'Assigned Case Dashboard',
    description:
      'A clear view of every case assigned to you, showing current status and stage across Skilled Worker, Sponsor Licence, ILR, and Citizenship work.',
  },
  {
    icon: Clock,
    title: 'AI-Powered Delay Alerts',
    description:
      'AI predicts potential case delays based on progress and history, alerting you early enough to act before deadlines are at risk.',
  },
  {
    icon: FileCheck,
    title: 'Document Review & Management',
    description:
      'Review and manage uploaded client documents against checklists, flagging what\'s missing or outstanding without chasing clients manually.',
  },
  {
    icon: Workflow,
    title: 'Case Workflow Progression',
    description:
      'Move each case through its stages — enquiry, application, compliance, completion — with clear next steps at every point.',
  },
  {
    icon: MessageSquare,
    title: 'Client Communication Hub',
    description:
      'Message clients directly within the portal, keeping every conversation tied to the relevant case instead of scattered across email.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Licence Support',
    description:
      'Access licence requests, CoS details, and compliance notes relevant to your cases, keeping your work audit-ready at every stage.',
  },
];

const faqs = [
  {
    question: 'How does the document checklist automation work?',
    answer:
      'When a caseworker starts a new case, the system automatically generates a checklist based on the case type (e.g., Skilled Worker, Sponsor Licence, ILR, British Citizenship) and the current stage. Checklists update dynamically as the case progresses.',
  },
  {
    question: 'Can I customize my workflow templates?',
    answer:
      'Absolutely. You can create, edit, and version workflows to match how your consultancy works, pulling in case-specific data automatically. Every step is clear before a case moves forward.',
  },
  {
    question: 'Does workload balancing work across offices?',
    answer:
      'Yes. If your consultancy has multiple offices, the workload view can be scoped to a single location or show a firm-wide view. Cases can be reassigned across offices with appropriate permission controls.',
  },
];

export default function FeatureCaseworker() {
  usePageMeta(
    'Caseworker Portal — ImCam Hub',
    'A focused workspace for UK immigration caseworkers: manage assigned Skilled Worker, Sponsor Licence, ILR, and Citizenship cases, documents, and deadlines in one place.'
  );

  return (
    <FeaturePageTemplate
      title="Caseworker Portal"
      roleName="Caseworker"
      bannerText="Built for Caseworkers"
      bannerSubline="Everything you need for a case — one platform."
      bannerColor="bg-navy"
      introHeading="Manage Every Assigned Case, Task, and Deadline in One Place"
      introText={[
        'The Caseworker Portal is where day-to-day case management software for UK immigration teams actually happens — giving caseworkers a clear, focused view of every case assigned to them, from Skilled Worker visa applications to Sponsor Licence, ILR, and British Citizenship work.',
        'Track assigned tasks and deadlines, manage documents and client communication, and move each case through its workflow without losing time to scattered emails or spreadsheets. Purpose-built for UK immigration consultancies, it gives caseworkers exactly what they need to focus on cases, not admin.',
      ]}
      introImageLabel="Caseworker Portal Preview"
      introReverse
      bannerImage={bannerImg}
      introImage={introImg}
      middleImage={caseworkerImg}
      features={features}
      faqs={faqs}
    />
  );
}
