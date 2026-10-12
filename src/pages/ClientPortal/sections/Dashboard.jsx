import { Check } from 'lucide-react';
import Reveal from './Reveal';

export default function Dashboard({ image, badge, heading, paragraphs = [], points = [] }) {
  if (!image) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal delay={0.15}>
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(11,31,58,0.12)] aspect-[4/3]">
              <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal>
            <div>
              {badge && (
                <span className="inline-flex items-center px-4 py-1.5 bg-blue-pale text-blue text-xs font-semibold rounded-full mb-5">
                  {badge}
                </span>
              )}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-5">
                {heading}
              </h2>
              <div className="space-y-4">
                {paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {points.length > 0 && (
                  <ul className="space-y-3 pt-2">
                    {points.map((point, i) => (
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
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
