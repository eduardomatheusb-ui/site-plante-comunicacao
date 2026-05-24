import { motion } from 'framer-motion'
import { Instagram, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'
import PlanteWordmark from './PlanteWordmark'

const whatsappUrl = 'https://wa.me/5531985245110?text=Ol%C3%A1%2C%20Plante.%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20comunica%C3%A7%C3%A3o%20para%20minha%20marca%20ou%20projeto.'

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
      { label: 'Estratégia e planejamento', href: '#servicos' },
      { label: 'Gestão de redes sociais', href: '#servicos' },
      { label: 'Branding e identidade visual', href: '#servicos' },
      { label: 'Campanhas publicitárias', href: '#servicos' },
      { label: 'Comunicação institucional', href: '#servicos' },
      { label: 'Projetos digitais', href: '#servicos' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: '@agenciaplante', href: 'https://instagram.com/agenciaplante', external: true },
      { label: 'contato@agenciaplante.com.br', href: 'mailto:contato@agenciaplante.com.br', external: true },
      { label: 'WhatsApp', href: whatsappUrl, external: true },
    ],
  },
]

const socials = [
  { Icon: Instagram, href: 'https://instagram.com/agenciaplante', label: 'Instagram' },
  { Icon: MessageCircle, href: whatsappUrl, label: 'WhatsApp' },
  { Icon: Mail, href: 'mailto:contato@agenciaplante.com.br', label: 'E-mail' },
]

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-grafite border-t border-white/5">
      <div className="section-padding py-16">
        <div className="grid lg:grid-cols-[auto,1fr,1fr,1fr] gap-12 lg:gap-16">
          <div>
            <div className="mb-5">
              <PlanteWordmark variant="light" size={190} className="w-[160px]" />
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-[240px]">
              Agência mineira de publicidade que une estratégia, criação, conteúdo e posicionamento.
            </p>
            <p className="text-white/30 text-xs mt-3 font-display">Av. Governador Valadares, 355 - Sl 301, Centro - Betim/MG</p>
            <p className="text-white/30 text-xs mt-2 font-display">www.agenciaplante.com.br</p>

            <div className="flex gap-3 mt-6">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/45 hover:text-amarelo hover:border-amarelo/30 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {navGroups.map((group) => (
            <div key={group.title}>
              <p className="text-white/30 text-xs font-display font-medium tracking-widest uppercase mb-4">
                {group.title}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white text-sm flex items-center gap-1 group transition-colors duration-200">
                        {link.label}
                        <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <button onClick={() => scrollTo(link.href)} className="text-white/55 hover:text-white text-sm text-left transition-colors duration-200">
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

      <div className="border-t border-white/5 section-padding py-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-xs font-display">
            © {new Date().getFullYear()} Plante Comunicação. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Ideias que movimentam marcas, pessoas e projetos.
          </p>
        </div>
      </div>
    </footer>
  )
}
