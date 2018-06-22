import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRouting: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRouting) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
