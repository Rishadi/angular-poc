import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Book} from './book';
import { BOOKS } from './mock-books';
import { MessageService } from './message.service';

@Injectable()

export class BookService {
  constructor(private messageService: MessageService) { }
  getBooks(): Observable<Book[]> {
    // TODO: send the message _after_ fetching the books
    this.messageService.add('BookService: fetched books');
    return of(BOOKS);
  }
}
  

