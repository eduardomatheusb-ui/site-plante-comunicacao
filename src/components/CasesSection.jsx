import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import SectionTitle from './SectionTitle'

const categories = [
  'Todos',
  'Branding',
  'Redes Sociais',
  'Campanhas',
  'Audiovisual',
  'Institucional',
]

const cases = [
  {
    id: 1,
    category: 'Branding',
    client: 'Projeto Placeholder',
    segment: 'Comércio e Serviços',
    challenge: 'Marca sem identidade visual definida e posicionamento difuso no mercado local.',
    solution: 'Criação de identidade visual completa, manifesto de marca e guia de aplicações.',
    deliveries: ['Naming', 'Identidade visual', 'Manual da marca', 'Aplicações digitais'],
    impact: 'Reconhecimento de marca cresceu 3× em 6 meses após lançamento.',
    color: '#E8FF00',
    placeholder: true,
  },
  {
    id: 2,
    category: 'Redes Sociais',
    client: 'Projeto Placeholder',
    segment: 'Saúde',
    challenge: 'Comunicação inconsistente nas redes, sem estratégia editorial ou visual definida.',
    solution: 'Planejamento editorial, identidade de conteúdo, produção e gestão mensal.',
    deliveries: ['Calendário editorial', 'Design de posts', 'Reels', 'Relatórios mensais'],
    impact: 'Crescimento orgânico de 180% em seguidores no primeiro trimestre.',
    color: '#E8FF00',
    placeholder: true,
  },
  {
    id: 3,
    category: 'Campanhas',
    client: 'Projeto Placeholder',
    segment: 'Poder Público',
    challenge: 'Necessidade de mobilizar a comunidade em torno de um projeto social municipal.',
    solution: 'Campanha integrada com peças visuais, vídeo, mídia paga e ações presenciais.',
    deliveries: ['Conceito criativo', 'Peças digitais', 'Vídeo institucional', 'Mídia paga'],
    impact: 'Mais de 12.000 pessoas alcançadas na primeira semana da campanha.',
    color: '#E8FF00',
    placeholder: true,
  },
  {
    id: 4,
    category: 'Audiovisual',
    client: 'Projeto Placeholder',
    segment: 'Educação',
    challenge: 'Instituição precisava apresentar seus diferenciais de forma impactante.',
    solution: 'Produção de vídeo institucional com roteiro, captação e edição completa.',
    deliveries: ['Roteiro', 'Captação', 'Edição', 'Versões para redes'],
    impact: 'Vídeo utilizado em processo seletivo e eventos, com alta retenção.',
    color: '#E8FF00',
    placeholder: true,
  },
  {
    id: 5,
    category: 'Institucional',
    client: 'Projeto Placeholder',
    segment: 'Terceiro Setor',
    challenge: 'ONG sem comunicação estruturada e pouca visibilidade para captação de recursos.',
    solution: 'Assessoria de comunicação, identidade editorial e presença digital consistente.',
    deliveries: ['Assessoria de imprensa', 'Posts', 'Newsletter', 'Relatório de impacto'],
    impact: 'Três reportagens publicadas em veículos regionais em dois meses.',
    color: '#E8FF00',
    placeholder: true,
  },
  {
    id: 6,
    category: 'Branding',
    client: 'Projeto Placeholder',
    segment: 'Engenharia',
    challenge: 'Empresa de engenharia sem presença digital e identidade visual desatualizada.',
    solution: 'Rebranding completo, novo site e estratégia de conteúdo B2B.',
    deliveries: ['Rebranding', 'Website', 'LinkedIn', 'Apresentação comercial'],
    impact: 'Entrada em novos mercados e 2 contratos fechados via canais digitais.',
    color: '#E8FF00',
    placeholder: true,
  },
]

function CaseCard({ c, index }) {
  const [expanded, setExpanded] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-petrol border border-white/8 rounded-2xl overflow-hidden hover:border-amarelo/30 transition-all duration-300"
    >
      {/* Card header / visual placeholder */}
      <div className="relative h-44 bg-petrol-mid flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${c.color}, transparent)`,
          }}
        />
        <div className="relative z-10 text-center px-6">
          <span className="text-amarelo/30 text-xs font-display tracking-widest uppercase block mb-2">
            {c.segment}
          </span>
          <span className="font-display font-bold text-white/20 text-4xl uppercase tracking-widest">
            {c.category}
          </span>
        </div>

        {/* Category badge */}
        <span className="absolute top-4 left-4 tag text-[10px]">{c.category}</span>

        {/* Placeholder label */}
        {c.placeholder && (
          <span className="absolute bottom-4 right-4 text-[10px] text-white/25 font-display tracking-wider">
            Case a preencher
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-6">
        <p className="text-white/40 text-xs font-display tracking-wide mb-1">{c.segment}</p>
        <h3 className="font-display font-bold text-lg text-white mb-3">{c.client}</h3>

        <p className="text-white/55 text-sm leading-relaxed mb-4">{c.challenge}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-4 border-t border-white/8">
                <p className="text-white/55 text-sm leading-relaxed mb-4">{c.solution}</p>
                <div className="mb-4">
                  <p className="text-white/30 text-xs font-display uppercase tracking-wider mb-2">Entregas</p>
                  <div className="flex flex-wrap gap-2">
                    {c.deliveries.map((d) => (
                      <span key={d} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50 font-display">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-amarelo/8 rounded-xl p-4">
                  <p className="text-white/30 text-xs font-display uppercase tracking-wider mb-1">Impacto</p>
                  <p className="text-white/80 text-sm font-medium">{c.impact}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-amarelo text-xs font-display font-medium hover:gap-3 transition-all duration-200 mt-2"
        >
          {expanded ? 'Fechar' : 'Ver detalhes'}
          <ChevronRight size={14} className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
        </button>
      </div>
    </motion.article>
  )
}

export default function CasesSection() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? cases
    : cases.filter((c) => c.category === activeCategory)

  return (
    <section id="projetos" className="relative py-28 bg-petrol-dark overflow-hidden">
      <div className="section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <SectionTitle
            tag="Projetos"
            title={<>Ideias que saíram do papel<br />e ganharam<span className="text-gradient-yellow"> rua, rede e conversa.</span></>}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm max-w-xs text-right hidden md:block"
          >
            Estrutura preparada para receber cases reais.
            Os dados abaixo são exemplos editáveis.
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-display font-medium tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-amarelo text-grafite'
                  : 'border border-white/15 text-white/50 hover:border-white/30 hover:text-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cases grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((c, i) => (
              <CaseCard key={c.id} c={c} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-white/40 text-sm mb-5">
            Quer fazer parte desses projetos?
          </p>
          <button
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary inline-flex items-center gap-2"
          >
            Converse com a Plante
            <ArrowUpRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
