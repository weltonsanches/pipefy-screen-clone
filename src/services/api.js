export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'http://lorempixel.com/50/50/'
        },
        {
          id: 2,
          content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
          labels: ['#7159c1'],
          user: 'https://avatars0.githubusercontent.com/u/19667892?s=400&u=9c214520e189ee25c91e02cf7a7515b787e8423e&v=4'
        },
        {
          id: 14,
          content: 'Aprender Typescript',
          labels: ['#7159c1'],
          user: 'https://i.picsum.photos/id/823/50/50.jpg'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/120/abott@adorable.png'
        },
        {
          id: 4,
          content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          user: 'https://avatars0.githubusercontent.com/u/19667892?s=400&u=9c214520e189ee25c91e02cf7a7515b787e8423e&v=4'
        },
        {
          id: 5,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://i.picsum.photos/id/1074/50/50.jpg'
        },
        {
          id: 16,
          content: 'Aprender Docker e estudar o conceito de containers',
          labels: ['#7159c1'],
          user: 'https://i.pravatar.cc/50?img=60'
        },
        {
          id: 17,
          content: 'Estudar Cloud com AWS',
          labels: ['#7159c1'],
          user: 'https://i.picsum.photos/id/64/50/50.jpg'
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
          user: 'https://avatars0.githubusercontent.com/u/19667892?s=400&u=9c214520e189ee25c91e02cf7a7515b787e8423e&v=4'
        },
        {
          id: 15,
          content: 'Aprender GraphQL',
          labels: ['#7159c1'],
          user: 'https://i.picsum.photos/id/669/50/50.jpg'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://avatars0.githubusercontent.com/u/19667892?s=400&u=9c214520e189ee25c91e02cf7a7515b787e8423e&v=4'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        },
        {
          id: 18,
          content: 'Entender como funciona Kubernetes',
          labels: ['#7159c1'],
          user: 'https://i.picsum.photos/id/433/50/50.jpg'
        },
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Gravar aula sobre deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
          user: 'https://avatars0.githubusercontent.com/u/19667892?s=400&u=9c214520e189ee25c91e02cf7a7515b787e8423e&v=4'
        },
        {
          id: 19,
          content: 'Aprender bem Javascript',
          labels: ['#7159c1'],
          user: 'https://i.picsum.photos/id/338/50/50.jpg'
        },
        {
          id: 20,
          content: 'Estudar Node',
          labels: ['#7159c1'],
          user: 'https://randomuser.me/api/portraits/thumb/men/10.jpg'
        }
      ]
    },
  ];
}