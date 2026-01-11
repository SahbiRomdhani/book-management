import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BookFormValue } from '../interfaces/book.interface';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm {
  @Output() addBook = new EventEmitter<BookFormValue>();
  @Output() cancel = new EventEmitter<void>();
  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.addBook.emit(this.bookForm.value as BookFormValue);
  }


}
