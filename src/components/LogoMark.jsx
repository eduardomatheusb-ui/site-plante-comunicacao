export default function LogoMark({ className = '', color = '#E8FF00', size = 48 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer glow marks (rays) */}
      <ellipse cx="60" cy="8" rx="5" ry="9" fill={color} opacity="0.9" transform="rotate(-8 60 8)" />
      <ellipse cx="104" cy="22" rx="5" ry="9" fill={color} opacity="0.9" transform="rotate(50 104 22)" />
      <ellipse cx="112" cy="70" rx="5" ry="9" fill={color} opacity="0.85" transform="rotate(80 112 70)" />
      <ellipse cx="10" cy="62" rx="5" ry="9" fill={color} opacity="0.8" transform="rotate(-100 10 62)" />

      {/* Main bulb circle */}
      <circle cx="60" cy="62" r="44" fill={color} />

      {/* Inner figure silhouette (running person in the light) */}
      <ellipse cx="55" cy="62" rx="20" ry="18" fill="white" opacity="0.15" />

      {/* Person body */}
      <circle cx="55" cy="48" r="5" fill="#1C2B33" />
      <path
        d="M55 53 L50 65 L58 68 M55 53 L62 58 L68 55 M50 65 L46 76 M58 68 L60 76"
        stroke="#1C2B33"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bulb base */}
      <rect x="51" y="104" width="18" height="6" rx="3" fill={color} opacity="0.7" />
      <rect x="54" y="108" width="12" height="4" rx="2" fill={color} opacity="0.5" />
    </svg>
  )
}
