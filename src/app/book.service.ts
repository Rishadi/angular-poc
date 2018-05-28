import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Book} from './book';
import { BOOKS} from './mock-books';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        tap(books => this.log(`fetched books`)),
        catchError(this.handleError('getBooks', []))
      );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getBook(id: number): Observable<Book> {
    // TODO: send the message _after_ fetching the books
  
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      tap(_ => this.log(`fetched book id=${id}`)),
      catchError(this.handleError<Book>(`getBok id=${id}`))
    );
  }
  /** PUT: update the book on the server */
updateBook (book: Book): Observable<any> {
  return this.http.put(this.booksUrl, book, httpOptions).pipe(
    tap(_ => this.log(`updated book id=${book.id}`)),
    catchError(this.handleError<any>('updateBook'))
  );
}
}
