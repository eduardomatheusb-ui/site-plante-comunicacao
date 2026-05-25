import PageHero from '../components/PageHero'
import ProjectShowcase from '../components/ProjectShowcase'
import ClientLogoGrid from '../components/ClientLogoGrid'
import { projectCategories, segments } from '../content/siteContent'

export default function ProjetosPage() {
  return (
    <>
      <PageHero
        eyebrow="Projetos"
        title="Projetos que ganharam forma, posicionamento e movimento."
        subtitle="Cada projeto começa com um desafio. A Plante transforma esse desafio em estratégia, linguagem, campanha, conteúdo e entrega."
        ctaLabel="Falar sobre um projeto"
        ctaHref="/contato"
      />

      <section className="bg-petrol-dark py-20">
        <div className="section-padding">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <span key={category} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-petrol py-24">
        <div className="section-padding">
          <ProjectShowcase />
        </div>
      </section>

      <section className="bg-grafite py-24 text-white">
        <div className="section-padding">
          <div className="mb-12 grid gap-10 lg:grid-cols-[0.8fr,1.2fr]">
            <div>
              <span className="mb-5 inline-block rounded-full border border-white/15 px-3 py-1 font-display text-xs font-medium uppercase tracking-widest text-white/45">
                Clientes
              </span>
              <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
                Marcas, instituições e projetos que já se movimentaram com a Plante.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-white/62">
                A Plante atua com marcas, instituições e projetos que precisam comunicar melhor. Mais do que atender segmentos, mergulhamos em contextos.
              </p>
            </div>
          </div>

          <ClientLogoGrid />

          <div className="mt-14">
            <span className="mb-5 inline-block rounded-full border border-white/15 px-3 py-1 font-display text-xs font-medium uppercase tracking-widest text-white/45">
              Clientes e segmentos
            </span>
            <div className="flex flex-wrap gap-2">
              {segments.map((segment) => (
                <span key={segment} className="rounded-full bg-white/6 px-3 py-1.5 text-sm text-white/55">
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
