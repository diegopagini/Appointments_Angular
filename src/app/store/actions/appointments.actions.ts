import { createAction, props } from '@ngrx/store';

export const createAppointment = createAction(
  '[Appointment] Create',
  props<{ appointment: any }>()
);

export const deleteAppointment = createAction(
  '[Appointment] Delete',
  props<{ id: any }>()
);
