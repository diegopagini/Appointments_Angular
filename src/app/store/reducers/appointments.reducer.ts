import { createReducer, on } from '@ngrx/store';
import {
  createAppointment,
  loadAppointment,
} from '../actions/appointments.actions';

export const initialState = [];

const _appointmentReducer = createReducer(
  initialState,
  on(createAppointment, (state, { appointment }) => ({
    ...state,
    appointments: appointment,
  })),
  on(loadAppointment, (state) => ({
    ...state,
  }))
);

export function appointmentReducer(state, action) {
  return _appointmentReducer(state, action);
}
