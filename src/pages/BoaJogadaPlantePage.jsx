import { useMemo, useState } from 'react'
import { CheckCircle2, Send, Sparkles } from 'lucide-react'
import LogoMark from '../components/LogoMark'

const storageKey = 'boaJogadaPlanteLeads'
const formName = 'boa-jogada-plante'

const lgpdConsentText =
  'Autorizo a Plante Comunicação a entrar em contato comigo pelo WhatsApp, e-mail ou Instagram sobre esta ação e sobre soluções de comunicação, marketing e redes sociais.'

const initialForm = {
  name: '',
  whatsapp: '',
  instagram: '',
  city: '',
  email: '',
  hasBusiness: '',
  businessName: '',
  answer: '',
  interest: '',
  consent: false,
  botField: '',
}

const interestOptions = [
  'Melhorar Instagram',
  'Criar campanhas',
  'Fazer fotos e vídeos',
  'Atrair mais clientes',
  'Comunicação completa',
  'Ainda não sei',
]

function formatBrazilianWhatsapp(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function getTrackingData() {
  const params = new URLSearchParams(window.location.search)

  return {
    token: params.get('token') || '',
    instagramUser: params.get('user') || '',
    mentionType: params.get('type') || '',
    directStatus: params.get('direct_status') || params.get('status') || '',
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
    landingUrl: window.location.href,
  }
}

function Header() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8">
      <div className="flex items-center gap-3">
        {/* Inserir futuramente o logo completo da Plante aqui, se preferirem substituir o símbolo. */}
        <LogoMark size={42} />
        <div>
          <p className="font-display text-sm font-bold leading-none text-grafite">Agência Plante</p>
          <p className="mt-1 text-xs font-medium text-grafite/55">Boa Jogada Plante</p>
        </div>
      </div>

      <div className="hidden items-center gap-3 rounded-full border border-grafite/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-grafite/65 shadow-sm backdrop-blur md:flex">
        {/* Logo do Geraes Open. Substituir o arquivo abaixo se a organização enviar versão oficial em alta. */}
        <img src="/brand/geraes-open-logo.jpg" alt="Geraes Open Brasil" className="h-9 w-9 rounded-full object-contain" />
        Geraes Open
      </div>
    </header>
  )
}

function PartnershipBadge() {
  return (
    <div className="inline-flex max-w-full items-center gap-3 rounded-3xl border border-grafite/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-grafite/60 shadow-sm backdrop-blur sm:rounded-full">
      <Sparkles size={14} className="text-grafite" />
      <span className="leading-snug">Ação especial da Plante em parceria com o Geraes Open</span>
      <img src="/brand/geraes-open-logo.jpg" alt="Geraes Open Brasil" className="h-8 w-8 shrink-0 rounded-full object-contain" />
    </div>
  )
}

function TennisCourtGraphic() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-20 top-28 h-72 w-72 rounded-full border border-grafite/10 md:h-96 md:w-96" />
      <div className="absolute -right-14 top-36 h-56 w-56 rounded-full border border-[#ece446]/70 md:h-80 md:w-80" />
      <div className="absolute bottom-14 left-4 h-44 w-[34rem] -rotate-12 rounded-[2rem] border border-grafite/10" />
      <div className="absolute bottom-28 left-20 h-px w-[28rem] -rotate-12 bg-grafite/10" />
      <div className="absolute bottom-4 right-8 h-16 w-16 rounded-full bg-[#ece446] shadow-[0_18px_60px_rgba(236,228,70,0.45)] md:right-20" />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-5 pb-8 pt-8 md:px-8 md:pb-16 md:pt-10">
      <div className="relative z-10">
        <PartnershipBadge />

        <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold leading-[0.9] tracking-tight text-grafite sm:text-6xl md:text-7xl">
          Boa Jogada Plante — Geraes Open
        </h1>

        <p className="mt-6 max-w-xl text-xl font-semibold leading-snug text-grafite">
          Entre no jogo e concorra a um brinde especial.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-grafite/68 md:text-lg">
          Na quadra, nas redes ou nos negócios, boa jogada é aquela que combina estratégia, presença e criatividade.
          Preencha seus dados, complete a frase e participe desta ação especial da Plante em parceria com o Geraes Open.
        </p>

        <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
          <div className="rounded-3xl border border-grafite/10 bg-white/70 p-5 shadow-sm backdrop-blur">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-grafite/45">Ativação</p>
            <p className="mt-3 text-lg font-bold text-grafite">Plante no Geraes Open</p>
          </div>
          <div className="rounded-3xl bg-grafite p-5 text-white shadow-xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white/38">Dinâmica</p>
            <p className="mt-3 text-lg font-bold">Ideias, contatos e boas jogadas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-grafite">
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-sm font-medium text-red-600">{error}</p>}
    </div>
  )
}

function ParticipationForm({ trackingData, onSuccess }) {
  const [form, setForm] = useState(() => ({
    ...initialForm,
    instagram: trackingData.instagramUser ? `@${trackingData.instagramUser.replace(/^@/, '')}` : '',
  }))
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const inputClass =
    'w-full rounded-2xl border border-grafite/12 bg-white px-4 py-4 text-base text-grafite outline-none transition focus:border-grafite focus:ring-4 focus:ring-[#ece446]/45 placeholder:text-grafite/30'

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
    setSubmitError('')
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Informe seu nome completo.'
    if (!form.whatsapp.trim()) nextErrors.whatsapp = 'Informe seu WhatsApp.'
    if (!form.instagram.trim()) nextErrors.instagram = 'Informe seu Instagram.'
    if (!form.city.trim()) nextErrors.city = 'Informe sua cidade.'
    if (!form.hasBusiness) nextErrors.hasBusiness = 'Selecione uma opção.'
    if (!form.answer.trim()) nextErrors.answer = 'Complete a frase para participar.'
    if (!form.interest) nextErrors.interest = 'Selecione seu principal interesse.'
    if (!form.consent) nextErrors.consent = 'Você precisa aceitar a autorização para participar.'
    return nextErrors
  }

  const encodeForm = (data) =>
    new URLSearchParams({
      'form-name': formName,
      ...data,
    }).toString()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    const participation = {
      ...form,
      action: 'Boa Jogada Plante',
      event: 'Geraes Open',
      consent: form.consent ? 'Autorizado' : 'Não autorizado',
      consentText: lgpdConsentText,
      createdAt: new Date().toISOString(),
      ...trackingData,
    }

    const isLocalPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname)

    try {
      const response = await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(participation),
      })

      if (!response.ok && !isLocalPreview) throw new Error('Form submission failed')

      const currentData = JSON.parse(localStorage.getItem(storageKey) || '[]')
      const updatedData = [...currentData, participation]
      localStorage.setItem(storageKey, JSON.stringify(updatedData))

      // Conectar futuramente com Google Sheets/API aqui.
      console.log('Boa Jogada Plante - participação registrada:', participation)

      setForm(initialForm)
      onSuccess()
    } catch {
      if (isLocalPreview) {
        console.log('Boa Jogada Plante - participação registrada em preview local:', participation)
        setForm(initialForm)
        onSuccess()
      } else {
        setSubmitError('Não foi possível registrar agora. Tente novamente em instantes.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="botField"
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-grafite/10 bg-white p-5 shadow-xl shadow-grafite/10 md:p-8"
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Não preencha este campo:
          <input name="botField" value={form.botField} onChange={(event) => updateField('botField', event.target.value)} />
        </label>
      </p>

      {Object.entries(trackingData).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} readOnly />
      ))}

      <div className="mb-7">
        <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-grafite/45">Complete a frase</p>
        <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-grafite md:text-3xl">
          “Uma boa jogada nas redes sociais é...”
        </h2>
      </div>

      <div className="grid gap-5">
        <Field label="Nome completo *" id="boa-jogada-name" error={errors.name}>
          <input id="boa-jogada-name" name="name" className={inputClass} value={form.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Seu nome" autoComplete="name" />
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="WhatsApp *" id="boa-jogada-whatsapp" error={errors.whatsapp}>
            <input id="boa-jogada-whatsapp" name="whatsapp" className={inputClass} value={form.whatsapp} onChange={(event) => updateField('whatsapp', formatBrazilianWhatsapp(event.target.value))} placeholder="(31) 99999-9999" inputMode="tel" autoComplete="tel" />
          </Field>

          <Field label="Instagram *" id="boa-jogada-instagram" error={errors.instagram}>
            <input id="boa-jogada-instagram" name="instagram" className={inputClass} value={form.instagram} onChange={(event) => updateField('instagram', event.target.value)} placeholder="@seuinstagram" autoComplete="off" />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Cidade *" id="boa-jogada-city" error={errors.city}>
            <input id="boa-jogada-city" name="city" className={inputClass} value={form.city} onChange={(event) => updateField('city', event.target.value)} placeholder="Sua cidade" autoComplete="address-level2" />
          </Field>

          <Field label="E-mail, opcional" id="boa-jogada-email">
            <input id="boa-jogada-email" name="email" type="email" className={inputClass} value={form.email} onChange={(event) => updateField('email', event.target.value)} placeholder="seu@email.com" autoComplete="email" />
          </Field>
        </div>

        <Field label="Você tem uma empresa, marca ou projeto? *" id="boa-jogada-has-business" error={errors.hasBusiness}>
          <select id="boa-jogada-has-business" name="hasBusiness" className={`${inputClass} cursor-pointer`} value={form.hasBusiness} onChange={(event) => updateField('hasBusiness', event.target.value)}>
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
            <option value="Estou criando uma ideia">Estou criando uma ideia</option>
          </select>
        </Field>

        {form.hasBusiness && form.hasBusiness !== 'Não' && (
          <Field label="Nome da empresa, marca ou projeto" id="boa-jogada-business-name">
            <input id="boa-jogada-business-name" name="businessName" className={inputClass} value={form.businessName} onChange={(event) => updateField('businessName', event.target.value)} placeholder="Nome do negócio, marca ou projeto" autoComplete="organization" />
          </Field>
        )}

        <Field label="Resposta criativa *" id="boa-jogada-answer" error={errors.answer}>
          <textarea id="boa-jogada-answer" name="answer" className={`${inputClass} min-h-36 resize-none leading-relaxed`} value={form.answer} onChange={(event) => updateField('answer', event.target.value)} placeholder="Uma boa jogada nas redes sociais é..." />
        </Field>

        <Field label="O que você mais quer melhorar? *" id="boa-jogada-interest" error={errors.interest}>
          <select id="boa-jogada-interest" name="interest" className={`${inputClass} cursor-pointer`} value={form.interest} onChange={(event) => updateField('interest', event.target.value)}>
            <option value="">Selecione um interesse</option>
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <div className="rounded-3xl bg-[#f7f5e8] p-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input type="checkbox" name="consent" checked={form.consent} onChange={(event) => updateField('consent', event.target.checked)} className="mt-1 h-5 w-5 rounded border-grafite/20 accent-grafite" />
            <span className="text-sm leading-relaxed text-grafite/70">{lgpdConsentText}</span>
          </label>
          {errors.consent && <p className="mt-2 pl-8 text-sm font-medium text-red-600">{errors.consent}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-grafite px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#ece446] hover:text-grafite disabled:cursor-wait disabled:opacity-70">
          {isSubmitting ? 'Enviando...' : 'Enviar minha boa jogada'}
          <Send size={18} className="transition group-hover:translate-x-1" />
        </button>

        {submitError && <p className="text-center text-sm font-medium text-red-600">{submitError}</p>}
      </div>
    </form>
  )
}

function SuccessMessage({ onReset }) {
  return (
    <div className="rounded-[2rem] border border-grafite/10 bg-white p-8 text-center shadow-xl shadow-grafite/10">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ece446] text-grafite">
        <CheckCircle2 size={34} />
      </div>
      <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-grafite">Boa jogada!</h2>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-grafite/68">
        Sua participação foi registrada com sucesso. Agora é torcer pelo brinde especial da Plante.
      </p>
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-grafite/40">
        Ação realizada pela Plante durante o Geraes Open.
      </p>
      <button type="button" onClick={onReset} className="mt-8 rounded-full border border-grafite/12 px-5 py-3 font-display text-sm font-bold text-grafite transition hover:border-grafite hover:bg-grafite hover:text-white">
        Registrar outra participação
      </button>
    </div>
  )
}

function Footer() {
  return (
    <footer className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-grafite/55 md:flex-row md:items-center md:justify-between md:px-8">
      <p>Agência Plante + Geraes Open</p>
      <p>Ação especial de relacionamento e criatividade.</p>
    </footer>
  )
}

export default function BoaJogadaPlantePage() {
  const [submitted, setSubmitted] = useState(false)
  const trackingData = useMemo(() => getTrackingData(), [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f5e8] font-sans text-grafite">
      <TennisCourtGraphic />
      <Header />
      <Hero />

      <section className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 px-5 pb-12 md:grid-cols-[0.82fr_1fr] md:px-8 md:pb-20">
        <div className="rounded-[2rem] border border-grafite/10 bg-white/70 p-6 shadow-sm backdrop-blur md:p-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-grafite/45">Plante no evento</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-grafite">
            Estratégia também entra em quadra.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-grafite/68">
            A Plante marca presença no Geraes Open com uma ativação pensada para conectar boas ideias, boas jogadas e novas oportunidades.
          </p>
          <div className="mt-6 rounded-3xl bg-[#ece446] p-5">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-grafite/55">Como participar</p>
            <p className="mt-3 text-lg font-bold leading-snug text-grafite">
              Publique sua foto marcando @agenciaplante, acesse o link recebido e complete sua boa jogada.
            </p>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-grafite/45">
            Política curta da campanha: os dados informados serão usados pela Plante Comunicação para registrar sua participação, conduzir esta ação e realizar contatos relacionados à comunicação, marketing e redes sociais, conforme autorização acima.
          </p>
        </div>

        {submitted ? (
          <SuccessMessage onReset={() => setSubmitted(false)} />
        ) : (
          <ParticipationForm trackingData={trackingData} onSuccess={() => setSubmitted(true)} />
        )}
      </section>

      <Footer />
    </div>
  )
}
