import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from '../../components/inicio/inicio.component';
import { AssessorRoutingModule } from './assessor.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AssessorRoutingModule
  ],
  declarations: [
    InicioComponent
  ]
})
export class AssessorModule { }
