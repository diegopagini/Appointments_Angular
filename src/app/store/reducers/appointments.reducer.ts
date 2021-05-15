import { createReducer, on } from '@ngrx/store';

import {
  createAppointment,
  loadAppointment,
  deleteAppointment,
} from '../actions/appointments.actions';

export const initialState = {
  list: [],
};

const _appointmentReducer = createReducer(
  initialState,
  on(createAppointment, (state, { appointment }) => ({
    ...state,
    list: [...state.list, appointment],
  })),
  on(loadAppointment, (state) => ({
    ...state,
  })),
  on(deleteAppointment, (state, { appointment }) => ({
    ...state,
    list: [...state.list.filter((quote) => quote !== appointment)],
  }))
);

export function appointmentReducer(state, action) {
  return _appointmentReducer(state, action);
}
