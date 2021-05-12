import { createAction, props } from '@ngrx/store';

export const createAppointment = createAction(
  '[Appointment] Create',
  props<{ payload: any }>()
);
