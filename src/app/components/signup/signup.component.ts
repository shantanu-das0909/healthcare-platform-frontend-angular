import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  defaultGender: string = 'MALE';

  constructor(private authService: AuthService) {}

  onSubmit(f: NgForm) {
    console.log(f.value);
    // f.resetForm();
    this.authService.getPatients().subscribe({
      next: (data) => {
        console.log('Patients fetched successfully:', data);
      },
      error: (error) => {
        console.error('Error fetching patients:', error);
      },
    });
  }
}
