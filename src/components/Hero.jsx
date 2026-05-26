import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import LogoMark from './LogoMark'
import { navigateTo } from '../lib/navigation'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-petrol">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src="/brand/plante-8-anos-web.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/24" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 right-0 top-[18%] h-px bg-white/8" />
        <div className="absolute bottom-[18%] left-0 right-0 h-px bg-white/8" />

        <div className="writing-vertical absolute left-6 top-1/2 hidden -translate-y-1/2 font-display text-xs tracking-[0.3em] text-white/20 lg:block">
          MINAS GERAIS · BRASIL
        </div>
      </div>

      <div className="section-padding relative z-10 pb-16 pt-28">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex items-center gap-3"
          >
            <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
              <LogoMark size={42} />
            </motion.div>
            <span className="tag">Agência mineira de publicidade e marketing</span>
          </motion.div>

          <div className="mb-1 overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-bold leading-[0.86] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              Ideias que
            </motion.h1>
          </div>

          <div className="mb-2 overflow-hidden">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-bold leading-[0.86] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              <span className="text-gradient-yellow">movimentam</span>
            </motion.div>
          </div>

          <div className="mb-12 overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-bold leading-[0.86] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              marcas.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
          >
            Somos uma agência mineira de publicidade e marketing que une estratégia, criação, gestão de marketing e posicionamento de negócio para transformar ideias em marcas mais fortes, reconhecidas e preparadas para crescer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <button onClick={() => navigateTo('/quem-somos')} className="btn-primary">
              Conheça a Plante
            </button>
            <button onClick={() => navigateTo('/contato')} className="btn-outline">
              Fale com a gente
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="relative z-10 overflow-hidden border-t border-white/10"
      >
        <div className="marquee-track select-none py-4 font-display text-xs uppercase tracking-[0.25em] text-white/25">
          {Array(12).fill(null).map((_, index) => (
            <span key={index} className="mx-8 whitespace-nowrap">
              Estratégia · Marketing · Branding · Campanhas · Posicionamento de negócio · Audiovisual · Comunicação institucional
            </span>
          ))}
        </div>
      </motion.div>

      <motion.button
        onClick={() => navigateTo('/quem-somos')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="group absolute bottom-24 right-8 z-10 flex flex-col items-center gap-2 text-white/35 transition-colors hover:text-amarelo md:right-12"
      >
        <span className="writing-vertical font-display text-[10px] uppercase tracking-widest">ver mais</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
