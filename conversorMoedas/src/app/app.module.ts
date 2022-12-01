import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; //responsavel pela requisicao na API
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [HttpClientModule], //utilizar com injecao de depencias
  bootstrap: [AppComponent]
})
export class AppModule { }
