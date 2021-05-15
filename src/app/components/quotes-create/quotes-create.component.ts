import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createAppointment } from '../../store/actions/appointments.actions';

@Component({
  selector: 'app-quotes-create',
  templateUrl: './quotes-create.component.html',
  styleUrls: ['./quotes-create.component.scss'],
})
export class QuotesCreateComponent implements OnInit {
  public quotesForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.quotesForm = this.fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      hour: ['', [Validators.required]],
      symptom: ['', [Validators.required]],
      id: [Math.random()],
    });
  }

  ngOnInit(): void {}

  submit(): void {
    if (this.quotesForm.valid) {
      this.store.dispatch(
        createAppointment({
          appointment: this.quotesForm.value,
        })
      );
      this.quotesForm.reset();
    } else {
      this.quotesForm.markAllAsTouched();
    }
  }
}
