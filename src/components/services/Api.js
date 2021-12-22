export function loadLists() {
    return [
      { 
        title: 'Prateleira 1', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Dom Quixote',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 2,
            content: 'Guerra e Paz',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 3,
            content: 'A Montanha Mágica ',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 4,
            content: 'Cem anos de Solidão ',
            labels: ['#54e1f7'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          
        ]
      },
      { 
        title: 'Prateleira 2', 
        creatable: false,
        cards: [
          {
            id: 5,
            content: 'Ulisses',
            labels: [],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 6,
            content: 'A Divina Comédia',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 7,
            content: 'O Homem sem Qualidades',
            labels: ['#54e1f7'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 9,
            content: 'O Processo',
            labels: [],
          }
        ]
      },
    ];
  }