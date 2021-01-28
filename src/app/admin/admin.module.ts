import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AddBlogListComponent } from './add-blog-list/add-blog-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContectComponent } from './contect/contect.component';
import {UpdateComponent} from './categories/update/update.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [AddBlogComponent, AddBlogListComponent, SidebarComponent, AdminDashboardComponent, CategoriesComponent, AddCategoriesComponent, DashboardComponent, ContectComponent,UpdateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularMaterialModule,
   
    
  ]
})
export class AdminModule { }
