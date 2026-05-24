import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from './SectionTitle'
import { OrganicCircle } from './AnimatedGraphicElement'

const steps = [
  {
    number: '01',
    verb: 'Escutar',
    title: 'Antes de qualquer ideia, existe uma escuta.',
    description:
      'Entendemos o cenário, o público, a marca, os problemas e os objetivos. Sem esse passo, não há planejamento sólido.',
    color: '#E8FF00',
  },
  {
    number: '02',
    verb: 'Pensar',
    title: 'Organizar o caos e encontrar o caminho.',
    description:
      'Organizamos informações, identificamos oportunidades e construímos uma direção estratégica. Aqui nasce o plano.',
    color: '#E8FF00',
  },
  {
    number: '03',
    verb: 'Criar',
    title: 'Estratégia vira forma, conceito e linguagem.',
    description:
      'Transformamos o planejamento em imagem, texto, campanha e conteúdo. A criação na Plante nasce de um porquê.',
    color: '#E8FF00',
  },
  {
    number: '04',
    verb: 'Movimentar',
    title: 'Publicar, impulsionar e acompanhar.',
    description:
      'Colocamos a comunicação em circulação com performance e atenção. Ajustamos enquanto o projeto acontece.',
    color: '#E8FF00',
  },
  {
    number: '05',
    verb: 'Evoluir',
    title: 'Resultado não é fim, é ponto de partida.',
    description:
      'Analisamos os resultados e melhoramos continuamente. A presença de uma marca se constrói com dados e direção.',
    color: '#E8FF00',
  },
]

function MethodStep({ step, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      {index < steps.length - 1 && (
        <div className="absolute left-[22px] top-12 bottom-0 w-px bg-white/8" />
      )}

      {/* Circle indicator */}
      <div className="relative shrink-0">
        <motion.div
          className="w-11 h-11 rounded-full border-2 border-amarelo/40 flex items-center justify-center bg-petrol"
          whileInView={{ borderColor: 'rgba(232,255,0,0.8)' }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.3, duration: 0.4 }}
        >
          <span className="text-amarelo font-display font-bold text-xs">{step.number}</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-1.5">
        <div className="text-amarelo font-display font-bold text-xs tracking-widest uppercase mb-2">
          {step.verb}
        </div>
        <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-3 leading-tight">
          {step.title}
        </h3>
        <p className="text-white/55 leading-relaxed text-sm md:text-base">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function MethodSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="metodo" className="relative py-28 bg-petrol overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <OrganicCircle size={600} color="#E8FF00" opacity={0.025} className="absolute -right-48 top-0" />
        <OrganicCircle size={400} color="#E8FF00" opacity={0.02} className="absolute -left-32 bottom-0" />
      </div>

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: header and visual */}
          <div>
            <SectionTitle
              tag="Método"
              title={<>Como a Plante coloca uma ideia<br /><span className="text-gradient-yellow">em movimento.</span></>}
              subtitle="Cinco etapas. Muita escuta. Um processo que respeita a complexidade de cada marca e entrega resultado com consistência."
            />

            {/* Visual element */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 relative"
            >
              {/* Decorative process visual */}
              <div className="bg-petrol-mid border border-white/8 rounded-3xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <p className="font-display font-bold text-6xl text-white/5 leading-none select-none">
                    PLANTE
                  </p>
                  <div className="mt-6 space-y-3">
                    {['Estratégia', 'Criação', 'Performance'].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ width: 0 }}
                        whileInView={{ width: ['70%', '85%', '60%'][i] }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 + i * 0.2 }}
                        className="h-2 bg-amarelo/20 rounded-full overflow-hidden"
                      >
                        <motion.div
                          className="h-full bg-amarelo rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.8 + i * 0.2 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    {['Escuta', 'Plano', 'Criação', 'Resultado'].map((label, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="flex-1 text-center"
                      >
                        <div className="text-xs text-white/30 font-display">{label}</div>
                        <div className="mt-1 w-full h-px bg-white/10" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bg decoration */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-amarelo/5 rounded-full -translate-x-8 -translate-y-8 blur-2xl" />
              </div>
            </motion.div>
          </div>

          {/* Right: steps */}
          <div className="pt-2 lg:pt-16">
            {steps.map((step, i) => (
              <MethodStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
