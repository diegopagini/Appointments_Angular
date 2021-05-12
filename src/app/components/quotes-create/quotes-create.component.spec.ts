import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesCreateComponent } from './quotes-create.component';

describe('QuotesCreateComponent', () => {
  let component: QuotesCreateComponent;
  let fixture: ComponentFixture<QuotesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
