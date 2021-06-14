import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietAddComponent } from '../app/components/diet-add/diet-add.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
