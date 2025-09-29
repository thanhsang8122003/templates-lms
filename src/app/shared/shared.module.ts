import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntModule } from './ng-zorro-ant.module';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntModule,
    MaterialModule
  ],
  exports: [
    NgZorroAntModule,
    MaterialModule
  ]
})
export class SharedModule { }
