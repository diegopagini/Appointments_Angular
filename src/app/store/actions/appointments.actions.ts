import { createAction, props } from '@ngrx/store';
import { Appointment } from '../../models/appointment.interface';

export const createAppointment = createAction(
  '[Appointment] Create',
  props<{ appointment: any }>()
);

export const deleteAppointment = createAction(
  '[Appointment] Delete',
  props<{ appointment: any }>()
);

export const loadAppointment = createAction('[Appointment] Load');
