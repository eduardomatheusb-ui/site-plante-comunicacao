import { ArrowUpRight, FileText, Globe, Instagram, MessageCircle, Newspaper, Sparkles } from 'lucide-react'
import LogoMark from '../components/LogoMark'
import PlanteWordmark from '../components/PlanteWordmark'
import { contact } from '../content/siteContent'

const links = [
  {
    label: 'Site oficial',
    description: 'Conheça a Plante Comunicação',
    href: 'https://agenciaplante.com.br',
    Icon: Globe,
  },
  {
    label: 'Guia gratuito',
    description: 'Uso responsável de imagens de crianças e adolescentes',
    href: 'https://agenciaplante.com.br/guia-eca-digital',
    Icon: FileText,
  },
  {
    label: 'Falar pelo WhatsApp',
    description: 'Vamos conversar sobre sua marca ou projeto',
    href: contact.whatsappHref,
    Icon: MessageCircle,
  },
  {
    label: 'Projetos da Plante',
    description: 'Cases, campanhas e identidades',
    href: 'https://agenciaplante.com.br/projetos',
    Icon: Sparkles,
  },
  {
    label: 'Ideias em Movimento',
    description: 'Textos, bastidores e processos',
    href: 'https://agenciaplante.com.br/ideias-em-movimento',
    Icon: Newspaper,
  },
  {
    label: 'Instagram',
    description: '@agenciaplante',
    href: contact.instagramHref,
    Icon: Instagram,
  },
]

export default function BioLinksPage() {
  return (
    <section className="min-h-screen bg-grafite px-5 py-8 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col justify-between">
        <div>
          <div className="flex flex-col items-center text-center">
            <LogoMark size={58} />
            <PlanteWordmark variant="light" className="mt-5 w-[210px]" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Agência mineira de publicidade e marketing. Ideias que movimentam marcas.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {links.map(({ label, description, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-white/10 bg-white/[0.035] px-4 py-4 transition-colors hover:border-amarelo/60 hover:bg-amarelo hover:text-grafite"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-amarelo text-grafite transition-colors group-hover:bg-grafite group-hover:text-amarelo">
                  <Icon size={19} />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block font-display text-base font-bold leading-tight">{label}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-white/42 transition-colors group-hover:text-grafite/65">
                    {description}
                  </span>
                </span>
                <ArrowUpRight size={17} className="shrink-0 text-white/28 transition-colors group-hover:text-grafite" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center font-display text-[11px] uppercase tracking-[0.22em] text-white/25">
          Minas Gerais · Brasil
        </p>
      </div>
    </section>
  )
}
