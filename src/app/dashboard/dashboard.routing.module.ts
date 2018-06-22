import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const dashboardRouting: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(dashboardRouting) ],
  exports: [ RouterModule ]
})


export class DashboardRoutingModule {}
