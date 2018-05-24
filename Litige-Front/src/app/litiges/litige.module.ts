import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LitigeComponent } from './litige/litige.component';
import {MatFormFieldModule, MatSelectModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, BrowserAnimationsModule ],
  declarations: [LitigeComponent],
  exports: [LitigeComponent]
})
export class LitigeModule { }
