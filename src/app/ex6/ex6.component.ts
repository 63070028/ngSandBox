import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BookReq } from './req-get-model';

@Component({
  selector: 'app-ex6',
  templateUrl: './ex6.component.html',
  styleUrls: ['./ex6.component.scss']
})
export class Ex6Component {

  books:BookReq[] = []

  constructor(private http:HttpClient){}
  
  searchBook(nameBook:string){
    console.log(nameBook)
    this.http.get<BookReq[]>('https://www.anapioficeandfire.com/api/books?name='+nameBook).subscribe(res=>{this.books = res})
  }
}
