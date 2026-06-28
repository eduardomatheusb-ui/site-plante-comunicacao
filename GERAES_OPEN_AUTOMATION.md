# Automacao Boa Jogada Plante - Geraes Open

## Rotas publicadas

- Landing page: `/boa-jogada-plante`
- Operacao manual: `/operacao/boa-jogada-plante`
- Webhook Meta: `/.netlify/functions/meta-webhook`
- Gerador via API: `/.netlify/functions/geraes-open-manual-link`
- Envio Direct via API: `/.netlify/functions/instagram-send-direct`

## Variaveis de ambiente no Netlify

Obrigatorias para webhook Meta:

- `META_VERIFY_TOKEN`: texto secreto usado na validacao do webhook.
- `META_PAGE_ACCESS_TOKEN`: token oficial gerado no fluxo Instagram API with Instagram Login.
- `META_IG_USER_ID`: ID da conta profissional do Instagram usada como remetente.
- `META_GRAPH_VERSION`: opcional. Padrao: `v20.0`.

Recomendadas:

- `PLANTE_ADMIN_SECRET`: segredo para proteger chamadas administrativas da function `instagram-send-direct`.
- `SUPABASE_URL`: URL do projeto Supabase.
- `SUPABASE_SERVICE_ROLE_KEY`: chave service role do Supabase.

## Estado atual

Funciona agora:

- formulario completo na landing;
- envio para Netlify Forms;
- captura de parametros UTM, token, usuario, tipo de marcacao e status do Direct;
- pagina operacional para gerar link unico e mensagem manual;
- functions preparadas para webhook e Direct via `graph.instagram.com`.

Depende de configuracao externa:

- criacao/configuracao do app no Meta Developers;
- aprovacoes/permissoes da Meta;
- configuracao das variaveis de ambiente no Netlify;
- opcional: Supabase para logs estruturados.

## Configuracao Meta Developers

1. Garantir que `@agenciaplante` seja conta profissional.
2. Criar app em Meta Developers.
3. Selecionar o caso de uso da API do Instagram.
4. Adicionar `@agenciaplante` como Testador do Instagram e aceitar o convite em Instagram > Apps e sites > Convites do testador.
5. Gerar o token de acesso para `@agenciaplante`.
6. Configurar webhook com:
   - Callback URL: `https://agenciaplante.com.br/.netlify/functions/meta-webhook`
   - Verify token: mesmo valor de `META_VERIFY_TOKEN`.
7. Garantir as permissoes:
   - `instagram_business_basic`
   - `instagram_business_manage_comments`
   - `instagram_business_manage_messages`

## Fallback manual recomendado para o evento

1. Monitorar marcacoes no Instagram.
2. Abrir `/operacao/boa-jogada-plante`.
3. Informar o `@username`.
4. Copiar a mensagem pronta.
5. Enviar manualmente pelo Direct.
6. Conferir as inscricoes em Netlify > Forms > `boa-jogada-plante`.

## Banco Supabase

Rodar o arquivo `SUPABASE_GERAES_OPEN.sql` no SQL Editor do Supabase se quiser armazenar eventos, Directs e logs fora do Netlify Forms.
