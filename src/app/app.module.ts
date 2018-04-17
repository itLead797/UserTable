import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/co'

import { AppComponent } from './app.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserService } from './services/user.service';

import {MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [
    UserService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
