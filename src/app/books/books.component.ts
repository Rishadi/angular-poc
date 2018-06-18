import { Component, OnInit } from '@angular/core';
import { Book} from '../book';
//import { BOOKS } from '../mock-books';
import { BookService } from '../book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit {

  selectedBook: Book;
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }
 
  getBooks(): void {
    this.books = this.bookService.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}
