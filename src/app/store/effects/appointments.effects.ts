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
        tap((appointment) => {
          console.log('appointment');
          localStorage.setItem('appointment', JSON.stringify(appointment));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
