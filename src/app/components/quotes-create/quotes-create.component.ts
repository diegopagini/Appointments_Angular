import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quotes-create',
  templateUrl: './quotes-create.component.html',
  styleUrls: ['./quotes-create.component.scss'],
})
export class QuotesCreateComponent implements OnInit {
  public quotesForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      this.quotesForm.reset();
      Swal.fire('Quote created');
    } else {
      this.quotesForm.markAllAsTouched();
    }
    console.log(this.quotesForm.value);
    console.log(this.quotesForm.valid);
  }
}
