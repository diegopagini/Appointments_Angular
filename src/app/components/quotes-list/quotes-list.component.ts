import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { deleteAppointment } from '../../store/actions/appointments.actions';
@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss'],
})
export class QuotesListComponent implements OnInit {
  public appointments$: Observable<any>;
  public listOfAppointments: any;

  constructor(private store: Store<{ appointment: any }>) {
    this.appointments$ = this.store.select('appointment');
  }

  ngOnInit(): void {}

  delete(index): void {
    this.appointments$
      .pipe(
        take(1),
        tap((appointments) => {
          this.listOfAppointments = appointments.list;
        })
      )
      .subscribe(() => {
        this.store.dispatch(deleteAppointment(this.listOfAppointments[index]));
      });
  }
}
