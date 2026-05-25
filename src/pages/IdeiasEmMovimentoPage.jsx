import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import ContentCards from '../components/ContentCards'
import { ideaCategories } from '../content/siteContent'

export default function IdeiasEmMovimentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Ideias em Movimento"
        title="Antes de uma boa campanha, existe pensamento."
        subtitle="Conteúdos, bastidores e reflexões sobre comunicação, marcas, estratégia digital, campanhas institucionais e processos criativos."
      />

      <section className="bg-white py-24 text-grafite">
        <div className="section-padding grid gap-12 lg:grid-cols-[0.9fr,1.1fr]">
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            Um espaço editorial para pensar comunicação.
          </h2>
          <div>
            <div className="space-y-5 text-lg leading-relaxed text-grafite/65">
              <p>
                Aqui reunimos ideias, processos e bastidores sobre como a comunicação pode ajudar marcas, instituições e projetos a se movimentarem com mais clareza, posicionamento e intenção.
              </p>
              <p>
                A Plante acredita que comunicar bem começa antes da criação. Começa na escuta, no olhar para o contexto, na organização das ideias e na construção de caminhos possíveis.
              </p>
            </div>
            <img
              src="/brand/showcase/plante-posts-showcase.jpg"
              alt="Aplicações editoriais da Plante em posts digitais."
              className="mt-10 h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-petrol py-24">
        <div className="section-padding">
          <SectionTitle
            tag="Categorias"
            title="Repertório para marcas, instituições e projetos."
            subtitle="Os conteúdos podem crescer por temas, sem depender de um blog tradicional."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ideaCategories.map((category) => (
              <article key={category.title} className="border-b border-white/10 bg-white/[0.035] p-6">
                <h3 className="font-display text-2xl font-bold text-white">{category.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/55">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-petrol-dark py-24">
        <div className="section-padding">
          <SectionTitle
            tag="Conteúdos iniciais"
            title="Ideias para abrir conversas."
            subtitle="Seções preparadas para abrir páginas individuais com texto completo, conteúdos relacionados e chamada para contato."
          />
          <div className="mt-12">
            <ContentCards />
          </div>
        </div>
      </section>
    </>
  )
}
