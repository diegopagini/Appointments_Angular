import { createAction, props } from '@ngrx/store';

export const createAppointment = createAction(
  '[Appointment] Create',
  props<{ appointment: any }>()
);

export const loadAppointment = createAction('[Appointment] Load');
