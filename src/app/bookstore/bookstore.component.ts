import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../book.service';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BookstoreComponent {
    books:Book[] = [];
    cart:Book[] = [];

    constructor(private bookService: BookService, private offcanvasService: NgbOffcanvas){
      this.books = bookService.getAll()
    }

	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

}
