import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoadmapComponent } from './roadmap.component';

const routes: Routes = [
  {
    path: '',
    component: RoadmapComponent,
  }
]

@NgModule({
  declarations: [RoadmapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoadmapModule { }
