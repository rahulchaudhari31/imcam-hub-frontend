import FAQAccordion from '../../../components/FAQAccordion';
import Reveal from './Reveal';

export default function Faq({ faqs = [] }) {
  if (!faqs.length) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-app max-w-3xl">
        <Reveal className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy">
            Frequently Asked <span className="gradient-text-purple">Questions</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-sand rounded-2xl p-5 md:p-8">
            <FAQAccordion items={faqs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
