import { motion } from 'framer-motion'
import LogoMark from './LogoMark'
import { Instagram, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'

const navGroups = [
  {
    title: 'Plante',
    links: [
      { label: 'Quem somos', href: '#sobre' },
      { label: 'Método', href: '#metodo' },
      { label: 'Ideias em movimento', href: '#ideias' },
    ],
  },
  {
    title: 'Serviços',
    links: [
      { label: 'Estratégia e Planejamento', href: '#servicos' },
      { label: 'Branding e Identidade', href: '#servicos' },
      { label: 'Conteúdo e Redes Sociais', href: '#servicos' },
      { label: 'Tráfego Pago', href: '#servicos' },
      { label: 'Audiovisual', href: '#servicos' },
      { label: 'Projetos Digitais', href: '#servicos' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: '@plantecomunicacao', href: 'https://instagram.com/plantecomunicacao', external: true },
      { label: 'contato@plantecomunicacao.com.br', href: 'mailto:contato@plantecomunicacao.com.br', external: true },
      { label: 'WhatsApp', href: 'https://wa.me/5531900000000', external: true },
    ],
  },
]

const socials = [
  { Icon: Instagram, href: 'https://instagram.com/plantecomunicacao', label: 'Instagram' },
  { Icon: MessageCircle, href: 'https://wa.me/5531900000000', label: 'WhatsApp' },
  { Icon: Mail, href: 'mailto:contato@plantecomunicacao.com.br', label: 'E-mail' },
]

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-grafite border-t border-white/5">
      {/* Main footer */}
      <div className="section-padding py-16">
        <div className="grid lg:grid-cols-[auto,1fr,1fr,1fr] gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <LogoMark size={36} />
              <span className="font-display font-bold text-white text-lg tracking-tight">PLANTE</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
              Comunicação com intenção, estratégia e criação.
            </p>
            <p className="text-white/25 text-xs mt-3 font-display">Betim, MG — Brasil</p>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-amarelo hover:border-amarelo/30 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <p className="text-white/25 text-xs font-display font-medium tracking-widest uppercase mb-4">
                {group.title}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/50 hover:text-white text-sm flex items-center gap-1 group transition-colors duration-200"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={10}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-white/50 hover:text-white text-sm text-left transition-colors duration-200"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 section-padding py-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs font-display">
            © {new Date().getFullYear()} Plante Comunicação. Todos os direitos reservados.
          </p>
          <p className="text-white/15 text-xs">
            Plantamos ideias. Movimentamos marcas.
          </p>
        </div>
      </div>
    </footer>
  )
}
