import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminActionComponent } from './components/admin-action/admin-action.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AddDoctorComponent } from './components/admin-action/add-doctor/add-doctor.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin/actions',
    component: AdminActionComponent,
    children: [
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'add-doctor', component: AddDoctorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
