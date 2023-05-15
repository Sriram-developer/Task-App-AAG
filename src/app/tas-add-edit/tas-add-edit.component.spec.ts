import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasAddEditComponent } from './tas-add-edit.component';

describe('TasAddEditComponent', () => {
  let component: TasAddEditComponent;
  let fixture: ComponentFixture<TasAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});