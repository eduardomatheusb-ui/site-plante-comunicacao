import { useMemo, useState } from 'react'
import { Copy, ExternalLink, RefreshCw } from 'lucide-react'
import LogoMark from '../components/LogoMark'

const baseUrl = 'https://agenciaplante.com.br/boa-jogada-plante'

function normalizeUsername(value) {
  return value.replace(/\s/g, '').replace(/^@/, '')
}

function createToken() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID()
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function buildLink({ username, mentionType, directStatus, token }) {
  const params = new URLSearchParams({
    token,
    utm_source: 'instagram',
    utm_medium: directStatus === 'manual' ? 'manual_direct' : 'direct',
    utm_campaign: 'geraes_open',
    user: normalizeUsername(username),
    type: mentionType,
    direct_status: directStatus,
  })

  return `${baseUrl}?${params.toString()}`
}

function buildMessage(link) {
  return `Oi! Que boa jogada ver voce no Geraes Open.

Recebemos sua marcacao na acao especial da Plante em parceria com o evento.

Para participar, e so preencher este formulario:

${link}

Depois disso, voce ja entra na nossa acao especial.

Plante Comunicacao`
}

export default function BoaJogadaOperacaoPage() {
  const [username, setUsername] = useState('')
  const [mentionType, setMentionType] = useState('manual')
  const [directStatus, setDirectStatus] = useState('manual')
  const [token, setToken] = useState(() => createToken())
  const [copied, setCopied] = useState('')

  const link = useMemo(
    () => buildLink({ username, mentionType, directStatus, token }),
    [username, mentionType, directStatus, token],
  )
  const message = useMemo(() => buildMessage(link), [link])

  const copyText = async (text, type) => {
    await navigator.clipboard.writeText(text)
    setCopied(type)
    window.setTimeout(() => setCopied(''), 1800)
  }

  return (
    <div className="min-h-screen bg-[#f7f5e8] px-5 py-8 text-grafite">
      <main className="mx-auto max-w-4xl">
        <header className="flex items-center gap-3">
          <LogoMark size={44} />
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-grafite/45">
              Operacao Geraes Open
            </p>
            <h1 className="font-display text-3xl font-bold">Boa Jogada Plante</h1>
          </div>
        </header>

        <section className="mt-8 rounded-[2rem] border border-grafite/10 bg-white p-5 shadow-xl md:p-8">
          <p className="text-sm leading-relaxed text-grafite/60">
            Use esta pagina quando a marcacao precisar de fallback manual. Informe o Instagram da pessoa, gere o link e copie a mensagem pronta para enviar pelo Direct.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <label className="md:col-span-1">
              <span className="mb-2 block text-sm font-bold">Instagram</span>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="@usuario"
                className="w-full rounded-2xl border border-grafite/12 px-4 py-4 outline-none focus:border-grafite focus:ring-4 focus:ring-[#ece446]/45"
              />
            </label>

            <label>
              <span className="mb-2 block text-sm font-bold">Tipo</span>
              <select
                value={mentionType}
                onChange={(event) => setMentionType(event.target.value)}
                className="w-full rounded-2xl border border-grafite/12 px-4 py-4 outline-none focus:border-grafite focus:ring-4 focus:ring-[#ece446]/45"
              >
                <option value="manual">Manual</option>
                <option value="story_mention">Story</option>
                <option value="feed_mention">Feed</option>
                <option value="reels_mention">Reels</option>
                <option value="comment_mention">Comentario</option>
              </select>
            </label>

            <label>
              <span className="mb-2 block text-sm font-bold">Status Direct</span>
              <select
                value={directStatus}
                onChange={(event) => setDirectStatus(event.target.value)}
                className="w-full rounded-2xl border border-grafite/12 px-4 py-4 outline-none focus:border-grafite focus:ring-4 focus:ring-[#ece446]/45"
              >
                <option value="manual">Manual</option>
                <option value="sent">Enviado</option>
                <option value="pending">Pendente</option>
                <option value="error">Erro</option>
              </select>
            </label>
          </div>

          <div className="mt-6 rounded-3xl bg-[#f7f5e8] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-grafite/45">Link unico</p>
            <p className="mt-2 break-all text-sm font-semibold">{link}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" onClick={() => copyText(link, 'link')} className="inline-flex items-center gap-2 rounded-full bg-grafite px-4 py-2 text-sm font-bold text-white">
                <Copy size={16} />
                {copied === 'link' ? 'Copiado' : 'Copiar link'}
              </button>
              <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-grafite/15 px-4 py-2 text-sm font-bold">
                <ExternalLink size={16} />
                Abrir
              </a>
              <button type="button" onClick={() => setToken(createToken())} className="inline-flex items-center gap-2 rounded-full border border-grafite/15 px-4 py-2 text-sm font-bold">
                <RefreshCw size={16} />
                Novo token
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-grafite p-4 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Mensagem pronta</p>
            <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-white/80">{message}</pre>
            <button type="button" onClick={() => copyText(message, 'message')} className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ece446] px-4 py-2 text-sm font-bold text-grafite">
              <Copy size={16} />
              {copied === 'message' ? 'Copiada' : 'Copiar mensagem'}
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
