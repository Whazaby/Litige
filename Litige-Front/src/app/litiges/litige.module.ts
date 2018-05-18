import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LitigeComponent } from './litige/litige.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LitigeComponent],
  exports: [LitigeComponent]
})
export class LitigeModule { }
