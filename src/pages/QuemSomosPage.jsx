import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { differentials } from '../content/siteContent'

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="Somos uma agência mineira de publicidade e marketing."
        subtitle="Criamos comunicação com escuta, estratégia e direção para marcas, instituições e projetos que precisam crescer com mais clareza."
        ctaLabel="Conversar com a Plante"
        ctaHref="/contato"
      />

      <section className="bg-white py-24 text-grafite">
        <div className="section-padding grid gap-12 lg:grid-cols-[0.8fr,1.2fr]">
          <div className="space-y-8">
            <div>
              <p className="max-w-xs font-display text-4xl font-bold leading-tight text-grafite">
                Mais sobre nós.
              </p>
            </div>

            <div className="bg-grafite p-8 shadow-[10px_10px_0_#F7FF19]">
              <p className="mb-6 text-xs font-bold uppercase tracking-widest text-amarelo">Certificada e associada</p>
              <div className="flex flex-nowrap items-center gap-8">
                <img src="/brand/cert-logo-1.png" alt="ABAP" className="h-20 shrink-0 object-contain opacity-100 md:h-24" />
                <img src="/brand/cert-logo-2.png" alt="CENP" className="h-20 min-w-0 max-w-[72%] object-contain object-left opacity-100 md:h-24" />
              </div>
            </div>

            <img
              src="/brand/showcase/portfolio-showcase.jpg"
              alt="Portfolio da Plante Comunicação — projetos de branding e identidade visual."
              className="w-full object-cover"
            />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-grafite/68">
            <p>
              A Plante Comunicação é uma agência mineira de publicidade e marketing que une estratégia, criação, gestão de marketing e posicionamento de negócio para movimentar marcas, instituições e projetos.
            </p>
            <p>
              Acreditamos que uma boa ideia não nasce pronta. Ela precisa ser escutada, planejada, criada e colocada em movimento. Por isso, nosso trabalho combina repertório, sensibilidade, análise e execução para construir marcas mais claras, reconhecidas e conectadas com seus públicos.
            </p>
            <p>
              Atuamos de forma completa, desde o diagnóstico e o posicionamento de mercado até a gestão de marketing, criação de campanhas publicitárias, produção audiovisual, tráfego pago, branding, desenvolvimento de websites, projetos digitais e comunicação institucional.
            </p>
            <p>
              Somos de Minas Gerais. Carregamos no nosso jeito de trabalhar a escuta, a proximidade e a atenção aos detalhes, mas sem limitar nossa atuação a uma cidade. A Plante nasce daqui e pensa comunicação para marcas, instituições e projetos que querem crescer com mais clareza, consistência e intenção.
            </p>
            <p className="font-display text-2xl font-bold text-grafite">
              Mais do que produzir peças, a Plante cria caminhos de comunicação para negócios em movimento.
            </p>
            <div className="mt-10 overflow-hidden bg-grafite">
              <video
                src="/brand/plante-8-anos-web.mp4"
                className="aspect-video w-full object-cover"
                controls
                playsInline
                preload="metadata"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-petrol py-24">
        <div className="section-padding">
          <SectionTitle
            tag="Diferenciais"
            title="Um jeito de trabalhar com escuta, direção e estratégia."
            subtitle="A Plante une proximidade, estratégia e repertório para construir marketing e comunicação com sentido."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {differentials.map((item, index) => (
              <article key={item.title} className="min-h-[240px] border-b border-white/10 bg-white/[0.035] p-6">
                <span className="font-display text-xs font-bold text-amarelo/55">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-8 font-display text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/55">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
