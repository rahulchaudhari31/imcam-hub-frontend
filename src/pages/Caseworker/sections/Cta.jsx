import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function Cta({ title }) {
  return (
    <section className="py-16 sm:py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-indigo/20 to-purple/10 pointer-events-none" />
      <div className="container-app text-center relative z-10">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            See this <span className="text-cyan-light">in action</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Book a personalized walkthrough of the {title} and discover how it fits your
            workflow.
          </p>
          <Link
            to="/book-demo"
            className="inline-flex items-center justify-center gap-2 btn-gradient-primary px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
          >
            Book a Free Demo <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
