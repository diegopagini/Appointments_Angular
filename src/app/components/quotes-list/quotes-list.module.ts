import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesListComponent } from './quotes-list.component';

@NgModule({
  declarations: [QuotesListComponent],
  imports: [CommonModule],
  exports: [QuotesListComponent],
})
export class QuotesListModule {}
