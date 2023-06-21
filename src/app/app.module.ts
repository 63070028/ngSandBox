import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { BgColorChangeDirective } from './bg-color-change.directive';
import { Ex1Component } from './ex1/ex1.component';
import { Webpage1Component } from './webpage1/webpage1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Component } from './ex3/ex3.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ex4Component } from './ex4/ex4.component';
import { StoreModule } from '@ngrx/store';
import { UserReducer, counterReducer } from './store';
import { NgrxCountComponent } from './ngrx-count/ngrx-count.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { Ex5Component } from './ex5/ex5.component';
import { Ex6Component } from './ex6/ex6.component';
import { HttpClientModule } from '@angular/common/http';
import { Webpage2Component } from './webpage2/webpage2.component';
import { Ex7Component } from './ex7/ex7.component';
import { Ex8Component } from './ex8/ex8.component';
import { Ex9Component } from './ex9/ex9.component';
import { Webpage3Component } from './webpage3/webpage3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BgColorChangeDirective,
    Ex1Component,
    Webpage1Component,
    Ex2Component,
    Ex3Component,
    BookstoreComponent,
    Ex4Component,
    NgrxCountComponent,
    UserStatusComponent,
    Ex5Component,
    Ex6Component,
    Webpage2Component,
    Ex7Component,
    Ex8Component,
    Ex9Component,
    Webpage3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forRoot({count: counterReducer, user: UserReducer}),
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
