import { clientLogos } from '../content/siteContent'

export default function ClientLogoGrid() {
  return (
    <div className="grid grid-cols-2 border border-white/10 bg-white/[0.025] md:grid-cols-3 lg:grid-cols-4">
      {clientLogos.map((client) => (
        <div
          key={client.name}
          className="flex h-36 items-center justify-center border-b border-r border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.055] md:h-40"
        >
          <img
            src={client.image}
            alt={client.name}
            className={`${client.logoClass || 'max-h-16 max-w-[78%]'} object-contain opacity-80 transition-opacity duration-300 hover:opacity-100`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
