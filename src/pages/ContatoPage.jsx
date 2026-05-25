import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import { contact } from '../content/siteContent'

const contactItems = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: contact.whatsappLabel,
    href: contact.whatsappHref,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: contact.instagram,
    href: contact.instagramHref,
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: `${contact.location} · ${contact.address}`,
  },
]

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos movimentar sua marca?"
        subtitle="Conte para a Plante o que você precisa comunicar. A gente ajuda a transformar essa ideia em estratégia, campanha, conteúdo e posicionamento."
      />

      <section className="bg-petrol-dark py-24">
        <div className="section-padding grid gap-14 lg:grid-cols-[0.85fr,1.15fr]">
          <div>
            <span className="tag mb-5">Fale com a gente</span>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Envie uma mensagem ou chame direto no WhatsApp.
            </h2>
            <div className="mt-10 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/5 text-amarelo">
                      <Icon size={17} />
                    </div>
                    <div>
                      <p className="font-display text-xs text-white/35">{item.label}</p>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-white/75">{item.value}</p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block transition-opacity hover:opacity-75">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
