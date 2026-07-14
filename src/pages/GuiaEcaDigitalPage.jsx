import { useEffect } from 'react'
import { ArrowRight, Camera, FileCheck2, LockKeyhole, MapPinOff, Sparkles } from 'lucide-react'
import { GUIDE_CAMPAIGN, guideAudiences, guideBenefits } from '../content/guideEcaDigital'
import { captureUtmParams, trackEvent, withPreservedUtms } from '../lib/campaignTracking'
import { handleInternalClick } from '../lib/navigation'
import {
  AudienceGrid,
  CampaignHeader,
  ContentSection,
  GuideBenefits,
  GuideMockup,
  LeadCaptureForm,
  LegalNotice,
  WhatsAppCTA,
} from '../components/GuideCampaign'

export default function GuiaEcaDigitalPage() {
  useEffect(() => {
    captureUtmParams()
    trackEvent('view_guide_landing')
  }, [])

  return (
    <div className="min-h-screen bg-[#f7f4e8] text-grafite">
      <CampaignHeader />

      <section className="section-padding mx-auto grid max-w-7xl gap-10 py-16 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:py-24">
        <div>
          <span className="tag border-grafite/20 text-grafite/60">Material gratuito</span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[0.95] md:text-7xl">
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#formulario-guia" className="btn-primary">
              Baixar o guia gratuito
              <ArrowRight size={18} />
            </a>
            <a
              href={withPreservedUtms(GUIDE_CAMPAIGN.blogPath)}
              onClick={(event) => handleInternalClick(event, withPreservedUtms(GUIDE_CAMPAIGN.blogPath))}
              className="inline-flex items-center gap-2 rounded-full border border-grafite/20 px-7 py-3.5 font-display text-sm font-semibold text-grafite transition hover:border-grafite"
            >
              Ler o artigo completo
            </a>
          </div>
          <p className="mt-4 text-sm text-grafite/55">Preencha seus dados e acesse o material gratuitamente.</p>
        </div>

        <LeadCaptureForm />
      </section>

      <section className="section-padding mx-auto max-w-7xl pb-20">
        <GuideMockup />
      </section>

      <ContentSection eyebrow="Cuidado antes da publicação" title="Uma imagem pode revelar mais do que parece">
        <p>
          Além do rosto, uma publicação pode mostrar a escola, a rotina, a localização, uma condição de saúde, um documento ou outras informações que precisam ser protegidas.
        </p>
        <p>
          Com a entrada em vigor do ECA Digital e o fortalecimento das discussões sobre privacidade e proteção de dados, instituições e equipes de comunicação precisam rever alguns cuidados.
        </p>
        <p>
          A proposta deste guia não é impedir registros. É ajudar sua equipe a reconhecer riscos e tomar decisões melhores antes da publicação.
        </p>
        <RiskMap />
      </ContentSection>

      <section id="conteudo" className="bg-white py-20 text-grafite">
        <div className="section-padding mx-auto max-w-7xl">
          <span className="tag border-grafite/20 text-grafite/60">Conteúdo do guia</span>
          <div className="mt-5 mb-12 max-w-3xl">
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">O que você encontrará no material</h2>
          </div>
          <GuideBenefits items={guideBenefits} />
        </div>
      </section>

      <section id="publico" className="bg-petrol-dark py-20 text-white">
        <div className="section-padding mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr,1.15fr]">
          <div>
            <span className="tag">Para quem é</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">Para quem este guia foi preparado</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
              Este material pode auxiliar equipes que convivem diariamente com crianças e adolescentes e precisam comunicar suas atividades com responsabilidade.
            </p>
          </div>
          <AudienceGrid items={guideAudiences} />
        </div>
      </section>

      <ContentSection eyebrow="Autorização" title="Ter autorização é importante. Mas não encerra a análise.">
        <p>
          Mesmo quando existe autorização, ainda é preciso avaliar a finalidade da publicação, o contexto da imagem, as informações visíveis e os possíveis impactos para a criança ou o adolescente.
        </p>
        <p>
          Uma imagem autorizada pode continuar inadequada quando mostra sofrimento, revela um diagnóstico, expõe uma rotina ou é utilizada em uma campanha diferente daquela que foi apresentada ao responsável.
        </p>
        <p>
          O guia organiza essas questões de maneira simples para que elas possam fazer parte da rotina da sua equipe.
        </p>
        <p className="rounded-[1.5rem] bg-amarelo p-6 font-display text-2xl font-bold leading-tight text-grafite">
          Antes de perguntar apenas se existe autorização, também é preciso avaliar se aquela publicação é adequada.
        </p>
      </ContentSection>

      <section className="bg-white py-20 text-grafite">
        <div className="section-padding mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <div>
            <span className="tag border-grafite/20 text-grafite/60">Baixar material</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">Receba o guia gratuitamente</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-grafite/65">
              Preencha seus dados no formulário principal para acessar o material e compartilhar com as pessoas que fotografam, recebem, aprovam ou publicam conteúdos na sua instituição.
            </p>
          </div>
          <div className="rounded-[1.7rem] border border-grafite/10 bg-[#f7f4e8] p-8 shadow-[10px_10px_0_#ECE446]">
            <p className="font-display text-3xl font-bold leading-tight text-grafite">Quer receber o guia agora?</p>
            <p className="mt-4 text-base leading-relaxed text-grafite/65">
              O cadastro é rápido e fica no primeiro formulário da página.
            </p>
            <a href="#formulario-guia" className="btn-primary mt-6">
              Quero receber o guia gratuitamente
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <ContentSection eyebrow="Por que a Plante criou" title="Por que a Plante criou este material?">
        <p>Na Plante, nosso trabalho não termina quando uma arte fica pronta ou uma publicação entra no ar.</p>
        <p>
          Muitos dos nossos clientes trabalham diariamente com crianças e adolescentes. São escolas, clínicas, instituições, projetos, agentes públicos e empresas que precisam registrar e comunicar suas atividades.
        </p>
        <p>
          Entendemos que também faz parte do nosso trabalho ajudar cada cliente a cuidar do que acontece antes da criação, desde a escolha da imagem até a forma como aquele conteúdo será publicado.
        </p>
        <p>O guia nasceu para auxiliar essa rotina.</p>
      </ContentSection>

      <section className="bg-grafite py-20 text-white">
        <div className="section-padding mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">Sua instituição precisa organizar melhor esse processo?</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
              A Plante pode ajudar a revisar a forma como as imagens são recebidas, selecionadas e transformadas em conteúdo, além de organizar orientações para a equipe responsável pela comunicação.
            </p>
          </div>
          <WhatsAppCTA />
        </div>
      </section>

      <section className="bg-[#f7f4e8] py-10 text-grafite">
        <div className="section-padding mx-auto max-w-7xl">
          <LegalNotice />
        </div>
      </section>
    </div>
  )
}

function RiskMap() {
  const items = [
    { icon: Camera, label: 'Enquadramento' },
    { icon: FileCheck2, label: 'Documento' },
    { icon: MapPinOff, label: 'Localização' },
    { icon: LockKeyhole, label: 'Dados' },
    { icon: Sparkles, label: 'Legenda' },
  ]

  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-5">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="rounded-2xl border border-grafite/10 bg-white p-4 text-center">
          <Icon className="mx-auto text-grafite" size={24} aria-hidden="true" />
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-grafite/55">{label}</p>
        </div>
      ))}
    </div>
  )
}
