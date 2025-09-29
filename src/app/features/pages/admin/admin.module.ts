import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminSelectorComponent } from './components/admin-selector/admin-selector.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminSelectorComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
