import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';
import {
  ArrowRight,
  Database,
  PieChart,
  MessageSquare,
  LayoutDashboard,
  FolderOpen,
  Clock,
  Users,
  ShieldAlert,
  Link2,
  Bot,
  BarChart3,
  Building2,
} from 'lucide-react';
import { fetchServices, fetchSolutions } from '../services/cmsService';

function AnimateOnScroll({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const challenges = [
  {
    icon: FolderOpen,
    title: 'Manual Case Tracking',
    description:
      'Spreadsheets, shared drives, and sticky notes create a fragmented view of your caseload — making it impossible to see which matters are on track and which are at risk.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    color: 'bg-rose/10 text-rose',
  },
  {
    icon: Clock,
    title: 'Missed Deadlines',
    description:
      'Filing windows, interview dates, and renewal deadlines are tracked in emails and calendars with no automated safety net — one missed date can mean a rejected application.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop',
    color: 'bg-orange/10 text-orange',
  },
  {
    icon: Users,
    title: 'Fragmented Client Communication',
    description:
      'Requests, documents, and updates are scattered across email threads, phone calls, and messaging apps — caseworkers waste hours reconstructing conversation history.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
    color: 'bg-pink/10 text-pink',
  },
  {
    icon: ShieldAlert,
    title: 'Compliance Risk',
    description:
      'Regulatory requirements change frequently and vary by jurisdiction. Without automated checks, firms risk filing errors, data breaches, and audit failures.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    color: 'bg-red-500/10 text-red-500',
  },
];

const solutions = [
  {
    icon: Database,
    title: 'Document Vault',
    description:
      'Securely store, organise, and retrieve every case document in one centralised repository — a core part of ImCam Hub\'s UK immigration case management software.',
    color: 'bg-indigo/15 text-indigo-light',
  },
  {
    icon: LayoutDashboard,
    title: 'Case Pipeline View',
    description:
      'A visual pipeline showing every case\'s stage across your caseload, giving immigration practice management software the visibility to spot bottlenecks instantly.',
    color: 'bg-blue/15 text-blue-light',
  },
  {
    icon: MessageSquare,
    title: 'Client Portal',
    description:
      'Give individual clients an immigration client portal software experience to track application progress, upload documents, and message their caseworker — reducing back-and-forth.',
    color: 'bg-purple/15 text-purple-light',
  },
  {
    icon: Building2,
    title: 'Business/Sponsor Portal',
    description:
      'Sponsor licence management software built for businesses, giving live visibility into licence status, sponsored workers, and CoS allocation without manual chasing.',
    color: 'bg-emerald/15 text-emerald-light',
  },
  {
    icon: PieChart,
    title: 'Reporting & Analytics',
    description:
      'Real-time dashboards on caseload, revenue, and team performance, turning your visa case tracking system into a source of actionable insight.',
    color: 'bg-cyan/15 text-cyan-light',
  },
  {
    icon: Users,
    title: 'Caseworker & Task Assignment',
    description:
      'Assign cases and tasks to caseworkers and monitor workload from one dashboard — immigration software built for how consultancy teams actually work.',
    color: 'bg-orange/15 text-orange-light',
  },
  {
    icon: ShieldAlert,
    title: 'Role-Based Access & Security',
    description:
      'Every user sees only what\'s relevant to them, backed by the audit-ready, compliance-first security expected from immigration case management software.',
    color: 'bg-pink/15 text-pink-light',
  },
  {
    icon: Bot,
    title: 'AI-Powered Case Intelligence',
    description:
      'AI auto-checks documents for missing or expired items, flags sponsor licence compliance risks, and predicts case delays before problems arise.',
    color: 'bg-indigo/15 text-indigo-light',
  },
];

const steps = [
  {
    number: '01',
    title: 'Register',
    description:
      'Register your consultancy, add your caseworkers, and set up your admin account. Managers get full oversight from day one, with role-based access configured automatically.',
    icon: Link2,
    color: 'bg-blue/10 text-blue',
  },
  {
    number: '02',
    title: 'Onboard Cases & Clients',
    description:
      'Add candidates or sponsoring businesses and start their case journey — Skilled Worker, Sponsor Licence, ILR, or Citizenship — with pre-built workflows ready to go, no manual setup required.',
    icon: Users,
    color: 'bg-indigo/10 text-indigo',
  },
  {
    number: '03',
    title: 'Manage & Track',
    description:
      'Assign caseworkers, track every case through its stages, and let AI flag missing documents, compliance risks, and delays — while clients and businesses follow their own progress in real time.',
    icon: BarChart3,
    color: 'bg-emerald/10 text-emerald',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Solutions() {
  usePageMeta(
    'Solutions — ImCam Hub',
    'Document vault, case pipelines, client and sponsor portals, reporting, and AI-powered case intelligence — built for UK immigration consultancies.',
    'solutions'
  );
  const [cmsServices, setCmsServices] = useState(null);
  const [cmsSections, setCmsSections] = useState(null);

  useEffect(() => {
    const loadServices = async () => {
      const [services, sections] = await Promise.all([
        fetchServices(),
        fetchSolutions(),
      ]);
      if (services && services.length > 0) {
        setCmsServices(
          services.map((service, index) => ({
            ...solutions[index % solutions.length],
            title: service.title,
            description: service.description,
          }))
        );
      }
      if (sections && sections.length > 0) {
        setCmsSections(
          sections.reduce((acc, section) => {
            acc[section.section_key] = section;
            return acc;
          }, {})
        );
      }
    };
    loadServices();
  }, []);

  const displaySolutions = cmsServices || solutions;
  const sections = cmsSections || {};

  const heroSection = sections.hero;
  const statsSection = sections.stats;
  const challengesSection = sections.challenges;
  const solutionsSection = sections.solutions;
  const howSection = sections.how_it_works;
  const ctaSection = sections.cta;

  const heroBadge = heroSection?.content?.badge || 'The Problem';
  const heroTitle =
    heroSection?.title ||
    'The Challenges UK Immigration Consultancies Face';
  const heroDescription =
    heroSection?.description ||
    'Complex regulations. Tight deadlines. High client expectations. Lean teams. Fragmented tools. ImCam Hub was built to solve every one of these challenges for UK immigration consultancies.';
  const heroStats = statsSection?.content?.items?.length
    ? statsSection.content.items
    : [
        { value: '73%', label: 'of firms use spreadsheets', color: 'text-rose' },
        { value: '40%', label: 'cases miss deadlines', color: 'text-orange' },
        { value: '6hrs', label: 'wasted daily on admin', color: 'text-amber' },
      ];
  const challengesHeading = challengesSection?.title || 'Sound Familiar?';
  const challengesSub =
    challengesSection?.description ||
    'These are the daily realities UK immigration teams face without a unified system.';
  const displayChallenges = challengesSection?.content?.items?.length
    ? challengesSection.content.items.map((item, i) => ({
        ...challenges[i % challenges.length],
        title: item.title,
        description: item.description,
      }))
    : challenges;
  const solutionsHeading = solutionsSection?.title || 'Our Solutions';
  const solutionsSub =
    solutionsSection?.description ||
    'Eight powerful capabilities that eliminate manual work, reduce risk, and keep your caseload moving automatically.';
  const howHeading = howSection?.title || 'How It Works';
  const howSub =
    howSection?.description || 'Three steps from sign-up to a fully connected immigration practice.';
  const displaySteps = howSection?.content?.steps?.length
    ? howSection.content.steps.map((step, i) => ({
        ...steps[i % steps.length],
        number: step.number,
        title: step.title,
        description: step.description,
      }))
    : steps;
  const ctaTitle = ctaSection?.title || 'Ready to see ImCam Hub in action?';
  const ctaDescription =
    ctaSection?.description ||
    'Join UK immigration consultancies that have transformed their workflow with ImCam Hub. Schedule a personalized demo today.';

  return (
    <div>
      {/* =========================================
          1. HERO — Enhanced
          ========================================= */}
      <section className="relative section-padding overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=600&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-indigo/80" />
        {/* Decorative glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 container-app">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
                <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">{heroBadge}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-[1.1]">
              {heroSection?.title ? (
                heroTitle
              ) : (
                <>
                  The Challenges UK Immigration{' '}
                  <br className="hidden sm:block" />
                  Consultancies <span className="gradient-text-cyan">Face</span>
                </>
              )}
            </h1>

            {heroSection?.description ? (
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
                {heroDescription}
              </p>
            ) : (
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
                Complex regulations. Tight deadlines. High client expectations.
                Lean teams. Fragmented tools. ImCam Hub was built to solve{' '}
                <span className="text-white font-medium">every one</span> of these
                challenges for UK immigration consultancies.
              </p>
            )}

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
            >
              {heroStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs text-white/50 font-medium tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. CHALLENGES — Problem Cards
          ========================================= */}
      <section className="section-padding bg-white border-y border-sand-dark">
        <div className="container-app">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              {challengesHeading}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {challengesSub}
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayChallenges.map((challenge, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div className="bg-[#F8F5F3] rounded-2xl border border-[#E8E2DC] overflow-hidden h-full group">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-2xl ${challenge.color} flex items-center justify-center mb-4`}>
                      <challenge.icon size={24} />
                    </div>
                    <h3 className="text-base font-heading font-semibold text-[#4A3B3B] mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-[#7A6B6B] leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          3. OUR SOLUTIONS — 8 Tiles
          ========================================= */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-indigo/20 to-purple/10 pointer-events-none" />
        <div className="container-app relative z-10">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {solutionsSection?.title ? (
                <>{solutionsHeading}</>
              ) : (
                <>
                  Our <span className="gradient-text-cyan">Solutions</span>
                </>
              )}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {solutionsSub}
            </p>
          </AnimateOnScroll>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {displaySolutions.map((sol, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 rounded-2xl p-6 cursor-default transition-colors group"
              >
                <div className={`w-12 h-12 rounded-2xl ${sol.color} flex items-center justify-center mb-4 transition-colors`}>
                  <sol.icon size={24} />
                </div>
                <h3 className="text-base font-heading font-semibold text-white mb-2">
                  {sol.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {sol.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          4. HOW IT WORKS — 3-Step Process
          ========================================= */}
      <section className="section-padding bg-white">
        <div className="container-app">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              {howSection?.title ? (
                <>{howHeading}</>
              ) : (
                <>
                  How It <span className="gradient-text">Works</span>
                </>
              )}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {howSub}
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-[52px] left-[20%] right-[20%] h-[2px]">
              <div className="w-full h-full bg-sand-dark relative">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-gradient-to-r from-blue via-indigo to-emerald origin-left"
                />
              </div>
            </div>

            {displaySteps.map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 0.15}>
                <div className="text-center relative">
                  {/* Step circle */}
                  <div className="w-[104px] h-[104px] rounded-full bg-sand border-4 border-white mx-auto mb-6 flex items-center justify-center relative z-10 shadow-[0_2px_12px_rgba(11,31,58,0.06)]">
                    <div className="text-center">
                      <step.icon size={28} className="text-navy mx-auto mb-1" />
                      <span className="text-[11px] font-bold text-text-muted tracking-widest">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Arrow between steps (mobile) */}
                  {i < displaySteps.length - 1 && (
                    <div className="md:hidden flex justify-center -my-2 relative z-10">
                      <div className="w-[2px] h-8 bg-sand-dark">
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.2 }}
                          className="w-full h-full bg-gradient-to-b from-blue to-indigo origin-top"
                        />
                      </div>
                    </div>
                  )}

                  <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          5. CLOSING CTA
          ========================================= */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&h=800&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 container-app text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {ctaSection?.title ? (
                <>{ctaTitle}</>
              ) : (
                <>
                  Ready to see ImCam Hub <span className="text-cyan-light">in action</span>?
                </>
              )}
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              {ctaDescription}
            </p>
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center gap-2 btn-gradient-primary px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
            >
              Book a Free Demo <ArrowRight size={18} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
