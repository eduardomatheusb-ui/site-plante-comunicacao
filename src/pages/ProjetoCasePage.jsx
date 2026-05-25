import { ArrowLeft, MessageCircle } from 'lucide-react'
import { contact, projects } from '../content/siteContent'
import { navigateTo } from '../lib/navigation'

export default function ProjetoCasePage({ slug }) {
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="bg-white px-6 py-28 text-grafite">
        <div className="mx-auto max-w-4xl">
          <button onClick={() => navigateTo('/projetos')} className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-grafite/55">
            <ArrowLeft size={16} />
            Voltar para projetos
          </button>
          <h1 className="font-display text-5xl font-bold">Projeto não encontrado.</h1>
          <p className="mt-4 max-w-xl text-lg text-grafite/65">
            Esse trabalho pode ter mudado de endereço. A página de projetos continua com a vitrine completa.
          </p>
        </div>
      </section>
    )
  }

  const videos = project.videos || (project.video ? [{ src: project.video }] : [])

  return (
    <article className="bg-[#f1f0e7] text-grafite">
      <section className="bg-grafite px-6 pb-16 pt-28 text-white md:pt-32">
        <div className="mx-auto max-w-6xl">
          <button
            onClick={() => navigateTo('/projetos')}
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-amarelo"
          >
            <ArrowLeft size={16} />
            Voltar para projetos
          </button>

          <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-end">
            <div>
              <span className="mb-6 inline-flex bg-amarelo px-3 py-1 font-display text-[11px] font-bold uppercase tracking-widest text-grafite">
                {project.segment}
              </span>
              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg text-white/68">Cliente: {project.client}</p>
            </div>

            <p className="max-w-2xl text-xl leading-relaxed text-white/76">{project.challenge}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.74fr,1.26fr]">
            <aside className="space-y-8">
              <div>
                <p className="mb-3 font-display text-sm font-bold italic text-grafite">Insight</p>
                <p className="text-base leading-relaxed text-grafite/72">{project.insight}</p>
              </div>

              <div>
                <p className="mb-3 font-display text-sm font-bold italic text-grafite">Ideia</p>
                <p className="text-base leading-relaxed text-grafite/72">{project.idea}</p>
              </div>

              <div>
                <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.28em] text-grafite/46">
                  Entregas
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.deliveries.map((delivery) => (
                    <span key={delivery} className="bg-grafite px-3 py-1.5 text-xs font-semibold text-white">
                      {delivery}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-8">
              {videos.length > 0 && (
                <div className="grid gap-6">
                  {videos.map((video) => (
                    <div key={video.src} className="overflow-hidden bg-grafite shadow-[12px_12px_0_#F7FF19]">
                      {video.title && (
                        <p className="border-b border-white/10 px-4 py-3 font-display text-xs font-bold uppercase tracking-[0.22em] text-amarelo">
                          {video.title}
                        </p>
                      )}
                      <video
                        src={video.src}
                        poster={project.image}
                        className={video.orientation === 'vertical' ? 'mx-auto max-h-[720px] w-auto max-w-full bg-grafite object-contain' : 'aspect-video w-full bg-grafite object-cover'}
                        controls
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  ))}
                </div>
              )}

              {videos.length === 0 && (
                <div className="overflow-hidden bg-grafite shadow-[12px_12px_0_#F7FF19]">
                  <img src={project.gallery?.[0] || project.image} alt="" className="h-full w-full object-cover" />
                </div>
              )}

              <div>
                <p className="mb-2 font-display text-sm font-bold text-grafite">O que foi construído</p>
                <p className="max-w-3xl text-lg leading-relaxed text-grafite/74">{project.result}</p>
              </div>

              {project.gallery?.length > 1 && (
                <div className="grid gap-5 md:grid-cols-2">
                  {project.gallery.slice(1).map((image) => (
                    <div key={image} className="overflow-hidden bg-white shadow-sm">
                      <img src={image} alt="" className="h-full min-h-[260px] w-full object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {project.note && (
                <div className="border-l-4 border-amarelo bg-white p-5 text-sm font-medium leading-relaxed text-grafite/72">
                  {project.note}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grafite px-6 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-3xl font-bold">Sua marca também precisa se movimentar?</p>
            <p className="mt-3 max-w-2xl text-white/64">
              A Plante ajuda marcas, instituições e projetos a transformar ideias em estratégia, campanha, conteúdo e presença.
            </p>
          </div>
          <a href={contact.whatsappHref} className="btn-primary inline-flex items-center gap-2">
            <MessageCircle size={18} />
            Fale com a Plante
          </a>
        </div>
      </section>
    </article>
  )
}
