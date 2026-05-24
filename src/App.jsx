import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import QuemSomosPage from './pages/QuemSomosPage'
import ServicosPage from './pages/ServicosPage'
import ProjetosPage from './pages/ProjetosPage'
import ProjetoCasePage from './pages/ProjetoCasePage'
import IdeiasEmMovimentoPage from './pages/IdeiasEmMovimentoPage'
import ConteudoPage from './pages/ConteudoPage'
import ContatoPage from './pages/ContatoPage'
import { normalizePath } from './lib/navigation'
import { applySeo } from './lib/seo'

const pageMeta = {
  '/': {
    title: 'Plante Comunicação | Agência mineira de publicidade',
    description:
      'Agência mineira de publicidade que une estratégia, criação, conteúdo e presença digital para movimentar marcas.',
  },
  '/quem-somos': {
    title: 'Quem somos | Plante Comunicação',
    description:
      'Conheça a Plante Comunicação, agência mineira de publicidade com 8 anos de atuação, escuta próxima e criação com direção.',
  },
  '/servicos': {
    title: 'Serviços | Plante Comunicação',
    description:
      'Estratégia, redes sociais, branding, campanhas institucionais, audiovisual, tráfego pago, comunicação institucional e projetos digitais.',
  },
  '/projetos': {
    title: 'Projetos | Plante Comunicação',
    description:
      'Projetos, cases e experiências da Plante em comunicação para marcas, instituições, projetos públicos e iniciativas sociais.',
  },
  '/ideias-em-movimento': {
    title: 'Ideias em Movimento | Plante Comunicação',
    description:
      'Conteúdos, bastidores e reflexões da Plante Comunicação sobre estratégia, criação, marcas, presença digital e comunicação institucional.',
  },
  '/contato': {
    title: 'Contato | Plante Comunicação',
    description:
      'Fale com a Plante Comunicação para transformar sua ideia em estratégia, campanha, conteúdo e presença.',
  },
}

function resolveRoute(path) {
  const normalized = normalizePath(path)

  if (normalized.startsWith('/ideias-em-movimento/')) {
    return {
      path: normalized,
      page: <ConteudoPage slug={normalized.split('/').pop()} />,
      meta: pageMeta['/ideias-em-movimento'],
    }
  }

  if (normalized.startsWith('/projetos/')) {
    return {
      path: normalized,
      page: <ProjetoCasePage slug={normalized.split('/').pop()} />,
      meta: pageMeta['/projetos'],
    }
  }

  const routes = {
    '/': <Home />,
    '/quem-somos': <QuemSomosPage />,
    '/servicos': <ServicosPage />,
    '/projetos': <ProjetosPage />,
    '/ideias-em-movimento': <IdeiasEmMovimentoPage />,
    '/contato': <ContatoPage />,
  }

  return {
    path: routes[normalized] ? normalized : '/',
    page: routes[normalized] || <Home />,
    meta: pageMeta[normalized] || pageMeta['/'],
  }
}

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))
  const route = useMemo(() => resolveRoute(path), [path])

  useEffect(() => {
    const syncPath = () => setPath(normalizePath(window.location.pathname))
    const onNavigate = (event) => setPath(event.detail?.path || normalizePath(window.location.pathname))

    window.addEventListener('popstate', syncPath)
    window.addEventListener('plante:navigate', onNavigate)

    return () => {
      window.removeEventListener('popstate', syncPath)
      window.removeEventListener('plante:navigate', onNavigate)
    }
  }, [])

  useEffect(() => {
    applySeo({ ...route.meta, path: route.path })
  }, [route])

  return (
    <div className="min-h-screen bg-petrol">
      <Header currentPath={route.path} />
      <main>{route.page}</main>
      <Footer />
    </div>
  )
}
