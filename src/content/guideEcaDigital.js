import { contact } from './siteContent'

export const GUIDE_DOWNLOAD_URL =
  import.meta.env.VITE_GUIDE_DOWNLOAD_URL ||
  '/downloads/guia-uso-responsavel-imagens-criancas-adolescentes.pdf'

export const GUIDE_CAMPAIGN = {
  name: 'Guia de uso responsável de imagens de crianças e adolescentes',
  slug: 'guia-eca-digital',
  landingPath: '/guia-eca-digital',
  blogPath: '/blog/eca-digital-uso-imagens-criancas',
  thankYouPath: '/obrigado/guia-eca-digital',
  privacyPath: '/politica-de-privacidade',
  downloadUrl: GUIDE_DOWNLOAD_URL,
  whatsappHref:
    'https://wa.me/5531985245110?text=Ol%C3%A1%2C%20conheci%20a%20Plante%20pelo%20Guia%20de%20uso%20respons%C3%A1vel%20de%20imagens%20de%20crian%C3%A7as%20e%20adolescentes%20e%20gostaria%20de%20conversar%20sobre%20a%20comunica%C3%A7%C3%A3o%20da%20minha%20institui%C3%A7%C3%A3o.',
  contactEmail: contact.email,
  metadata: {
    landingTitle: 'Boas histórias também merecem cuidado | Guia gratuito da Plante',
    landingDescription:
      'Baixe o guia gratuito da Plante e veja como usar imagens de crianças e adolescentes com mais segurança, clareza e responsabilidade.',
    blogTitle:
      'ECA Digital e fotos de crianças: cuidados para escolas, clínicas e instituições | Plante',
    blogDescription:
      'Entenda como o ECA Digital, o ECA e a LGPD se relacionam com o uso de fotos e vídeos de crianças em redes sociais, eventos e campanhas.',
    ogImage: '/brand/ideas/eca-digital-cover.jpg',
  },
}

export const guideSegments = [
  'Escola ou creche',
  'Clínica ou consultório',
  'Projeto social',
  'Instituição especializada',
  'Órgão público',
  'Mandato',
  'Igreja ou organização comunitária',
  'Empresa',
  'Agência ou profissional de comunicação',
  'Outro',
]

export const guideBenefits = [
  {
    title: 'Antes de fotografar',
    description: 'Cuidados que precisam ser observados antes do registro.',
  },
  {
    title: 'Autorização de imagem',
    description: 'O que verificar antes de utilizar fotos, vídeos e voz.',
  },
  {
    title: 'Dados e localização',
    description: 'Informações que não devem aparecer ou ser associadas à imagem.',
  },
  {
    title: 'Eventos',
    description: 'Como organizar a captação quando há muitas crianças no mesmo espaço.',
  },
  {
    title: 'Anúncios',
    description: 'Por que uma publicação comum e uma campanha patrocinada exigem análises diferentes.',
  },
  {
    title: 'Situações sensíveis',
    description: 'Orientações para saúde, deficiência, atendimento especializado e vulnerabilidade.',
  },
  {
    title: 'Inteligência artificial',
    description: 'Cuidados com edição, criação de imagens e uso de voz.',
  },
  {
    title: 'Checklist',
    description: 'Uma conferência prática antes de enviar qualquer material para publicação.',
  },
]

export const guideAudiences = [
  'Escolas e creches',
  'Clínicas e profissionais da saúde',
  'Instituições de atendimento especializado',
  'Projetos sociais',
  'Igrejas e organizações comunitárias',
  'Órgãos públicos e mandatos',
  'Empresas que promovem eventos',
  'Profissionais de marketing e comunicação',
]

export const guideSources = [
  {
    label: 'Lei nº 15.211, de 17 de setembro de 2025',
    href: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15211.htm',
  },
  {
    label: 'Lei nº 15.352, de 25 de fevereiro de 2026',
    href: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/L15352.htm',
  },
  {
    label: 'Decreto nº 12.880, de 18 de março de 2026',
    href: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/decreto/D12880.htm',
  },
  {
    label: 'Decreto nº 12.622, de 17 de setembro de 2025',
    href: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/D12622.htm',
  },
  {
    label: 'Lei nº 8.069, de 13 de julho de 1990, Estatuto da Criança e do Adolescente',
    href: 'https://www.planalto.gov.br/ccivil_03/leis/l8069.htm',
  },
  {
    label: 'Lei nº 13.709, de 14 de agosto de 2018, Lei Geral de Proteção de Dados',
    href: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
  },
  {
    label: 'Materiais oficiais da Agência Nacional de Proteção de Dados',
    href: 'https://www.gov.br/anpd/pt-br',
  },
]
