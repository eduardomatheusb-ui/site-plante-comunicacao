import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    n: '01',
    title: 'Estratégia e Planejamento',
    short: 'Estratégia',
    tags: ['Diagnóstico', 'Posicionamento', 'Calendário editorial'],
    description: 'Planejamento que organiza o caos e aponta a direção antes de qualquer criação.',
  },
  {
    n: '02',
    title: 'Branding e Identidade',
    short: 'Branding',
    tags: ['Naming', 'Identidade Visual', 'Manifesto'],
    description: 'Marcas que sabem quem são antes de aparecer.',
  },
  {
    n: '03',
    title: 'Conteúdo e Redes Sociais',
    short: 'Conteúdo',
    tags: ['Social Media', 'Copywriting', 'Reels'],
    description: 'Presença digital com estratégia editorial, não só postagem.',
  },
  {
    n: '04',
    title: 'Tráfego Pago e Performance',
    short: 'Performance',
    tags: ['Meta Ads', 'Google Ads', 'Relatórios'],
    description: 'Investimento com retorno mensurável e otimização contínua.',
  },
  {
    n: '05',
    title: 'Audiovisual',
    short: 'Audiovisual',
    tags: ['Vídeo institucional', 'Captação', 'Edição'],
    description: 'Imagem que comunica antes das palavras.',
  },
  {
    n: '06',
    title: 'Comunicação Institucional',
    short: 'Institucional',
    tags: ['Assessoria', 'Releases', 'Imprensa'],
    description: 'Voz clara para instituições que precisam ser ouvidas.',
  },
  {
    n: '07',
    title: 'Projetos Digitais',
    short: 'Digital',
    tags: ['Websites', 'Landing Pages'],
    description: 'Do wireframe ao ar, com foco em resultado.',
  },
]

function ServiceRow({ s, i }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.07 }}
      className="group grid grid-cols-[48px_1fr] md:grid-cols-[64px_1fr_auto] items-start md:items-center gap-4 md:gap-8 py-7 border-b border-white/8 hover:border-amarelo/40 transition-colors duration-300 cursor-default"
    >
      {/* Number */}
      <span className="font-display font-bold text-xs text-amarelo/35 pt-1 group-hover:text-amarelo/70 transition-colors">
        {s.n}
      </span>

      {/* Title + description */}
      <div>
        <h3 className="font-display font-bold text-xl md:text-3xl text-white group-hover:text-amarelo transition-colors duration-300 leading-tight">
          {s.title}
        </h3>
        <p className="text-white/40 text-sm mt-1.5 leading-relaxed max-w-lg hidden md:block">
          {s.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {s.tags.map(t => (
            <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-white/35 font-display">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <motion.div
        className="text-white/15 group-hover:text-amarelo transition-colors duration-300 hidden md:block"
        whileHover={{ x: 4 }}
      >
        <ArrowRight size={22} />
      </motion.div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="servicos" className="bg-petrol">

      {/* Header block — amarelo bg, full visual break */}
      <div className="bg-amarelo section-padding py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 text-[11px] font-display font-medium tracking-widest uppercase text-black/50 border border-black/20 rounded-full mb-5">
              O que fazemos
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-black leading-[0.95] tracking-tight">
              Comunicação<br />do início ao<br />resultado.
            </h2>
          </div>
          <p className="text-black/55 text-base max-w-xs leading-relaxed">
            Não entregamos serviços isolados. Construímos presença com estratégia, criação e acompanhamento.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div ref={ref} className="section-padding pb-20">
        <div className="border-t border-white/8 mt-0">
          {services.map((s, i) => (
            <ServiceRow key={s.n} s={s} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <button
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Solicite uma proposta
          </button>
        </motion.div>
      </div>
    </section>
  )
}
