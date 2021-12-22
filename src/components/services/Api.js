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
            publicationDate: '1605',
            author:' Miguel de Cervantes',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/Dom-Quixote.jpg.webp',
          },
          {
            id: 2,
            content: 'Guerra e Paz',
            labels: ['#7159c1'],
            publicationDate: '1869',
            author:'Liev Tolstói',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/Guerra-e-Paz.jpg.webp',
          },
          {
            id: 3,
            content: 'A Montanha Mágica ',
            labels: ['#7159c1'],
            publicationDate: '1924',
            author:'Thomas Mann',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/A-Montanha-Magica.jpg.webp',
          },
          {
            id: 4,
            content: 'Cem anos de Solidão ',
            labels: ['#54e1f7'],
            publicationDate: '1967',
            author:'Gabriel García Márquez',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/Cem-Anos-de-Solidao.jpg.webp',
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
            publicationDate: '1922',
            author:'James Joyce',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/Ulisses.jpg.webp',
          },
          {
            id: 6,
            content: 'A Divina Comédia',
            labels: ['#7159c1'],
            publicationDate: '1321',
            author:'Dante Alighieri',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/A-Divina-Comedia.jpg.webp',
          },
          {
            id: 7,
            content: 'O Homem sem Qualidades',
            labels: ['#54e1f7'],
            publicationDate: '1930-1943',
            author:'Robert Musil',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/O-Homem-sem-Qualidades.jpg.webp',
          },
          {
            id: 9,
            content: 'Franz Kafka',
            labels: [],
            publicationDate:'1925',
            author:' Miguel de Cervantes',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/O-Processo.jpg.webp',
          }
        ]
      },
    ];
  }