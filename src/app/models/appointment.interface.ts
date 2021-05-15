export interface Appointment {
  appointment?: Quote;
}

export interface Quote {
  name?: string;
  date?: Date | string;
  hour?: number | string;
  symptom?: string;
}
