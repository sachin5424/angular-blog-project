import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

import { AddBlogListComponent } from './add-blog-list/add-blog-list.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { UpdateComponent } from './categories/update/update.component';
import { ContectComponent } from './contect/contect.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children:[
      {
        path:'blog-list',
        component:AddBlogListComponent
      },
      {
        path:'categories',
        component:CategoriesComponent
      },
      {
        path:'categories/:id',
        component:UpdateComponent
      },
      {
        path:'add-post',
        component:AddBlogComponent
      },
      {
        path:'add-categories',
        component:AddCategoriesComponent
      },
      {
        path:'Dashboard',
        component:DashboardComponent
      },
      {
        path:'contect',
        component:ContectComponent
      },
      
      
     
    ]
  },
  // {
  //   path:'admin-panel',
  //   component:AdminDashboardComponent,
  
    
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
