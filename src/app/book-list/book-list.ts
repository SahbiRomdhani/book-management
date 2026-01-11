import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book-service';
import { Book, BookFormValue } from '../interfaces/book.interface';
import { BookSearch } from '../book-search/book-search';
import { BookItem } from '../book-item/book-item';
import { BookForm } from '../book-form/book-form';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookItem, BookSearch, BookForm],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  allBooks: Book[] = [];
  filteredBooks: Book[] = [];
  isModalOpen: boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.allBooks = this.bookService.getBooks();
    this.filteredBooks = [...this.allBooks];
  }

  onSearch(term: string): void {
    if (!term) {
      this.filteredBooks = [...this.allBooks];
    }

    const lowerTerm = term.toLowerCase();
    this.filteredBooks = this.bookService.searchBooks(lowerTerm);
  }

  openCloseModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  addBook(bookFormValue: BookFormValue) {
    this.bookService.addBook(bookFormValue);
    const recentBooks = this.bookService.getBooks();
    this.filteredBooks = recentBooks;
    this.openCloseModal();
  }

}
