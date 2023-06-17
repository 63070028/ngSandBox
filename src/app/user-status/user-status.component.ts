import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeName, changeRole } from '../store';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent {
  name!:string;
  role!:string;

  constructor(private store: Store<{user:{name:string, role:string}}>){
    store.subscribe(data => {
      this.name = data.user.name
      this.role = data.user.role
    })
  }

  changeName(name:string){
   this.store.dispatch(changeName({name:name}))
  }

  changeRole(role:string){
    this.store.dispatch(changeRole({role:role}))
   }
}
