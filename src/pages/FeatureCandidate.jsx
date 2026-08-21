import {
  Activity,
  Upload,
  ClipboardList,
  LayoutDashboard,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import FeaturePageTemplate from '../components/FeaturePageTemplate';
import bannerImg from '../assets/images/Client banner.png';
import introImg from '../assets/images/Client dashboard .png';
import caseworkerImg from '../assets/images/features/Caseworker_image.jpg';

const features = [
  {
    icon: Activity,
    title: 'Live Application Tracking',
    description:
      'See your current stage and percentage complete at a glance, from initial enquiry through to final decision.',
  },
  {
    icon: ClipboardList,
    title: 'Clear Next Steps',
    description:
      'Know exactly what\'s needed from you and when your caseworker is handling a step, with no guesswork involved.',
  },
  {
    icon: Upload,
    title: 'Document Upload & Checklist',
    description:
      'Upload required documents directly and track what\'s been received versus outstanding, without emailing files back and forth.',
  },
  {
    icon: LayoutDashboard,
    title: 'Key Case Details at a Glance',
    description:
      'View your visa type, case reference, workflow step, and next deadline, all in one simple dashboard view.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Messaging with Your Caseworker',
    description:
      'Message your caseworker directly within the portal, keeping every conversation tied to your case instead of scattered emails.',
  },
  {
    icon: Sparkles,
    title: 'AI-Assisted Document Checks',
    description:
      'AI reviews your uploaded documents for missing pages or expired dates, flagging issues early so your case isn\'t delayed.',
  },
];

const faqs = [
  {
    question: 'Is the client portal mobile-friendly?',
    answer:
      'Yes. The Client Portal is fully responsive and works on any device — phone, tablet, or desktop. You can upload documents, check your case status, and message your caseworker from anywhere.',
  },
  {
    question: 'Can other applicants see my information?',
    answer:
      'No. Each client only sees their own case data. The portal is fully isolated — there is no way for one applicant to access another\'s information, documents, or communications.',
  },
  {
    question: 'How do the AI document checks work?',
    answer:
      'When you upload a document, AI reviews it for missing pages or expired dates and flags any issues immediately — so you can fix them before they delay your case.',
  },
];

export default function FeatureCandidate() {
  usePageMeta(
    'Client Portal — ImCam Hub',
    'A self-service portal for individual UK visa applicants: track your Skilled Worker, ILR, or British Citizenship case, upload documents, and message your caseworker in real time.'
  );

  return (
    <FeaturePageTemplate
      title="Client Portal"
      roleName="Individual Applicant"
      bannerText="Built for Applicants"
      bannerSubline="Everything you need to follow your case."
      bannerColor="bg-navy"
      introHeading="One Portal to Track Your Entire Visa Application"
      introText={[
        'The Client Portal gives individual applicants a clear, live view of their UK visa case — whether it\'s a Skilled Worker visa, ILR, or British Citizenship application — without needing to call or email for updates.',
        'See exactly which stage your case is at, what\'s needed from you, and what your caseworker is handling next. Built as part of ImCam Hub\'s UK immigration case management software, it replaces uncertainty and status-check emails with straightforward, real-time visibility.',
      ]}
      introImageLabel="Client Portal Preview"
      bannerImage={bannerImg}
      introImage={introImg}
      middleImage={caseworkerImg}
      middleBadge="Client Portal"
      middleHeading="Follow your application, step by step"
      middleParagraphs={[
        'Waiting to hear back about a UK visa application is stressful enough without chasing updates by phone or email. The Client Portal gives you a live view of your case — from first enquiry through to final decision.',
        'Log in anytime to see where your application stands, what your caseworker is handling next, and what\'s needed from you — with everything tied to your Skilled Worker, ILR, or British Citizenship case.',
      ]}
      middlePoints={[
        'See your current stage and percentage complete at a glance.',
        'Track received versus outstanding documents with clear checklists.',
        'Message your caseworker directly — no email chains or phone tag.',
      ]}
      features={features}
      faqs={faqs}
    />
  );
}
