import { TestBed } from '@angular/core/testing';

import { BookService } from './book-service';
import { Book } from '../interfaces/book.interface';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return books', () => {
    expect(service.getBooks()).toBeTruthy();
  });

  it('should add book', () => {
    const book: Book = {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      price: 10,
      description: 'Description 1',
      category: 'Category 1',
      publishedDate: new Date(),
    };
    expect(service.addBook(book)).toBeTruthy();
  });

  it('should remove book', () => {
    expect(service.removeBook(1)).toBeTruthy();
  });

  it('should update book', () => {
    const book: Book = {
      id: 1,
      title: 'Book update',
      author: 'Author update',
      price: 100,
      description: 'Description update',
      category: 'Category update',
      publishedDate: new Date(),
    };
    expect(service.updateBook(book)).toBeTruthy();
  });
});
