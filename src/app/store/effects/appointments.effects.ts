import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createAppointment,
  deleteAppointment,
} from '../actions/appointments.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class createEffects {
  saveAppointment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createAppointment),
        tap((newAppointment) => {
          if (localStorage.getItem('appointment') !== null) {
            const appointmentsList = JSON.parse(
              localStorage.getItem('appointment')
            );
            appointmentsList.push(newAppointment);
            localStorage.setItem(
              'appointment',
              JSON.stringify(appointmentsList)
            );
          } else {
            localStorage.setItem('appointment', JSON.stringify(newAppointment));
          }
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}

@Injectable()
export class deleteEffects {
  deleteAppointment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteAppointment),
        tap((oldAppointment) => {
          console.log('old', oldAppointment);
          localStorage.removeItem(JSON.stringify(oldAppointment));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
