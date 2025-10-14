import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { Routes, RouterModule } from '@angular/router';
import { BannerDAComponent } from './banner-da/banner-da.component';
import { CertificatesDAComponent } from './certificates-da/certificates-da.component';
import { SimilarRoleDAComponent } from './similar-role-da/similar-role-da.component';
import { HomeModule } from '../home/home.module';

const routes: Routes = [
  {
    path: '',
    component: RolesComponent,
  }
]

@NgModule({
  declarations: [
    RolesComponent,
    BannerDAComponent,
    CertificatesDAComponent,
    SimilarRoleDAComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
      HomeModule
  ]
})
export class RolesModule { }
