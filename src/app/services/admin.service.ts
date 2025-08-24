import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import { constants } from '../shared/constants';
import { Observable } from 'rxjs';
import { UpdateAppointment } from '../models/updateAppointment.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  // getAppointments(): Observable<Appointment[]> {
  //   return this.http.get<Appointment[]>(constants.ADMIN_URL + '/appointments');
  // }

  // updateAppointment(
  //   updateAppointment: UpdateAppointment,
  //   appointmentId: number
  // ): Observable<any> {
  //   return this.http.put<string>(
  //     constants.ADMIN_URL + '/appointments/' + appointmentId,
  //     updateAppointment,
  //     { responseType: 'text' as 'json' }
  //   );
  // }
}
