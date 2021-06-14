import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DietAddComponent } from './components/diet-add/diet-add.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'diet-add', component: DietAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
