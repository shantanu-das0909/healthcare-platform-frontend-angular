import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent {
  constructor(private router: Router) {}

  showDoctor() {
    this.router.navigate(['/admin/actions/doctors/doctor']);
  }

  doctors = [
    {
      name: 'Dr. John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      speciality: 'Cardiology',
    },
    {
      name: 'Dr. Jane Smith',
      email: 'jane.smith@example.com',
      phone: '234-567-8901',
      speciality: 'Neurology',
    },
    {
      name: 'Dr. Emily Brown',
      email: 'emily.brown@example.com',
      phone: '345-678-9012',
      speciality: 'Pediatrics',
    },
    {
      name: 'Dr. Michael Lee',
      email: 'michael.lee@example.com',
      phone: '456-789-0123',
      speciality: 'Orthopedics',
    },
    {
      name: 'Dr. Sarah Wilson',
      email: 'sarah.wilson@example.com',
      phone: '567-890-1234',
      speciality: 'Dermatology',
    },
    {
      name: 'Dr. David Kim',
      email: 'david.kim@example.com',
      phone: '678-901-2345',
      speciality: 'Gastroenterology',
    },
    {
      name: 'Dr. Linda Martinez',
      email: 'linda.martinez@example.com',
      phone: '789-012-3456',
      speciality: 'Oncology',
    },
    {
      name: 'Dr. Robert Clark',
      email: 'robert.clark@example.com',
      phone: '890-123-4567',
      speciality: 'Ophthalmology',
    },
  ];
}
