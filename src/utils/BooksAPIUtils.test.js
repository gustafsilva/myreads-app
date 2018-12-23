import {
  checkMyBooksHaveChanged,
} from './BooksAPIUtils';

describe('[utils] BooksAPIUtils', () => {
  describe('checkMyBooksHaveChanged', () => {
    const RESULT = {
      currentlyReading: [
        'nggnmAEACAAJ',
        'jAUODAAAQBAJ',
        'WKPjrQEACAAJ',
        'NqkKvgAACAAJ',
      ],
      wantToRead: [
        'WY4UzYZNpN4C',
        'DUHzXlQjQncC',
        'smeFmQEACAAJ',
        '2Zn6AQAAQBAJ',
      ],
      read: [
        '1wy49i-gQjIC',
        'tsRhkvo80iUC',
        'C6d7bMJzHy4C',
      ],
    };

    it('check my books have changed true with myBooks empty', () => {
      const myBooks = [];

      expect(checkMyBooksHaveChanged(RESULT, myBooks)).toBeTruthy();
    });

    it('check my books have changed true with myBooks not empty', () => {
      const myBooks = [
        {
          title: 'The Linux Command Line',
          authors: [
            'William E. Shotts, Jr.',
          ],
          imageLinks: {
            smallThumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            thumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          },
          id: 'nggnmAEACAAJ',
          shelf: 'read',
        },
        {
          title: 'The Sebastian Thrun Handbook - Everything You Need to Know about Sebastian Thrun',
          authors: [
            'Andre Cantrell',
          ],
          imageLinks: {
            smallThumbnail: 'http://books.google.com/books/content?id=NqkKvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            thumbnail: 'http://books.google.com/books/content?id=NqkKvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          },
          id: 'NqkKvgAACAAJ',
          shelf: 'wantToRead',
        },
        {
          title: 'Travel by Design',
          authors: [
            'Marlon G. Boarnet',
            'Randall Crane',
          ],
          imageLinks: {
            smallThumbnail: 'http://books.google.com/books/content?id=f7EtoDfL6yYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail: 'http://books.google.com/books/content?id=f7EtoDfL6yYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
          id: 'f7EtoDfL6yYC',
          shelf: 'currentlyReading',
        },
      ];

      expect(checkMyBooksHaveChanged(RESULT, myBooks)).toBeTruthy();
    });

    it('check my books have changed false with myBooks not empty', () => {
      const myBooks = [
        {
          title: 'The Linux Command Line',
          authors: [
            'William E. Shotts, Jr.',
          ],
          imageLinks: {
            smallThumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            thumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          },
          id: 'nggnmAEACAAJ',
          shelf: 'read',
        },
        {
          title: 'The Sebastian Thrun Handbook - Everything You Need to Know about Sebastian Thrun',
          authors: [
            'Andre Cantrell',
          ],
          imageLinks: {
            smallThumbnail: 'http://books.google.com/books/content?id=NqkKvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            thumbnail: 'http://books.google.com/books/content?id=NqkKvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          },
          id: 'NqkKvgAACAAJ',
          shelf: 'wantToRead',
        },
        {
          title: 'Travel by Design',
          authors: [
            'Marlon G. Boarnet',
            'Randall Crane',
          ],
          imageLinks: {
            smallThumbnail: 'http://books.google.com/books/content?id=f7EtoDfL6yYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail: 'http://books.google.com/books/content?id=f7EtoDfL6yYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
          id: 'f7EtoDfL6yYC',
          shelf: 'currentlyReading',
        },
      ];
      const result = {
        currentlyReading: [
          'nggnmAEACAAJ',
          'f7EtoDfL6yYC',
        ],
        wantToRead: [
          'qkKvgAACAAJ',
        ],
        read: [
        ],
      };

      expect(checkMyBooksHaveChanged(result, myBooks)).toBeFalsy();
    });
  });

  describe('addShelfBooksSearch', () => {

  });
});
