const bulbMap = {
  '#000000': '/brand/plante-bulb-dark.png',
  '#ffffff': '/brand/plante-bulb-white.png',
  white: '/brand/plante-bulb-white.png',
  dark: '/brand/plante-bulb-dark.png',
  yellow: '/brand/plante-bulb-yellow.png',
}

export default function LogoMark({
  className = '',
  color = 'yellow',
  size = 48,
  alt = 'Símbolo Plante',
}) {
  const src = bulbMap[color] || '/brand/plante-bulb-yellow.png'

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`brand-asset object-contain ${className}`}
      style={{ width: size, height: size }}
      loading="lazy"
    />
  )
}
