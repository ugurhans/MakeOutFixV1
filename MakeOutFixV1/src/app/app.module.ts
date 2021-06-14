import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatinetListComponent } from './components/patinet-list/patinet-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { DietAdddComponent } from './components/diet-addd/diet-addd.component';
import { DietMethodComponent } from './components/diet-method/diet-method.component';
import { AddDietMethodComponent } from './components/add-diet-method/add-diet-method.component';
import { UserAuthorizationComponent } from './components/user-authorization/user-authorization.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DietListComponent } from './components/diet-list/diet-add.component';
import { DietDetailComponent } from './components/diet-detail/diet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    PatientDetailsComponent,
    ProfileComponent,
    PatinetListComponent,
    HomepageComponent,
    DietAdddComponent,
    DietMethodComponent,
    AddDietMethodComponent,
    UserAuthorizationComponent,
    NavbarComponent,
    DietListComponent,
    DietDetailComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
