import { useState, useEffect } from 'react';
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
import { fetchFeaturePage, fetchFaqItems, resolveCmsAsset } from '../services/cmsService';
import resolveFeatureIcon from '../services/featureIcons';
import bannerImg from '../assets/images/Client banner.png';
import introImg from '../assets/images/Client dashboard .png';
import caseworkerImg from '../assets/images/features/Caseworker_image.jpg';

const defaultFeatures = [
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

const defaultFaqs = [
  {
    question: 'Is the candidate portal mobile-friendly?',
    answer:
      'Yes. The Candidate Portal is fully responsive and works on any device — phone, tablet, or desktop. You can upload documents, check your case status, and message your caseworker from anywhere.',
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
    'Candidate Portal — ImCam Hub',
    'A self-service portal for individual UK visa applicants: track your Skilled Worker, ILR, or British Citizenship case, upload documents, and message your caseworker in real time.',
    'features'
  );

  const [page, setPage] = useState(null);
  const [faqs, setFaqs] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const [cmsPage, cmsFaqs] = await Promise.all([
        fetchFeaturePage('candidate'),
        fetchFaqItems('candidate'),
      ]);
      if (!mounted) return;
      if (cmsPage) setPage(cmsPage);
      if (cmsFaqs && cmsFaqs.length > 0) {
        setFaqs(cmsFaqs.map((f) => ({ question: f.question, answer: f.answer })));
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <FeaturePageTemplate
      title="Candidate Portal"
      roleName={page?.role_name || 'Individual Applicant'}
      bannerText={page?.banner_text || 'Built for Applicants'}
      bannerSubline={page?.banner_subline || 'Everything you need to follow your case.'}
      bannerColor={page?.banner_color || 'bg-navy'}
      introHeading={page?.intro_heading || 'One Portal to Track Your Entire Visa Application'}
      introText={
        page?.intro_text || [
          'The Candidate Portal gives individual applicants a clear, live view of their UK visa case — whether it\'s a Skilled Worker visa, ILR, or British Citizenship application — without needing to call or email for updates.',
          'See exactly which stage your case is at, what\'s needed from you, and what your caseworker is handling next. Built as part of ImCam Hub\'s UK immigration case management software, it replaces uncertainty and status-check emails with straightforward, real-time visibility.',
        ]
      }
      introImageLabel={page?.intro_image_label || 'Candidate Portal Preview'}
      introReverse={page?.intro_reverse}
      bannerImage={resolveCmsAsset(page?.banner_image) || bannerImg}
      introImage={resolveCmsAsset(page?.intro_image) || introImg}
      middleImage={resolveCmsAsset(page?.middle_image) || caseworkerImg}
      middleBadge={page?.middle_badge || 'Candidate Portal'}
      middleHeading={page?.middle_heading || 'Follow your application, step by step'}
      middleParagraphs={
        page?.middle_paragraphs || [
          'Waiting to hear back about a UK visa application is stressful enough without chasing updates by phone or email. The Candidate Portal gives you a live view of your case — from first enquiry through to final decision.',
          'Log in anytime to see where your application stands, what your caseworker is handling next, and what\'s needed from you — with everything tied to your Skilled Worker, ILR, or British Citizenship case.',
        ]
      }
      middlePoints={
        page?.middle_points || [
          'See your current stage and percentage complete at a glance.',
          'Track received versus outstanding documents with clear checklists.',
          'Message your caseworker directly — no email chains or phone tag.',
        ]
      }
      features={
        page?.features?.length
          ? page.features
              .slice()
              .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
              .map((f) => ({
                icon: resolveFeatureIcon(f.icon),
                title: f.title,
                description: f.description,
              }))
          : defaultFeatures
      }
      faqs={faqs || defaultFaqs}
    />
  );
}