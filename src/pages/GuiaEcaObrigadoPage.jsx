import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { GUIDE_CAMPAIGN } from '../content/guideEcaDigital'
import { trackEvent, withPreservedUtms } from '../lib/campaignTracking'
import { CampaignHeader, DownloadButton, GuideMockup, WhatsAppCTA } from '../components/GuideCampaign'
import { handleInternalClick } from '../lib/navigation'

export default function GuiaEcaObrigadoPage() {
  useEffect(() => {
    trackEvent('view_guide_thank_you')
  }, [])

  const blogUrl = withPreservedUtms(GUIDE_CAMPAIGN.blogPath)

  return (
    <div className="min-h-screen bg-[#f7f4e8] text-grafite">
      <CampaignHeader />
      <section className="section-padding mx-auto grid max-w-7xl gap-10 py-16 lg:grid-cols-[0.9fr,1.1fr] lg:items-center lg:py-24">
        <div>
          <span className="tag border-grafite/20 text-grafite/60">Guia liberado</span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] md:text-7xl">Seu guia está pronto</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-grafite/70">
            Obrigado por se cadastrar. Agora você já pode acessar o Guia de uso responsável de imagens de crianças e adolescentes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <DownloadButton position="thank_you_primary" />
            <a
              href={blogUrl}
              onClick={(event) => handleInternalClick(event, blogUrl)}
              className="inline-flex items-center gap-2 rounded-full border border-grafite/20 px-7 py-3.5 font-display text-sm font-semibold text-grafite transition hover:border-grafite"
            >
              Ler o artigo completo
              <ArrowRight size={18} />
            </a>
          </div>
          <p className="mt-6 max-w-2xl text-grafite/60">
            Compartilhe o material com as pessoas que fotografam, recebem, aprovam ou publicam conteúdos na sua instituição.
          </p>
        </div>
        <GuideMockup />
      </section>

      <section className="bg-grafite py-20 text-white">
        <div className="section-padding mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">Sua instituição usa imagens de crianças com frequência?</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
              A Plante também pode ajudar a organizar o fluxo de recebimento, análise e publicação desses conteúdos.
            </p>
          </div>
          <WhatsAppCTA />
        </div>
      </section>
    </div>
  )
}
