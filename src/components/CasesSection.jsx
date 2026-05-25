import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight, Plus, X } from 'lucide-react'

const categories = ['Todos', 'Branding', 'Redes Sociais', 'Campanhas', 'Audiovisual', 'Institucional']

const cases = [
  {
    id: 1,
    category: 'Branding',
    client: 'Cliente ou projeto',
    segment: 'Comércio e serviços',
    challenge: 'A marca precisava organizar sua comunicação, fortalecer seu posicionamento e construir uma linguagem mais clara para dialogar com seu público.',
    solution: 'A Plante desenvolveu o planejamento estratégico, criou a linha editorial, produziu peças gráficas, roteiros, vídeos, campanhas e materiais de apoio para canais digitais e institucionais.',
    deliveries: ['Planejamento de comunicação', 'Identidade visual', 'Materiais institucionais'],
    impact: 'Fortalecimento do posicionamento da marca e construção de narrativa mais clara e consistente.',
  },
  {
    id: 2,
    category: 'Redes Sociais',
    client: 'Cliente ou projeto',
    segment: 'Saúde',
    challenge: 'A instituição precisava melhorar a consistência da comunicação e construir estratégia digital com mais clareza.',
    solution: 'A Plante estruturou calendário editorial, linguagem visual, redação, design, publicação e acompanhamento de métricas.',
    deliveries: ['Gestão de redes sociais', 'Design de posts', 'Relatórios e análise de resultados'],
    impact: 'Organização da comunicação institucional e melhoria na percepção de valor da marca.',
  },
  {
    id: 3,
    category: 'Campanhas',
    client: 'Cliente ou projeto',
    segment: 'Projetos sociais',
    challenge: 'O projeto precisava ampliar alcance e explicar sua proposta para diferentes públicos.',
    solution: 'A Plante criou conceito de campanha, peças digitais, roteiro, vídeo e materiais de apoio para divulgação.',
    deliveries: ['Campanha institucional', 'Produção audiovisual', 'Materiais institucionais'],
    impact: 'Apoio à divulgação de projeto público e ampliação do alcance nos canais digitais.',
  },
  {
    id: 4,
    category: 'Audiovisual',
    client: 'Cliente ou projeto',
    segment: 'Educação',
    challenge: 'A instituição precisava apresentar seus diferenciais de forma mais clara e humana.',
    solution: 'A Plante desenvolveu roteiro, direção criativa, captação e edição de conteúdos audiovisuais.',
    deliveries: ['Roteiro', 'Captação', 'Edição', 'Versões para redes'],
    impact: 'Maior reconhecimento da marca e conteúdo de apoio para canais institucionais.',
  },
  {
    id: 5,
    category: 'Institucional',
    client: 'Cliente ou projeto',
    segment: 'Comunicação pública',
    challenge: 'A instituição precisava tornar sua comunicação mais acessível, organizada e compreensível.',
    solution: 'A Plante apoiou textos institucionais, materiais de divulgação, comunicação interna e campanha de interesse público.',
    deliveries: ['Comunicação institucional', 'Campanha de interesse público', 'Materiais de divulgação'],
    impact: 'Narrativa mais clara e consistente para dialogar com a população e públicos de interesse.',
  },
  {
    id: 6,
    category: 'Branding',
    client: 'Cliente ou projeto',
    segment: 'Engenharia',
    challenge: 'A empresa precisava atualizar sua comunicação e organizar um posicionamento mais profissional nos canais digitais.',
    solution: 'A Plante conduziu reposicionamento, identidade visual, materiais comerciais e projeto digital de apoio.',
    deliveries: ['Rebranding', 'Website', 'Apresentação comercial'],
    impact: 'Fortalecimento da comunicação de marca e maior clareza no posicionamento.',
  },
]

function CaseCard({ c, i, onClick }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.08 }}
      onClick={() => onClick(c)}
      className="group cursor-pointer border border-white/8 hover:border-amarelo/50 transition-all duration-300 bg-petrol-mid hover:bg-petrol"
    >
      <div className="relative h-48 md:h-56 bg-petrol flex items-end p-6 overflow-hidden">
        <motion.div className="absolute inset-0 bg-amarelo opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
        <span className="absolute top-5 right-5 text-[11px] font-display tracking-widest uppercase text-white/20">
          {c.segment}
        </span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold text-5xl text-white/4 tracking-widest uppercase whitespace-nowrap">
          {c.category}
        </span>

        <span className="tag text-[10px] relative z-10">{c.category}</span>

        <motion.div
          className="absolute top-5 left-5 w-7 h-7 rounded-full bg-amarelo flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <Plus size={14} className="text-black" />
        </motion.div>
      </div>

      <div className="p-6 border-t border-white/6">
        <h3 className="font-display font-bold text-lg text-white group-hover:text-amarelo transition-colors duration-300 mb-2">
          {c.client}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed">{c.challenge}</p>
        <div className="mt-4 flex items-center gap-1.5 text-amarelo/50 group-hover:text-amarelo text-xs font-display font-medium transition-colors">
          Ver estrutura <ArrowUpRight size={12} />
        </div>
      </div>
    </motion.article>
  )
}

function CaseModal({ c, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
        className="bg-petrol-mid border border-white/10 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
      >
        <div className="p-7 border-b border-white/8 flex justify-between items-start">
          <div>
            <span className="tag text-[10px] mb-3 inline-block">{c.category}</span>
            <h3 className="font-display font-bold text-2xl text-white">{c.client}</h3>
            <p className="text-white/35 text-sm mt-1">{c.segment}</p>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        <div className="p-7 space-y-6">
          <div>
            <p className="text-amarelo text-xs font-display font-semibold tracking-widest uppercase mb-2">Desafio</p>
            <p className="text-white/65 leading-relaxed">{c.challenge}</p>
          </div>
          <div>
            <p className="text-amarelo text-xs font-display font-semibold tracking-widest uppercase mb-2">Solução</p>
            <p className="text-white/65 leading-relaxed">{c.solution}</p>
          </div>
          <div>
            <p className="text-amarelo text-xs font-display font-semibold tracking-widest uppercase mb-3">Entregas</p>
            <div className="flex flex-wrap gap-2">
              {c.deliveries.map(d => (
                <span key={d} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/55 font-display border border-white/8">{d}</span>
              ))}
            </div>
          </div>
          <div className="bg-amarelo/8 border border-amarelo/15 rounded-xl p-5">
            <p className="text-amarelo text-xs font-display font-semibold tracking-widest uppercase mb-2">Impacto</p>
            <p className="text-white/80 font-medium">{c.impact}</p>
          </div>
          <p className="text-white/20 text-xs text-center pt-2">Estrutura preparada para receber cases reais, imagens autorizadas e dados confirmados.</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CasesSection() {
  const [active, setActive] = useState('Todos')
  const [selected, setSelected] = useState(null)
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const filtered = active === 'Todos' ? cases : cases.filter(c => c.category === active)

  return (
    <section id="projetos" className="bg-petrol-dark">
      <div ref={headerRef} className="section-padding pt-20 pb-14 border-b border-white/6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={headerInView ? { opacity: 1 } : {}} className="tag mb-6 inline-block">
              Projetos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight"
            >
              Cases prontos para receber<br />
              <span className="text-gradient-yellow">projetos reais da Plante.</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary shrink-0"
          >
            Fazer parte desses projetos
          </motion.button>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="flex flex-wrap gap-2 mt-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs font-display font-medium tracking-wide transition-all duration-200 ${
                active === cat
                  ? 'bg-amarelo text-grafite'
                  : 'border border-white/15 text-white/45 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="section-padding py-12">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {filtered.map((c, i) => (
              <CaseCard key={c.id} c={c} i={i} onClick={setSelected} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && <CaseModal c={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
