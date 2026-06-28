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
import BioLinksPage from './pages/BioLinksPage'
import BoaJogadaPlantePage from './pages/BoaJogadaPlantePage'
import { normalizePath } from './lib/navigation'
import { applySeo } from './lib/seo'

const pageMeta = {
  '/': {
    title: 'Plante Comunicação | Agência mineira de publicidade e marketing',
    description:
      'Agência mineira de publicidade e marketing que une estratégia, criação, gestão de marketing e posicionamento de negócio para movimentar marcas.',
  },
  '/quem-somos': {
    title: 'Quem somos | Plante Comunicação',
    description:
      'Conheça a Plante Comunicação, agência mineira de publicidade e marketing com 8 anos de atuação, escuta próxima e criação com direção.',
  },
  '/servicos': {
    title: 'Serviços | Plante Comunicação',
    description:
      'Gestão de marketing, posicionamento de negócio, campanhas publicitárias, branding, mídia, websites, audiovisual e comunicação institucional.',
  },
  '/projetos': {
    title: 'Projetos | Plante Comunicação',
    description:
      'Projetos, cases e experiências da Plante em comunicação para marcas, instituições, projetos públicos e iniciativas sociais.',
  },
  '/ideias-em-movimento': {
    title: 'Ideias em Movimento | Plante Comunicação',
    description:
      'Conteúdos, bastidores e reflexões da Plante Comunicação sobre estratégia, criação, marcas, posicionamento de negócio e comunicação institucional.',
  },
  '/contato': {
    title: 'Contato | Plante Comunicação',
    description:
      'Fale com a Plante Comunicação para transformar sua ideia em estratégia, campanha, conteúdo e posicionamento.',
  },
  '/links': {
    title: 'Links | Plante Comunicação',
    description:
      'Acesse os principais links da Plante Comunicação: site, WhatsApp, projetos, conteúdos e Instagram.',
  },
  '/boa-jogada-plante': {
    title: 'Boa Jogada Plante | Geraes Open',
    description:
      'Participe da ação Boa Jogada Plante durante o Geraes Open, complete uma frase criativa e concorra a um brinde especial.',
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
    '/links': <BioLinksPage />,
    '/boa-jogada-plante': <BoaJogadaPlantePage />,
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

  const standaloneRoutes = ['/links', '/boa-jogada-plante']
  const isStandaloneRoute = standaloneRoutes.includes(route.path)

  return (
    <div className="min-h-screen bg-petrol">
      {!isStandaloneRoute && <Header currentPath={route.path} />}
      <main>{route.page}</main>
      {!isStandaloneRoute && <Footer />}
    </div>
  )
}
