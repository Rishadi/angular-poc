import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Book} from './book';
import { BOOKS} from './mock-books';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable()

export class BookService {
  private booksUrl = 'api/books';

    constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
    private log(message: string) {
      this.messageService.add('BookService: ' + message);
    }
 
  getBooks(): Observable<Book[]> {
    // TODO: send the message _after_ fetching the Books
    return this.http.get<Book[]>(this.booksUrl)
  }

  getBook(id: number): Observable<Book> {
    // TODO: send the message _after_ fetching the books
    this.messageService.add('BookService: fetched book id=${id}');
    return of(BOOKS.find(book => book.id === id));
  }
}
  

