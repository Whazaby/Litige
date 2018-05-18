import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LitigeModule } from './litiges/litige.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	  LitigeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
