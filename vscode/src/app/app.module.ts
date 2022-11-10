import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import{MatTableModule}from '@angular/material/table';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
