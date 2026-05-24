import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionTitle({
  tag,
  title,
  subtitle,
  light = false,
  centered = false,
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`${centered ? 'text-center' : ''}`}
    >
      {tag && (
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tag mb-5 inline-block"
        >
          {tag}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display font-bold leading-tight text-balance ${
          light ? 'text-grafite' : 'text-white'
        } text-3xl md:text-4xl lg:text-5xl`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-grafite/70' : 'text-white/60'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
