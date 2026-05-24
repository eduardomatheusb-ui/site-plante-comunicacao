import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../content/siteContent'

export default function ServicesGrid({ limit, compact = false }) {
  const visibleServices = limit ? services.slice(0, limit) : services

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {visibleServices.map((service, index) => (
        <motion.article
          key={service.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="group border-b border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-amarelo/50 hover:bg-white/[0.055]"
        >
          <div className="mb-8 flex items-start justify-between gap-4">
            <span className="font-display text-xs font-bold text-amarelo/60">{service.n}</span>
            <ArrowUpRight size={18} className="text-white/20 transition-colors group-hover:text-amarelo" />
          </div>
          <h3 className="font-display text-2xl font-bold leading-tight text-white">
            {service.title}
          </h3>
          <p className={`mt-4 text-sm leading-relaxed text-white/55 ${compact ? 'line-clamp-3' : ''}`}>
            {service.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-white/45">
                {tag}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  )
}
