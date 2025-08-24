export class UpdateAppointment {
  constructor(
    public doctorId: number | null,
    // public appointmentDate: string | null,
    public status: string | null,
    public cancelReason: string | null
  ) {}
}
