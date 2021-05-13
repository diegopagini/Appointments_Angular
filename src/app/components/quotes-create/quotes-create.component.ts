import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createAppointment } from '../../store/actions/appointments.actions';
import Swal from 'sweetalert2';

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
      Swal.fire('Quote created');
    } else {
      this.quotesForm.markAllAsTouched();
    }
  }
}
