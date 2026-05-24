import { motion } from 'framer-motion'

export function OrganicCircle({ size = 300, color = '#F7FF19', opacity = 0.08, className = '', animate = true }) {
  return (
    <motion.div
      className={`rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        opacity,
        filter: 'blur(1px)',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      }}
      animate={animate ? {
        borderRadius: [
          '60% 40% 30% 70% / 60% 30% 70% 40%',
          '30% 60% 70% 40% / 50% 60% 30% 60%',
          '60% 40% 30% 70% / 60% 30% 70% 40%',
        ],
      } : {}}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export function FloatingDot({ size = 8, color = '#F7FF19', delay = 0, className = '' }) {
  return (
    <motion.div
      className={`rounded-full ${className}`}
      style={{ width: size, height: size, background: color }}
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

export function GrafismLine({ className = '', color = '#F7FF19' }) {
  return (
    <motion.svg
      viewBox="0 0 200 20"
      className={`w-24 h-3 ${className}`}
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <motion.path
        d="M2 10 C20 4, 40 16, 60 10 C80 4, 100 16, 120 10 C140 4, 160 16, 180 10 C190 6, 196 10, 198 10"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </motion.svg>
  )
}

export function BulbOutline({ size = 200, className = '', color = '#F7FF19' }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.circle
        cx="60"
        cy="62"
        r="43"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="6 4"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ originX: '60px', originY: '62px' }}
      />
      <circle cx="60" cy="62" r="36" stroke={color} strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="60" cy="8" rx="4" ry="7" fill={color} opacity="0.6" transform="rotate(-8 60 8)" />
      <ellipse cx="104" cy="22" rx="4" ry="7" fill={color} opacity="0.6" transform="rotate(50 104 22)" />
      <ellipse cx="112" cy="70" rx="4" ry="7" fill={color} opacity="0.5" transform="rotate(80 112 70)" />
      <ellipse cx="10" cy="62" rx="4" ry="7" fill={color} opacity="0.5" transform="rotate(-100 10 62)" />
      <rect x="51" y="104" width="18" height="5" rx="2.5" fill={color} opacity="0.5" />
    </motion.svg>
  )
}

export function TextureBlob({ className = '' }) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        background: 'radial-gradient(ellipse, rgba(232,255,0,0.06) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  )
}
