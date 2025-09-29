import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from './features/pages/products/products-list/products-list.component';
import { ProductsAddComponent } from './features/pages/products/products-add/products-add.component';
import { ProductsEditComponent } from './features/pages/products/products-edit/products-edit.component';



const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' }, // <-- thêm dòng này
  { path: 'list', component: ProductsListComponent },
  { path: 'add', component: ProductsAddComponent },
  { path: 'edit/:id', component: ProductsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
