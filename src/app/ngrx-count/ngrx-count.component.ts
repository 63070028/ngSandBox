import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store'

@Component({
  selector: 'app-ngrx-count',
  templateUrl: './ngrx-count.component.html',
  styleUrls: ['./ngrx-count.component.scss']
})
export class NgrxCountComponent {

  count:number = 0;

  constructor(private store:Store<{count:{count:number}}>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    store.select('count').subscribe((data) => {this.count = data.count})
  }

  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

}
