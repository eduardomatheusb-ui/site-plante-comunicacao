import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  { n: '01', verb: 'Escutar', color: 'text-amarelo', description: 'Entendemos o cenário, o público, a marca, os problemas, os objetivos e o contexto de cada projeto.' },
  { n: '02', verb: 'Pensar', color: 'text-white', description: 'Organizamos informações, identificamos oportunidades e construímos uma direção estratégica.' },
  { n: '03', verb: 'Criar', color: 'text-amarelo', description: 'Transformamos estratégia em linguagem, conceito, imagem, campanha, conteúdo e experiência.' },
  { n: '04', verb: 'Movimentar', color: 'text-white', description: 'Publicamos, impulsionamos, acompanhamos, ajustamos e fazemos a comunicação circular.' },
  { n: '05', verb: 'Evoluir', color: 'text-amarelo', description: 'Analisamos resultados, observamos respostas do público e melhoramos continuamente a estratégia de marketing.' },
]

export default function MethodSection() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="metodo" className="bg-grafite-mid">
      <div ref={headerRef} className="section-padding pt-20 pb-16 border-b border-white/6">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={headerInView ? { opacity: 1 } : {}} className="tag mb-6 inline-block">
              Método Plante
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight"
            >
              Como a Plante coloca<br />
              <span className="text-gradient-yellow">uma ideia em movimento.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/45 text-base leading-relaxed max-w-sm"
          >
            Cinco etapas. Muita escuta. Um processo que respeita a complexidade de cada marca e transforma intenção em posicionamento.
          </motion.p>
        </div>
      </div>

      <div>
        {steps.map((step, i) => {
          const isEven = i % 2 === 0
          return <StepBlock key={step.n} step={step} isEven={isEven} />
        })}
      </div>
    </section>
  )
}

function StepBlock({ step, isEven }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={`grid md:grid-cols-2 border-b border-white/6 ${isEven ? 'bg-grafite-mid' : 'bg-petrol'}`}
    >
      <div
        className={`section-padding py-14 flex flex-col justify-between border-b md:border-b-0 border-white/6 ${
          isEven ? 'md:border-r' : 'md:order-last md:border-l'
        }`}
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-[7rem] md:text-[9rem] leading-none text-white/5 select-none"
        >
          {step.n}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`font-display font-bold text-4xl md:text-5xl tracking-tight ${step.color}`}
        >
          {step.verb}
        </motion.span>
      </div>

      <div className="section-padding py-14 flex items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white/55 text-lg md:text-xl leading-relaxed max-w-sm"
        >
          {step.description}
        </motion.p>
      </div>
    </motion.div>
  )
}
