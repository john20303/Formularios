import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [///Recordemos que en cada modulo debemos crear este array de export , para que podamos tener acceso a los diferentes componentes.
    SideMenuComponent
  ]
})
export class SharedModule { }
