import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ideas } from '../content/siteContent'
import { handleInternalClick } from '../lib/navigation'

export default function ContentCards({ limit }) {
  const order = [
    'eca-digital-uso-imagens-criancas',
    'plante-cobertura-geraes-open',
    'o-que-vem-antes-de-um-bom-post',
    'marca-nao-e-so-logo',
    'comunicacao-institucional-tambem-precisa-de-criatividade',
    'presenca-digital-nao-e-so-frequencia',
    'como-uma-ideia-vira-campanha',
    'o-papel-da-escuta-no-processo-criativo',
  ]
  const orderedIdeas = [...ideas].sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug))
  const visibleIdeas = limit ? orderedIdeas.slice(0, limit) : orderedIdeas

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {visibleIdeas.map((idea, index) => {
        const href = idea.href || `/ideias-em-movimento/${idea.slug}`

        return (
          <motion.a
          key={idea.slug}
          href={href}
          onClick={(event) => handleInternalClick(event, href)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="group flex min-h-[360px] flex-col overflow-hidden border border-white/10 bg-white/[0.035] transition-colors duration-300 hover:border-amarelo/50 hover:bg-white/[0.06]"
        >
          {idea.image && (
            <div className="h-44 overflow-hidden bg-grafite">
              <img
                src={idea.image}
                alt=""
                className={`h-full w-full transition duration-700 group-hover:scale-105 ${idea.cardImageClass || 'object-cover'}`}
              />
            </div>
          )}
          <div className="flex flex-1 flex-col justify-between p-6">
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
          </div>
        </motion.a>
        )
      })}
    </div>
  )
}
