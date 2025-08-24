export class Doctor {
  constructor(
    public doctorId: number,
    public name: string,
    public email: string,
    public phone: string,
    public speciality: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}

// "doctorId": 7,
// "name": "doctor6",
// "email": "doctor6@gmail.com",
// "phone": "1122334455",
// "speciality": "leg",
// "createdAt": "2025-07-26T11:12:19.742814",
// "updatedAt": "2025-07-26T11:12:19.742814"
