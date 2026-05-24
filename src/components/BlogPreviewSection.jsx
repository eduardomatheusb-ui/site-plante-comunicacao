import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight } from 'lucide-react'

const posts = [
  {
    n: '01',
    category: 'Branding',
    title: 'Por que sua marca precisa de uma narrativa antes de um feed bonito',
    excerpt: 'A estética importa. Mas sem uma direção clara de narrativa, o feed mais bonito do mundo não vai conectar.',
  },
  {
    n: '02',
    category: 'Redes Sociais',
    title: 'Estratégia editorial: a diferença entre postar e comunicar',
    excerpt: 'Toda marca que se comunica bem tem um calendário. Mas o calendário é só a ponta do processo.',
  },
  {
    n: '03',
    category: 'Comunicação Pública',
    title: 'Como órgãos públicos podem se comunicar com mais clareza e alcance',
    excerpt: 'Comunicação governamental não precisa ser burocrática. Veja como prefeituras estão usando estratégia para se aproximar do cidadão.',
  },
]

const topics = ['Comunicação', 'Marketing Público', 'Branding', 'Redes Sociais', 'Campanhas', 'Bastidores', 'Tendências']

export default function BlogPreviewSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="ideias" className="bg-grafite-mid border-t border-white/6">

      {/* Header */}
      <div ref={ref} className="section-padding pt-20 pb-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-white/6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="tag mb-6 inline-block"
            >
              Ideias em movimento
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight"
            >
              Perspectivas sobre<br />
              <span className="text-gradient-yellow">comunicação e criação.</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="btn-outline shrink-0"
          >
            Todos os artigos
          </motion.button>
        </div>
      </div>

      {/* Posts — editorial list */}
      <div className="section-padding pb-4">
        {posts.map((post, i) => (
          <PostRow key={post.n} post={post} i={i} />
        ))}
      </div>

      {/* Topics strip */}
      <div className="section-padding pb-16 pt-8 border-t border-white/6">
        <div className="flex flex-wrap gap-2">
          <span className="text-white/25 text-xs font-display self-center mr-2">Temas:</span>
          {topics.map(t => (
            <button
              key={t}
              className="px-3.5 py-1.5 rounded-full border border-white/10 text-white/35 hover:border-amarelo/30 hover:text-amarelo text-xs font-display transition-all duration-200"
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function PostRow({ post, i }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.1 }}
      className="group grid md:grid-cols-[64px_1fr_auto] items-start md:items-center gap-5 md:gap-8 py-8 border-b border-white/6 hover:border-amarelo/25 transition-colors duration-300 cursor-pointer"
    >
      <span className="font-display font-bold text-xs text-amarelo/30 group-hover:text-amarelo/60 transition-colors pt-1">
        {post.n}
      </span>
      <div>
        <span className="text-[10px] font-display tracking-widest uppercase text-white/30 mb-2 block">{post.category}</span>
        <h3 className="font-display font-bold text-lg md:text-2xl text-white group-hover:text-amarelo transition-colors duration-300 leading-tight mb-2">
          {post.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed max-w-2xl hidden md:block">{post.excerpt}</p>
      </div>
      <motion.div
        className="text-white/20 group-hover:text-amarelo transition-colors duration-300 hidden md:block"
        whileHover={{ x: 3, y: -3 }}
      >
        <ArrowUpRight size={20} />
      </motion.div>
    </motion.div>
  )
}
