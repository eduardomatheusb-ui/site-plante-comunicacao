# Site da Plante Comunicação

Site institucional da Plante Comunicação, desenvolvido em React + Vite + Tailwind CSS e publicado no Netlify.

## Campanha Guia ECA Digital

Foi criada uma estrutura de captação para o material **Guia de uso responsável de imagens de crianças e adolescentes**.

### Rotas

- `/guia-eca-digital`: landing page de captação.
- `/blog/eca-digital-uso-imagens-criancas`: artigo completo.
- `/obrigado/guia-eca-digital`: página de agradecimento e download.
- `/politica-de-privacidade`: política de privacidade.
- `/api/leads/guia-eca-digital`: endpoint preparado para webhook/CRM.

### Formulário

O formulário principal está configurado para Netlify Forms com o nome:

`guia-eca-digital`

Campos coletados:

- nome;
- instituição ou empresa;
- segmento;
- e-mail;
- WhatsApp normalizado;
- consentimento;
- UTMs;
- referrer;
- landing page;
- data de envio.

Também existe a função `netlify/functions/guia-eca-lead.js` para integração futura com CRM ou Google Sheets via webhook.

### PDF do guia

Inserir o arquivo final neste caminho:

`public/downloads/guia-uso-responsavel-imagens-criancas-adolescentes.pdf`

Enquanto o arquivo não existir, o botão continuará apontando para esse endereço preparado. O arquivo não foi criado artificialmente.

### Variáveis de ambiente

Copie `.env.example` se precisar configurar ambiente local.

- `LEADS_WEBHOOK_URL`: opcional. URL para envio de leads via função de API.
- `VITE_GUIDE_DOWNLOAD_URL`: opcional. Substitui o endereço padrão do PDF.
- `VITE_GTM_ID`: opcional. Reservado para Google Tag Manager, se for adotado depois.

### Métricas

Os eventos são disparados para `gtag` quando ele está disponível:

- `view_guide_landing`;
- `view_eca_blog`;
- `blog_cta_click`;
- `lead_form_start`;
- `lead_submit_success`;
- `lead_submit_error`;
- `guide_download`;
- `whatsapp_cta_click`;
- `privacy_link_click`.

Nenhum evento envia nome, e-mail, telefone ou mensagem digitada.

### Onde editar textos

- Configuração da campanha: `src/content/guideEcaDigital.js`
- Landing page: `src/pages/GuiaEcaDigitalPage.jsx`
- Artigo: `src/pages/BlogEcaDigitalPage.jsx`
- Obrigado: `src/pages/GuiaEcaObrigadoPage.jsx`
- Política: `src/pages/PoliticaPrivacidadePage.jsx`

### Como rodar localmente

```bash
npm install
npm run dev
```

### Como testar produção local

```bash
npm run build
npm run preview
```

### Publicação

O Netlify usa:

- comando de build: `npm run build`
- pasta publicada: `dist`

O deploy acontece automaticamente pelo GitHub/Netlify ou manualmente via CLI do Netlify.

## Gerenciador de conteudo

Foi preparada uma area administrativa em `/admin` usando Decap CMS. Ela permite cadastrar novos textos para a pagina **Ideias em Movimento** e editar dados basicos de contato/SEO do site.

Para ativar o login no Netlify:

1. Ative o Identity do site no painel da Netlify.
2. Ative o Git Gateway nas configuracoes do Identity.
3. Convide os e-mails da equipe que podera editar.
4. Acesse `https://www.agenciaplante.com.br/admin`.

Quando um conteudo for publicado pelo painel, ele cria um arquivo em `src/content/ideas`, envia para o GitHub e o Netlify publica a nova versao automaticamente.

Pastas importantes:

- `public/admin`: tela e configuracao do gerenciador.
- `src/content/ideas`: novos artigos criados pelo painel.
- `public/uploads`: imagens enviadas pelo painel.
- `src/content/cms/site-settings.json`: contato e SEO editaveis.
