import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadAppointment } from '../../store/actions/appointments.actions';
@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss'],
})
export class QuotesListComponent implements OnInit {
  public appointments$: Observable<any>;

  constructor(private store: Store<{ appointment: any }>) {
    this.appointments$ = store.select('appointment');
  }

  ngOnInit(): void {
    this.store.dispatch(loadAppointment());
  }
}
