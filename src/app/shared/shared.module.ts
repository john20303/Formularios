import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [///Recordemos que en cada modulo debemos crear este array de export , para que podamos tener acceso a los diferentes componentes.
    SideMenuComponent
  ]
})
export class SharedModule { }
