import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import LogoMark from './LogoMark'
import { OrganicCircle } from './AnimatedGraphicElement'
import { navigateTo } from '../lib/navigation'

export default function PageHero({ eyebrow, title, subtitle, ctaLabel, ctaHref }) {
  return (
    <section className="relative overflow-hidden bg-petrol pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 pointer-events-none">
        <OrganicCircle size={560} color="#F7FF19" opacity={0.035} className="absolute -right-40 -top-36" />
        <img
          src="/brand/plante-bulb-dark-yellow.png"
          alt=""
          className="absolute -right-24 bottom-0 hidden w-[420px] opacity-[0.1] mix-blend-multiply lg:block"
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </div>

      <div className="section-padding relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex items-center gap-3 mb-7"
        >
          <LogoMark size={40} />
          {eyebrow && <span className="tag">{eyebrow}</span>}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[0.95] text-white md:text-7xl lg:text-8xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-white/68 md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {ctaLabel && ctaHref && (
          <motion.button
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            onClick={() => navigateTo(ctaHref)}
            className="btn-primary mt-9"
          >
            {ctaLabel}
            <ArrowRight size={16} />
          </motion.button>
        )}
      </div>
    </section>
  )
}
