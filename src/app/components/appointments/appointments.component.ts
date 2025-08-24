import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment.model';
import { UpdateAppointment } from 'src/app/models/UpdateAppointment.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    this.adminService.getAppointments().subscribe({
      next: (data: Appointment[]) => {
        console.log(data);
        this.appointments = data;
      },
      error: (error) => {
        console.error('Error fetching appointments:', error);
      },
    });
  }

  editAppointment(appointment: Appointment) {}

  cancelAppointment(appointment: Appointment) {}

  acceptAppointment(appointment: Appointment) {
    //update appointment set status="PENDING" where appointment_id=30;
    const updateAppointment = new UpdateAppointment(null, 'CONFIRMED', null);
    this.adminService
      .updateAppointment(updateAppointment, appointment.appointmentId)
      .subscribe({
        next: (response) => {
          console.log('Appointment updated successfully:', response);
          this.loadAppointments();
        },
        error: (error) => {
          console.error('Error updating appointment:', error);
        },
      });
  }
}
