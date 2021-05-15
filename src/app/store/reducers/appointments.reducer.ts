import { createReducer, on } from '@ngrx/store';

import {
  createAppointment,
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
  on(deleteAppointment, (state, { id }) => ({
    ...state,
    list: [
      ...state.list.filter(
        (newAppointmentList) => newAppointmentList.id !== id
      ),
    ],
  }))
);

export function appointmentReducer(state, action) {
  return _appointmentReducer(state, action);
}
