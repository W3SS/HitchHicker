export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar NodeJS',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 2,
          content: 'Recriar a interface do Pipefy',
          labels: ['#7159c1'],
          user: 'https://i.pravatar.cc/300'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://i.pravatar.cc/300'
        },
        {
          id: 4,
          content: 'NextJS: Utilizando server-side rendering com ReactJS',
          labels: ['#54e1f7'],
          user: 'https://i.pravatar.cc/300'
        },
        {
          id: 5,
          content: 'Testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://i.pravatar.cc/300'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://i.pravatar.cc/300'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: 'https://i.pravatar.cc/300'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://i.pravatar.cc/300'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Internacionalização de aplicações Node.js, ReactJS e React Native',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}