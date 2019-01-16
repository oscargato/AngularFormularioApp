import { Component } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {

  libro = new Book(1,'','','http://');

  constructor() { }

  get currentBook(){
  	return JSON.stringify(this.libro);
  }

}
