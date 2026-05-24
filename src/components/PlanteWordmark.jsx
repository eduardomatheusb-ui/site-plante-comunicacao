export default function PlanteWordmark({ className = '', color = '#ffffff', size = 160 }) {
  const ratio = 908 / 200
  const height = size / ratio

  return (
    <svg
      width={size}
      height={height * 3.2}
      viewBox="0 0 908 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="454"
        y="220"
        textAnchor="middle"
        fontFamily="Space Grotesk, Inter, sans-serif"
        fontWeight="700"
        fontSize="240"
        letterSpacing="-8"
        fill={color}
      >
        PLANTE
      </text>
    </svg>
  )
}
