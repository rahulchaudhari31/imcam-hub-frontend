import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import FAQAccordion from './FAQAccordion';

const featureColors = [
  'bg-blue/10 text-blue',
  'bg-indigo/10 text-indigo',
  'bg-purple/10 text-purple',
  'bg-emerald/10 text-emerald',
  'bg-cyan/10 text-cyan',
  'bg-orange/10 text-orange',
  'bg-pink/10 text-pink',
];

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

function KenBurnsBanner({ overlayText, overlaySubline, bannerColor, bannerImage, bannerOverlay = true }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <div ref={ref} className="relative overflow-hidden aspect-[2/1] flex items-center">
      <motion.div
        style={{ scale }}
        className={`absolute inset-0 ${bannerColor}`}
      >
        {bannerImage && (
          <img
            src={bannerImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {bannerImage && bannerOverlay && (
          <div className={`absolute inset-0 ${bannerColor} opacity-70`} />
        )}
      </motion.div>
      <div className="relative container-app">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white leading-[1.1] mb-4">
            {overlayText}
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-xl">
            {overlaySubline}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

const defaultMiddleParagraphs = [
  'Caseworkers juggle dozens of active matters at any given time, each with unique deadlines, document requirements, and client expectations. The margin for error is zero.',
  'From the moment a matter lands in your queue to the final filing, everything is streamlined — intake, drafting, reminders, and client communication all live in one focused workspace.',
];

const defaultMiddlePoints = [
  'Smart checklists auto-generate for every case type and filing stage.',
  'Automated reminders at 30, 14, 7, and 1 day(s) before every deadline.',
  'One-click drafting from approved, on-brand templates.',
];

export default function FeaturePageTemplate({
  title,
  roleName,
  bannerText,
  bannerSubline,
  bannerColor = 'bg-navy',
  introHeading,
  introText,
  introImageLabel = 'Screenshot',
  introReverse = false,
  features,
  faqs,
  bannerImage,
  introImage,
  middleImage,
  middleBadge = 'Caseworker Portal',
  middleHeading = 'A day in the caseworker\'s seat',
  middleParagraphs = defaultMiddleParagraphs,
  middlePoints = defaultMiddlePoints,
  bannerOverlay = true,
}) {
  const featureRows = [];
  for (let i = 0; i < features.length; i += 3) {
    featureRows.push(features.slice(i, i + 3));
  }

  return (
    <div>
      {/* 1. Ken-Burns Banner */}
      <KenBurnsBanner
        overlayText={bannerText}
        overlaySubline={bannerSubline}
        bannerColor={bannerColor}
        bannerImage={bannerImage}
        bannerOverlay={bannerOverlay}
      />

      {/* 2. Intro Section — 2-column */}
      <section className="section-padding bg-white">
        <div className="container-app">
          <div
            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
              introReverse ? 'direction-rtl' : ''
            }`}
          >
            <AnimateOnScroll>
              <div style={{ direction: 'ltr' }}>
                <span className="inline-flex items-center px-4 py-1.5 bg-blue-pale text-blue text-xs font-semibold rounded-full mb-5">
                  {roleName}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-5">
                  {introHeading}
                </h2>
                <div className="space-y-4">
                  {introText.map((paragraph, i) => (
                    <p key={i} className="text-text-secondary leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div style={{ direction: 'ltr' }}>
                <div className="bg-sand rounded-2xl border border-sand-dark aspect-[4/3] flex items-center justify-center">
                  {introImage ? (
                    <img
                      src={introImage}
                      alt={introImageLabel}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="text-center px-6">
                      <div className="w-16 h-16 bg-blue-pale rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 border-2 border-blue/20 rounded-lg" />
                      </div>
                      <p className="text-sm font-medium text-text-muted">
                        {introImageLabel}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {middleImage && (
        <section className="section-padding bg-white">
          <div className="container-app">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <AnimateOnScroll delay={0.15}>
                <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(11,31,58,0.12)] aspect-[4/3]">
                  <img
                    src={middleImage}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <div>
                  <span className="inline-flex items-center px-4 py-1.5 bg-blue-pale text-blue text-xs font-semibold rounded-full mb-5">
                    {middleBadge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-5">
                    {middleHeading}
                  </h2>
                  <div className="space-y-4">
                    {middleParagraphs.map((paragraph, i) => (
                      <p key={i} className="text-text-secondary leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    <ul className="space-y-3 pt-2">
                      {middlePoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-pale text-blue flex items-center justify-center shrink-0">
                            <Check size={14} />
                          </span>
                          <span className="text-sm text-text-secondary leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      )}

      {/* 3. Feature Flow — Grid */}
      <section className="section-padding bg-sand">
        <div className="container-app">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Purpose-built tools for the {roleName.toLowerCase()} role — every
              feature designed around your actual workflow.
            </p>
          </AnimateOnScroll>

          {featureRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 ${
                rowIndex > 0 ? 'mt-5 sm:mt-6' : ''
              }`}
            >
              {row.map((feature, i) => {
                const colorClass = featureColors[(rowIndex * 3 + i) % featureColors.length];
                return (
                  <AnimateOnScroll key={i} delay={i * 0.06}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-2xl border border-sand-dark p-5 sm:p-6 h-full hover:shadow-[0_8px_30px_rgba(11,31,58,0.08)] transition-shadow"
                    >
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${colorClass} flex items-center justify-center mb-4`}>
                        <feature.icon size={22} sm:size={24} />
                      </div>
                      <h3 className="text-sm sm:text-base font-heading font-semibold text-navy mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* 4. FAQ Accordion */}
      {faqs && faqs.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-app max-w-3xl">
            <AnimateOnScroll className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy">
                Frequently Asked <span className="gradient-text-purple">Questions</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-sand rounded-2xl p-5 md:p-8">
                <FAQAccordion items={faqs} />
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* 5. Bottom CTA */}
      <section className="py-16 sm:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-indigo/20 to-purple/10 pointer-events-none" />
        <div className="container-app text-center relative z-10">
          <AnimateOnScroll>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              See this <span className="text-cyan-light">in action</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Book a personalized walkthrough of the{' '}
              {title} and discover how it fits your workflow.
            </p>
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center gap-2 btn-gradient-primary px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
            >
              Book a Free Demo <ArrowRight size={16} sm:size={18} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
