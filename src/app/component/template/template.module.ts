import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { TemplateSelectorPipe } from '../../core/pipes/template-selector.pipe';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent
  }
];


@NgModule({
  declarations: [
    TemplateComponent,
    Template1Component,
    Template2Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TemplateModule { }
