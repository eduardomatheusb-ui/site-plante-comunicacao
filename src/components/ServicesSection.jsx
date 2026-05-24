import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { OrganicCircle } from './AnimatedGraphicElement'

const services = [
  {
    number: '01',
    title: 'Estratégia e Planejamento',
    description:
      'Diagnóstico, posicionamento, campanhas, calendário editorial, planejamento de comunicação e definição de narrativa. Antes de qualquer criação, existe uma direção.',
    tags: ['Diagnóstico', 'Posicionamento', 'Planejamento'],
  },
  {
    number: '02',
    title: 'Branding e Identidade',
    description:
      'Criação e reposicionamento de marcas, identidade visual, linguagem, manifesto, naming e aplicações. Para marcas que precisam saber quem são antes de aparecer.',
    tags: ['Naming', 'Identidade Visual', 'Manifesto'],
  },
  {
    number: '03',
    title: 'Conteúdo e Redes Sociais',
    description:
      'Gestão de redes sociais, produção de textos, roteiros, direção criativa, design, reels, cobertura e relacionamento com comunidades. Presença que faz sentido.',
    tags: ['Social Media', 'Copywriting', 'Reels'],
  },
  {
    number: '04',
    title: 'Tráfego Pago e Performance',
    description:
      'Planejamento de mídia, anúncios em Meta, Google e LinkedIn, campanhas de conversão, relatórios e otimização contínua. Investimento com retorno mensurável.',
    tags: ['Meta Ads', 'Google Ads', 'Relatórios'],
  },
  {
    number: '05',
    title: 'Audiovisual',
    description:
      'Roteiros, captação, edição, vídeos institucionais, campanhas, entrevistas, conteúdos para redes e cobertura de eventos. Imagem que comunica antes das palavras.',
    tags: ['Vídeo institucional', 'Captação', 'Edição'],
  },
  {
    number: '06',
    title: 'Comunicação Institucional',
    description:
      'Releases, assessoria de comunicação, textos institucionais, apresentações, campanhas públicas e relacionamento com imprensa. Voz clara para instituições.',
    tags: ['Assessoria', 'Releases', 'Imprensa'],
  },
  {
    number: '07',
    title: 'Projetos Digitais',
    description:
      'Landing pages, websites, páginas de campanha, interfaces e materiais digitais de apoio. Do wireframe ao ar, com foco em resultado.',
    tags: ['Websites', 'Landing Pages', 'UI/UX'],
  },
]

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative border-b border-white/8 py-8 hover:border-amarelo/30 transition-colors duration-300 cursor-default"
    >
      <div className="flex items-start gap-6">
        <span className="font-display font-bold text-sm text-amarelo/40 mt-1 w-8 shrink-0">
          {service.number}
        </span>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-amarelo transition-colors duration-300">
              {service.title}
            </h3>
            <motion.div
              className="shrink-0 mt-1 text-white/20 group-hover:text-amarelo transition-colors duration-300"
              whileHover={{ x: 4, y: -4 }}
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </div>

          <p className="mt-3 text-white/55 leading-relaxed text-sm md:text-base max-w-2xl">
            {service.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 font-display"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function ServicesSection() {
  return (
    <section id="servicos" className="relative py-28 bg-petrol-dark overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <OrganicCircle size={500} color="#E8FF00" opacity={0.025} className="absolute -top-32 right-0" />
      </div>

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16 lg:gap-24">
          {/* Sticky header on desktop */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionTitle
              tag="O que fazemos"
              title={<>Comunicação completa,<br />do início ao<br /><span className="text-gradient-yellow">resultado.</span></>}
              subtitle="Não entregamos serviços isolados. Construímos presença com estratégia, criação e acompanhamento."
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <button
                onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Solicite uma proposta
              </button>
            </motion.div>
          </div>

          {/* Services list */}
          <div className="border-t border-white/8">
            {services.map((service, i) => (
              <ServiceCard key={service.number} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
