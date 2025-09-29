import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgZorroAntModule } from 'src/app/shared/ng-zorro-ant.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsRoutingModule } from 'src/app/products-routing.module';
const routes: Routes = [
]

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsAddComponent,
    ProductsEditComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntModule,
    MaterialModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
