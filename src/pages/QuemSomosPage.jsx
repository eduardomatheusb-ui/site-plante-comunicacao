import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { differentials } from '../content/siteContent'

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="Somos uma agência mineira de publicidade."
        subtitle="Criamos comunicação com escuta, estratégia e direção para marcas, instituições e projetos que precisam se movimentar com mais clareza."
        ctaLabel="Conversar com a Plante"
        ctaHref="/contato"
      />

      <section className="bg-white py-24 text-grafite">
        <div className="section-padding grid gap-12 lg:grid-cols-[0.8fr,1.2fr]">
          <div className="space-y-8">
            <div>
              <p className="font-display text-6xl font-bold text-grafite">8</p>
              <p className="mt-2 max-w-xs font-display text-2xl font-bold leading-tight">
                anos colocando ideias em movimento.
              </p>
            </div>

            <div className="bg-grafite p-6">
              <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">Certificada e associada</p>
              <div className="flex flex-col gap-5">
                <img src="/brand/cert-logo-1.png" alt="ABAP" className="h-14 w-auto object-contain object-left opacity-90 transition-opacity hover:opacity-100" />
                <img src="/brand/cert-logo-2.png" alt="CENP" className="h-14 w-auto object-contain object-left opacity-90 transition-opacity hover:opacity-100" />
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
              A Plante Comunicação é uma agência mineira de publicidade que une estratégia, criação, conteúdo e presença digital para movimentar marcas, instituições e projetos.
            </p>
            <p>
              Acreditamos que uma boa ideia não nasce pronta. Ela precisa ser escutada, planejada, criada e colocada em movimento. Por isso, nosso trabalho combina repertório, sensibilidade, análise e execução para construir marcas mais presentes, reconhecidas e conectadas com seus públicos.
            </p>
            <p>
              Atuamos com comunicação de forma completa, desde o diagnóstico e o posicionamento até a criação de campanhas institucionais, gestão de redes sociais, produção audiovisual, tráfego pago, branding, projetos digitais e comunicação institucional.
            </p>
            <p>
              Somos de Minas Gerais. Carregamos no nosso jeito de trabalhar a escuta, a proximidade e a atenção aos detalhes, mas sem limitar nossa atuação a uma cidade. A Plante nasce daqui e pensa comunicação para marcas, instituições e projetos que querem crescer com mais clareza, presença e intenção.
            </p>
            <p className="font-display text-2xl font-bold text-grafite">
              Mais do que produzir peças, a Plante cria caminhos de comunicação.
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
            title="Um jeito de trabalhar com escuta, direção e presença."
            subtitle="A Plante une proximidade, estratégia e repertório para construir comunicação com sentido."
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
