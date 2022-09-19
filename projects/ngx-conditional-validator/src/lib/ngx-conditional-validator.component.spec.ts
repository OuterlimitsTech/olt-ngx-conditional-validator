import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxConditionalValidatorComponent } from './ngx-conditional-validator.component';

describe('NgxConditionalValidatorComponent', () => {
  let component: NgxConditionalValidatorComponent;
  let fixture: ComponentFixture<NgxConditionalValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxConditionalValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxConditionalValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
