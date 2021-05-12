import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesCreateComponent } from './quotes-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuotesCreateComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [QuotesCreateComponent],
})
export class QuotesCreateModule {}
