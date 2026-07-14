import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, Download } from 'lucide-react'
import { GUIDE_CAMPAIGN, GUIDE_DOWNLOAD_URL, guideSegments } from '../content/guideEcaDigital'
import { captureUtmParams, formatBrazilianPhone, normalizeBrazilianPhone, trackEvent, withPreservedUtms } from '../lib/campaignTracking'
import { handleInternalClick } from '../lib/navigation'

export function CampaignHeader() {
  return (
    <header className="border-b border-grafite/10 bg-[#f7f4e8]/95 px-5 py-4 backdrop-blur md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="/" onClick={(event) => handleInternalClick(event, '/')} className="flex items-center gap-3">
          <img src="/brand/plante-logo-dark.png" alt="Plante Comunicação" className="h-10 w-auto" />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-grafite/70 md:flex">
          <a href="#conteudo" className="hover:text-grafite">O que você vai encontrar</a>
          <a href="#publico" className="hover:text-grafite">Para quem é</a>
          <a href={withPreservedUtms(GUIDE_CAMPAIGN.blogPath)} onClick={(event) => handleInternalClick(event, withPreservedUtms(GUIDE_CAMPAIGN.blogPath))} className="hover:text-grafite">
            Artigo completo
          </a>
        </nav>
        <a href="#formulario-guia" className="rounded-full bg-grafite px-5 py-3 font-display text-sm font-bold text-white transition hover:bg-amarelo hover:text-grafite">
          Baixar o guia
        </a>
      </div>
    </header>
  )
}

export function GuideMockup() {
  return (
    <div className="relative overflow-hidden rounded-[1.7rem] border border-grafite/10 bg-white p-3 shadow-[12px_12px_0_#ECE446]">
      <img
        src="/brand/guide/eca-digital-guide-cover.jpg"
        alt="Capa do Guia de uso responsável de imagens de crianças e adolescentes."
        className="aspect-[0.707/1] w-full rounded-[1.25rem] object-cover"
      />
    </div>
  )
}

export function ContentSection({ eyebrow, title, children, className = '' }) {
  return (
    <section className={`bg-[#f7f4e8] py-20 text-grafite ${className}`}>
      <div className="section-padding mx-auto max-w-7xl">
        {eyebrow && <span className="tag border-grafite/20 text-grafite/60">{eyebrow}</span>}
        <div className="mt-5 grid gap-8 lg:grid-cols-[0.85fr,1.15fr]">
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">{title}</h2>
          <div className="space-y-5 text-lg leading-relaxed text-grafite/70">{children}</div>
        </div>
      </div>
    </section>
  )
}

export function GuideBenefits({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.title} className="rounded-2xl border border-grafite/10 bg-white p-6">
          <h3 className="font-display text-2xl font-bold">{item.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-grafite/65">{item.description}</p>
        </article>
      ))}
    </div>
  )
}

export function AudienceGrid({ items }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-white/80">
          <CheckCircle2 aria-hidden="true" className="shrink-0 text-amarelo" size={20} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export function WhatsAppCTA({ children = 'Conversar com a Plante', className = '' }) {
  return (
    <a
      href={GUIDE_CAMPAIGN.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('whatsapp_cta_click', { position: 'guide_campaign' })}
      className={`btn-primary ${className}`}
    >
      {children}
      <ArrowRight size={18} />
    </a>
  )
}

export function LegalNotice() {
  return (
    <p className="rounded-2xl border border-grafite/10 bg-white p-5 text-sm leading-relaxed text-grafite/55">
      Este material possui caráter orientativo e não substitui a análise jurídica de situações específicas.
    </p>
  )
}

export function BlogCTA({ position = 'article' }) {
  const href = withPreservedUtms(GUIDE_CAMPAIGN.landingPath)

  return (
    <aside className="my-12 rounded-[1.5rem] bg-grafite p-7 text-white shadow-[10px_10px_0_#F7FF19]">
      <p className="font-display text-2xl font-bold">Sua equipe sabe o que verificar antes de publicar?</p>
      <p className="mt-4 max-w-2xl text-white/70">
        Baixe o guia gratuito preparado pela Plante e compartilhe com as pessoas responsáveis por fotografar, selecionar, aprovar e publicar conteúdos na sua instituição.
      </p>
      <a
        href={href}
        onClick={(event) => {
          trackEvent('blog_cta_click', { position })
          handleInternalClick(event, href)
        }}
        className="mt-6 inline-flex rounded-full bg-amarelo px-6 py-3 font-display text-sm font-bold text-grafite transition hover:bg-amarelo-dark"
      >
        Baixar o guia
      </a>
    </aside>
  )
}

export function DownloadButton({ children = 'Baixar o guia', position = 'thank_you' }) {
  return (
    <a
      href={GUIDE_DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      download
      onClick={() => trackEvent('guide_download', { position })}
      className="btn-primary"
    >
      <Download size={18} />
      {children}
    </a>
  )
}

export function LeadCaptureForm({ compact = false, formId = 'formulario-guia' }) {
  const [values, setValues] = useState({
    name: '',
    organization: '',
    segment: '',
    email: '',
    whatsapp: '',
    consent: false,
    botField: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [utms, setUtms] = useState({})

  useEffect(() => {
    setUtms(captureUtmParams())
  }, [])

  const payload = useMemo(() => ({
    ...utms,
    referrer: typeof document !== 'undefined' ? document.referrer : '',
    landing_page: typeof window !== 'undefined' ? window.location.href : '',
    created_at: new Date().toISOString(),
  }), [utms])

  function update(field, value) {
    if (status === 'idle') trackEvent('lead_form_start', { field })
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
  }

  function validate() {
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Informe seu nome.'
    if (!values.organization.trim()) nextErrors.organization = 'Informe a instituição ou empresa.'
    if (!values.segment) nextErrors.segment = 'Selecione um segmento.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Informe um e-mail válido.'
    if (normalizeBrazilianPhone(values.whatsapp).length < 10) nextErrors.whatsapp = 'Informe um WhatsApp válido.'
    if (!values.consent) nextErrors.consent = 'É preciso aceitar para receber o material.'
    if (values.botField) nextErrors.form = 'Não foi possível enviar este formulário.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'sending') return
    if (!validate()) {
      trackEvent('lead_submit_error', { reason: 'validation' })
      setStatus('idle')
      return
    }

    setStatus('sending')
    const formData = new URLSearchParams()
    formData.set('form-name', 'guia-eca-digital')
    formData.set('name', values.name.trim())
    formData.set('organization', values.organization.trim())
    formData.set('segment', values.segment)
    formData.set('email', values.email.trim().toLowerCase())
    formData.set('whatsapp', normalizeBrazilianPhone(values.whatsapp))
    formData.set('consent', values.consent ? 'sim' : 'nao')
    formData.set('consent_text', 'Concordo em receber este material e outros conteúdos da Plante sobre comunicação e marketing. Posso cancelar o recebimento a qualquer momento.')
    formData.set('landing_page', payload.landing_page)
    formData.set('referrer', payload.referrer)
    formData.set('created_at', payload.created_at)
    Object.entries(utms).forEach(([key, value]) => formData.set(key, value || ''))

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })
      if (!response.ok) throw new Error('netlify_form_error')
      trackEvent('lead_submit_success', { segment: values.segment })
      window.history.replaceState({}, '', GUIDE_CAMPAIGN.thankYouPath)
      window.dispatchEvent(new CustomEvent('plante:navigate', { detail: { path: GUIDE_CAMPAIGN.thankYouPath } }))
    } catch {
      trackEvent('lead_submit_error', { reason: 'submit' })
      setErrors({ form: 'Não foi possível enviar agora. Tente novamente em alguns instantes.' })
      setStatus('idle')
    }
  }

  return (
    <form
      id={formId}
      name="guia-eca-digital"
      method="POST"
      data-netlify="true"
      netlify-honeypot="botField"
      onSubmit={handleSubmit}
      className={`rounded-[1.7rem] border border-grafite/10 bg-white p-6 text-grafite shadow-xl ${compact ? '' : 'md:p-8'}`}
    >
      <input type="hidden" name="form-name" value="guia-eca-digital" />
      <div className="hidden">
        <label>
          Não preencha este campo
          <input name="botField" value={values.botField} onChange={(event) => update('botField', event.target.value)} tabIndex="-1" autoComplete="off" />
        </label>
      </div>
      <div className="mb-6">
        <span className="tag border-grafite/20 text-grafite/50">Receba o guia</span>
        <h2 className="mt-4 font-display text-3xl font-bold">Receba o guia gratuitamente</h2>
        <p className="mt-2 text-sm leading-relaxed text-grafite/60">Preencha seus dados para acessar o material.</p>
      </div>

      {errors.form && <p className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-700" aria-live="polite">{errors.form}</p>}

      <div className="grid gap-4">
        <FormField label="Nome" error={errors.name}>
          <input className="form-input" value={values.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" />
        </FormField>
        <FormField label="Instituição ou empresa" error={errors.organization}>
          <input className="form-input" value={values.organization} onChange={(event) => update('organization', event.target.value)} autoComplete="organization" />
        </FormField>
        <FormField label="Segmento" error={errors.segment}>
          <select className="form-input" value={values.segment} onChange={(event) => update('segment', event.target.value)}>
            <option value="">Selecione</option>
            {guideSegments.map((segment) => <option key={segment} value={segment}>{segment}</option>)}
          </select>
        </FormField>
        <FormField label="E-mail" error={errors.email}>
          <input className="form-input" type="email" value={values.email} onChange={(event) => update('email', event.target.value)} autoComplete="email" />
        </FormField>
        <FormField label="WhatsApp" error={errors.whatsapp}>
          <input className="form-input" inputMode="tel" value={values.whatsapp} onChange={(event) => update('whatsapp', formatBrazilianPhone(event.target.value))} autoComplete="tel" />
        </FormField>
      </div>

      <label className="mt-5 flex gap-3 text-sm leading-relaxed text-grafite/70">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(event) => update('consent', event.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 rounded border-grafite/30 accent-grafite"
        />
        <span>
          Concordo em receber este material e outros conteúdos da Plante sobre comunicação e marketing. Posso cancelar o recebimento a qualquer momento.{' '}
          <a
            href={GUIDE_CAMPAIGN.privacyPath}
            onClick={(event) => {
              trackEvent('privacy_link_click', { position: 'form' })
              handleInternalClick(event, GUIDE_CAMPAIGN.privacyPath)
            }}
            className="font-semibold underline"
          >
            Política de Privacidade
          </a>
          .
        </span>
      </label>
      {errors.consent && <p className="mt-2 text-sm text-red-700" aria-live="polite">{errors.consent}</p>}

      <button disabled={status === 'sending'} className="mt-6 w-full rounded-full bg-grafite px-6 py-4 font-display text-sm font-bold text-white transition hover:bg-amarelo hover:text-grafite disabled:opacity-60">
        {status === 'sending' ? 'Enviando...' : 'Acessar o guia'}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-grafite/50">
        Seus dados serão utilizados para o envio do material e para comunicações da Plante. Você poderá cancelar o recebimento quando desejar.
      </p>
    </form>
  )
}

function FormField({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-grafite/75">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-red-700" aria-live="polite">{error}</span>}
    </label>
  )
}
