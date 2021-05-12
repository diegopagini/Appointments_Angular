import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesListModule } from './quotes-list/quotes-list.module';
import { QuotesCreateModule } from './quotes-create/quotes-create.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, QuotesListModule, QuotesCreateModule],
  exports: [QuotesListModule, QuotesCreateModule],
})
export class ComponentsModule {}
