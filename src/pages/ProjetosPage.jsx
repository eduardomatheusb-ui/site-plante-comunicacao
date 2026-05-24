import PageHero from '../components/PageHero'
import ProjectShowcase from '../components/ProjectShowcase'
import { projectCategories, segments } from '../content/siteContent'

export default function ProjetosPage() {
  return (
    <>
      <PageHero
        eyebrow="Projetos"
        title="Projetos que ganharam forma, presença e movimento."
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

      <section className="bg-white py-24 text-grafite">
        <div className="section-padding grid gap-10 lg:grid-cols-[0.8fr,1.2fr]">
          <div>
            <span className="mb-5 inline-block rounded-full border border-grafite/15 px-3 py-1 font-display text-xs font-medium uppercase tracking-widest text-grafite/45">
              Clientes e segmentos
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Mais do que atender segmentos, mergulhamos em contextos.
            </h2>
          </div>
          <div>
            <p className="mb-8 text-lg leading-relaxed text-grafite/65">
              A Plante atua com marcas, instituições e projetos que precisam comunicar melhor. A seção de clientes fica preparada para receber apenas nomes e logos autorizados.
            </p>
            <div className="flex flex-wrap gap-2">
              {segments.map((segment) => (
                <span key={segment} className="rounded-full bg-grafite/5 px-3 py-1.5 text-sm text-grafite/62">
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
