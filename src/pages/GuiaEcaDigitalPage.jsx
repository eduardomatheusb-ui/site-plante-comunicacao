import { useEffect } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { GUIDE_CAMPAIGN } from '../content/guideEcaDigital'
import { captureUtmParams, trackEvent } from '../lib/campaignTracking'
import { handleInternalClick } from '../lib/navigation'
import { CampaignHeader, GuideMockup, LeadCaptureForm, LegalNotice, WhatsAppCTA } from '../components/GuideCampaign'

const guideTopics = [
  'autorização de imagem',
  'fotos e vídeos em eventos',
  'informações pessoais e localização',
  'anúncios e campanhas',
  'saúde, deficiência e situações sensíveis',
  'inteligência artificial',
  'checklist antes de publicar',
]

export default function GuiaEcaDigitalPage() {
  useEffect(() => {
    captureUtmParams()
    trackEvent('view_guide_landing')
  }, [])

  return (
    <div className="min-h-screen bg-[#f7f4e8] text-grafite">
      <CampaignHeader />

      <section className="section-padding mx-auto grid max-w-7xl gap-12 py-14 lg:grid-cols-[0.95fr,1.05fr] lg:items-center lg:py-20">
        <div>
          <span className="tag border-grafite/20 text-grafite/60">Material gratuito</span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[0.96] md:text-7xl">
            Boas histórias também merecem cuidado.
          </h1>
          <div className="mt-7 max-w-2xl space-y-5 text-lg leading-relaxed text-grafite/70">
            <p>
              Baixe o guia preparado pela Plante e veja como usar imagens de crianças e adolescentes com mais segurança, clareza e responsabilidade.
            </p>
            <p>
              Um material prático para escolas, clínicas, projetos, instituições e equipes de comunicação.
            </p>
          </div>
          <a href="#formulario-guia" className="btn-primary mt-8">
            Baixar o guia gratuito
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr,1fr] lg:items-start">
          <GuideMockup />
          <LeadCaptureForm />
        </div>
      </section>

      <section id="conteudo" className="bg-white py-20 text-grafite">
        <div className="section-padding mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div>
            <span className="tag border-grafite/20 text-grafite/60">O que você vai encontrar</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Um guia para ajudar nas decisões antes da publicação.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-grafite/65">Orientações simples sobre:</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {guideTopics.map((topic) => (
                <div key={topic} className="flex items-start gap-3 border-b border-grafite/10 pb-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-grafite" size={20} aria-hidden="true" />
                  <span className="text-base leading-relaxed text-grafite/72">{topic};</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="publico" className="bg-grafite py-20 text-white">
        <div className="section-padding mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div>
            <span className="tag">Para quem é</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Feito para quem comunica o trabalho de instituições que convivem com crianças e adolescentes.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-white/70">
            <p>
              Escolas, clínicas, projetos sociais, instituições especializadas, igrejas, órgãos públicos, empresas e profissionais de comunicação.
            </p>
            <p>
              O objetivo não é impedir registros. É ajudar sua equipe a fazer escolhas melhores, proteger quem aparece nas imagens e evitar exposições desnecessárias.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4e8] py-20 text-grafite">
        <div className="section-padding mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr,auto] lg:items-center">
          <div>
            <span className="tag border-grafite/20 text-grafite/60">Plante Comunicação</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Comunicação bem cuidada começa antes da publicação.
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-grafite/68">
              <p>Na Plante, nosso trabalho não termina quando uma arte fica pronta.</p>
              <p>
                Também ajudamos escolas, clínicas, empresas e instituições a organizar processos, orientar equipes e encontrar maneiras mais seguras e estratégicas de comunicar o trabalho que realizam.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="/quem-somos"
              onClick={(event) => handleInternalClick(event, '/quem-somos')}
              className="btn-primary"
            >
              Conhecer a Plante
              <ArrowRight size={18} />
            </a>
            <WhatsAppCTA>Conversar com nossa equipe</WhatsAppCTA>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4e8] pb-10 text-grafite">
        <div className="section-padding mx-auto max-w-7xl">
          <LegalNotice />
        </div>
      </section>
    </div>
  )
}
