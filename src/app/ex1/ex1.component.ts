import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss']
})
export class Ex1Component {

  subscriptions:Subscription = new Subscription()


}
