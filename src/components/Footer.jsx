import { motion } from 'framer-motion'
import { ArrowUpRight, Instagram, Mail, MessageCircle } from 'lucide-react'
import PlanteWordmark from './PlanteWordmark'
import { contact, navLinks, services } from '../content/siteContent'
import { handleInternalClick } from '../lib/navigation'

const socials = [
  { Icon: Instagram, href: contact.instagramHref, label: 'Instagram' },
  { Icon: MessageCircle, href: contact.whatsappHref, label: 'WhatsApp' },
  { Icon: Mail, href: `mailto:${contact.email}`, label: 'E-mail' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-grafite">
      <div className="section-padding py-16">
        <div className="grid gap-12 lg:grid-cols-[auto,1fr,1fr,1fr] lg:gap-16">
          <div>
            <div className="mb-5">
              <PlanteWordmark variant="light" size={190} className="w-[160px]" />
            </div>
            <p className="max-w-[250px] text-sm leading-relaxed text-white/45">
              Agência mineira de publicidade.
              <br />
              Ideias que movimentam marcas.
            </p>
            <p className="mt-3 font-display text-xs text-white/30">{contact.address}</p>
            <p className="mt-2 font-display text-xs text-white/30">{contact.domain}</p>

            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-white/45 transition-colors duration-200 hover:border-amarelo/30 hover:text-amarelo"
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-display text-xs font-medium uppercase tracking-widest text-white/30">Plante</p>
            <ul className="space-y-3">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleInternalClick(event, link.href)}
                    className="text-sm text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-display text-xs font-medium uppercase tracking-widest text-white/30">Serviços</p>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <a
                    href="/servicos"
                    onClick={(event) => handleInternalClick(event, '/servicos')}
                    className="text-sm text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-display text-xs font-medium uppercase tracking-widest text-white/30">Contato</p>
            <ul className="space-y-3">
              <li>
                <a href={contact.instagramHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-sm text-white/55 transition-colors duration-200 hover:text-white">
                  {contact.instagram}
                  <ArrowUpRight size={10} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="group flex items-center gap-1 text-sm text-white/55 transition-colors duration-200 hover:text-white">
                  {contact.email}
                  <ArrowUpRight size={10} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-sm text-white/55 transition-colors duration-200 hover:text-white">
                  {contact.whatsappLabel}
                  <ArrowUpRight size={10} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-padding border-t border-white/5 py-5">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-display text-xs text-white/25">
            © {new Date().getFullYear()} Plante Comunicação. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/20">Minas Gerais, Brasil.</p>
        </div>
      </div>
    </footer>
  )
}
