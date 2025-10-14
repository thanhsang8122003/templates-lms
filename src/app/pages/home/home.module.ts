import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { PartnerComponent } from './partner/partner.component';
import { GoalComponent } from './goal/goal.component';
import { RoleComponent } from './role/role.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    PartnerComponent,
    GoalComponent,
    RoleComponent,
    TestimonialComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
  ,
  exports: [
    GoalComponent
  ]
})
export class HomeModule { }