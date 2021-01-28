import { NgModule } from '@angular/core';
import   {MatSidenavModule} from '@angular/material/sidenav'
import   {MatButtonModule} from '@angular/material/button'
import   {MatToolbarModule} from '@angular/material/toolbar'
import   {MatListModule} from '@angular/material/list'
import   {MatIconModule} from '@angular/material/icon'
import   {MatMenuModule} from '@angular/material/menu'
import   {MatCardModule} from '@angular/material/card'
import   {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';




const angular_material=[

     MatSidenavModule,
     MatButtonModule,
     MatToolbarModule,
     MatListModule,
     MatIconModule,
     MatMenuModule,
     MatCardModule,
     MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     MatCheckboxModule,
     MatRadioModule
   


]

@NgModule({
  
  imports: [ angular_material],
  exports:[angular_material]
})
export class AngularMaterialModule { }
