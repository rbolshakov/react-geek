export const botAuthors: string[] = [
  'Jacque Fresco',
  'Philippe Starck',
  'Victor J. Papanek',
  'Dieter Rams',
  'Thomas Chippendale',
  'Karim Rashid',
  'Ron Arad',
];

export const botText: string[] = [
  'Лучше быть последним — первым, чем первым — последним.',
  'На случай, если буду нужен, то я там же, где и был, когда был не нужен.',
  'Если волк молчит то лучше его не перебивай.',
  'Каждый в цирке думает, что знает в цирке, но не каждый, что в цирке знает, что в цирке не каждый знает думает.',
  'Легко вставать, когда ты не ложился.',
  'За двумя зайцами погонишься — рыбку из пруда не выловишь, делу время, а отмеришь семь раз.',
  'Каждый думает, что не знает что, но не каждый не знает, что знает, кто не я...',
  'Кем бы ты ни был, кем бы ты не стал, помни, где ты был и кем ты стал.',
];

export const defaultMessages: Messages = {
  chat1: [
    {
      id: '1',
      author: 'Geekbrains',
      text: 'Welcome to the chat',
    },
  ],
  chat2: [
    {
      id: '1',
      author: 'Geekbrains',
      text: 'Welcome to the chat',
    },
  ],
  chat3: [
    {
      id: '1',
      author: 'Geekbrains',
      text: 'Welcome to the chat',
    },
  ],
};

export const chats = [
  {
    id: '1',
    name: 'чат 1',
  },
  {
    id: '2',
    name: 'чат 2',
  },
  {
    id: '3',
    name: 'чат 3',
  },
];
export interface Message {
  id: string;
  text: string;
  author: string;
}
export interface Messages {
  [key: string]: Message[];
}

export const navigate = [
  {
    id: 1,
    to: '/',
    name: 'Главная',
  },
  {
    id: 2,
    to: '/chats',
    name: 'Чаты',
  },
  {
    id: 3,
    to: '/about',
    name: 'О нас',
  },
  {
    id: 4,
    to: '/profile',
    name: 'Профиль',
  },
];
