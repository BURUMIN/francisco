export const currentUser = {
  name: 'Mariana Souza',
  avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
};

export const navigation = [
  { key: 'feed', label: 'Feed de Notícias', icon: '⌂' },
  { key: 'messages', label: 'Mensagens', icon: '✉' },
  { key: 'events', label: 'Eventos', icon: '◫' },
  { key: 'friends', label: 'Amigos', icon: '👥' },
  { key: 'photos', label: 'Fotos', icon: '▣' },
];

export const favorites = [
  { key: 'favorites-futebol', label: 'Futebol', icon: '⚽' },
  { key: 'favorites-cafe', label: 'Café & Amor', icon: '☕' },
  { key: 'favorites-design', label: 'Design', icon: '✦' },
  { key: 'favorites-games', label: 'Games', icon: '▣' },
  { key: 'favorites-viagens', label: 'Viagens', icon: '✈' },
];

export const pages = [
  { key: 'page-musica', label: 'Música ao Vivo', icon: '♫' },
  { key: 'page-fotografia', label: 'Fotografia', icon: '◌' },
  { key: 'page-recife', label: 'Recife Antigo', icon: '⌂' },
  { key: 'page-yoga', label: 'Aulas de Yoga', icon: '◐' },
];

export const groups = [
  { key: 'group-marketing', label: 'Marketing Digital', icon: '◍', members: '3,4 mil membros' },
  { key: 'group-viagens', label: 'Viajantes do Brasil', icon: '◍', members: '8,1 mil membros' },
  { key: 'group-cafe', label: 'Clube do Café', icon: '◍', members: '1,6 mil membros' },
];

export const birthdays = [
  { name: 'Pedro Almeida', day: 'Hoje', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80' },
  { name: 'Rafaela Nunes', day: 'Amanhã', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80' },
];

export const pageSuggestions = [
  { name: 'Aventura em Recife', cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=240&q=80', likes: '12,4 mil' },
  { name: 'Café de Bairro', cover: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=240&q=80', likes: '8,1 mil' },
  { name: 'Arte & Design', cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=240&q=80', likes: '5,9 mil' },
];

export const peopleYouMayKnow = [
  { name: 'Bruno Costa', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80', mutuals: '7 amigos em comum' },
  { name: 'Sofia Martins', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&q=80', mutuals: '4 amigos em comum' },
  { name: 'Henrique Dias', avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=100&q=80', mutuals: '3 amigos em comum' },
];

export const notifications = [
  { id: 1, title: 'Luciana comentou na sua foto', time: 'há 10 min', read: false },
  { id: 2, title: 'João e mais 9 pessoas curtiram seu status', time: 'há 1 h', read: false },
  { id: 3, title: 'Seu evento "Noite no Marco" foi criado', time: 'há 3 h', read: true },
  { id: 4, title: 'Pedro convidou você para um grupo', time: 'ontem', read: true },
];

export const messages = [
  { id: 1, user: 'Beatriz Rocha', preview: 'Vamos ao café depois?', time: '2 min', unread: true },
  { id: 2, user: 'Carlos Mendes', preview: 'Recebi a sua mensagem sobre o evento', time: '15 min', unread: false },
  { id: 3, user: 'Patrícia Lima', preview: 'Obrigada pela ajuda com o convite', time: '1 h', unread: false },
];

export const initialPosts = [
  {
    id: 1,
    author: 'Lucas Pereira',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    date: 'Hoje às 18:42',
    text: 'A tarde começou com o melhor tipo de energia: sol, café e um bom projeto em andamento. A vida fica mais leve quando a rotina tem um toque de criatividade.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    likes: 248,
    liked: false,
    comments: [
      { author: 'Ana', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80', text: 'Essa vibe está incrível!' },
      { author: 'Rafael', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80', text: 'Café sempre ajuda a pensar melhor.' },
    ],
  },
  {
    id: 2,
    author: 'Sofia Martins',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=120&q=80',
    date: 'Hoje às 16:15',
    text: 'Fiz uma pequena viagem ao centro da cidade e encontrei um lugar que parecia saído de um filme antigo. Perfeito para fotos e momentos de pausa.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    likes: 189,
    liked: true,
    comments: [
      { author: 'Mariana', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80', text: 'Lugar lindo. Quero conhecer!' },
    ],
  },
  {
    id: 3,
    author: 'Henrique Dias',
    avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=120&q=80',
    date: 'Ontem às 21:08',
    text: 'No fim de semana passado teve aquela reunião de amigos que foi o melhor momento da semana. A energia de todos fez a noite valer muito a pena.',
    image: '',
    likes: 312,
    liked: false,
    comments: [
      { author: 'Patrícia', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80', text: 'Tema perfeito para a semana!' },
    ],
  },
];

export const friendProfiles = [
  {
    id: 'bruno-costa',
    name: 'Bruno Costa',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    city: 'Recife, PE',
    bio: 'Fotógrafo, amante de trilhas e boas conversas.',
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    followers: '2,4 mil',
    friendsCount: 492,
    mutuals: '7 amigos em comum',
  },
  {
    id: 'sofia-martins',
    name: 'Sofia Martins',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
    city: 'Olinda, PE',
    bio: 'Design de produto e viagens curtas por cidades históricas.',
    cover: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    followers: '4,1 mil',
    friendsCount: 668,
    mutuals: '4 amigos em comum',
  },
  {
    id: 'henrique-dias',
    name: 'Henrique Dias',
    avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80',
    city: 'Jaboatão, PE',
    bio: 'Empreendedor, apaixonado por música e reuniões com amigos.',
    cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    followers: '1,8 mil',
    friendsCount: 370,
    mutuals: '3 amigos em comum',
  },
  {
    id: 'lucas-pereira',
    name: 'Lucas Pereira',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    city: 'Recife, PE',
    bio: 'Desenvolvedor front-end e fã de cafés especiais.',
    cover: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=80',
    followers: '5,9 mil',
    friendsCount: 711,
    mutuals: '8 amigos em comum',
  },
];

export const eventList = [
  {
    id: 'noite-no-marco',
    title: 'Noite no Marco',
    date: 'Sábado, 21:00',
    location: 'Praia de Boa Viagem',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    attendees: 128,
    description: 'Uma noite de música ao vivo, drinks e vista para o mar com os amigos.',
  },
  {
    id: 'feira-de-artes',
    title: 'Feira de Artes',
    date: 'Domingo, 15:30',
    location: 'Mercado da Madalena',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    attendees: 94,
    description: 'Apresentação de artistas locais com workshops e comidas típicas.',
  },
  {
    id: 'corrida-da-cidade',
    title: 'Corrida da Cidade',
    date: 'Terça, 07:00',
    location: 'Parque da Jaqueira',
    image: 'https://images.unsplash.com/photo-1541534401786-2077eed87a74?auto=format&fit=crop&w=1200&q=80',
    attendees: 212,
    description: 'Evento leve para quem gosta de movimento, bem-estar e convivência.',
  },
];

export const messageThreads = [
  {
    id: 'beatriz-rocha',
    participant: 'Beatriz Rocha',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    online: true,
    messages: [
      { from: 'them', text: 'Oi, tudo bem? Vamos ao café depois?', time: '2 min' },
      { from: 'me', text: 'Claro! Pode ser às 18h no centro.', time: '1 min' },
      { from: 'them', text: 'Perfeito, te vejo então.', time: 'agora' },
    ],
  },
  {
    id: 'carlos-mendes',
    participant: 'Carlos Mendes',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    online: false,
    messages: [
      { from: 'them', text: 'Recebi a sua mensagem sobre o evento.', time: '15 min' },
      { from: 'me', text: 'Legal! Vou confirmar a presença hoje.', time: '5 min' },
    ],
  },
  {
    id: 'patricia-lima',
    participant: 'Patrícia Lima',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    online: true,
    messages: [
      { from: 'them', text: 'Obrigada pela ajuda com o convite!', time: '1 h' },
      { from: 'me', text: 'Foi um prazer. Você vai arrasar.', time: '55 min' },
    ],
  },
];
