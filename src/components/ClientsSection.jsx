import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const segments = [
  'Poder Público', 'Educação', 'Saúde', 'Engenharia',
  'Terceiro Setor', 'Comércio & Serviços', 'Política Institucional', 'Projetos Culturais',
]

export default function ClientsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-petrol border-t border-white/6">

      {/* Full-width statement */}
      <div className="section-padding py-20 border-b border-white/6">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-4xl md:text-5xl text-white leading-[0.95] tracking-tight"
          >
            Mais do que segmentos,<br />
            <span className="text-gradient-yellow">mergulhamos em contextos.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-base md:text-lg leading-relaxed"
          >
            A Plante atua com marcas, instituições e projetos que precisam comunicar melhor.
            Cada cliente chega com um desafio único e a gente entra fundo nesse contexto.
          </motion.p>
        </div>
      </div>

      {/* Segments — horizontal ticker-style */}
      <div className="py-10 border-b border-white/6 overflow-hidden">
        <div className="marquee-track gap-0">
          {[...segments, ...segments].map((seg, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-display font-bold text-2xl md:text-3xl text-white/15 whitespace-nowrap px-8">
                {seg}
              </span>
              <span className="w-2 h-2 rounded-full bg-amarelo/30 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Segments grid */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/6">
          {segments.map((seg, i) => (
            <motion.div
              key={seg}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-petrol p-6 md:p-8 group hover:bg-petrol-mid transition-colors duration-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amarelo/40 mb-4 group-hover:bg-amarelo transition-colors duration-300" />
              <p className="font-display font-semibold text-white/55 group-hover:text-white text-sm leading-tight transition-colors duration-300">
                {seg}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logos placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 border border-dashed border-white/10 rounded-xl p-10 text-center"
        >
          <p className="text-white/20 text-sm font-display">Logos dos clientes serão adicionadas aqui</p>
        </motion.div>
      </div>
    </section>
  )
}
