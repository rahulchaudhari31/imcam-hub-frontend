import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Users,
  CreditCard,
  FileCheck,
  ClipboardList,
  Building2,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import FeaturePageTemplate from '../components/FeaturePageTemplate';
import { fetchFeaturePage, fetchFaqItems, resolveCmsAsset } from '../services/cmsService';
import resolveFeatureIcon from '../services/featureIcons';
import bannerImg from '../assets/images/features/Admin_banner.jpeg';
import introImg from '../assets/images/features/Admin_dashboard.png';

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

export default function FeatureAdmin() {
  usePageMeta(
    'Admin Portal — ImCam Hub',
    'The command centre for UK immigration consultancies: oversee cases, caseworkers, CoS requests, compliance reviews, and revenue across Skilled Worker, Sponsor Licence, ILR, and Citizenship work.',
    'features'
  );

  const [page, setPage] = useState(null);
  const [faqs, setFaqs] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const [cmsPage, cmsFaqs] = await Promise.all([
        fetchFeaturePage('admin'),
        fetchFaqItems('admin'),
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
      title="Admin Dashboard"
      roleName={page?.role_name || 'Admin / Practice Manager'}
      bannerText={page?.banner_text || 'Built for Managers'}
      bannerSubline={
        page?.banner_subline ||
        'From caseloads to compliance, the Admin Portal keeps your entire consultancy visible, organised, and ahead of deadlines.'
      }
      bannerColor={page?.banner_color || 'bg-navy'}
      introHeading={page?.intro_heading || 'Everything a Manager Needs, at a Glance'}
      introText={
        page?.intro_text || [
          'The Admin Portal is the command centre of ImCam Hub\'s immigration practice management software, giving managers a single, consolidated view of every case, caseworker, and compliance obligation across Skilled Worker visa, Sponsor Licence, ILR, and British Citizenship work.',
          'Track total cases and revenue, monitor pending licence and CoS requests, and stay ahead of sponsor licence compliance software requirements — all from one dashboard. Purpose-built for UK immigration consultancies, it replaces scattered spreadsheets and status-check emails with real-time oversight managers can act on.',
        ]
      }
      introImageLabel={page?.intro_image_label || 'Admin Dashboard Preview'}
      introReverse={page?.intro_reverse}
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