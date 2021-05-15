import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createAppointment,
  deleteAppointment,
} from '../actions/appointments.actions';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable()
export class createEffects {
  saveAppointment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createAppointment),
        tap(() => {
          Swal.fire('Quote created');
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
        tap(() => {
          Swal.fire({
            icon: 'success',
            title: 'Your appointment has been deleted',
            showConfirmButton: true,
          });
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
