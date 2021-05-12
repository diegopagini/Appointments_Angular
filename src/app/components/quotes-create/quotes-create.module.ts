import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesCreateComponent } from './quotes-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appointmentReducer } from '../../store/reducers/appointments.reducer';

@NgModule({
  declarations: [QuotesCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('appointment', appointmentReducer),
  ],
  exports: [QuotesCreateComponent],
})
export class QuotesCreateModule {}
