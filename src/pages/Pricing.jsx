import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';
import {
  ArrowRight,
  CheckCircle2,
  Minus,
  Users,
  Sparkles,
  TrendingUp,
  FolderKanban,
  ShieldCheck,
  FileText,
  LifeBuoy,
  Building2,
  Laptop,
} from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import { fetchPricing, fetchFaqItems } from '../services/cmsService';
import pricingImg from '../assets/images/features/Pricing photo.png';

const featuresStandard = [
  {
    title: 'Case & Workflow Management',
    icon: FolderKanban,
    items: [
      'Full case lifecycle tracking — Enquiries → Application → Compliance → Completion',
      'Pipeline view of all cases at every stage',
      'Calendar with deadlines, appointments, and key dates',
      'Unassigned case tracking so nothing slips through',
    ],
  },
  {
    title: 'Team & People Management',
    icon: Users,
    items: [
      'Add and manage unlimited caseworkers',
      'Manage client and sponsor records in one directory',
      'Admin user roles and permissions',
    ],
  },
  {
    title: 'Licensing & Compliance',
    icon: ShieldCheck,
    items: [
      'Licence request tracking',
      'CoS (Certificate of Sponsorship) request management',
      'Compliance review workflows',
      'CCL fee approval tracking',
      'Real-time visa and sponsor alerts',
    ],
  },
  {
    title: 'Documents & Communication',
    icon: FileText,
    items: [
      'Centralised document storage per case',
      'In-platform messaging with clients and team',
      'Notifications and announcements',
    ],
  },
  {
    title: 'Finance & Reporting',
    icon: TrendingUp,
    items: [
      'Revenue tracking',
      'Downloadable reports',
      'Consolidated dashboard with live case metrics — total cases, in progress, delayed, completed',
    ],
  },
  {
    title: 'Support',
    icon: LifeBuoy,
    items: ['Standard email/chat support'],
  },
];

const featuresPortal = [
  {
    title: 'Client Portal',
    icon: Laptop,
    items: [
      'Dedicated dashboard for clients',
      'Step-by-step application tracking',
      'Clear caseworker ownership indicators',
      'Key case details at a glance',
      'In-portal forms and document upload',
      'Client care letter access',
      'Built-in messaging and support',
    ],
  },
  {
    title: 'Business Portal',
    icon: Building2,
    items: [
      'Licence status at a glance',
      'Active worker and CoS tracking',
      'Pending and overdue case alerts',
      'Automatic compliance reminders',
      'Full sponsored worker records',
      'Key personnel and employee records',
      'Built-in compliance tracking tools',
      'Invoicing, payments, and messaging',
    ],
  },
];

const plans = [
  {
    id: 'standard',
    name: 'Subscription Plan',
    tagline: 'Customised',
    price: 49,
    currency: 'GBP',
    interval: 'month',
    popular: false,
    features: featuresStandard,
    cta: 'Book a Demo',
    checkColor: 'text-blue',
    ctaClass: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  },
  {
    id: 'pro',
    name: 'Subscription Plan',
    tagline: 'For big companies',
    price: 69,
    currency: 'GBP',
    interval: 'month',
    popular: true,
    everythingPlus: true,
    features: featuresPortal,
    cta: 'Book a Demo',
    checkColor: 'text-blue',
    ctaClass: 'btn-gradient-primary',
  },
];

const comparisonFeatures = [
  { label: 'Active cases', standard: 'Up to 100', pro: 'Unlimited' },
  { label: 'Caseworker accounts', standard: '5', pro: 'Unlimited' },
  { label: 'Client portal', standard: true, pro: true },
  { label: 'Client portal', standard: true, pro: true },
  { label: 'Document checklist automation', standard: true, pro: true },
  { label: 'Deadline tracking & alerts', standard: true, pro: true },
  { label: 'Compliance reports', standard: 'Standard', pro: 'Advanced + Custom' },
  { label: 'Smart Chat (client-facing)', standard: false, pro: true },
  { label: 'Email drafting', standard: false, pro: true },
  { label: 'Contract generation', standard: false, pro: true },
  { label: 'Templates library', standard: false, pro: true },
  { label: 'Speech-to-text notes', standard: false, pro: true },
  { label: 'Text-to-speech summaries', standard: false, pro: true },
  { label: 'Firm Feed activity stream', standard: false, pro: true },
  { label: 'Multi-office management', standard: false, pro: true },
  { label: 'Analytics & reporting', standard: 'Basic dashboard', pro: 'Advanced + Exports' },
  { label: 'API access', standard: false, pro: true },
  { label: 'Custom integrations', standard: false, pro: true },
  { label: 'Support', standard: 'Email', pro: 'Priority email + phone' },
  { label: 'Onboarding', standard: 'Self-serve', pro: 'Guided setup' },
];

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes. Both Standard and Pro plans come with a 14-day free trial — no credit card required. You get full access to every feature in your chosen plan so you can evaluate it with real cases before committing.',
  },
  {
    question: 'What happens when I reach my case limit on Standard?',
    answer:
      'You\'ll receive a notification when you\'re within 10 cases of your limit. You can upgrade to Pro at any time, and the transition is seamless — all your existing cases, documents, and data carry over instantly.',
  },
  {
    question: 'Can I switch between monthly and annual billing?',
    answer:
      'Absolutely. You can switch at any time from your account settings. When switching from monthly to annual, you\'ll receive a prorated credit for the remainder of your current billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, Amex), ACH bank transfers, and wire transfers for annual plans. All payments are processed securely through Stripe.',
  },
  {
    question: 'Do you offer discounts for non-profits or legal aid organizations?',
    answer:
      'Yes. We offer a 25% discount for registered non-profit organizations and legal aid societies. Contact our sales team with proof of your organization\'s status to get started.',
  },
  {
    question: 'Can I cancel at any time?',
    answer:
      'Yes. There are no long-term contracts or cancellation fees. You can cancel from your account settings at any time. Your access continues through the end of your current billing period, and your data is exportable for 30 days after cancellation.',
  },
];

function parseComparisonValue(value) {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value || '';
}

function renderCell(value) {
  if (value === true) {
    return <CheckCircle2 size={18} className="text-blue mx-auto" />;
  }
  if (value === false) {
    return <Minus size={16} className="text-text-muted/40 mx-auto" />;
  }
  return <span className="text-text-secondary text-xs">{value}</span>;
}

export default function Pricing() {
  usePageMeta(
    'Pricing — ImCam Hub',
    'Simple, transparent pricing for immigration practices of every size. Choose the Subscription Plan that fits your firm — £49/month for small agencies, £69/month with client and business portals.',
    'pricing'
  );

  const [hoveredRow, setHoveredRow] = useState(null);
  const [cmsPlans, setCmsPlans] = useState(null);
  const [cmsComparison, setCmsComparison] = useState(null);
  const [cmsFaqs, setCmsFaqs] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const [pricing, faqs] = await Promise.all([
        fetchPricing(),
        fetchFaqItems('pricing'),
      ]);
      if (!mounted) return;
      if (pricing) {
        if (pricing.plans?.length) setCmsPlans(pricing.plans);
        if (pricing.comparison?.length) setCmsComparison(pricing.comparison);
      }
      if (faqs && faqs.length > 0) {
        setCmsFaqs(faqs.map((f) => ({ question: f.question, answer: f.answer })));
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const displayPlans = cmsPlans
    ? plans.map((plan) => {
        const cms = cmsPlans.find(
          (p) => p.name.toLowerCase() === plan.name.toLowerCase()
        );
        if (!cms) return plan;
        return {
          ...plan,
          price: cms.monthly_price ?? plan.price,
          tagline: cms.description || plan.tagline,
          popular: cms.popular ?? plan.popular,
          cta: cms.cta_text || plan.cta,
          ctaClass: cms.cta_class || plan.ctaClass,
        };
      })
    : plans;

  const displayComparison = cmsComparison
    ? cmsComparison
        .slice()
        .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
        .map((row) => ({
          label: row.label,
          standard: parseComparisonValue(row.standard_value),
          pro: parseComparisonValue(row.pro_value),
        }))
    : comparisonFeatures;

  const displayFaqs = cmsFaqs || faqs;

  return (
    <div>
      {/* =========================================
          HERO
          ========================================= */}
      <section className="section-padding bg-gradient-to-b from-offwhite to-sand overflow-hidden">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="text-left">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-pale text-blue text-xs font-semibold rounded-full mb-5"
              >
                <Sparkles size={12} />
                Pricing
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-5 leading-tight"
              >
                Simple, Transparent{' '}
                <span className="relative inline-block">
                  Pricing
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-blue to-blue-light rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  />
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-text-secondary max-w-xl mb-6"
              >
                Start with a free trial. Scale as you grow. No hidden fees, no
                long-term contracts.
              </motion.p>
            </div>

            {/* Right: Interactive Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-3xl overflow-hidden border-2 border-sand-dark shadow-[0_8px_30px_rgba(11,31,58,0.1)]"
              >
                <img
                  src={pricingImg}
                  alt="ImCam Hub pricing plans"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
              {/* Floating price badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgba(11,31,58,0.12)] border border-sand-dark"
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-pale flex items-center justify-center">
                    <TrendingUp size={18} className="text-blue" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">Starting from</div>
                    <div className="text-lg font-bold text-navy">£49<span className="text-xs font-normal text-text-muted">/month</span></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          PRICING CARDS
          ========================================= */}
      <section className="section-padding pb-0">
        <div className="container-app">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {displayPlans.map((plan, i) => (
              <div
                key={plan.id || i}
                className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-white border-2 border-blue shadow-[0_8px_40px_rgba(37,99,235,0.15)] hover:shadow-[0_12px_50px_rgba(37,99,235,0.25)]'
                    : 'bg-white border-2 border-navy/15 shadow-[0_4px_20px_rgba(11,31,58,0.06)] hover:shadow-[0_8px_30px_rgba(11,31,58,0.1)]'
                }`}
              >
                {/* Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1.5 bg-blue text-white text-[11px] font-bold rounded-full tracking-wide shadow-md">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-sm text-text-muted font-medium">£</span>
                    <span className="text-5xl font-bold text-navy tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm text-text-muted font-medium">/month</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                {/* Everything in Standard banner */}
                {plan.everythingPlus && (
                  <div className="flex items-center gap-2 mb-5 px-4 py-2.5 rounded-xl bg-blue-pale text-blue text-xs font-semibold">
                    <Sparkles size={14} />
                    Everything in Standard Plan, plus:
                  </div>
                )}

                {/* Features */}
                <div className="space-y-6 mb-8 flex-1">
                  {plan.features.map((group) => (
                    <div key={group.title}>
                      <div className="flex items-center gap-2 mb-2.5">
                        <group.icon
                          size={15}
                          className="text-blue flex-shrink-0"
                        />
                        <span className="text-[11px] font-bold tracking-widest text-navy uppercase">
                          {group.title}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2
                              size={15}
                              className={`flex-shrink-0 mt-0.5 ${plan.checkColor}`}
                            />
                            <span className="text-text-secondary">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {plan.cta === 'Contact Sales' ? (
                  <a
                    href="mailto:support@imcamhub.com"
                    className={`flex items-center justify-center gap-2 w-full ${plan.ctaClass} px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98]`}
                  >
                    {plan.cta} <ArrowRight size={16} />
                  </a>
                ) : (
                  <Link
                    to="/book-demo"
                    className={`flex items-center justify-center gap-2 w-full ${plan.ctaClass} px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98]`}
                  >
                    {plan.cta} <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          COMPARISON TABLE
          ========================================= */}
      <section className="section-padding">
        <div className="container-app">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Full Feature <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A detailed look at what&apos;s included in every plan.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-sand-dark overflow-hidden shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[540px]">
                <thead>
                  <tr className="bg-sand/70">
                    <th className="text-left py-3 px-4 sm:py-4 sm:px-6 font-semibold text-navy w-[50%] sticky top-0 bg-sand/70 backdrop-blur-sm z-10">
                      Feature
                    </th>
                    <th className="text-center py-3 px-4 sm:py-4 sm:px-6 font-semibold text-navy w-[25%] sticky top-0 bg-sand/70 backdrop-blur-sm z-10">
                      Standard
                    </th>
                    <th className="text-center py-3 px-4 sm:py-4 sm:px-6 font-semibold text-navy w-[25%] sticky top-0 bg-sand/70 backdrop-blur-sm z-10">
                      <span className="text-blue">Pro</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayComparison.map((row, i) => (
                    <tr
                      key={i}
                      onMouseEnter={() => setHoveredRow(i)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`border-t border-sand-dark transition-colors duration-150 ${
                        hoveredRow === i
                          ? 'bg-blue/[0.04]'
                          : i % 2 === 0
                          ? 'bg-white'
                          : 'bg-sand/30'
                      }`}
                    >
                      <td className="py-3 px-4 sm:py-3.5 sm:px-6 text-text-secondary">
                        {row.label}
                      </td>
                      <td className="py-3 px-4 sm:py-3.5 sm:px-6 text-center">
                        {renderCell(row.standard)}
                      </td>
                      <td className="py-3 px-4 sm:py-3.5 sm:px-6 text-center">
                        {renderCell(row.pro)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FAQ
          ========================================= */}
      <section className="section-padding bg-sand">
        <div className="container-app max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy">
              Billing <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-sand-dark p-5 md:p-8">
            <FAQAccordion items={displayFaqs} />
          </div>
        </div>
      </section>

      {/* =========================================
          CLOSING CTA
          ========================================= */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=800&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 container-app text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to see ImCam Hub <span className="text-blue-lighter">in action</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Start your 14-day free trial or book a walkthrough with our
            team — whichever works best for you.
          </p>
          <Link
            to="/book-demo"
            className="inline-flex items-center justify-center gap-2 btn-gradient-primary px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
          >
            Book a Free Demo <ArrowRight size={16} sm:size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
