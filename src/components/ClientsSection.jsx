import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from './SectionTitle'

const segments = [
  { label: 'Poder Público', icon: '🏛' },
  { label: 'Educação', icon: '📚' },
  { label: 'Saúde', icon: '🩺' },
  { label: 'Engenharia', icon: '⚙️' },
  { label: 'Terceiro Setor', icon: '🤝' },
  { label: 'Comércio & Serviços', icon: '🏪' },
  { label: 'Política Institucional', icon: '📋' },
  { label: 'Projetos Culturais', icon: '🎭' },
]

const highlights = [
  'Mais de 30 marcas atendidas em Betim e região metropolitana de BH',
  'Atuação em projetos de comunicação pública e institucional',
  'Experiência com iniciativas sociais, culturais e do terceiro setor',
  'Campanhas para o varejo, serviços, saúde e educação',
]

export default function ClientsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="relative py-28 bg-petrol overflow-hidden">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <SectionTitle
              tag="Quem atendemos"
              title={<>Mais do que segmentos,<br /><span className="text-gradient-yellow">mergulhamos em contextos.</span></>}
              subtitle="A Plante atua com marcas, instituições e projetos que precisam comunicar melhor. Cada cliente chega com um desafio único."
            />

            <motion.ul
              ref={ref}
              className="mt-10 space-y-4"
            >
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 text-white/60 text-sm leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amarelo shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: segment tags */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              {segments.map((seg, i) => (
                <motion.div
                  key={seg.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group bg-petrol-mid border border-white/8 hover:border-amarelo/30 rounded-xl p-5 transition-all duration-300 cursor-default"
                >
                  <div className="text-2xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                    {seg.icon}
                  </div>
                  <p className="font-display font-semibold text-white/70 group-hover:text-white text-sm transition-colors duration-200">
                    {seg.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Logos placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-6 border border-dashed border-white/10 rounded-xl p-6 text-center"
            >
              <p className="text-white/25 text-xs font-display tracking-wide">
                Logos dos clientes serão adicionadas aqui
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
