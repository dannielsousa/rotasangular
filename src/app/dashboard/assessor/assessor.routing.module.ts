import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../../components/inicio/inicio.component';
import { NgModule } from '@angular/core';

const assessorRouting: Routes = [
  {
    path: '',
    component: InicioComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(assessorRouting) ],
  exports: [ RouterModule ]
})

export class AssessorRoutingModule {}


