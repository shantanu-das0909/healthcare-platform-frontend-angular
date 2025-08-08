import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent {
  editAppointment(appointment: {
    id: number;
    patientName: string;
    date: string;
    reason: string;
  }) {}

  cancelAppointment(appointment: {
    id: number;
    patientName: string;
    date: string;
    reason: string;
  }) {}

  acceptAppointment(appointment: {
    id: number;
    patientName: string;
    date: string;
    reason: string;
  }) {}

  appointments = [
    {
      id: 1,
      patientName: 'John Doe',
      date: '2024-06-10',
      reason: 'Routine Checkup',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      date: '2024-06-12',
      reason: 'Consultation',
    },
    {
      id: 3,
      patientName: 'Alice Johnson',
      date: '2024-06-15',
      reason: 'Follow-up',
    },
    {
      id: 4,
      patientName: 'Bob Williams',
      date: '2024-06-18',
      reason: 'Dental Cleaning',
    },
    {
      id: 5,
      patientName: 'Emily Brown',
      date: '2024-06-20',
      reason: 'Vaccination',
    },
    {
      id: 6,
      patientName: 'Michael Lee',
      date: '2024-06-22',
      reason: 'Physical Therapy',
    },
    { id: 7, patientName: 'Sarah Kim', date: '2024-06-25', reason: 'Eye Exam' },
    {
      id: 8,
      patientName: 'David Clark',
      date: '2024-06-28',
      reason: 'Blood Test',
    },
  ];
}
