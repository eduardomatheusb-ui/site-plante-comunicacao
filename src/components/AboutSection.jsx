import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from './SectionTitle'
import { OrganicCircle, GrafismLine, BulbOutline } from './AnimatedGraphicElement'

const stats = [
  { number: '10+', label: 'anos de mercado' },
  { number: '80+', label: 'projetos entregues' },
  { number: '30+', label: 'marcas atendidas' },
  { number: '360°', label: 'visão de comunicação' },
]

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="sobre" className="relative py-28 bg-petrol overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <BulbOutline
          size={360}
          className="absolute -left-24 top-1/2 -translate-y-1/2 opacity-[0.05]"
          color="#E8FF00"
        />
        <OrganicCircle size={500} color="#E8FF00" opacity={0.03} className="absolute -right-60 -bottom-20" />
      </div>

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <SectionTitle
              tag="Quem somos"
              title={<>Comunicação com<br /><span className="text-gradient-yellow">intenção e direção.</span></>}
            />

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 space-y-5 text-white/65 leading-relaxed text-base md:text-lg"
            >
              <p>
                A Plante nasceu para criar comunicação com propósito, ritmo e direção.
                Somos uma agência que pensa antes de postar, escuta antes de propor e
                transforma ideias em campanhas, marcas, conteúdos e experiências.
              </p>
              <p>
                Atuamos com empresas, instituições, projetos públicos, iniciativas
                sociais e marcas que precisam se posicionar melhor, comunicar com
                clareza e construir presença — no digital e fora dele.
              </p>
              <p>
                Não acreditamos em comunicação solta. Acreditamos em processo,
                repertório, planejamento e criação com intenção.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <GrafismLine color="#E8FF00" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 flex items-center gap-3 text-white/40 text-sm font-display"
            >
              <span className="w-2 h-2 rounded-full bg-amarelo inline-block" />
              Betim, Minas Gerais
            </motion.div>
          </div>

          {/* Right: stats */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="bg-petrol-mid border border-white/8 rounded-2xl p-7 group hover:border-amarelo/30 transition-colors duration-300"
                >
                  <div className="font-display font-bold text-4xl md:text-5xl text-amarelo mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
                    {stat.number}
                  </div>
                  <div className="text-white/50 text-sm font-medium leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote highlight */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 bg-amarelo/8 border-l-2 border-amarelo rounded-r-xl px-6 py-5"
            >
              <p className="text-white/80 text-base italic leading-relaxed">
                "Uma agência para marcas, instituições e projetos que precisam sair do lugar."
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
