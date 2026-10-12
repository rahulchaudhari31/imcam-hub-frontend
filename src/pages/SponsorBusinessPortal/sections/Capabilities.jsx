import { motion } from 'framer-motion';
import Reveal from './Reveal';

const featureColors = [
  'bg-blue/10 text-blue',
  'bg-indigo/10 text-indigo',
  'bg-purple/10 text-purple',
  'bg-emerald/10 text-emerald',
  'bg-cyan/10 text-cyan',
  'bg-orange/10 text-orange',
  'bg-pink/10 text-pink',
];

const cardGradients = [
  'bg-blue-pale',
  'bg-indigo-pale',
  'bg-purple-pale',
  'bg-emerald-pale',
  'bg-cyan-pale',
  'bg-orange-pale',
  'bg-pink-pale',
];

export default function Capabilities({ role, features = [] }) {
  const rows = [];
  for (let i = 0; i < features.length; i += 3) {
    rows.push(features.slice(i, i + 3));
  }

  return (
    <section className="section-padding bg-sand">
      <div className="container-app">
        <Reveal className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Purpose-built tools for the {role.toLowerCase()} role — every feature designed
            around your actual workflow.
          </p>
        </Reveal>

        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 ${
              rowIndex > 0 ? 'mt-5 sm:mt-6' : ''
            }`}
          >
            {row.map((feature, i) => {
              const colorClass = featureColors[(rowIndex * 3 + i) % featureColors.length];
              const cardGradient = cardGradients[(rowIndex * 3 + i) % cardGradients.length];
              const Icon = feature.icon;
              return (
                <Reveal key={i} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`${cardGradient} rounded-2xl border border-white p-5 sm:p-6 h-full hover:shadow-[0_10px_35px_rgba(11,31,58,0.14)] transition-all duration-300`}
                  >
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${colorClass} flex items-center justify-center mb-4`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="text-sm sm:text-base font-heading font-semibold text-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
