import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LitigeComponent } from './litige/litige.component';
import {MatFormFieldModule, MatSelectModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LitigeService} from "./litige/litige.service";
import { HttpClientModule } from '@angular/common/http';
import {BrowserModule} from "@angular/platform-browser";
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, BrowserAnimationsModule, BrowserModule, HttpClientModule ],
  declarations: [LitigeComponent],
  exports: [LitigeComponent],
  providers: [
    LitigeService
  ]
})
export class LitigeModule { }
