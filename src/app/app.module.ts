import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Search } from './ui';
import { Api, SearchService } from './services';


@NgModule({
  declarations: [
    AppComponent,
    Search
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    Api,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
