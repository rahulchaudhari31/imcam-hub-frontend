import { useState, useEffect } from 'react';
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
import { fetchFeaturePage, fetchFaqItems, resolveCmsAsset } from '../services/cmsService';
import resolveFeatureIcon from '../services/featureIcons';
import bannerImg from '../assets/images/Candidate banner .jpeg';
import introImg from '../assets/images/Candidate dashboard.png';

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

const defaultFaqs = [
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
    'Sponsor Business — ImCam Hub',
    'UK sponsor licence management for businesses: track licence status, CoS allocation, sponsored workers, and compliance obligations in one live portal.'
  );

  const [page, setPage] = useState(null);
  const [faqs, setFaqs] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const [cmsPage, cmsFaqs] = await Promise.all([
        fetchFeaturePage('client'),
        fetchFaqItems('client'),
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
      title="Sponsor Business"
      roleName={page?.role_name || 'Sponsoring Business'}
      bannerText={page?.banner_text || 'Built for Sponsoring Businesses'}
      bannerSubline={
        page?.banner_subline || 'UK Sponsor Licence software for growing businesses.'
      }
      bannerColor={page?.banner_color || 'bg-navy'}
      introHeading={
        page?.intro_heading || 'UK Sponsor Licence Management Software, Built for Businesses'
      }
      introText={
        page?.intro_text || [
          'The Business Portal gives sponsoring businesses a live, consolidated view of their sponsor licence, sponsored workers, and compliance obligations, without relying on spreadsheets or chasing updates from an immigration consultancy.',
          'See your licence status, available CoS allocation, and upcoming renewal deadlines at a glance, alongside every sponsored worker\'s case progress. Built as part of ImCam Hub\'s UK immigration case management software, it keeps sponsor licence compliance straightforward, transparent, and audit-ready at every stage.',
        ]
      }
      introImageLabel={page?.intro_image_label || 'Business Portal Preview'}
      introReverse={page?.intro_reverse ?? true}
      bannerImage={resolveCmsAsset(page?.banner_image) || bannerImg}
      introImage={resolveCmsAsset(page?.intro_image) || introImg}
      middleImage={resolveCmsAsset(page?.middle_image)}
      middleBadge={page?.middle_badge}
      middleHeading={page?.middle_heading}
      middleParagraphs={page?.middle_paragraphs}
      middlePoints={page?.middle_points}
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