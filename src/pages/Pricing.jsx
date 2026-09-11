import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';
import {
  ArrowRight,
  CheckCircle2,
  Minus,
  Star,
  Users,
  Sparkles,
  Shield,
  TrendingUp,
} from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import pricingImg from '../assets/images/features/Pricing photo.png';

const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect for small agencies',
    price: 49,
    currency: 'GBP',
    interval: 'month',
    popular: false,
    totalModules: 51,
    includedModules: 44,
    moduleCategories: {
      ADMIN: [
        'Dashboard',
        'Cases',
        'Candidates',
        'Caseworkers',
        'Businesses',
        'Finance',
        'Reports',
        'Pipeline',
        'Documents',
        'Calendar',
        'Messages',
        'Permissions',
        'Settings',
        'Licence Requests',
        'Enquiries',
      ],
      CASEWORKER: [
        'Dashboard',
        'Cases',
        'Pipeline',
        'Tasks',
        'Calendar',
        'Documents',
        'Clients',
        'Messages',
        'Licence Reviews',
      ],
      CANDIDATE: [
        'Dashboard',
        'Application',
        'Documents',
        'Payments',
        'Messages',
        'Appointments',
        'Calendar',
        'Application Status',
        'My Account',
      ],
      BUSINESS: [
        'Dashboard',
        'Profile',
        'Licence',
        'Compliance',
        'Workers',
        'Documents',
        'Messages',
        'Payment',
        'Calendar',
        'Reporting Obligations',
        'Settings',
      ],
    },
    cta: 'Start Free Trial',
    checkColor: 'text-blue',
    ctaClass: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  },
  {
    name: 'Professional',
    tagline: 'For growing businesses',
    price: 69,
    currency: 'GBP',
    interval: 'month',
    popular: true,
    totalModules: 51,
    includedModules: 51,
    moduleCategories: {
      ADMIN: [
        'Dashboard',
        'Cases',
        'Candidates',
        'Caseworkers',
        'Businesses',
        'Finance',
        'Reports',
        'Pipeline',
        'Workload',
        'Documents',
        'Calendar',
        'Messages',
        'Escalations',
        'Audit Logs',
        'Permissions',
        'Settings',
        'Licence Requests',
        'Enquiries',
        'Assign',
        'Departments',
      ],
      CASEWORKER: [
        'Dashboard',
        'Cases',
        'Pipeline',
        'Tasks',
        'Calendar',
        'Documents',
        'Clients',
        'Messages',
        'Performance',
        'Finance',
        'Licence Reviews',
      ],
      CANDIDATE: [
        'Dashboard',
        'Application',
        'Documents',
        'Payments',
        'Messages',
        'Appointments',
        'Calendar',
        'Application Status',
        'My Account',
      ],
      BUSINESS: [
        'Dashboard',
        'Profile',
        'Licence',
        'Compliance',
        'Workers',
        'Documents',
        'Messages',
        'Payment',
        'Calendar',
        'Reporting Obligations',
        'Settings',
      ],
    },
    cta: 'Book a Demo',
    checkColor: 'text-blue',
    ctaClass: 'btn-gradient-primary',
  },
  {
    name: 'Enterprise',
    tagline: 'Full power for large organisations',
    price: 249,
    currency: 'GBP',
    interval: 'month',
    popular: false,
    totalModules: 51,
    includedModules: 51,
    moduleCategories: {
      ADMIN: [
        'Dashboard',
        'Cases',
        'Candidates',
        'Caseworkers',
        'Businesses',
        'Finance',
        'Reports',
        'Pipeline',
        'Workload',
        'Documents',
        'Calendar',
        'Messages',
        'Escalations',
        'Audit Logs',
        'Permissions',
        'Settings',
        'Licence Requests',
        'Enquiries',
        'Assign',
        'Departments',
      ],
      CASEWORKER: [
        'Dashboard',
        'Cases',
        'Pipeline',
        'Tasks',
        'Calendar',
        'Documents',
        'Clients',
        'Messages',
        'Performance',
        'Finance',
        'Licence Reviews',
      ],
      CANDIDATE: [
        'Dashboard',
        'Application',
        'Documents',
        'Payments',
        'Messages',
        'Appointments',
        'Calendar',
        'Application Status',
        'My Account',
      ],
      BUSINESS: [
        'Dashboard',
        'Profile',
        'Licence',
        'Compliance',
        'Workers',
        'Documents',
        'Messages',
        'Payment',
        'Calendar',
        'Reporting Obligations',
        'Settings',
      ],
    },
    cta: 'Contact Sales',
    checkColor: 'text-blue',
    ctaClass: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  },
];

const VISIBLE_MODULES = 6;

const categoryStyles = {
  ADMIN: 'bg-blue-pale text-blue',
  CASEWORKER: 'bg-purple-pale text-purple',
  CANDIDATE: 'bg-emerald-pale text-emerald',
  BUSINESS: 'bg-amber/10 text-amber',
};

const comparisonFeatures = [
  { label: 'Active cases', standard: 'Up to 100', pro: 'Unlimited' },
  { label: 'Caseworker accounts', standard: '5', pro: 'Unlimited' },
  { label: 'Candidate portal', standard: true, pro: true },
  { label: 'Client portal', standard: true, pro: true },
  { label: 'Document checklist automation', standard: true, pro: true },
  { label: 'Deadline tracking & alerts', standard: true, pro: true },
  { label: 'Compliance reports', standard: 'Standard', pro: 'Advanced + Custom' },
  { label: 'Smart Chat (candidate-facing)', standard: false, pro: true },
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

function renderCell(value) {
  if (value === true) {
    return <CheckCircle2 size={18} className="text-blue mx-auto" />;
  }
  if (value === false) {
    return <Minus size={16} className="text-text-muted/40 mx-auto" />;
  }
  return <span className="text-text-secondary text-xs">{value}</span>;
}

function AnimatedCounter({ target, suffix = '', prefix = '', duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const end = target;
    const stepTime = (duration * 1000) / end;
    const minStep = 16;
    const steps = Math.ceil((duration * 1000) / Math.max(stepTime, minStep));
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, Math.max(stepTime, minStep));
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Pricing() {
  usePageMeta(
    'Pricing — ImCam Hub',
    'Simple, transparent pricing for immigration practices of every size. Compare Starter, Professional and Enterprise plans.'
  );

  const [hoveredRow, setHoveredRow] = useState(null);

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

              {/* Trust strip */}
              <div className="flex flex-wrap items-center gap-4">
                {[
                  { icon: Star, label: '4.9/5', sublabel: 'on G2', color: 'text-amber', bg: 'bg-amber/10', value: 4.9, suffix: '/5', isDecimal: true },
                  { icon: Users, label: '200+', sublabel: 'firms trust us', color: 'text-blue', bg: 'bg-blue-pale', value: 200, suffix: '+' },
                  { icon: Shield, label: '14', sublabel: 'day free trial', color: 'text-blue', bg: 'bg-blue-soft', value: 14, suffix: '-day' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl ${item.bg} border border-white/60 shadow-sm cursor-default select-none`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center`}>
                      <item.icon size={16} className={item.color} />
                    </div>
                    <div>
                      <div className={`text-sm font-bold ${item.color}`}>
                        {item.isDecimal ? (
                          <AnimatedCounter target={4.9} suffix="/5" duration={1.2} />
                        ) : (
                          <AnimatedCounter target={item.value} suffix={item.suffix} duration={1.2} />
                        )}
                      </div>
                      <div className="text-[10px] text-text-muted leading-none">{item.sublabel}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const modules = Object.entries(plan.moduleCategories).flatMap(
                ([cat, list]) => list.map((name) => ({ cat, name }))
              );
              const visibleModules = modules.slice(0, VISIBLE_MODULES);
              const moreCount = plan.includedModules - visibleModules.length;

              return (
                <div
                  key={plan.name}
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

                  {/* Modules */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-text-muted uppercase">
                      Modules ({plan.totalModules})
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 bg-blue-pale text-blue text-[10px] font-bold rounded-full tracking-wide">
                      {plan.includedModules} included
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {visibleModules.map((mod) => (
                      <li
                        key={`${mod.cat}-${mod.name}`}
                        className="flex items-center gap-2.5 text-sm"
                      >
                        <CheckCircle2
                          size={16}
                          className={`flex-shrink-0 ${plan.checkColor}`}
                        />
                        <span className="text-text-secondary">{mod.name}</span>
                        <span
                          className={`ml-auto flex-shrink-0 px-1.5 py-0.5 rounded-md text-[9px] font-bold tracking-wide uppercase ${categoryStyles[mod.cat]}`}
                        >
                          {mod.cat}
                        </span>
                      </li>
                    ))}
                    {moreCount > 0 && (
                      <li className="flex items-center gap-2.5 text-sm">
                        <CheckCircle2
                          size={16}
                          className={`flex-shrink-0 ${plan.checkColor}`}
                        />
                        <span className="font-semibold text-text-secondary">
                          +{moreCount} more
                        </span>
                      </li>
                    )}
                  </ul>

                  {/* CTA */}
                  {plan.cta === 'Contact Sales' ? (
                    <a
                      href="mailto:hello@incamhub.com"
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
              );
            })}
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
                  {comparisonFeatures.map((row, i) => (
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
            <FAQAccordion items={faqs} />
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
