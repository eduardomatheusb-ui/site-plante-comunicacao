import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import LogoMark from './LogoMark'
import { services } from '../content/siteContent'

const formName = 'contato-plante'

const serviceOptions = [
  ...services.map((service) => service.title),
  'Não sei ainda',
]

export default function ContactForm() {
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

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const encodeForm = (data) =>
    new URLSearchParams({
      'form-name': formName,
      ...data,
    }).toString()

  const handleSubmit = async (event) => {
    event.preventDefault()
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

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[520px] flex-col items-center justify-center gap-6 bg-petrol-dark p-8 text-center"
      >
        <LogoMark size={72} />
        <div>
          <h3 className="mb-3 font-display text-2xl font-bold text-white">Mensagem enviada com sucesso.</h3>
          <p className="text-white/55">Em breve, a equipe da Plante entra em contato com você.</p>
        </div>
        <button onClick={() => setSent(false)} className="btn-outline text-sm">
          Enviar outra mensagem
        </button>
      </motion.div>
    )
  }

  return (
    <form name={formName} method="POST" data-netlify="true" netlify-honeypot="botField" onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Não preencha este campo:
          <input name="botField" value={form.botField} onChange={handleChange} />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block font-display text-xs text-white/40">Nome *</label>
          <input id="contact-name" type="text" name="name" required placeholder="Seu nome" value={form.name} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-company" className="mb-1.5 block font-display text-xs text-white/40">Empresa ou instituição</label>
          <input id="contact-company" type="text" name="company" placeholder="Nome da empresa" value={form.company} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block font-display text-xs text-white/40">E-mail *</label>
          <input id="contact-email" type="email" name="email" required placeholder="seu@email.com" value={form.email} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block font-display text-xs text-white/40">WhatsApp</label>
          <input id="contact-phone" type="tel" name="phone" placeholder="(31) 9 8524-5110" value={form.phone} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className="mb-1.5 block font-display text-xs text-white/40">O que você precisa?</label>
        <select id="contact-service" name="service" value={form.service} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
          <option value="" disabled>Selecione uma opção</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option} className="bg-petrol text-white">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block font-display text-xs text-white/40">Mensagem</label>
        <textarea id="contact-message" name="message" rows={5} placeholder="Conte um pouco mais sobre o seu projeto ou desafio..." value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 text-base">
        <Send size={16} />
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </button>

      {submitError && <p className="text-center text-xs text-red-300/80">{submitError}</p>}
    </form>
  )
}
