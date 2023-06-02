import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { BgColorChangeDirective } from './bg-color-change.directive';
import { Ex1Component } from './ex1/ex1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BgColorChangeDirective,
    Ex1Component
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
