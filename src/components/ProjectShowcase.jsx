import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../content/siteContent'
import { navigateTo } from '../lib/navigation'

export default function ProjectShowcase({ limit }) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects

  return (
    <div className="mx-auto max-w-[1500px]">
      <div className="mb-14 text-center">
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.55em] text-amarelo">
          Nossos trabalhos
        </span>
      </div>

      <div className="grid grid-cols-2 overflow-hidden border border-white/10 bg-grafite md:grid-cols-3 lg:flex">
        {visibleProjects.map((project, index) => (
          <motion.button
            key={project.slug}
            type="button"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            onClick={() => navigateTo(`/projetos/${project.slug}`)}
            className="group relative h-[320px] min-w-0 overflow-hidden border-white/10 text-left outline-none transition-[flex,filter] duration-500 hover:z-10 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-amarelo md:h-[430px] lg:h-[520px] lg:flex-1 lg:border-r lg:hover:flex-[1.45]"
            aria-label={`Ver detalhes do projeto ${project.title}`}
          >
            <img
              src={project.image}
              alt=""
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-transparent opacity-72 transition-opacity duration-300 group-hover:opacity-90" />
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
  )
}
