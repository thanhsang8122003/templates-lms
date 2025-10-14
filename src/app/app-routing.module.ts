import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./component/template/template.module').then(m => m.TemplateModule)
  },
<<<<<<< HEAD
  {
    path: 'roles',
    loadChildren: () => import('./pages/roles/roles.module').then(m => m.RolesModule)
  },
=======
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  // },
  // {  
  //   path: 'about',
  //   loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  // },
  // {
  //   path: 'login', 
  //   loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  // },
  // {
  //   path: 'roadmap',
  //   loadChildren: () => import('./pages/roadmap/roadmap.module').then(m => m.RoadmapModule)
  // }
>>>>>>> 32b6172ec043f10a816d8788462145db4cab4675
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
