import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ideas } from '../content/siteContent'
import { handleInternalClick } from '../lib/navigation'

export default function ContentCards({ limit }) {
  const visibleIdeas = limit ? ideas.slice(0, limit) : ideas

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {visibleIdeas.map((idea, index) => (
        <motion.a
          key={idea.slug}
          href={`/ideias-em-movimento/${idea.slug}`}
          onClick={(event) => handleInternalClick(event, `/ideias-em-movimento/${idea.slug}`)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="group flex min-h-[280px] flex-col justify-between border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-amarelo/50 hover:bg-white/[0.06]"
        >
          <div>
            <div className="mb-8 flex items-center justify-between gap-4">
              <span className="tag border-amarelo/20 text-[10px]">{idea.category}</span>
              <ArrowUpRight size={18} className="text-white/20 transition-colors group-hover:text-amarelo" />
            </div>
            <h3 className="font-display text-2xl font-bold leading-tight text-white">{idea.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/55">{idea.summary}</p>
          </div>
          <p className="mt-8 text-xs text-white/30">
            {idea.date} · {idea.readingTime} de leitura
          </p>
        </motion.a>
      ))}
    </div>
  )
}
