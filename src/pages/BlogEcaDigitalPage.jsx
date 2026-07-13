import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { GUIDE_CAMPAIGN, guideSources } from '../content/guideEcaDigital'
import { BlogCTA, CampaignHeader } from '../components/GuideCampaign'
import { captureUtmParams, trackEvent, withPreservedUtms } from '../lib/campaignTracking'
import { handleInternalClick } from '../lib/navigation'

const sections = [
  {
    id: 'o-que-e',
    title: 'O que é o ECA Digital',
    body: [
      'O ECA Digital é o nome pelo qual ficou conhecida a Lei nº 15.211, de 17 de setembro de 2025.',
      'A lei está em vigor desde 17 de março de 2026 e trata da proteção de crianças e adolescentes nos ambientes digitais.',
      'Entre os princípios previstos estão a proteção integral, o melhor interesse, a privacidade, a segurança e a responsabilidade compartilhada entre famílias, sociedade, empresas e Poder Público.',
      'A norma foi regulamentada pelo Decreto nº 12.880, de 18 de março de 2026. A Agência Nacional de Proteção de Dados também passou a exercer as atribuições de autoridade administrativa do ECA Digital.',
      'Embora a legislação tenha como foco os produtos e serviços digitais, ela reforça uma discussão importante para quem produz conteúdo: como proteger crianças e adolescentes quando suas imagens e informações circulam na internet.',
      'O uso de fotografias e vídeos também deve considerar o Estatuto da Criança e do Adolescente, a Lei Geral de Proteção de Dados e as regras que protegem a imagem, a identidade, a privacidade e a dignidade.',
    ],
  },
  {
    id: 'proibiu-fotos',
    title: 'O ECA Digital proibiu fotos de crianças?',
    body: [
      'Não.',
      'O ECA Digital não criou uma proibição geral à publicação de fotografias de crianças e adolescentes.',
      'O que ele faz é reforçar deveres de proteção, prevenção de riscos, privacidade, segurança e respeito ao melhor interesse de quem ainda está em desenvolvimento.',
      'Por isso, não é correto tratar toda fotografia como irregular. Também não é adequado imaginar que qualquer imagem está liberada quando existe uma autorização assinada.',
      'Cada publicação precisa ser analisada de acordo com sua finalidade, seu contexto, seu alcance e os riscos envolvidos.',
    ],
  },
  {
    id: 'autorizacao',
    title: 'A autorização resolve tudo?',
    body: [
      'A autorização dos responsáveis é uma parte importante do processo, principalmente em usos institucionais, publicitários e comerciais.',
      'Ela, porém, não deve ser o único critério.',
    ],
    list: [
      'expõe a criança de maneira desnecessária',
      'mostra uma situação constrangedora',
      'revela informações pessoais',
      'permite identificar uma rotina ou localização',
      'associa seu rosto a um diagnóstico',
      'apresenta uma condição de saúde',
      'utiliza sofrimento como apelo',
      'pode prejudicá-la no presente ou no futuro',
    ],
    after: [
      'A pergunta não deve ser apenas “temos autorização?”.',
      'Também é preciso perguntar se aquela publicação é realmente adequada.',
    ],
  },
  {
    id: 'detalhes',
    title: 'Uma imagem pode revelar mais do que o rosto',
    body: [
      'Em muitos casos, a exposição acontece nos detalhes.',
      'Um uniforme pode identificar a escola. Um mural pode mostrar nomes completos. Um crachá pode revelar dados pessoais. A localização publicada em tempo real pode indicar onde a criança está. Uma ficha sobre a mesa pode apresentar informações de saúde.',
      'Antes de fotografar ou publicar, é importante observar:',
    ],
    list: [
      'o que aparece no fundo',
      'se existem documentos visíveis',
      'se o nome completo está sendo divulgado',
      'se o uniforme identifica a instituição',
      'se a legenda informa a rotina',
      'se existe localização em tempo real',
      'se aparecem dados médicos',
      'se a imagem mostra placas, endereços ou veículos',
      'se o conteúdo revela uma informação familiar',
    ],
    after: [
      'Nem sempre é necessário deixar de registrar a atividade.',
      'Muitas vezes, basta escolher outro enquadramento.',
      'Uma fotografia das mãos durante uma oficina, dos materiais utilizados ou de um plano mais aberto pode comunicar o trabalho realizado sem identificar individualmente as crianças.',
    ],
    cta: true,
  },
  {
    id: 'situacoes',
    title: 'Situações que exigem atenção maior',
    body: ['Alguns conteúdos precisam de cuidado redobrado.', 'Entre eles estão imagens de crianças:'],
    list: [
      'chorando',
      'em situação de crise',
      'recebendo atendimento',
      'participando de procedimentos médicos ou terapêuticos',
      'em situação de vulnerabilidade social',
      'com pouca roupa',
      'acompanhadas de diagnóstico',
      'relatando problemas familiares',
      'participando de depoimentos comerciais',
      'sendo utilizadas como representação de apoio institucional',
    ],
    after: [
      'Uma intenção positiva não elimina os riscos da exposição.',
      'Uma clínica pode querer mostrar o resultado de um trabalho. Um projeto pode desejar apresentar a realidade que atende. Uma instituição pública pode querer prestar contas de uma ação.',
      'Ainda assim, é possível comunicar sem revelar tudo sobre a criança.',
    ],
  },
  {
    id: 'saude',
    title: 'Saúde, deficiência e atendimento especializado',
    body: [
      'Imagens produzidas em clínicas, hospitais, consultórios e instituições especializadas merecem atenção ainda maior.',
      'Uma fotografia pode revelar, direta ou indiretamente:',
    ],
    list: [
      'um diagnóstico',
      'uma deficiência',
      'um tratamento',
      'um medicamento',
      'um profissional responsável',
      'um histórico de atendimento',
      'uma situação de crise',
      'uma informação familiar',
    ],
    after: [
      'É possível falar sobre o serviço sem apresentar o prontuário, o diagnóstico ou a história completa da criança.',
      'Fotografias dos materiais utilizados, do ambiente preparado ou da equipe podem comunicar o trabalho de forma mais segura.',
      'A criança não deve ser apresentada somente por sua deficiência, por sua condição de saúde ou pelas dificuldades que enfrenta.',
    ],
  },
  {
    id: 'anuncios',
    title: 'Publicação e anúncio não são a mesma coisa',
    body: [
      'Outro ponto importante é a finalidade da imagem.',
      'Uma autorização para publicar uma fotografia no perfil de uma escola não significa, automaticamente, que a mesma imagem possa ser utilizada em:',
    ],
    list: [
      'anúncio patrocinado',
      'outdoor',
      'painel de LED',
      'campanha comercial',
      'material de matrícula',
      'apresentação de vendas',
      'peça produzida com parceiros',
      'publicação feita por outra empresa',
    ],
    after: [
      'O impulsionamento amplia o alcance do conteúdo e faz com que a imagem seja apresentada a pessoas que não acompanham normalmente aquela instituição.',
      'Quando a finalidade muda, a autorização também precisa ser revista.',
    ],
  },
  {
    id: 'eventos',
    title: 'Eventos com crianças',
    body: ['Em eventos, é recomendável informar previamente que haverá captação de imagens.', 'Também é importante:'],
    list: [
      'permitir que os responsáveis manifestem recusa',
      'identificar quem não pode aparecer',
      'orientar fotógrafos e cinegrafistas',
      'priorizar imagens gerais',
      'evitar closes sem necessidade',
      'solicitar autorização específica para entrevistas',
      'não incentivar a divulgação de informações pessoais',
    ],
    after: [
      'Uma placa informando que o evento está sendo filmado ajuda a comunicar a captação.',
      'Ela não deve ser tratada, porém, como autorização irrestrita para qualquer uso posterior.',
      'Entrevistas, depoimentos, closes e campanhas publicitárias exigem uma verificação mais cuidadosa.',
    ],
  },
  {
    id: 'whatsapp',
    title: 'E quando a imagem chega por WhatsApp?',
    body: [
      'O fato de uma fotografia ter sido enviada para uma instituição não significa que ela esteja autorizada para publicação.',
      'Antes de encaminhar o material para a equipe de comunicação ou para uma agência, é preciso confirmar:',
    ],
    list: [
      'quem produziu a imagem',
      'se o responsável autorizou seu uso',
      'em quais canais ela pode ser publicada',
      'se a autorização inclui anúncios',
      'se existe alguma restrição',
      'se a imagem foi retirada de outro perfil',
    ],
    after: [
      'O mesmo vale para prints, fotografias retiradas de grupos e conteúdos publicados por outras pessoas.',
      'Receber um arquivo não transfere automaticamente o direito de utilizá-lo.',
    ],
  },
  {
    id: 'ia',
    title: 'Uso de inteligência artificial',
    body: [
      'O uso de imagens de crianças em ferramentas de inteligência artificial também exige cuidado.',
      'Uma fotografia não deve ser enviada a qualquer plataforma sem que a instituição compreenda como o arquivo será armazenado e utilizado.',
      'Também devem ser avaliadas situações como:',
    ],
    list: [
      'alteração do rosto',
      'mudança de corpo',
      'troca de cenário',
      'criação de novas imagens baseadas em uma criança real',
      'clonagem de voz',
      'simulação de falas',
      'criação de depoimentos',
      'transformação da criança em personagem',
      'uso da imagem como referência para novas produções',
    ],
    after: [
      'A inteligência artificial não deve criar situações que nunca aconteceram nem atribuir à criança uma fala ou um comportamento inexistente.',
    ],
  },
  {
    id: 'checklist',
    title: 'Antes de publicar',
    body: ['Uma verificação simples pode evitar muitos problemas.', 'Pergunte:'],
    ordered: [
      'Sabemos de onde veio essa imagem?',
      'Existe autorização adequada?',
      'A criança estava confortável com o registro?',
      'Há alguma informação pessoal visível?',
      'A legenda revela algo que não deveria?',
      'A localização precisa aparecer?',
      'A imagem mostra uma situação de fragilidade?',
      'O conteúdo continuaria respeitoso fora do contexto original?',
      'A autorização contempla anúncio ou impulsionamento?',
      'Existe uma forma de comunicar com menos exposição?',
    ],
    after: ['Quando houver dúvida, a melhor decisão é verificar antes de publicar.'],
  },
  {
    id: 'guia',
    title: 'Um guia para ajudar nessa rotina',
    body: [
      'A Plante preparou o Guia de uso responsável de imagens de crianças e adolescentes.',
      'O material foi desenvolvido para escolas, clínicas, projetos, instituições, empresas, agentes públicos e profissionais de comunicação.',
      'O guia reúne orientações sobre:',
    ],
    list: [
      'autorização de imagem',
      'fotografias e vídeos em eventos',
      'dados pessoais',
      'localização',
      'saúde e deficiência',
      'anúncios',
      'comunicação pública',
      'inteligência artificial',
      'responsabilidades da instituição',
      'checklist antes da publicação',
    ],
    after: [
      'O objetivo não é impedir registros.',
      'É ajudar instituições e equipes de comunicação a fazer escolhas melhores.',
    ],
  },
]

export default function BlogEcaDigitalPage() {
  useEffect(() => {
    captureUtmParams()
    trackEvent('view_eca_blog')
  }, [])

  const landingUrl = withPreservedUtms(GUIDE_CAMPAIGN.landingPath)

  return (
    <div className="min-h-screen bg-[#f7f4e8] text-grafite">
      <CampaignHeader />
      <article>
        <header className="section-padding mx-auto max-w-5xl py-16 md:py-24">
          <nav className="mb-8 text-sm text-grafite/55" aria-label="Breadcrumb">
            <a href="/" onClick={(event) => handleInternalClick(event, '/')} className="hover:text-grafite">Plante</a>
            <span className="mx-2">/</span>
            <a href={landingUrl} onClick={(event) => handleInternalClick(event, landingUrl)} className="hover:text-grafite">Guia ECA Digital</a>
            <span className="mx-2">/</span>
            <span>Artigo</span>
          </nav>
          <span className="tag border-grafite/20 text-grafite/60">Comunicação e responsabilidade</span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] md:text-7xl">
            ECA Digital e uso de imagens de crianças: o que sua instituição precisa observar
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-grafite/65">
            Uma fotografia de uma atividade escolar, de um atendimento ou de um evento pode parecer um registro simples. Dependendo do enquadramento e das informações que acompanham a publicação, porém, ela também pode revelar dados que precisam ser protegidos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-grafite/50">
            <span>Publicado em 13 julho 2026</span>
            <span>Atualizado em 13 julho 2026</span>
            <span>Por Plante</span>
            <span>8 min de leitura</span>
          </div>
          <div className="mt-12 overflow-hidden rounded-[1.7rem] bg-grafite shadow-[10px_10px_0_#ECE446]">
            <img
              src={GUIDE_CAMPAIGN.metadata.ogImage}
              alt=""
              className="h-auto w-full"
            />
          </div>
        </header>

        <div className="section-padding mx-auto grid max-w-7xl gap-12 pb-20 lg:grid-cols-[260px,minmax(0,820px)]">
          <aside className="hidden lg:block">
            <div className="sticky top-8 rounded-2xl border border-grafite/10 bg-white p-5">
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-grafite/45">Sumário</p>
              <nav className="mt-4 space-y-3 text-sm text-grafite/65">
                {sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="block hover:text-grafite">{section.title}</a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="rounded-[1.7rem] bg-white p-6 shadow-sm md:p-10">
            <div className="prose-wrapper">
              <p>
                Com a entrada em vigor do ECA Digital, o debate sobre a proteção de crianças e adolescentes na internet ganhou ainda mais importância.
              </p>
              <p>
                Para escolas, clínicas, projetos, instituições, empresas e agentes públicos, este é um bom momento para rever a maneira como as imagens são produzidas, recebidas e publicadas.
              </p>

              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-10">
                  <h2>{section.title}</h2>
                  {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.list && (
                    <ul>
                      {section.list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                  {section.ordered && (
                    <ol>
                      {section.ordered.map((item) => <li key={item}>{item}</li>)}
                    </ol>
                  )}
                  {section.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.cta && <BlogCTA position="middle" />}
                </section>
              ))}

              <BlogCTA position="final" />
              <p className="text-sm text-grafite/55">
                Este conteúdo possui caráter orientativo e não substitui a análise jurídica de situações específicas.
              </p>

              <section>
                <h2>Fontes e referências</h2>
                <ul>
                  {guideSources.map((source) => (
                    <li key={source.href}>
                      <a href={source.href} target="_blank" rel="noopener noreferrer">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-grafite py-20 text-white">
        <div className="section-padding mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">Baixe gratuitamente o guia</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
              Preencha seus dados e receba um material prático para compartilhar com toda a equipe responsável pela comunicação da sua instituição.
            </p>
          </div>
          <a
            href={landingUrl}
            onClick={(event) => {
              trackEvent('blog_cta_click', { position: 'footer' })
              handleInternalClick(event, landingUrl)
            }}
            className="btn-primary"
          >
            Quero acessar o guia
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}
