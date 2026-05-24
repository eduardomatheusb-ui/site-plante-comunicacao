import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { projects } from '../content/siteContent'

export default function ProjectShowcase({ limit }) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 text-center">
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.55em] text-amarelo">
            Nossos trabalhos
          </span>
        </div>

        <div className="grid grid-cols-2 overflow-hidden border border-white/10 bg-grafite md:grid-cols-4 lg:flex">
          {visibleProjects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              onClick={() => setActiveProject(project)}
              className="group relative h-[320px] min-w-0 overflow-hidden border-white/10 text-left outline-none transition-[flex,filter] duration-500 hover:z-10 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-amarelo md:h-[430px] lg:h-[520px] lg:flex-1 lg:border-r lg:hover:flex-[1.45]"
              aria-label={`Ver detalhes do projeto ${project.title}`}
            >
              <img
                src={project.image}
                alt=""
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <span className="mb-3 inline-flex bg-amarelo px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-grafite">
                  {project.segment}
                </span>
                <h3 className="font-display text-xl font-bold leading-tight text-white md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amarelo">
                  Ver o que foi feito
                  <ArrowUpRight size={14} />
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/82 p-4 backdrop-blur-sm md:items-center md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.article
              className="grid max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-white text-grafite shadow-2xl md:grid-cols-[0.9fr,1.1fr]"
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="min-h-[280px] bg-grafite md:min-h-full">
                <img src={activeProject.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="relative p-7 md:p-10">
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-grafite/10 text-grafite/55 transition-colors hover:border-grafite hover:text-grafite"
                  aria-label="Fechar detalhes do projeto"
                >
                  <X size={18} />
                </button>

                <span className="mb-5 inline-flex bg-amarelo px-3 py-1 font-display text-[11px] font-bold uppercase tracking-widest text-grafite">
                  {activeProject.segment}
                </span>
                <h2 className="max-w-xl font-display text-4xl font-bold leading-tight md:text-5xl">
                  {activeProject.title}
                </h2>

                <div className="mt-8 space-y-7">
                  <div>
                    <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-grafite/42">
                      Desafio
                    </p>
                    <p className="text-base leading-relaxed text-grafite/68">{activeProject.challenge}</p>
                  </div>

                  <div>
                    <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-grafite/42">
                      O que foi feito
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.deliveries.map((delivery) => (
                        <span key={delivery} className="bg-grafite px-3 py-1.5 text-xs font-medium text-white">
                          {delivery}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-grafite/10 pt-6">
                    <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-grafite/42">
                      Resultado
                    </p>
                    <p className="text-base font-medium leading-relaxed text-grafite">{activeProject.result}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
