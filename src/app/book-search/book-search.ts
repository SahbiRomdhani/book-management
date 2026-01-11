import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
})
export class BookSearch implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchControl = new FormControl('');

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((term) => {
        this.search.emit(term ?? '');
      });
  }
}
