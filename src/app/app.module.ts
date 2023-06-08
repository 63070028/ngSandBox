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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BgColorChangeDirective,
    Ex1Component,
    Webpage1Component,
    Ex2Component,
    Ex3Component,
    BookstoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
