import { Doctor } from './doctor.model';
import { Patient } from './patient.model';

export class Appointment {
  constructor(
    public appointmentId: number,
    public appointmentDate: string,
    public appointmentReason: string,
    public comments: string,
    public status: string,
    public cancelReason: string | null = null,
    public createdAt: string,
    public updatedAt: string,
    public doctor: Doctor | null = null,
    public patient: Patient
  ) {}
}
