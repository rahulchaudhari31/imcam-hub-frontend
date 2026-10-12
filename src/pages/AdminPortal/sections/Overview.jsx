import Reveal from './Reveal';

export default function Overview({
  role,
  heading,
  text = [],
  image,
  imageLabel = 'Screenshot',
  reverse = false,
}) {
  return (
    <section className="section-padding bg-white">
      <div className="container-app">
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            reverse ? 'direction-rtl' : ''
          }`}
        >
          <Reveal>
            <div style={{ direction: 'ltr' }}>
              <span className="inline-flex items-center px-4 py-1.5 bg-blue-pale text-blue text-xs font-semibold rounded-full mb-5">
                {role}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-5">
                {heading}
              </h2>
              <div className="space-y-4">
                {text.map((paragraph, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ direction: 'ltr' }}>
              <div className="bg-sand rounded-2xl border border-sand-dark aspect-[4/3] flex items-center justify-center">
                {image ? (
                  <img
                    src={image}
                    alt={imageLabel}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <div className="text-center px-6">
                    <div className="w-16 h-16 bg-blue-pale rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 border-2 border-blue/20 rounded-lg" />
                    </div>
                    <p className="text-sm font-medium text-text-muted">{imageLabel}</p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
