import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const pillars = [
  { label: 'Escuta', desc: 'Antes de qualquer criação, existe uma escuta real.' },
  { label: 'Estratégia', desc: 'Planejamento antes do post, da peça, da campanha.' },
  { label: 'Criação', desc: 'Forma, linguagem e conceito com intenção.' },
  { label: 'Movimento', desc: 'Presença que gera conexão, reconhecimento e resultado.' },
]

const stats = [
  { n: '8', label: 'anos de atuação' },
  { n: '360°', label: 'visão de comunicação' },
  { n: 'MG', label: 'identidade mineira' },
  { n: '+', label: 'estratégia, criação e execução' },
]

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="sobre" className="bg-grafite-mid">
      <div ref={ref} className="section-padding pt-24 pb-16 border-b border-white/6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tag mb-8 inline-block"
        >
          Quem somos
        </motion.span>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight max-w-4xl"
          >
            Agência mineira que pensa<br />
            <span className="text-gradient-yellow">antes de criar.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-1 text-right hidden lg:flex"
          >
            <span className="text-white/20 text-xs font-display tracking-widest uppercase">Minas Gerais</span>
            <span className="text-white/20 text-xs font-display tracking-widest uppercase">Brasil</span>
            <span className="text-white/20 text-xs font-display tracking-widest uppercase">8 anos</span>
          </motion.div>
        </div>
      </div>

      <div ref={ref2} className="grid lg:grid-cols-2">
        <div className="section-padding py-16 border-b lg:border-b-0 lg:border-r border-white/6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-white/65 text-base md:text-lg leading-relaxed max-w-xl"
          >
            <p>
              A Plante Comunicação é uma agência mineira de publicidade que une estratégia, criação, conteúdo e posicionamento para movimentar marcas, instituições e projetos.
            </p>
            <p>
              Acreditamos que uma boa ideia não nasce pronta. Ela precisa ser escutada, planejada, criada e colocada em movimento. Por isso, nosso trabalho combina repertório, sensibilidade, análise e execução para construir marcas mais presentes, reconhecidas e conectadas com seus públicos.
            </p>
            <p>
              Atuamos com comunicação de forma completa, desde o diagnóstico e o posicionamento até a criação de campanhas institucionais, gestão de redes sociais, produção audiovisual, tráfego pago, branding, projetos digitais e comunicação institucional.
            </p>
            <p>
              Somos de Minas. A Plante nasce daqui e pensa comunicação para marcas, instituições e projetos que querem crescer com mais clareza, presença e intenção.
            </p>
            <p className="text-white/85 font-medium">
              Mais do que produzir peças, a Plante cria caminhos de comunicação.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-px bg-white/6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0 }}
                animate={inView2 ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-grafite-mid p-5 hover:bg-petrol-mid transition-colors duration-300"
              >
                <p className="font-display font-bold text-white text-sm mb-1">{p.label}</p>
                <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 divide-x divide-y divide-white/6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView2 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="flex flex-col justify-between p-8 md:p-10 bg-grafite-mid hover:bg-petrol-mid transition-colors duration-300 group"
            >
              <span className="font-display font-bold text-5xl md:text-6xl text-amarelo leading-none group-hover:scale-105 transition-transform duration-300 origin-left">
                {s.n}
              </span>
              <span className="text-white/40 text-xs font-display mt-6 leading-tight">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
