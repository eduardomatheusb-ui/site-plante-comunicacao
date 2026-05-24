import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import PlanteWordmark from './PlanteWordmark'
import { navLinks } from '../content/siteContent'
import { handleInternalClick, navigateTo, normalizePath } from '../lib/navigation'

export default function Header({ currentPath = '/' }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAndNavigate = (href) => {
    setMenuOpen(false)
    navigateTo(href)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-white/5 bg-petrol-dark/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="section-padding flex items-center justify-between py-4">
          <a
            href="/"
            onClick={(event) => handleInternalClick(event, '/')}
            className="flex items-center gap-3"
            aria-label="Ir para a página inicial da Plante"
          >
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }}>
              <PlanteWordmark variant="light" size={178} className="w-[132px] sm:w-[178px]" />
            </motion.div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.slice(1).map((link) => {
              const active = normalizePath(currentPath) === normalizePath(link.href)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleInternalClick(event, link.href)}
                  className={`font-display text-sm font-medium tracking-wide transition-colors duration-200 ${
                    active ? 'text-amarelo' : 'text-white/70 hover:text-amarelo'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
            <button onClick={() => closeAndNavigate('/contato')} className="btn-primary px-5 py-2.5 text-xs">
              Fale com a gente
            </button>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white md:hidden" aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-petrol-dark/98 px-8 pb-12 pt-24 backdrop-blur-lg"
          >
            <nav className="flex flex-1 flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={() => closeAndNavigate(link.href)}
                  className="text-left font-display text-3xl font-bold text-white transition-colors hover:text-amarelo"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="border-t border-white/10 pt-8">
              <button onClick={() => closeAndNavigate('/contato')} className="btn-primary w-full justify-center text-base">
                Fale com a gente
              </button>
              <p className="mt-4 text-center text-sm text-white/40">Minas Gerais / Brasil</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
