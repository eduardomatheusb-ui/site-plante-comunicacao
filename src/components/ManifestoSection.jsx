import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import LogoMark from './LogoMark'
import PlanteWordmark from './PlanteWordmark'

const lines = [
  { text: 'Ideia parada não transforma nada.', highlight: false, size: 'large' },
  { text: '', size: 'spacer' },
  { text: 'A gente acredita em comunicação que nasce da escuta,', highlight: false, size: 'medium' },
  { text: 'ganha forma no planejamento', highlight: false, size: 'medium' },
  { text: 'e encontra força na criação.', highlight: true, size: 'medium' },
  { text: '', size: 'spacer' },
  { text: 'Plantar uma ideia é cuidar do terreno,', highlight: false, size: 'small' },
  { text: 'entender o tempo, escolher a linguagem', highlight: false, size: 'small' },
  { text: 'e fazer o movimento acontecer.', highlight: false, size: 'small' },
  { text: '', size: 'spacer' },
  { text: 'Somos uma agência mineira. Trazemos no nosso jeito de trabalhar a proximidade, a atenção e a capacidade de construir junto.', highlight: false, size: 'small' },
]

const pillars = [
  { from: 'Intenção', to: 'Presença' },
  { from: 'Presença', to: 'Conexão' },
  { from: 'Conexão', to: 'Resultado' },
]

export default function ManifestoSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60])
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={sectionRef} className="relative py-32 bg-amarelo overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <PlanteWordmark variant="scriptStone" size={900} className="w-[78vw] min-w-[620px] opacity-25" alt="" />
      </motion.div>

      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }} className="absolute top-12 right-12 md:right-24 opacity-10">
        <LogoMark size={120} color="#000000" />
      </motion.div>

      <video
        className="absolute bottom-0 right-0 hidden w-[360px] opacity-20 mix-blend-multiply lg:block"
        src="/brand/plante-assinatura.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="section-padding relative z-10">
        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-display font-medium tracking-widest uppercase text-black/55 border border-black/20 rounded-full">
              Manifesto
            </span>
          </motion.div>

          <div className="space-y-2">
            {lines.map((line, i) => {
              if (line.size === 'spacer') return <div key={i} className="h-4" />

              const sizeClass =
                line.size === 'large'
                  ? 'text-3xl md:text-4xl lg:text-5xl font-bold'
                  : line.size === 'medium'
                  ? 'text-xl md:text-2xl lg:text-3xl font-semibold'
                  : 'text-lg md:text-xl font-medium'

              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className={`font-display leading-tight text-black ${sizeClass} ${line.highlight ? 'text-black/55' : ''}`}
                >
                  {line.text}
                </motion.p>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-16 pt-10 border-t border-black/15"
          >
            <p className="text-black/55 text-sm font-display font-medium mb-6 tracking-wide">
              É por isso que a Plante existe.
            </p>
            <div className="flex flex-wrap gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.15 }}
                  className="flex items-center gap-3 bg-black/10 rounded-full px-5 py-2.5"
                >
                  <span className="font-display font-bold text-black text-sm">{p.from}</span>
                  <span className="text-black/40 text-xs">→</span>
                  <span className="font-display font-bold text-black/60 text-sm">{p.to}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
