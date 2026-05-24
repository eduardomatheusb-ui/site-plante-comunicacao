import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../content/siteContent'

export default function ProjectCards({ limit }) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {visibleProjects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.07 }}
          className="group overflow-hidden bg-white text-grafite"
        >
          <div className="relative h-52 overflow-hidden bg-petrol">
            <img
              src={index % 2 === 0 ? '/brand/plante-bulb-dark-yellow.png' : '/brand/plante-script-yellow.png'}
              alt=""
              className="absolute -right-12 top-8 w-64 opacity-75 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-grafite/60 to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-amarelo px-3 py-1 text-xs font-bold text-grafite">
              {project.segment}
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-bold leading-tight">{project.title}</h3>
              <ArrowUpRight size={18} className="shrink-0 text-grafite/35" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-grafite/65">{project.challenge}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.deliveries.map((delivery) => (
                <span key={delivery} className="rounded-full bg-grafite/5 px-2.5 py-1 text-[11px] text-grafite/55">
                  {delivery}
                </span>
              ))}
            </div>
            <p className="mt-5 border-t border-grafite/10 pt-4 text-sm font-medium text-grafite/75">
              {project.result}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
