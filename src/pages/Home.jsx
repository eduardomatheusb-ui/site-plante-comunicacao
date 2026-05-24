import { ArrowRight, MessageCircle } from 'lucide-react'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ServicesGrid from '../components/ServicesGrid'
import MethodSteps from '../components/MethodSteps'
import ProjectCards from '../components/ProjectCards'
import ContentCards from '../components/ContentCards'
import { OrganicCircle } from '../components/AnimatedGraphicElement'
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
            src="/brand/showcase/plante-cartoes-mockup.jpg"
            alt="Aplicação da identidade visual da Plante em cartões institucionais."
            className="h-[360px] w-full object-cover md:h-[520px]"
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
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              tag="Projetos"
              title="Projetos que saem do papel e ganham presença."
              subtitle="Cada projeto tem um contexto, um desafio e uma forma própria de se comunicar. A Plante mergulha nesses cenários para criar soluções com estratégia, linguagem e identidade."
            />
            <button onClick={() => navigateTo('/projetos')} className="btn-primary shrink-0">
              Conheça nossos projetos
              <ArrowRight size={16} />
            </button>
          </div>
          <ProjectCards limit={3} />
        </div>
      </section>

      <section className="bg-petrol py-24">
        <div className="section-padding">
          <div className="mb-12 grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-end">
            <div>
              <SectionTitle
                tag="Ideias em Movimento"
                title="Antes de uma boa campanha, existe pensamento."
                subtitle="Reunimos conteúdos, bastidores e reflexões sobre comunicação, marcas, presença digital e processos criativos."
              />
              <button onClick={() => navigateTo('/ideias-em-movimento')} className="btn-outline mt-8">
                Ler conteúdos da Plante
                <ArrowRight size={16} />
              </button>
            </div>
            <img
              src="/brand/showcase/plante-posts-showcase.jpg"
              alt="Exemplos visuais da editoria de posts da Plante."
              className="h-[420px] w-full object-cover"
            />
          </div>
          <ContentCards limit={3} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-grafite py-24">
        <OrganicCircle size={520} color="#F7FF19" opacity={0.04} className="absolute -bottom-44 -left-24" />
        <div className="section-padding relative z-10 max-w-5xl">
          <p className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            Ideia parada não transforma nada.
          </p>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-white/62">
            <p>
              A gente acredita em comunicação que nasce da escuta, ganha forma no planejamento e encontra força na criação.
            </p>
            <p>
              Plantar uma ideia é cuidar do terreno, entender o tempo, escolher a linguagem e fazer o movimento acontecer.
            </p>
            <p>
              Somos uma agência mineira. Trazemos no nosso jeito de trabalhar a proximidade, a atenção e a capacidade de construir junto.
            </p>
          </div>
          <p className="mt-10 font-display text-2xl font-bold leading-tight text-amarelo md:text-4xl">
            Para transformar intenção em presença.<br />
            Presença em conexão.<br />
            Conexão em resultado.
          </p>
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
