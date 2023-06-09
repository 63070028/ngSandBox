import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../book.service';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BookstoreComponent {
  books: Book[] = [];
  cart: Book[] = [];

  constructor(
    private bookService: BookService,
    private offcanvasService: NgbOffcanvas,
    private modalService: NgbModal
  ) {
    this.books = bookService.getAll();
  }

  openEnd(cart: TemplateRef<any>) {
    this.offcanvasService.open(cart, { position: 'end' });
  }

  openFormAddBook(formAddBook: TemplateRef<any>) {
    this.modalService.open(formAddBook, { fullscreen: true });
  }

  openFormEditBook(formEditBook: TemplateRef<any>, book:Book) {
    this.modalService.open(formEditBook, { fullscreen: true });

    this.editForm.patchValue({
      id:book.id,
      image:book.image,
      name:book.name,
      category:book.category,
      price:String(book.price)
    })



  }



  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  })

  editForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  })


  fileName: string = '';
  url: any;
  message: string = '';
  file: any;

  selectFile(event: any) {
    this.file = event.target.files[0];
    if (!this.file) {
      this.message = 'You must select an image';
      return;
    }

    const mimeType = this.file.type;

    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported';
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.file);

    reader.onload = (event) => {
      this.message = '';
      this.url = reader.result;
      this.addForm.patchValue({image:this.url})
      this.editForm.patchValue({image:this.url})
    };
  }

  addBook() {
    if (this.file) {
      this.fileName = this.file.name;
      console.log(this.fileName);
      const formData = new FormData();

      formData.append('file', this.file);

      // const upload = this.http.post(`/api/blog/upload`, formData);
      // upload.subscribe();
      const newBook:Book = {id:"99",  image:this.addForm.value.image, name:this.addForm.value.name, category:this.addForm.value.category, price:Number(this.addForm.value.price)}
      this.books.push(newBook)
      this.addForm.reset();
      this.url = null;
    }
  }

  updateBook() {
    if (this.file) {
      this.fileName = this.file.name;
      console.log(this.fileName);
      const formData = new FormData();

      formData.append('file', this.file);

      // const upload = this.http.post(`/api/blog/upload`, formData);
      // upload.subscribe();
      const newBook:Book = {id:this.editForm.value.id,  image:this.editForm.value.image, name:this.editForm.value.name, category:this.editForm.value.category, price:Number(this.editForm.value.price)}
      const index = this.books.findIndex(book => book.id == newBook.id)
      this.books.splice(index,1,newBook)
      this.editForm.reset();
      this.url = null;
    }
  }

  deleteBook(index:number){
    this.books.splice(index, 1);
  }


}

