import { Component, Input } from '@angular/core';
import { Book } from '../interfaces/book.interface';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-item.html',
  styleUrl: './book-item.css',
})
export class BookItem {
  @Input() book!: Book;
}
