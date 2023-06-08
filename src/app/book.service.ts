import { Injectable } from '@angular/core';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() { }

  getAll():Book[]{
    return [
      {id:"1", name:"b1", price: 100},
      {id:"2", name:"b2", price: 100},
      {id:"3", name:"b3", price: 100},
      {id:"4", name:"b4", price: 100},
      {id:"5", name:"b5", price: 100},
      {id:"6", name:"b6", price: 100},
      {id:"7", name:"b7", price: 100},
      {id:"8", name:"b8", price: 100},
      {id:"9", name:"b9", price: 100},
      {id:"10", name:"b10", price: 100},
    ]
  }

}
