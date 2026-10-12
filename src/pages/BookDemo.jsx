import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Shield,
  Clock,
  Play,
  FileText,
  Users,
  Phone,
  Mail,
  Quote,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';

function AnimateOnScroll({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const heroTitle = 'See ImCam Hub in Action';
const heroDescription =
  'Get a personalized walkthrough of the platform. No commitment, no hard sell — just a clear look at how ImCam Hub fits your practice.';
const trustTitle = 'What to expect';
const trustDescription =
  'Over 200 immigration practices trust ImCam Hub to manage their cases, deadlines, and client relationships. This demo is a no-pressure walkthrough tailored to your firm\'s specific workflows and questions.';

const steps = [
  {
    icon: Clock,
    text: 'We confirm your preferred slot within 24 hours',
    color: 'bg-blue/10 text-blue',
  },
  {
    icon: Play,
    text: '30-minute live walkthrough with a product specialist',
    color: 'bg-indigo/10 text-indigo',
  },
  {
    icon: FileText,
    text: 'Custom quote based on your firm size and needs',
    color: 'bg-emerald/10 text-emerald',
  },
  {
    icon: Shield,
    text: 'No commitment — decide at your own pace',
    color: 'bg-purple/10 text-purple',
  },
];

const testimonialQuote =
  'We went from 3 different tools and endless email chains to one system in under a month. Our caseworkers saved 10+ hours a week within the first quarter.';
const testimonialAuthor = 'Sarah Mitchell';
const testimonialRole = 'Managing Partner, Mitchell & Associates';
const contactPhone = '+44 20 7946 0958';
const contactEmail = 'support@imcamhub.com';

export default function BookDemo() {
  usePageMeta(
    'Book a Free Demo',
    'Schedule a personalized walkthrough of ImCam Hub. See how our platform transforms immigration case management for your practice.',
    'demo'
  );

  return (
    <div>
      {/* =========================================
          HERO
          ========================================= */}
      <section className="section-padding bg-gradient-to-b from-offwhite to-sand pb-6 md:pb-10">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center px-4 py-1.5 bg-indigo-pale text-indigo text-xs font-semibold rounded-full mb-4">
              Book a Demo
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-4 leading-tight">
              {heroTitle}
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto">
              {heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          WHAT TO EXPECT + CONTACT
          ========================================= */}
      <section className="section-padding pt-0 md:pt-4">
        <div className="container-app max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-7"
          >
            {/* Trust paragraph */}
            <AnimateOnScroll>
              <div>
                <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                  {trustTitle}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {trustDescription}
                </p>
              </div>
            </AnimateOnScroll>

            {/* What happens next */}
            <AnimateOnScroll delay={0.08}>
              <div className="bg-sand/60 rounded-2xl p-6 space-y-4">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wide">
                  What happens next
                </h4>
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg ${step.color} flex items-center justify-center shrink-0`}>
                      <step.icon size={16} />
                    </div>
                    <p className="text-sm text-text-secondary pt-1">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Testimonial */}
            <AnimateOnScroll delay={0.16}>
              <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl" />
                <Quote
                  size={28}
                  className="text-indigo-light/30 absolute top-4 left-5"
                />
                <p className="text-white/80 text-sm leading-relaxed italic mb-4 pl-4 relative z-10">
                  &ldquo;{testimonialQuote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pl-4 relative z-10">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <Users size={16} className="text-white/60" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonialAuthor}
                    </p>
                    <p className="text-xs text-white/50">
                      {testimonialRole}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Contact */}
            <AnimateOnScroll delay={0.24}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <div className="flex items-center gap-1.5">
                    <Phone size={14} />
                    <span>{contactPhone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail size={14} />
                    <span>{contactEmail}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/features"
                    className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-all active:scale-[0.98]"
                  >
                    Explore Features
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center gap-2 btn-gradient-primary px-6 py-3 rounded-full text-sm font-semibold transition-all active:scale-[0.98]"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </motion.div>
        </div>
      </section>
    </div>
  );
}