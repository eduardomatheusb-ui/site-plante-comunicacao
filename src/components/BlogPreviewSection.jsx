import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight, Clock } from 'lucide-react'
import SectionTitle from './SectionTitle'

const posts = [
  {
    category: 'Branding',
    title: 'Por que sua marca precisa de uma narrativa antes de um feed bonito',
    excerpt:
      'A estética importa. Mas sem uma direção clara de narrativa, o feed mais bonito do mundo não vai conectar sua marca com ninguém.',
    readTime: '5 min',
    date: 'Em breve',
    placeholder: true,
  },
  {
    category: 'Redes Sociais',
    title: 'Estratégia editorial: a diferença entre postar e comunicar',
    excerpt:
      'Toda marca que se comunica bem tem um calendário. Mas o calendário é apenas a ponta. O que muda o jogo está na estratégia que vem antes.',
    readTime: '4 min',
    date: 'Em breve',
    placeholder: true,
  },
  {
    category: 'Comunicação Pública',
    title: 'Como órgãos públicos podem se comunicar com mais clareza e alcance',
    excerpt:
      'Comunicação governamental não precisa ser burocrática. Veja como prefeituras e autarquias estão usando comunicação estratégica para se aproximar do cidadão.',
    readTime: '6 min',
    date: 'Em breve',
    placeholder: true,
  },
]

const topicPills = [
  'Comunicação', 'Marketing Público', 'Branding', 'Redes Sociais',
  'Campanhas', 'Bastidores', 'Tendências', 'Comportamento',
]

function PostCard({ post, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group bg-petrol border border-white/8 rounded-2xl p-6 hover:border-amarelo/30 transition-all duration-300 flex flex-col cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="tag text-[10px]">{post.category}</span>
        {post.placeholder && (
          <span className="text-white/20 text-[10px] font-display">Em elaboração</span>
        )}
      </div>

      <h3 className="font-display font-bold text-lg text-white group-hover:text-amarelo transition-colors duration-300 leading-tight mb-3 flex-1">
        {post.title}
      </h3>

      <p className="text-white/50 text-sm leading-relaxed mb-6">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/8">
        <div className="flex items-center gap-1.5 text-white/30 text-xs">
          <Clock size={12} />
          <span>{post.readTime} de leitura</span>
        </div>
        <div className="flex items-center gap-1 text-amarelo/60 group-hover:text-amarelo text-xs font-display font-medium transition-colors">
          Ler artigo
          <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.article>
  )
}

export default function BlogPreviewSection() {
  return (
    <section id="ideias" className="relative py-28 bg-petrol overflow-hidden">
      <div className="section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <SectionTitle
            tag="Ideias em movimento"
            title={<>Perspectivas sobre comunicação,<br /><span className="text-gradient-yellow">cultura e criação.</span></>}
            subtitle="Reflexões da Plante sobre o que está mudando na comunicação e o que sempre vai importar."
          />
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="btn-outline shrink-0"
          >
            Ver todos os artigos
          </motion.button>
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {posts.map((post, i) => (
            <PostCard key={i} post={post} index={i} />
          ))}
        </div>

        {/* Topic pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          <span className="text-white/25 text-xs font-display mr-2 self-center">Temas:</span>
          {topicPills.map((topic) => (
            <button
              key={topic}
              className="px-3.5 py-1.5 rounded-full border border-white/10 text-white/40 hover:border-amarelo/30 hover:text-amarelo text-xs font-display transition-all duration-200"
            >
              {topic}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
