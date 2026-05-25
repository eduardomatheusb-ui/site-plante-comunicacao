import { motion } from 'framer-motion'
import { methodSteps } from '../content/siteContent'

export default function MethodSteps() {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {methodSteps.map((step, index) => (
        <motion.article
          key={step.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          className="relative min-h-[230px] overflow-hidden bg-petrol-dark p-6"
        >
          <span className="font-display text-xs font-bold text-amarelo/55">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-10 font-display text-2xl font-bold text-white">{step.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/55">{step.description}</p>
          <div className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-amarelo/5" />
        </motion.article>
      ))}
    </div>
  )
}
