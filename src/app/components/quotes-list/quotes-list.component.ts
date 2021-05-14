import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadAppointment } from '../../store/actions/appointments.actions';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss'],
})
export class QuotesListComponent implements OnInit {
  public appointments$: Observable<any>;
  public list = [];

  constructor(private store: Store<{ appointment: any }>) {
    this.appointments$ = store.select('appointment');
  }

  ngOnInit(): void {
    this.store.dispatch(loadAppointment());
    this.list = JSON.parse(localStorage.getItem('appointment'));
    console.log(this.list);
  }

  delete() {
    Swal.fire({
      icon: 'success',
      title: 'Your appointment has been deleted',
      showConfirmButton: true,
    });
  }
}
