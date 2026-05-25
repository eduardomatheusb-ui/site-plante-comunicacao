import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    n: '01',
    title: 'Gestão de Marketing',
    short: 'Marketing',
    tags: ['Planejamento', 'Campanhas', 'Resultados'],
    description: 'Planejamento, organização e acompanhamento das ações de marketing da marca, conectando estratégia, conteúdo, campanhas, mídia e análise de resultados.',
  },
  {
    n: '02',
    title: 'Gestão de redes sociais',
    short: 'Redes',
    tags: ['Conteúdo', 'Design', 'Métricas'],
    description: 'Planejamento, criação de conteúdo, redação, design, publicação, acompanhamento de métricas e construção de estratégia digital para marcas, instituições e projetos.',
  },
  {
    n: '03',
    title: 'Branding e identidade visual',
    short: 'Branding',
    tags: ['Marca', 'Linguagem', 'Aplicações'],
    description: 'Criação, reposicionamento e desenvolvimento de marcas, incluindo identidade visual, linguagem, conceito, aplicações e materiais institucionais.',
  },
  {
    n: '04',
    title: 'Campanhas Publicitárias',
    short: 'Campanhas',
    tags: ['Lançamentos', 'Institucional', 'Interesse público'],
    description: 'Criação de campanhas para lançamentos, datas comemorativas, ações institucionais, projetos públicos, comerciais e sociais.',
  },
  {
    n: '05',
    title: 'Produção audiovisual',
    short: 'Audiovisual',
    tags: ['Roteiro', 'Captação', 'Edição'],
    description: 'Roteiros, captação, direção criativa, edição de vídeos, reels, vídeos institucionais, entrevistas, coberturas e conteúdos para redes sociais.',
  },
  {
    n: '06',
    title: 'Tráfego pago e mídia digital',
    short: 'Mídia',
    tags: ['Meta Ads', 'Google Ads', 'Relatórios'],
    description: 'Planejamento, criação, veiculação e acompanhamento de campanhas pagas em plataformas digitais, com foco em alcance, conversão, relacionamento ou fortalecimento de marca.',
  },
  {
    n: '07',
    title: 'Comunicação institucional',
    short: 'Institucional',
    tags: ['Releases', 'Apresentações', 'Imagem pública'],
    description: 'Releases, textos institucionais, apresentações, relatórios, discursos, materiais de divulgação, comunicação interna, campanhas de interesse público e apoio à imagem pública de instituições.',
  },
  {
    n: '08',
    title: 'Projetos digitais',
    short: 'Digital',
    tags: ['Sites', 'Landing pages', 'Formulários'],
    description: 'Landing pages, sites, páginas de campanha, formulários, interfaces simples e materiais digitais de apoio à comunicação.',
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
      <span className="font-display font-bold text-xs text-amarelo/35 pt-1 group-hover:text-amarelo/70 transition-colors">
        {s.n}
      </span>

      <div>
        <h3 className="font-display font-bold text-xl md:text-3xl text-white group-hover:text-amarelo transition-colors duration-300 leading-tight">
          {s.title}
        </h3>
        <p className="text-white/45 text-sm mt-1.5 leading-relaxed max-w-2xl hidden md:block">
          {s.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {s.tags.map(t => (
            <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-white/40 font-display">
              {t}
            </span>
          ))}
        </div>
      </div>

      <motion.div className="text-white/15 group-hover:text-amarelo transition-colors duration-300 hidden md:block" whileHover={{ x: 4 }}>
        <ArrowRight size={22} />
      </motion.div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="servicos" className="bg-petrol">
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
          <p className="text-black/55 text-base max-w-sm leading-relaxed">
            Não entregamos serviços isolados. Construímos posicionamento com estratégia, criação e acompanhamento.
          </p>
        </div>
      </div>

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
          <button onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
            Solicite uma proposta
          </button>
        </motion.div>
      </div>
    </section>
  )
}
