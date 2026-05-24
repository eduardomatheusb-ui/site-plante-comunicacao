import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import LogoMark from './LogoMark'
import PlanteWordmark from './PlanteWordmark'
import { OrganicCircle, FloatingDot, BulbOutline } from './AnimatedGraphicElement'

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-petrol overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <OrganicCircle
          size={600}
          color="#F7FF19"
          opacity={0.045}
          className="absolute -top-40 -right-40"
        />
        <OrganicCircle
          size={400}
          color="#F7FF19"
          opacity={0.035}
          className="absolute bottom-0 -left-32"
          animate={false}
        />

        <img
          src="/brand/plante-bulb-dark-yellow.png"
          alt=""
          className="absolute right-[-140px] top-1/2 hidden w-[560px] -translate-y-1/2 opacity-[0.14] mix-blend-multiply lg:block"
        />

        <BulbOutline
          size={480}
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 opacity-[0.08] hidden lg:block"
          color="#F7FF19"
        />

        <FloatingDot size={6} color="#F7FF19" delay={0} className="absolute top-1/3 left-[15%]" />
        <FloatingDot size={4} color="#F7FF19" delay={1} className="absolute top-1/2 left-[8%]" />
        <FloatingDot size={8} color="#F7FF19" delay={2} className="absolute bottom-1/3 right-[20%] hidden md:block" />
        <FloatingDot size={5} color="white" delay={1.5} className="absolute top-[20%] right-[30%] opacity-30 hidden md:block" />

        <div className="absolute top-[18%] left-0 right-0 h-px bg-white/8" />
        <div className="absolute bottom-[18%] left-0 right-0 h-px bg-white/8" />

        <div className="absolute left-6 top-1/2 -translate-y-1/2 writing-vertical text-white/20 text-xs tracking-[0.3em] font-display hidden lg:block">
          BETIM · MG · BRASIL
        </div>
      </div>

      <div className="section-padding relative z-10 pt-28 pb-16">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LogoMark size={42} />
            </motion.div>
            <span className="tag">Agência de comunicação</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-10"
          >
            <PlanteWordmark
              variant="light"
              size={380}
              className="w-[240px] sm:w-[320px] md:w-[380px]"
            />
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.92]"
            >
              Ideias que
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.92]"
            >
              <span className="text-gradient-yellow">movimentam</span>
            </motion.div>
          </div>

          <div className="overflow-hidden mb-12">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.92]"
            >
              marcas.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            Somos uma agência de publicidade que une estratégia, criação, conteúdo e performance
            para transformar ideias em presença, conexão e resultado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <button onClick={scrollToAbout} className="btn-primary">
              Conheça a Plante
            </button>
            <button
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              Fale com a gente
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="relative z-10 border-t border-white/10 overflow-hidden"
      >
        <div className="marquee-track py-4 text-white/25 text-xs font-display tracking-[0.25em] uppercase select-none">
          {Array(12).fill(null).map((_, i) => (
            <span key={i} className="mx-8 whitespace-nowrap">
              Estratégia · Criação · Branding · Conteúdo · Performance · Audiovisual · Comunicação
            </span>
          ))}
        </div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 right-8 md:right-12 flex flex-col items-center gap-2 text-white/35 hover:text-amarelo transition-colors group"
      >
        <span className="text-[10px] font-display tracking-widest uppercase writing-vertical">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
