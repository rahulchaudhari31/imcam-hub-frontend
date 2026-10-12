import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ text, subline, color = 'bg-navy', image, overlay = true }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <div ref={ref} className="relative overflow-hidden aspect-[2/1] flex items-center">
      <motion.div style={{ scale }} className={`absolute inset-0 ${color}`}>
        {image && (
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {image && overlay && (
          <div className={`absolute inset-0 ${color} opacity-70`} />
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
            {text}
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-xl">{subline}</p>
        </motion.div>
      </div>
    </div>
  );
}
