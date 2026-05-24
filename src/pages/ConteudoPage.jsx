import { ArrowLeft } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContentCards from '../components/ContentCards'
import { ideas } from '../content/siteContent'
import { navigateTo } from '../lib/navigation'

export default function ConteudoPage({ slug }) {
  const idea = ideas.find((item) => item.slug === slug) || ideas[0]

  return (
    <>
      <PageHero
        eyebrow={idea.category}
        title={idea.title}
        subtitle={`${idea.date} · ${idea.readingTime} de leitura`}
      />

      <article className="bg-white py-24 text-grafite">
        <div className="section-padding mx-auto max-w-4xl">
          <button onClick={() => navigateTo('/ideias-em-movimento')} className="mb-10 inline-flex items-center gap-2 font-display text-sm font-semibold text-grafite/55 hover:text-grafite">
            <ArrowLeft size={16} />
            Voltar para Ideias em Movimento
          </button>

          {idea.image && (
            <div className="mb-12 overflow-hidden bg-grafite shadow-[10px_10px_0_#F7FF19]">
              <img src={idea.image} alt="" className="h-[360px] w-full object-cover md:h-[520px]" />
            </div>
          )}

          <p className="font-display text-3xl font-bold leading-tight md:text-5xl">
            {idea.highlight}
          </p>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-grafite/68">
            {(idea.body || []).map((paragraph) => (
              <p key={paragraph} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-petrol-dark py-24">
        <div className="section-padding">
          <div className="mb-10">
            <span className="tag mb-5">Relacionados</span>
            <h2 className="font-display text-4xl font-bold text-white">Continue em movimento.</h2>
          </div>
          <ContentCards limit={3} />
        </div>
      </section>

      <section className="bg-amarelo py-20 text-grafite">
        <div className="section-padding grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Sua marca também precisa se movimentar?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-grafite/68">
              A Plante ajuda marcas, instituições e projetos a transformarem ideias em estratégia, conteúdo, campanha e presença.
            </p>
          </div>
          <button onClick={() => navigateTo('/contato')} className="btn-primary bg-grafite text-white hover:bg-grafite-light">
            Fale com a Plante
          </button>
        </div>
      </section>
    </>
  )
}
