const logoMap = {
  light: '/brand/plante-logo-light-yellow.png',
  white: '/brand/plante-logo-white.png',
  dark: '/brand/plante-logo-dark-yellow.png',
  black: '/brand/plante-logo-dark.png',
  script: '/brand/plante-script-yellow.png',
  scriptWhite: '/brand/plante-script-white.png',
  scriptStone: '/brand/plante-script-stone.png',
}

export default function PlanteWordmark({
  className = '',
  variant = 'light',
  size = 220,
  alt = 'Plante - Ideias que movimentam',
}) {
  return (
    <img
      src={logoMap[variant] || logoMap.light}
      alt={alt}
      width={size}
      className={`brand-asset object-contain ${className}`}
      loading="lazy"
    />
  )
}
