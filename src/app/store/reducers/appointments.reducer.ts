import { createReducer, on } from '@ngrx/store';
import { createAppointment } from '../actions/appointments.actions';

export const initialState = {};

const _appointmentReducer = createReducer(
  initialState,
  on(createAppointment, (state, { payload }) => ({
    ...state,
    payload: payload,
  }))
);

export function appointmentReducer(state, action) {
  return _appointmentReducer(state, action);
}
