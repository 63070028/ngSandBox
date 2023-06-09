import { Injectable } from '@angular/core';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() { }

  getAll():Book[]{
    return [
      {id:"1", name:"b1", price: 100 , category:"novel", image:"https://cdn.discordapp.com/attachments/905751963017285634/1116626025963606016/default.jpg"},
      {id:"2", name:"b2", price: 100, category:"novel", image:"https://cdn.discordapp.com/attachments/905751963017285634/1116626025963606016/default.jpg"},
      {id:"3", name:"b3", price: 100, category:"novel", image:"https://cdn.discordapp.com/attachments/905751963017285634/1116626025963606016/default.jpg"},
      {id:"4", name:"b4", price: 100, category:"novel", image:"https://cdn.discordapp.com/attachments/905751963017285634/1116626025963606016/default.jpg"},
      {id:"5", name:"b5", price: 100, category:"novel", image:"https://cdn.discordapp.com/attachments/905751963017285634/1116626025963606016/default.jpg"},
      {id:"6", name:"b6", price: 100, category:"novel", image:"https://cdn.discordapp.com/attachments/905751963017285634/1116626025963606016/default.jpg"},
      {id:"7", name:"b7", price: 100, category:"novel", image:"https://cdn.discordapp.com/attachments/905751963017285634/1116626025963606016/default.jpg"},
      {id:"8", name:"b8", price: 100, category:"novel", image:"https://cdn.discordapp.com/attachments/905751963017285634/1116626025963606016/default.jpg"},
      {id:"9", name:"b9", price: 100, category:"novel", image:"https://cdn.discordapp.com/attachments/905751963017285634/1116626025963606016/default.jpg"},
      {id:"10", name:"b10", price: 100, category:"novel", image:"https://cdn.discordapp.com/attachments/905751963017285634/1116626025963606016/default.jpg"},
    ]
  }

}
