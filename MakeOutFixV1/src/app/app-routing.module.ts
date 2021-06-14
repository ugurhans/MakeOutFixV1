import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDietMethodComponent } from './components/add-diet-method/add-diet-method.component';
import { DietAdddComponent } from './components/diet-addd/diet-addd.component';
import { DietDetailComponent } from './components/diet-detail/diet-detail.component';
import { DietListComponent } from './components/diet-list/diet-add.component';
import { DietMethodComponent } from './components/diet-method/diet-method.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatinetListComponent } from './components/patinet-list/patinet-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UserAuthorizationComponent } from './components/user-authorization/user-authorization.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent ,},
  { path: 'register', component: RegisterComponent },
  { path: 'diet-add', component: DietAdddComponent, canActivate:[LoginGuard] },
  { path: 'homepage', component: HomepageComponent },
  { path: 'patient-list', component: PatinetListComponent , canActivate:[LoginGuard] },
  { path: 'patient-details/:patientId', component: PatientDetailsComponent , canActivate:[LoginGuard]},
  { path: 'diet-details/:id', component: DietDetailComponent, canActivate:[LoginGuard]},
  { path: 'profile', component: ProfileComponent , canActivate:[LoginGuard]},
  { path: 'user-list', component: UserListComponent , canActivate:[LoginGuard]},
  { path: 'dietMethod-add', component: AddDietMethodComponent , canActivate:[LoginGuard]},
  { path: 'user/auth', component: UserAuthorizationComponent},
  { path: 'diet-list', component: DietListComponent},
  { path: 'dietMethod-list', component: DietMethodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
