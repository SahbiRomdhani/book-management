import { Injectable } from '@angular/core';
import { Book, BookFormValue } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  books: Book[] = [
    {
      id: 1,
      title: 'The Future of AI',
      author: 'Dr. Sarah Smith',
      price: 29.99,
      description: 'An in-depth look at how artificial intelligence will shape our world in the coming decades.',
      category: 'Technology',
      publishedDate: new Date('2024-01-01')
    },
    {
      id: 2,
      title: 'Galactic Odyssey',
      author: 'James R. Space',
      price: 15.50,
      description: 'A thrilling journey through the stars as humanity faces its greatest threat yet.',
      category: 'Fiction',
      publishedDate: new Date('2024-11-12')
    },
    {
      id: 3,
      title: 'Quantum Mechanics 101',
      author: 'Prof. Albert',
      price: 45.00,
      description: 'Understanding the fundamental principles of the universe, made easy for beginners.',
      category: 'Science',
      publishedDate: new Date('2024-12-12')
    },
    {
      id: 4,
      title: 'Ancient Rome Uncovered',
      author: 'Julia History',
      price: 22.75,
      description: 'Discover the secrets of the Roman Empire that textbooks often leave out.',
      category: 'History',
      publishedDate: new Date('2025-01-12')
    },
    {
      id: 5,
      title: 'Clean Code Practices',
      author: 'Robert C.',
      price: 35.99,
      description: 'Master the art of writing clean, maintainable, and efficient code.',
      category: 'Technology',
      publishedDate: new Date('2025-02-12')
    }
  ];

  constructor() { }

  searchBooks(term: string): Book[] {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
  }

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: BookFormValue): void {
    const newId = this.books.length > 0 ? Math.max(...this.books.map(b => b.id)) + 1 : 1;

    this.books.push({ ...book, id: newId, publishedDate: new Date() });
  }

  removeBook(id: number): void {
    this.books = this.books.filter((b) => b.id !== id);
  }

  updateBook(book: Book): void {
    this.books = this.books.map((b) => b.id === book.id ? book : b);
  }
}
