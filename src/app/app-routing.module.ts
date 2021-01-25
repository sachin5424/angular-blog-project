import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'admin-panel',
    loadChildren: () => import('./admin/admin.module').then(m =>     
      m.AdminModule) 
  },
  { 
    path: '',  
     redirectTo: '/home',
      pathMatch: 'full'
   },
   {
      path:'about',
      component:AboutComponent
   },
   {
    path:'login',
    component:LoginComponent
    },
   {
     path:'Contact',
     component:ContactComponent
   },
   {
    path:'home',
    component:HomeComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'demo',
    component:DemoComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
