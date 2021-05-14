import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAppointment } from '../actions/appointments.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppointmentEffects {
  saveAppointment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createAppointment),
        tap((newAppointment) => {
          const appointmentsList = JSON.parse(
            localStorage.getItem('appointment')
          );
          appointmentsList.push(newAppointment);
          localStorage.setItem('appointment', JSON.stringify(appointmentsList));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
