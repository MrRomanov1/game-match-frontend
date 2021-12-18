import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDataViewComponent } from './generic-data-view.component';

describe('GenericDataViewComponent', () => {
  let component: GenericDataViewComponent;
  let fixture: ComponentFixture<GenericDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericDataViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
