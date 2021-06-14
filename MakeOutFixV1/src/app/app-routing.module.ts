import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietAdddComponent } from './components/diet-addd/diet-addd.component';
import { DietListComponent } from './components/diet-list/diet-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatinetListComponent } from './components/patinet-list/patinet-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'diet-add', component: DietAdddComponent },
  { path: 'diet-list', component: DietListComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'patient-list', component: PatinetListComponent },
  { path: 'patient-details/:patientId', component: PatientDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user-list', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
