import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, MapPin, Instagram, Mail, MessageCircle } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { OrganicCircle } from './AnimatedGraphicElement'
import LogoMark from './LogoMark'
import PlanteWordmark from './PlanteWordmark'

const formName = 'contato-plante'
const whatsappUrl = 'https://wa.me/5531985245110?text=Ol%C3%A1%2C%20Plante.%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20comunica%C3%A7%C3%A3o%20para%20minha%20marca%20ou%20projeto.'

const serviceOptions = [
  'Estratégia e Planejamento',
  'Gestão de Redes Sociais',
  'Branding e Identidade Visual',
  'Campanhas Publicitárias',
  'Produção Audiovisual',
  'Tráfego Pago e Mídia Digital',
  'Comunicação Institucional',
  'Projetos Digitais',
  'Não sei ainda',
]

const contacts = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '(31) 9 8524-5110',
    href: whatsappUrl,
    color: '#25D366',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@agenciaplante',
    href: 'https://instagram.com/agenciaplante',
    color: '#F7FF19',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@agenciaplante.com.br',
    href: 'mailto:contato@agenciaplante.com.br',
    color: '#F7FF19',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Av. Governador Valadares, 355 - Sl 301, Centro - Betim/MG',
    href: null,
    color: '#F7FF19',
  },
]

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    botField: '',
  })
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const encodeForm = (data) =>
    new URLSearchParams({
      'form-name': formName,
      ...data,
    }).toString()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    const isLocalPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname)

    try {
      const response = await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(form),
      })

      if (!response.ok && !isLocalPreview) throw new Error('Form submission failed')

      setSent(true)
      setForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        botField: '',
      })
    } catch {
      if (isLocalPreview) {
        setSent(true)
      } else {
        setSubmitError('Não foi possível enviar agora. Tente novamente ou fale com a gente pelo WhatsApp.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full bg-petrol-mid border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-amarelo/60 transition-colors duration-200 font-sans'

  return (
    <section id="contato" className="relative py-28 bg-petrol-dark overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <OrganicCircle size={700} color="#F7FF19" opacity={0.03} className="absolute -bottom-48 -right-48" />
        <OrganicCircle size={400} color="#F7FF19" opacity={0.025} className="absolute -top-24 -left-24" />
        <img src="/brand/plante-script-stone.png" alt="" className="absolute bottom-8 right-8 hidden w-[420px] opacity-[0.07] lg:block" />
      </div>

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div ref={ref}>
            <SectionTitle
              tag="Contato"
              title={<>Vamos movimentar<br /><span className="text-gradient-yellow">sua marca?</span></>}
              subtitle="Conte para a Plante o que você precisa comunicar. A gente ajuda a transformar essa ideia em estratégia, campanha, conteúdo e presença."
            />

            <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 space-y-4">
              {contacts.map((contact, i) => {
                const Icon = contact.icon
                const inner = (
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-petrol-mid flex items-center justify-center shrink-0">
                      <Icon size={16} style={{ color: contact.color }} />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-display">{contact.label}</p>
                      <p className="text-white/80 text-sm font-medium">{contact.value}</p>
                    </div>
                  </div>
                )

                return contact.href ? (
                  <a key={i} href={contact.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                    {inner}
                  </a>
                ) : (
                  <div key={i}>{inner}</div>
                )
              })}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="mt-12 opacity-25">
              <PlanteWordmark variant="white" size={210} className="w-[170px]" />
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            {!sent ? (
              <form name={formName} method="POST" data-netlify="true" netlify-honeypot="botField" onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="form-name" value={formName} />
                <p className="hidden">
                  <label>
                    Não preencha este campo:
                    <input name="botField" value={form.botField} onChange={handleChange} />
                  </label>
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-white/40 text-xs font-display mb-1.5 block">Nome *</label>
                    <input id="contact-name" type="text" name="name" required placeholder="Seu nome" value={form.name} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="text-white/40 text-xs font-display mb-1.5 block">Empresa ou instituição</label>
                    <input id="contact-company" type="text" name="company" placeholder="Nome da empresa" value={form.company} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="text-white/40 text-xs font-display mb-1.5 block">E-mail *</label>
                    <input id="contact-email" type="email" name="email" required placeholder="seu@email.com" value={form.email} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="text-white/40 text-xs font-display mb-1.5 block">WhatsApp</label>
                    <input id="contact-phone" type="tel" name="phone" placeholder="(31) 9 8524-5110" value={form.phone} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="text-white/40 text-xs font-display mb-1.5 block">O que você precisa?</label>
                  <select id="contact-service" name="service" value={form.service} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                    <option value="" disabled>Selecione um serviço</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-petrol text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-white/40 text-xs font-display mb-1.5 block">Mensagem</label>
                  <textarea id="contact-message" name="message" rows={4} placeholder="Conte um pouco mais sobre o seu projeto ou desafio..." value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center text-base py-4 mt-2">
                  <Send size={16} />
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </button>

                {submitError && <p className="text-red-300/80 text-xs text-center">{submitError}</p>}

                <p className="text-white/20 text-xs text-center">
                  Ou fale diretamente pelo{' '}
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-amarelo/60 hover:text-amarelo underline">
                    WhatsApp
                  </a>
                </p>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center py-16 gap-6">
                <LogoMark size={64} />
                <div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    Mensagem enviada com sucesso.
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    Em breve, a equipe da Plante entra em contato com você.
                  </p>
                </div>
                <button onClick={() => setSent(false)} className="btn-outline text-sm">
                  Enviar outra mensagem
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
