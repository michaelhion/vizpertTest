export function loadLists() {
    return [
      { 
        title: 'Livros Que Estou Lendo', 
        creatable: true,
        cards: [
          {
            id: 1,
            bookName: 'Dom Quixote',
            labels: ['red'],
            publicationDate: '1605',
            author:'Miguel de Cervantes',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/Dom-Quixote.jpg.webp',
          },
          {
            id: 2,
            bookName: 'Guerra e Paz',
            labels: ['orange'],
            publicationDate: '1869',
            author:'Liev Tolstói',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/Guerra-e-Paz.jpg.webp',
          },
          {
            id: 3,
            bookName: 'A Montanha Mágica ',
            labels: ['yellow'],
            publicationDate: '1924',
            author:'Thomas Mann',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/A-Montanha-Magica.jpg.webp',
          },
          {
            id: 4,
            bookName: 'Cem anos de Solidão ',
            labels: ['green'],
            publicationDate: '1967',
            author:'Gabriel García Márquez',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/Cem-Anos-de-Solidao.jpg.webp',
          },
          
        ]
      },
      { 
        title: 'Livros Que Já Li', 
        creatable: true,
        cards: [
          {
            id: 5,
            bookName: 'Ulisses',
            labels: ['blue'],
            publicationDate: '1922',
            author:'James Joyce',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/Ulisses.jpg.webp',
          },
          {
            id: 6,
            bookName: 'A Divina Comédia',
            labels: ['LightBlue'],
            publicationDate: '1321',
            author:'Dante Alighieri',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/A-Divina-Comedia.jpg.webp',
          },
          {
            id: 7,
            bookName: 'O Homem sem Qualidades',
            labels: ['darkBlue'],
            publicationDate: '1930-1943',
            author:'Robert Musil',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/O-Homem-sem-Qualidades.jpg.webp',
          },
          {
            id: 9,
            bookName: 'O Processo',
            labels: ['Violet'],
            publicationDate:'1925',
            author:'Franz Kafka',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/O-Processo.jpg.webp',
          },
          {
            id: 10,
            bookName: 'Som e a Fúria',
            labels: ['pink'],
            publicationDate:'1929',
            author:'William Faulkner',
            image: 'https://www.revistabula.com/wp/wp-content/uploads/2016/11/O-Som-e-a-Furia-1.jpg.webp',
          },
        ]
      },
    ];
  }