import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AdminActionComponent } from './components/admin-action/admin-action.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AddDoctorComponent } from './components/admin-action/doctors/add-doctor/add-doctor.component';
import { DoctorsComponent } from './components/admin-action/doctors/doctors.component';
import { DoctorComponent } from './components/admin-action/doctors/doctor/doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    AddAppointmentComponent,
    AdminActionComponent,
    AppointmentsComponent,
    AddDoctorComponent,
    DoctorsComponent,
    DoctorComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
