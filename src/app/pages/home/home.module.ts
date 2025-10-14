import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
<<<<<<< HEAD
import { PartnerComponent } from './partner/partner.component';
import { GoalComponent } from './goal/goal.component';
import { RoleComponent } from './role/role.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
=======
import { AsideComponent } from './aside/aside.component';
import { ArticleComponent } from './article/article.component';
>>>>>>> 32b6172ec043f10a816d8788462145db4cab4675


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
<<<<<<< HEAD
    PartnerComponent,
    GoalComponent,
    RoleComponent,
    TestimonialComponent
=======
    AsideComponent,
    ArticleComponent,
>>>>>>> 32b6172ec043f10a816d8788462145db4cab4675
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
  ,
  exports: [
    GoalComponent
  ]
})
export class HomeModule { }