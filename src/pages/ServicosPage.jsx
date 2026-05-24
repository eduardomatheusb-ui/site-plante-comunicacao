import PageHero from '../components/PageHero'
import ServicesGrid from '../components/ServicesGrid'
import { navigateTo } from '../lib/navigation'

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Comunicação completa, do pensamento à entrega."
        subtitle="A Plante une estratégia, criação, conteúdo, mídia e presença digital para construir soluções de comunicação para marcas, instituições e projetos."
        backgroundImage="/brand/showcase/servicos-bg.jpg"
      />

      <section className="bg-petrol-dark py-24">
        <div className="section-padding">
          <ServicesGrid />
        </div>
      </section>

      <section className="bg-amarelo py-20 text-grafite">
        <div className="section-padding grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Não sabe exatamente do que precisa?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-grafite/68">
              A Plante ajuda a organizar o caminho. A partir do seu desafio, entendemos o cenário e propomos as soluções mais adequadas para sua marca, instituição ou projeto.
            </p>
          </div>
          <button onClick={() => navigateTo('/contato')} className="btn-primary bg-grafite text-white hover:bg-grafite-light">
            Conversar com a Plante
          </button>
        </div>
      </section>
    </>
  )
}
