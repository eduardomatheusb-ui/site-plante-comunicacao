import PageHero from '../components/PageHero'
import { contact } from '../content/siteContent'

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade"
        subtitle="Como a Plante coleta e utiliza dados em formulários, campanhas, contatos e navegação no site."
      />

      <section className="bg-white py-20 text-grafite">
        <div className="section-padding mx-auto max-w-4xl">
          <div className="prose-wrapper">
            <p>
              Esta política explica, de forma resumida, como a Plante Comunicação trata dados recebidos por meio deste site, formulários de contato, páginas de campanha e ações de captação de conteúdo.
            </p>

            <h2>Dados coletados</h2>
            <p>
              Podemos coletar dados informados voluntariamente, como nome, instituição ou empresa, segmento, e-mail, WhatsApp, mensagem enviada e consentimento registrado no formulário. Também podemos registrar informações técnicas não sensíveis, como página de origem, data do envio, referrer e parâmetros de campanha.
            </p>

            <h2>Finalidades</h2>
            <p>
              Os dados são utilizados para responder contatos, enviar materiais solicitados, organizar ações de relacionamento, enviar conteúdos da Plante sobre comunicação e marketing e melhorar a experiência do site.
            </p>

            <h2>Comunicações de marketing</h2>
            <p>
              Quando houver consentimento, a Plante poderá entrar em contato por WhatsApp, e-mail ou Instagram para enviar conteúdos, materiais, convites e informações relacionadas aos seus serviços. O cancelamento pode ser solicitado a qualquer momento pelo e-mail {contact.email}.
            </p>

            <h2>Compartilhamento</h2>
            <p>
              Os dados podem ser tratados por prestadores técnicos necessários para funcionamento do site, hospedagem, formulários, métricas, automações e ferramentas de atendimento. Não vendemos dados pessoais.
            </p>

            <h2>Armazenamento e exclusão</h2>
            <p>
              Os dados são mantidos pelo tempo necessário para cumprir as finalidades informadas ou até que a exclusão seja solicitada, respeitando obrigações legais e operacionais aplicáveis.
            </p>

            <h2>Cookies e métricas</h2>
            <p>
              O site pode utilizar ferramentas de métricas para entender visitas, origens de acesso e desempenho das campanhas. Eventos de formulário não devem enviar nome, e-mail, telefone ou informações pessoais completas às ferramentas de analytics.
            </p>

            <h2>Controlador e contato</h2>
            <p>
              A responsável pelo tratamento dos dados coletados neste site é a Plante Comunicação. Solicitações sobre acesso, correção, cancelamento de comunicações ou exclusão de dados podem ser enviadas para {contact.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
