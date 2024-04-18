import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Importa il modulo HTTP

@NgModule({
 declarations: [
   AppComponent
 ],
 imports: [
   BrowserModule,
   HttpClientModule // Aggiungi il modulo HTTP qui 
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }