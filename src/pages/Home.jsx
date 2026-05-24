import { ArrowRight, MessageCircle } from 'lucide-react'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ServicesGrid from '../components/ServicesGrid'
import MethodSteps from '../components/MethodSteps'
import ProjectShowcase from '../components/ProjectShowcase'
import ClientLogoGrid from '../components/ClientLogoGrid'
import ContentCards from '../components/ContentCards'
import { contact } from '../content/siteContent'
import { navigateTo } from '../lib/navigation'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-white py-24 text-grafite">
        <div className="section-padding grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-end">
          <div>
            <span className="mb-5 inline-block rounded-full border border-grafite/15 px-3 py-1 font-display text-xs font-medium uppercase tracking-widest text-grafite/45">
              Plante Comunicação
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Comunicação que nasce da escuta e ganha movimento na criação.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-grafite/65">
            <p>
              A Plante é uma agência de publicidade de Minas Gerais que acredita em comunicação feita com intenção. Antes de criar, buscamos entender o cenário, o público, o momento da marca e o objetivo de cada ação.
            </p>
            <p>
              Unimos planejamento, conteúdo, design, audiovisual, mídia e presença digital para construir campanhas, marcas e projetos com mais clareza, consistência e resultado.
            </p>
            <button onClick={() => navigateTo('/quem-somos')} className="btn-primary mt-2">
              Saiba mais sobre a Plante
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div className="section-padding mt-16">
          <img
            src="/brand/showcase/plante-equipe-8-anos.jpg"
            alt="Equipe da Plante Comunicação reunida no aniversário de 8 anos da agência."
            className="h-[360px] w-full object-cover object-top md:h-[520px]"
          />
        </div>
      </section>

      <section className="bg-petrol py-24">
        <div className="section-padding">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              tag="O que a Plante faz"
              title="Da estratégia à execução."
              subtitle="A Plante constrói caminhos de comunicação para marcas, instituições e projetos que precisam se posicionar melhor."
            />
            <button onClick={() => navigateTo('/servicos')} className="btn-outline shrink-0">
              Ver todos os serviços
              <ArrowRight size={16} />
            </button>
          </div>
          <ServicesGrid limit={4} compact />
        </div>
      </section>

      <section className="bg-amarelo py-24 text-grafite">
        <div className="section-padding">
          <div className="mb-12 max-w-3xl">
            <span className="mb-5 inline-block rounded-full border border-grafite/25 px-3 py-1 font-display text-xs font-medium uppercase tracking-widest text-grafite/55">
              Método Plante
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Como colocamos uma ideia em movimento.
            </h2>
          </div>
          <MethodSteps />
        </div>
      </section>

      <section className="bg-petrol-dark py-24">
        <div className="section-padding">
          <ProjectShowcase limit={6} />
          <div className="mt-10 flex justify-center">
            <button onClick={() => navigateTo('/projetos')} className="btn-primary">
              Conheça todos os projetos
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-petrol py-24">
        <div className="section-padding">
          <div className="mb-12 grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-end">
            <div>
              <SectionTitle
                tag="Ideias em Movimento"
                title="Uma agência que pensa em tudo para você contar para o mundo."
                subtitle="Leia mais sobre o que fazemos, nossos processos e novidades."
              />
              <button onClick={() => navigateTo('/ideias-em-movimento')} className="btn-outline mt-8">
                Ler conteúdos da Plante
                <ArrowRight size={16} />
              </button>
            </div>
            <img
              src="/brand/showcase/geraes-open-2025.jpg"
              alt="Equipe em frente ao painel do Geraes Open 2025."
              className="h-[360px] w-full bg-grafite object-cover object-center md:h-[420px]"
            />
          </div>
          <ContentCards limit={3} />
        </div>
      </section>

      <section className="bg-petrol-dark py-24">
        <div className="section-padding">
          <div className="mb-12 max-w-3xl">
            <span className="tag mb-5">Clientes</span>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              Marcas, instituições e projetos atendidos pela Plante.
            </h2>
          </div>
          <ClientLogoGrid />
        </div>
      </section>

      <section className="bg-petrol-dark py-24">
        <div className="section-padding grid gap-10 lg:grid-cols-[1fr,auto] lg:items-center">
          <div>
            <span className="tag mb-5">Contato</span>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              Vamos movimentar sua marca?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
              Conte para a Plante o que você precisa comunicar. A gente ajuda a transformar essa ideia em estratégia, campanha, conteúdo e presença.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={16} />
              Falar pelo WhatsApp
            </a>
            <button onClick={() => navigateTo('/contato')} className="btn-outline">
              Enviar mensagem
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
